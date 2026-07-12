/* ============================================================
   KS Portfolio — WHAT I DO · skills warp with the grid
   The mesh bulges away from the pointer (pf-morph.js). Each
   skill label behaves like it is painted on that mesh: near the
   pointer it is pushed along the same vector as the grid points,
   stretches out from the pointer, and a displacement filter
   roughens the glyph edges. Distance is measured to the label's
   BOX (not its centre) so long words react anywhere you touch.
   Pointer-driven, so it runs regardless of reduced-motion (the
   grid's pointer response does too).
   ============================================================ */
(function () {
  'use strict';
  var host = document.querySelector('#services .svc');
  if (!host) return;

  var skills = Array.prototype.slice.call(host.querySelectorAll('[data-skill]')).map(function (el, i) {
    var t = el.querySelector('.skill__t');
    var m = (t.getAttribute('style') || '').match(/#(\w+)/);
    var disp = document.querySelector((m ? '#' + m[1] : '#warp' + (i + 1)) + ' feDisplacementMap');
    return { el: el, t: t, disp: disp, inf: 0 };
  }).filter(function (s) { return s.t; });
  if (!skills.length) return;

  var R = 300, TEX = 26, GROW = (typeof window.KS_SKILL_GROW === 'number' ? window.KS_SKILL_GROW : 0.55), PUSH = 30;
  var px = -99999, py = -99999, visible = true;

  host.addEventListener('pointermove', function (e) { px = e.clientX; py = e.clientY; });
  host.addEventListener('pointerleave', function () { px = -99999; py = -99999; });
  if ('IntersectionObserver' in window)
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }, { threshold: 0.01 }).observe(host);

  function clamp(v, a, b) { return v < a ? a : (v > b ? b : v); }

  function loop() {
    requestAnimationFrame(loop);
    if (!visible) return;
    for (var i = 0; i < skills.length; i++) {
      var s = skills[i], t = s.t;
      /* .skill wrapper is NOT transformed → stable reference */
      var sr = s.el.getBoundingClientRect();
      var ox = t.offsetLeft, oy = t.offsetTop, ow = t.offsetWidth, oh = t.offsetHeight;
      var L = sr.left + ox, T = sr.top + oy;
      /* distance from pointer to nearest point of the label box */
      var nx = clamp(px, L, L + ow), ny = clamp(py, T, T + oh);
      var d = Math.hypot(px - nx, py - ny);
      var target = d < R ? (1 - d / R) * (1 - d / R) : 0;
      s.inf += (target - s.inf) * 0.16;
      if (s.inf < 0.008) s.inf = 0;

      if (s.inf === 0) {
        t.style.transform = '';
        t.style.transformOrigin = '';
        s.el.style.zIndex = '';
        if (s.disp) s.disp.setAttribute('scale', '0');
        continue;
      }
      /* push along the same vector as the grid points (away from pointer) */
      var cx = L + ow / 2, cy = T + oh / 2;
      var a = Math.atan2(cy - py, cx - px);
      var txp = Math.cos(a) * PUSH * s.inf, typ = Math.sin(a) * PUSH * s.inf;
      /* stretch anchored where the pointer meets the label */
      var originX = clamp(px - L, 0, ow), originY = clamp(py - T, 0, oh);
      t.style.transformOrigin = originX.toFixed(1) + 'px ' + originY.toFixed(1) + 'px';
      t.style.transform = 'translate(' + txp.toFixed(1) + 'px,' + typ.toFixed(1) + 'px) scale(' + (1 + s.inf * GROW).toFixed(3) + ')';
      s.el.style.zIndex = 6;
      if (s.disp) s.disp.setAttribute('scale', (s.inf * TEX).toFixed(2));
    }
  }
  requestAnimationFrame(loop);
})();
