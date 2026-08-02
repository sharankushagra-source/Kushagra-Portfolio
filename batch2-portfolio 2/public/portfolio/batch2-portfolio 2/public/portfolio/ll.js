/* ============================================================
   KS Portfolio — LAMA LAMA DIRECTION · behaviour
   Loader · custom cursor · full-screen menu · text-reveals ·
   clip-path work reveals · marquee · dark-section cursor invert.
   ============================================================ */
(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    && !/[?&]motion=on/.test(location.search);
  var fine = matchMedia('(pointer:fine)').matches;
  var doc = document.documentElement;
  doc.classList.add(reduce ? 'reduced' : 'motion');

  /* ============ split text for reveal (walk text nodes; preserve em/.a/br) ============ */
  function splitNode(node) {
    var kids = Array.prototype.slice.call(node.childNodes);
    kids.forEach(function (n) {
      if (n.nodeType === 3) {
        var toks = n.textContent.split(/(\s+)/);
        var frag = document.createDocumentFragment();
        toks.forEach(function (tok) {
          if (tok === '') return;
          if (/^\s+$/.test(tok)) { frag.appendChild(document.createTextNode(' ')); return; }
          var wrap = document.createElement('span'); wrap.className = 'tr-w';
          var inner = document.createElement('span'); inner.className = 'tr-word'; inner.textContent = tok;
          wrap.appendChild(inner); frag.appendChild(wrap);
        });
        node.replaceChild(frag, n);
      } else if (n.nodeType === 1 && n.tagName !== 'BR') {
        splitNode(n);
      }
    });
  }
  document.querySelectorAll('.tr').forEach(function (el) {
    splitNode(el);
    el.querySelectorAll('.tr-word').forEach(function (w, i) { w.style.transitionDelay = (i * 0.04) + 's'; });
  });

  /* ============ LOADER ============ */
  var load = document.querySelector('.ll-load');
  var pct = document.querySelector('.ll-load__pct');
  document.body.classList.add('loading');
  function endLoad() {
    document.body.classList.remove('loading');
    if (load) load.classList.add('done');
    var hero = document.querySelector('.hero'); if (hero) hero.classList.add('in');
  }
  if (reduce || !pct) { if (pct) pct.textContent = '100%'; setTimeout(endLoad, 200); }
  else {
    var t0 = performance.now(), DUR = 1500;
    (function step(t) {
      var p = Math.min(1, (t - t0) / DUR), e = 1 - Math.pow(1 - p, 2);
      pct.textContent = Math.round(e * 100) + '%';
      if (p < 1) requestAnimationFrame(step); else setTimeout(endLoad, 280);
    })(t0);
  }

  /* ============ CURSOR ============ */
  /* handled by portfolio/ll-cursor.js (canvas dot cluster) */

  /* ============ MENU ============ */
  var menuBtn = document.querySelector('.nav__btn');
  if (menuBtn) menuBtn.addEventListener('click', function () { document.body.classList.toggle('menu-open'); });
  document.querySelectorAll('.menu__list a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
  });
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]'); if (!a) return;
    var href = a.getAttribute('href'); if (href.length < 2) return;
    var t = document.querySelector(href); if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 8, behavior: reduce ? 'auto' : 'smooth' });
  });

  /* ============ REVEALS ============ */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
  document.querySelectorAll('.tr, .wk').forEach(function (el) { io.observe(el); });

  /* ============ MARQUEE ============ */
  document.querySelectorAll('.mq__t').forEach(function (tr) {
    if (reduce) return;
    tr.innerHTML += tr.innerHTML;
    var x = 0, w = tr.scrollWidth / 2, dir = tr.getAttribute('data-dir') === 'r' ? 1 : -1;
    (function tick() {
      x += 0.55 * dir;
      if (dir < 0 && x <= -w) x = 0;
      if (dir > 0 && x >= 0) x = -w;
      tr.style.transform = 'translateX(' + x + 'px)';
      requestAnimationFrame(tick);
    })();
  });

  /* ============ year ============ */
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
