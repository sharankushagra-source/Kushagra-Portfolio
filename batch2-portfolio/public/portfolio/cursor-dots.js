/* ============================================================
   DOT CURSOR — the signature.
   A spring cluster of dots that:
     · idles as a small ring of dots
     · lags into a smudge (stretched along velocity) when moving fast
     · is magnetically pulled onto [data-magnetic] targets, reforming
       into a ring that outlines the element + shows a label
   Rendered on a canvas with mix-blend-mode:difference (set in CSS)
   so it inverts against black / white / media / accent.
   Same dot DNA as the skills field = connective motif.
   Disabled on touch / coarse pointer / reduced-motion.
   ============================================================ */
(function () {
  'use strict';

  var fine = matchMedia('(pointer:fine)').matches;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    && !/[?&]motion=on/.test(location.search);
  if (!fine || reduce) return;

  var cv = document.getElementById('dotcanvas');
  if (!cv) { cv = document.createElement('canvas'); cv.id = 'dotcanvas'; document.body.appendChild(cv); }
  var ctx = cv.getContext('2d');
  document.body.classList.add('dotcursor');

  var dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
  var W = 0, H = 0;
  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  /* ---- pointer ---- */
  var mx = W / 2, my = H / 2, pmx = mx, pmy = my, down = false;
  var seen = false;
  window.addEventListener('mousemove', function (e) {
    mx = e.clientX; my = e.clientY; seen = true;
  }, { passive: true });
  window.addEventListener('mousedown', function () { down = true; });
  window.addEventListener('mouseup', function () { down = false; });
  window.addEventListener('mouseleave', function () { seen = false; });

  /* ---- particles: a ring of dots (count driven by Tweaks density) ---- */
  var DENS = { low: 12, med: 20, high: 32 };
  var parts = [];
  function buildParts() {
    var N = DENS[window.KS_DENSITY] || 20;
    parts = [];
    for (var i = 0; i < N; i++) {
      var a = (i / N) * Math.PI * 2;
      parts.push({ a: a, x: mx, y: my, vx: 0, vy: 0, k: 0.16 + Math.random() * 0.16, r: 1.4 + Math.random() * 1.1 });
    }
  }
  buildParts();
  window.addEventListener('ks-density', buildParts);

  /* ---- cluster center (springs to pointer, or to a magnetic target) ---- */
  var cx = mx, cy = my, cvx = 0, cvy = 0;

  /* ---- magnetic targeting ---- */
  var target = null, tRect = null, label = '';
  function scanTargets() {
    return Array.prototype.slice.call(document.querySelectorAll('[data-magnetic]'));
  }
  var targets = scanTargets();
  window.addEventListener('load', function () { targets = scanTargets(); });
  // re-scan when menu opens etc.
  var reScan = 0;

  function pickTarget() {
    if ((reScan = (reScan + 1) % 30) === 0) targets = scanTargets();
    var best = null, bestRect = null, bestD = 1e9;
    for (var i = 0; i < targets.length; i++) {
      var el = targets[i];
      if (!el.isConnected || el.offsetParent === null && el.getClientRects().length === 0) continue;
      var r = el.getBoundingClientRect();
      if (r.width === 0 || r.bottom < 0 || r.top > H) continue;
      var ecx = r.left + r.width / 2, ecy = r.top + r.height / 2;
      var dx = mx - ecx, dy = my - ecy;
      // pull field: inside element, or within a margin around it
      var mgn = 26;
      var inside = mx > r.left - mgn && mx < r.right + mgn && my > r.top - mgn && my < r.bottom + mgn;
      var d = Math.sqrt(dx * dx + dy * dy);
      if (inside && d < bestD) { bestD = d; best = el; bestRect = r; }
    }
    target = best; tRect = bestRect;
    label = best ? (best.getAttribute('data-cursor-label') || '') : '';
  }

  /* ---- main loop ---- */
  var accent = getAccent();
  function getAccent() {
    var v = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    return v || '#FF3B14';
  }
  window.addEventListener('ks-accent', function () { accent = getAccent(); });

  function loop() {
    requestAnimationFrame(loop);
    pickTarget();

    // desired center
    var tx = mx, ty = my, magnet = 0;
    if (target && tRect) {
      var ecx = tRect.left + tRect.width / 2, ecy = tRect.top + tRect.height / 2;
      // blend cursor toward element center → magnetic snap
      tx = mx + (ecx - mx) * 0.55;
      ty = my + (ecy - my) * 0.55;
      magnet = 1;
    }
    // spring center
    var stiff = magnet ? 0.28 : 0.22;
    cvx += (tx - cx) * stiff; cvy += (ty - cy) * stiff;
    cvx *= 0.62; cvy *= 0.62;
    cx += cvx; cy += cvy;

    // pointer velocity → smudge stretch
    var mvx = mx - pmx, mvy = my - pmy; pmx = mx; pmy = my;
    var speed = Math.min(1, Math.sqrt(mvx * mvx + mvy * mvy) / 26);
    var ang = Math.atan2(mvy, mvx);
    var stretch = 1 + speed * 1.8;              // elongate along motion
    var squash = 1 - speed * 0.4;

    // formation radius
    var baseR = 12;
    var ringR = baseR;
    if (magnet && tRect) {
      // outline the element: ring radius = half the larger dim + padding, capped
      ringR = Math.min(Math.max(tRect.width, tRect.height) / 2 + 12, 120);
    }
    var pulse = down ? 0.78 : 1;
    ringR *= pulse;

    ctx.clearRect(0, 0, W, H);
    if (!seen || document.body.classList.contains('no-dotcursor')) {
      document.body.classList.toggle('dotcursor', !document.body.classList.contains('no-dotcursor'));
      return;
    }

    ctx.fillStyle = '#fff';   // white + blend-difference adapts to bg

    var cos = Math.cos(ang), sin = Math.sin(ang);
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      p.a += magnet ? 0.02 : 0.006;             // slow rotation for life
      // home position around the ring, stretched along velocity axis
      var ox = Math.cos(p.a) * ringR;
      var oy = Math.sin(p.a) * ringR;
      // apply stretch/squash in motion frame (only when loose, not magnet)
      var sx = ox, sy = oy;
      if (!magnet) {
        var lx = ox * cos + oy * sin;          // project onto motion axis
        var ly = -ox * sin + oy * cos;
        lx *= stretch; ly *= squash;
        sx = lx * cos - ly * sin;              // back to screen
        sy = lx * sin + ly * cos;
      }
      var hx = cx + sx, hy = cy + sy;
      // per-dot spring toward home → trailing lag
      p.vx += (hx - p.x) * p.k; p.vy += (hy - p.y) * p.k;
      p.vx *= 0.66; p.vy *= 0.66;
      p.x += p.vx; p.y += p.vy;

      var rr = p.r * (magnet ? 1.25 : 1) * (1 + speed * 0.5);
      ctx.beginPath();
      ctx.arc(p.x, p.y, rr, 0, Math.PI * 2);
      ctx.fill();
    }

    // center anchor dot (accent when magnetic, else white)
    ctx.beginPath();
    ctx.fillStyle = magnet ? hexToRgb(accent) : '#fff';
    ctx.arc(cx, cy, magnet ? 3 : 2, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#fff';

    // label
    if (magnet && label) {
      ctx.font = '700 12px "Space Mono", monospace';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText(label.toUpperCase(), cx, cy);
    }
  }

  function hexToRgb(h) {
    h = h.replace('#', '');
    if (h.length === 3) h = h.split('').map(function (c) { return c + c; }).join('');
    var n = parseInt(h, 16);
    return 'rgb(' + ((n >> 16) & 255) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ')';
  }

  loop();
})();
