/* ============================================================
   GRID MORPH  ·  reusable interaction module
   ------------------------------------------------------------
   A ruled lattice drawn on <canvas>. Points idle-breathe and are
   repelled by the pointer, so the grid "morphs" (a lens/bulge)
   around wherever attention lands. Lines & nodes near the pointer
   brighten into a two-tone accent (violet on the left, magenta on
   the right).

   USAGE
     <div data-morph>            (host must be position:relative-ish)
       <canvas></canvas>         (optional — created if absent)
       ...your content...
     </div>
   The host is the pointer target, so its own children can sit on
   top; give the <canvas> pointer-events:none so hovers pass through.
   Line colour is read from the host's computed `color`, so it
   inherits the section's theme automatically. Auto-inits every
   [data-morph] on load; also exposed as window.KSMorph(host, opts).
   ============================================================ */
(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var VIOLET = [101, 34, 224], MAGENTA = [224, 30, 143];

  function parseRGB(str) {
    var m = (str || '').match(/-?\d+(\.\d+)?/g);
    if (!m || m.length < 3) return [26, 22, 30];
    return [+m[0], +m[1], +m[2]];
  }

  function initMorph(host, opts) {
    opts = opts || {};
    var cv = host.querySelector('canvas');
    if (!cv) { cv = document.createElement('canvas'); host.insertBefore(cv, host.firstChild); }
    var ctx = cv.getContext('2d');
    var DPR = Math.min(window.devicePixelRatio || 1, 2);

    var W = 0, H = 0, cols = 0, rows = 0, gap = 46, pts = [];
    var mx = -9999, my = -9999, tmx = -9999, tmy = -9999;
    var RAD = opts.radius || 240, PUSH = opts.push || 34;
    var BASE = parseRGB(getComputedStyle(host).color);
    var idle = opts.idle == null ? 2.1 : opts.idle;
    var visible = true;

    function refreshBase() { BASE = parseRGB(getComputedStyle(host).color); }

    function build() {
      var r = host.getBoundingClientRect();
      W = r.width; H = r.height;
      if (!W || !H) return;
      cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR);
      cv.style.width = W + 'px'; cv.style.height = H + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      gap = W < 640 ? 34 : (opts.gap || 46);
      cols = Math.ceil(W / gap) + 2;
      rows = Math.ceil(H / gap) + 2;
      var offx = (W - (cols - 1) * gap) / 2;
      var offy = (H - (rows - 1) * gap) / 2;
      pts = [];
      for (var y = 0; y < rows; y++)
        for (var x = 0; x < cols; x++) {
          var ox = offx + x * gap, oy = offy + y * gap;
          pts.push({ ox: ox, oy: oy, x: ox, y: oy, f: 0, ph: x * 0.55 + y * 0.85 });
        }
    }
    function id(x, y) { return y * cols + x; }
    function mix(c, f) {
      return 'rgba(' + Math.round(BASE[0] + (c[0] - BASE[0]) * f) + ',' +
        Math.round(BASE[1] + (c[1] - BASE[1]) * f) + ',' +
        Math.round(BASE[2] + (c[2] - BASE[2]) * f) + ',';
    }
    function seg(a, b) {
      var f = Math.max(a.f, b.f);
      var accent = (a.ox + b.ox) < W ? VIOLET : MAGENTA;
      ctx.strokeStyle = mix(accent, f) + (0.085 + f * 0.5) + ')';
      ctx.lineWidth = 1 + f * 1.3;
      ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
    }
    function node(q) {
      var accent = q.ox < W * 0.5 ? VIOLET : MAGENTA;
      ctx.fillStyle = mix(accent, q.f) + (0.18 + q.f * 0.72) + ')';
      ctx.beginPath(); ctx.arc(q.x, q.y, 1.3 + q.f * 3.6, 0, 6.2832); ctx.fill();
    }

    var t = 0, _half = 0;
    function frame() {
      requestAnimationFrame(frame);
      if (!visible || !pts.length) return;
      _half ^= 1; if (_half) return;   /* cap ~30fps — keeps scroll smooth, no site-wide jank */
      t += 0.032;
      mx += (tmx - mx) * 0.14; my += (tmy - my) * 0.14;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < pts.length; i++) {
        var p = pts[i], bx = 0, by = 0;
        if (!reduce && idle) { bx = Math.sin(t * 0.8 + p.ph) * idle; by = Math.cos(t * 0.66 + p.ph * 1.1) * idle; }
        var dx = p.ox - mx, dy = p.oy - my, d = Math.sqrt(dx * dx + dy * dy);
        var f = 0;
        if (d < RAD) { f = 1 - d / RAD; f *= f; var a = Math.atan2(dy, dx); bx += Math.cos(a) * PUSH * f; by += Math.sin(a) * PUSH * f; }
        p.x = p.ox + bx; p.y = p.oy + by; p.f = f;
      }
      for (var yy = 0; yy < rows; yy++)
        for (var xx = 0; xx < cols; xx++) {
          var c = pts[id(xx, yy)];
          if (xx < cols - 1) seg(c, pts[id(xx + 1, yy)]);
          if (yy < rows - 1) seg(c, pts[id(xx, yy + 1)]);
        }
      for (var j = 0; j < pts.length; j++) if (pts[j].f > 0.02) node(pts[j]);
    }

    host.addEventListener('pointermove', function (e) {
      var r = host.getBoundingClientRect(); tmx = e.clientX - r.left; tmy = e.clientY - r.top;
    });
    host.addEventListener('pointerleave', function () { tmx = -9999; tmy = -9999; });
    window.addEventListener('resize', build);
    if ('ResizeObserver' in window) new ResizeObserver(build).observe(host);
    if ('IntersectionObserver' in window)
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }, { threshold: 0.02 }).observe(host);
    new MutationObserver(refreshBase).observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    build();
    requestAnimationFrame(frame);
    return { rebuild: build };
  }

  window.KSMorph = initMorph;
  document.querySelectorAll('[data-morph]').forEach(function (h) { initMorph(h); });
})();
