/* KS portfolio — motion layer
   - Lenis-style inertial wheel scrolling (desktop, pointer:fine only)
   - Scroll-reveal (fade + rise) with stagger via IntersectionObserver
   - Hero load stagger
   - Parallax on gradient/image blocks
   Honors prefers-reduced-motion: reduce → everything static & visible.
   Preview override (bypass OS setting): add ?motion=on to the URL, or run
   localStorage.setItem('ksMotion','on') once. */
(function () {
  'use strict';
  var FORCE = /[?&]motion=on/.test(location.search) || (function(){try{return localStorage.getItem('ksMotion')==='on';}catch(e){return false;}})();
  if (/[?&]motion=off/.test(location.search)) { try{localStorage.removeItem('ksMotion');}catch(e){} }
  if (/[?&]motion=on/.test(location.search)) { try{localStorage.setItem('ksMotion','on');}catch(e){} }
  var RM = !FORCE && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var COARSE = matchMedia('(pointer: coarse)').matches;
  var doc = document.documentElement;

  /* ---------- tag elements for reveal ---------- */
  function tag(el, delay) {
    if (!el) return;
    el.setAttribute('data-reveal', '');
    if (delay) el.style.transitionDelay = delay.toFixed(2) + 's';
  }
  function staggerChildren(parent, els, base, gap) {
    els.forEach(function (el, i) { tag(el, (base || 0) + i * (gap || 0.07)); });
  }

  /* hero — animate in on load */
  var heroKids = ['.hero__chip', 'h1', '.hero__sub', '.hero__meta', '.hero__cta']
    .map(function (s) { return document.querySelector('.hero ' + s); }).filter(Boolean);

  /* each section: header bits stagger, then blocks reveal */
  document.querySelectorAll('main .section').forEach(function (sec) {
    var head = [sec.querySelector('.eyebrow'), sec.querySelector('.sec-title'), sec.querySelector('.lede')].filter(Boolean);
    staggerChildren(sec, head, 0, 0.08);
    var blocks = sec.querySelectorAll(':scope .wrap-wide > .card, :scope .found-grid, :scope .token-row, :scope .gcard--wide, :scope .plotbig, :scope .swork, :scope .feature, :scope .release, :scope .contact__links');
    blocks.forEach(function (b) { tag(b); });
    /* principles: stagger the editorial pieces */
    var pr = sec.querySelectorAll('.principles-ed > *');
    if (pr.length) staggerChildren(sec, Array.prototype.slice.call(pr), 0, 0.06);
    /* foundation grid children stagger */
    var fg = sec.querySelectorAll('.found-grid > .card');
    if (fg.length) staggerChildren(sec, Array.prototype.slice.call(fg), 0, 0.08);
  });

  if (RM) { doc.classList.add('reduced-motion'); return; }
  doc.classList.add('motion');

  /* ---------- reveal observer ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    if (heroKids.indexOf(el) === -1) io.observe(el);
  });

  /* hero plays immediately */
  requestAnimationFrame(function () {
    requestAnimationFrame(function () { heroKids.forEach(function (el) { el.classList.add('in'); }); });
  });

  /* ---------- parallax ---------- */
  var pxT = [];   /* transform-based (inner elements, no reveal conflict) */
  var pxBg = [];  /* background-drift (the reveal'd gradient cards) */
  document.querySelectorAll('.pr-img').forEach(function (el) { pxBg.push({ el: el, k: 0.10 }); });
  document.querySelectorAll('.feature__media--art .arch').forEach(function (el) { pxT.push({ el: el, k: 0.05 }); });
  function applyParallax() {
    var vh = window.innerHeight;
    for (var i = 0; i < pxT.length; i++) {
      var p = pxT[i], r = p.el.getBoundingClientRect(), mid = r.top + r.height / 2;
      p.el.style.transform = 'translate3d(0,' + ((mid - vh / 2) * p.k * -1).toFixed(1) + 'px,0)';
    }
    for (var j = 0; j < pxBg.length; j++) {
      var q = pxBg[j], rr = q.el.getBoundingClientRect(), m2 = rr.top + rr.height / 2;
      q.el.style.backgroundPositionY = ((m2 - vh / 2) * q.k).toFixed(1) + 'px';
    }
  }

  /* ---------- inertial smooth scroll (Lenis-style, desktop pointer:fine only) ---------- */
  if (!COARSE) {
    /* take over from CSS smooth-scroll so our lerp is the only animator */
    doc.style.scrollBehavior = 'auto';
    var target = window.scrollY, current = target, animating = false;
    function maxScroll() { return Math.max(0, doc.scrollHeight - window.innerHeight); }
    function tick() {
      current += (target - current) * 0.12;
      if (Math.abs(target - current) < 0.4) { current = target; animating = false; }
      window.scrollTo(0, current);
      applyParallax();
      if (animating) requestAnimationFrame(tick);
    }
    function kick() { if (!animating) { animating = true; requestAnimationFrame(tick); } }
    window.addEventListener('wheel', function (e) {
      if (e.ctrlKey) return;                 /* allow pinch-zoom */
      e.preventDefault();
      target += e.deltaY * (e.deltaMode === 1 ? 28 : e.deltaMode === 2 ? window.innerHeight : 1);
      target = Math.max(0, Math.min(target, maxScroll()));
      kick();
    }, { passive: false });
    /* sync when scrolled by keyboard / scrollbar / programmatic, while idle */
    window.addEventListener('scroll', function () { if (!animating) { target = current = window.scrollY; } applyParallax(); }, { passive: true });
    /* smooth anchor jumps */
    document.addEventListener('click', function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var href = a.getAttribute('href');
      if (href.length < 2) return;
      var el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      target = Math.max(0, Math.min(el.getBoundingClientRect().top + window.scrollY - 24, maxScroll()));
      kick();
    });
    window.addEventListener('resize', function () { target = current = window.scrollY; applyParallax(); });
  } else {
    /* touch: native momentum; just ride the scroll for parallax */
    var sticking = false;
    window.addEventListener('scroll', function () {
      if (sticking) return; sticking = true;
      requestAnimationFrame(function () { applyParallax(); sticking = false; });
    }, { passive: true });
    window.addEventListener('resize', function () { applyParallax(); });
  }
  applyParallax();
})();
