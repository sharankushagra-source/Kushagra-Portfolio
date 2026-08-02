/* ============================================================
   KS Portfolio — EXPERIENCE journey map
   Scroll-driven: a winding trail is drawn through centred map pins.
   A milestone reveals the moment its pin enters the reading zone
   (its info then appears one item at a time), and the coloured
   route's head travels to match. The route continues past the
   final milestone (journey still ongoing).
   ============================================================ */
(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var SVGNS = 'http://www.w3.org/2000/svg';
  var map = document.querySelector('[data-journey]');
  if (!map) return;
  var steps = Array.prototype.slice.call(map.querySelectorAll('[data-step]'));
  var more = map.querySelector('.jrny__more');
  var base = map.querySelector('.jrny__trail-base');
  var prog = map.querySelector('.jrny__trail-prog');
  var svg = map.querySelector('.jrny__trail');
  var len = 0, pinY = [], pinLen = [];

  function buildTrail() {
    if (!svg || !base || !prog || !steps.length) return;
    var W = map.clientWidth, H = map.clientHeight;
    svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
    map.classList.add('jrny--measuring');
    var mr = map.getBoundingClientRect();
    var pts = steps.map(function (s) {
      var r = s.querySelector('.jstep__pin').getBoundingClientRect();
      return { x: r.left + r.width / 2 - mr.left, y: r.top + r.height / 2 - mr.top };
    });
    map.classList.remove('jrny--measuring');
    pinY = pts.map(function (p) { return p.y; });

    var segs = [];
    var d = 'M ' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
    for (var i = 1; i < pts.length; i++) {
      var a = pts[i - 1], b = pts[i], my = (a.y + b.y) / 2;
      var dir = (i % 2) ? 1 : -1;
      var cx = W / 2 + dir * Math.min(W * 0.34, 210);
      segs.push(' C ' + cx.toFixed(1) + ' ' + my.toFixed(1) + ' ' + cx.toFixed(1) + ' ' + my.toFixed(1) + ' ' + b.x.toFixed(1) + ' ' + b.y.toFixed(1));
      d += segs[segs.length - 1];
    }
    base.setAttribute('d', d);
    prog.setAttribute('d', d);
    len = prog.getTotalLength();

    var tmp = document.createElementNS(SVGNS, 'path');
    pinLen = [0];
    var acc = 'M ' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
    for (var j = 0; j < segs.length; j++) { acc += segs[j]; tmp.setAttribute('d', acc); pinLen.push(tmp.getTotalLength()); }
    prog.style.strokeDasharray = len;
    prog.style.strokeDashoffset = len;
  }

  function onScroll() {
    if (!prog || !len || !pinY.length) return;
    var mr = map.getBoundingClientRect();
    var L = window.innerHeight * 0.72;   // reading line — reveal as a pin enters view
    var n = pinY.length;

    // reveal each milestone the moment its pin crosses the line
    for (var i = 0; i < n; i++) {
      if (mr.top + pinY[i] <= L) steps[i].classList.add('is-active');
    }
    if (more && mr.top + pinY[n - 1] <= L - 30) more.classList.add('is-active');

    // continuous travel position (in pin-index space) for the glowing head
    var t = 0;
    for (var k = 0; k < n; k++) {
      var vy = mr.top + pinY[k];
      if (vy > L) {
        if (k === 0) { t = 0; }
        else { var vp = mr.top + pinY[k - 1]; t = (k - 1) + (vp > vy ? (vp - L) / (vp - vy) : 1); }
        break;
      }
      t = k;
    }
    t = Math.max(0, Math.min(n - 1, t));
    var f = Math.floor(t), fr = t - f;
    var drawn = pinLen[f] + ((pinLen[Math.min(f + 1, n - 1)] || pinLen[f]) - pinLen[f]) * fr;
    prog.style.strokeDashoffset = (len - drawn).toFixed(1);
  }

  function refresh() { buildTrail(); onScroll(); }
  window.addEventListener('resize', refresh);
  window.addEventListener('scroll', onScroll, { passive: true });
  refresh();
  requestAnimationFrame(refresh);
  setTimeout(refresh, 500);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
})();
