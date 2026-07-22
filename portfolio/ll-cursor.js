/* ============================================================
   LAMA LAMA — dot-swarm cursor.
   A dense cloud of small square dots. Each dot chases the
   pointer with its own lag, so at rest they gather into a soft
   blob and on motion they string out into a long comet/smear
   trail. Over links/media the swarm tightens (magnetized).
   White dots on a mix-blend-difference canvas → auto-inverts
   against white / black / red.  (Faithful to lamalama.com.)
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
  document.body.classList.add('llcursor');

  var dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1)), W, H;
  function resize() {
    W = innerWidth; H = innerHeight;
    cv.width = W * dpr; cv.height = H * dpr;
    cv.style.width = W + 'px'; cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize(); addEventListener('resize', resize);

  var mx = W / 2, my = H / 2, seen = false;
  addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; seen = true; }, { passive: true });
  addEventListener('mouseleave', function () { seen = false; });

  /* ---- particle cloud: many dots, spread across lag values ---- */
  var N = 640, parts = [];
  for (var i = 0; i < N; i++) {
    var kn = i / (N - 1);               // 0 = laggy tail, 1 = fast head
    // ~45% slow "tail" dots for a long comet, rest snappier "head" dots
    var k = kn < 0.45
      ? 0.015 + (kn / 0.45) * 0.06      // 0.015 → 0.075  (long-lag tail)
      : 0.09 + ((kn - 0.45) / 0.55) * 0.28; // 0.09 → 0.37 (head)
    var ang = Math.random() * Math.PI * 2;
    var tail = 1 - kn;                  // tail dots sit further out → wider smear
    var rad = Math.pow(Math.random(), 0.55) * (12 + tail * 120);
    parts.push({
      k: k,
      ox: Math.cos(ang) * rad, oy: Math.sin(ang) * rad,
      x: mx, y: my,
      s: (Math.random() < 0.5 ? 1.3 : 1.9),
      ph: Math.random() * 6.28
    });
  }

  /* ---- magnetic targets ---- */
  var SEL = '[data-view], .nav__btn, .menu__list a, .contact__col a, .wk__go, .foot a';
  var targets = [];
  function scan() { targets = [].slice.call(document.querySelectorAll(SEL)); }
  scan(); addEventListener('load', scan);
  var rc = 0, tRect = null;
  function pick() {
    if ((rc = (rc + 1) % 30) === 0) scan();
    var best = null, bd = 1e9;
    for (var i = 0; i < targets.length; i++) {
      var el = targets[i]; if (!el.isConnected) continue;
      var r = el.getBoundingClientRect();
      if (!r.width || r.bottom < 0 || r.top > H) continue;
      var m = 18;
      if (!(mx > r.left - m && mx < r.right + m && my > r.top - m && my < r.bottom + m)) continue;
      var dx = mx - (r.left + r.width / 2), dy = my - (r.top + r.height / 2), d = dx * dx + dy * dy;
      if (d < bd) { bd = d; best = r; }
    }
    tRect = best;
  }

  var mag = 0, t = 0;
  function loop() {
    requestAnimationFrame(loop);
    pick();
    t += 0.016;

    // magnetize toward element center, tighten the swarm
    var tx = mx, ty = my, want = 0;
    if (tRect) { tx = tRect.left + tRect.width / 2; ty = tRect.top + tRect.height / 2; want = 1; }
    mag += (want - mag) * 0.12;

    ctx.clearRect(0, 0, W, H);
    if (!seen) return;
    ctx.fillStyle = '#fff';

    var gather = 1 - mag * 0.82;         // shrink offsets when magnetized
    for (var i = 0; i < parts.length; i++) {
      var p = parts[i];
      var kk = p.k + mag * (0.34 - p.k) * 0.9;   // magnet → all dots rush in
      var jx = Math.sin(t * 1.6 + p.ph) * 0.5;
      var jy = Math.cos(t * 1.7 + p.ph) * 0.5;
      var hx = tx + p.ox * gather + jx, hy = ty + p.oy * gather + jy;
      p.x += (hx - p.x) * kk; p.y += (hy - p.y) * kk;
      ctx.fillRect(p.x - p.s * 0.5, p.y - p.s * 0.5, p.s, p.s);
    }
  }
  loop();
})();
