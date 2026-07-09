/* ============================================================
   KS Portfolio — FACETS KIT · added behaviours
   Top-nav scroll-spy + click, controlled gallery stack
   (click the top card to deal it out), and a cursor that
   differentiates the flagship "Explore" from external "Behance".
   Loads alongside pf.js; touches only its own hooks.
   ============================================================ */
(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- TOP NAV (scroll-spy + click) ---------- */
  var items = Array.prototype.slice.call(document.querySelectorAll('.hindex__i'));
  if (items.length) {
    var secs = items.map(function (it) { return document.getElementById(it.getAttribute('data-goto')); });
    items.forEach(function (it) {
      it.addEventListener('click', function () {
        var t = document.getElementById(it.getAttribute('data-goto')); if (!t) return;
        window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 2, behavior: reduce ? 'auto' : 'smooth' });
      });
    });
    var spy = function () {
      var mid = innerHeight * 0.42, cur = -1;
      secs.forEach(function (s, i) { if (s && s.getBoundingClientRect().top <= mid) cur = i; });
      items.forEach(function (it, i) { it.classList.toggle('on', i === cur); });
    };
    addEventListener('scroll', spy, { passive: true });
    addEventListener('resize', spy);
    spy();
  }

  /* ---------- CURSOR — Explore vs Behance differentiation ---------- */
  var ring = document.querySelector('.cursor__ring');
  var lab = document.querySelector('.cursor__lab');
  if (ring) {
    document.addEventListener('mouseover', function (e) {
      var v = e.target.closest('[data-view]');
      ring.classList.remove('view-explore', 'view-ext');
      if (lab) lab.classList.remove('view-explore', 'view-ext');
      if (!v) return;
      var val = (v.getAttribute('data-view') || '').toLowerCase();
      var kind = val === 'explore' ? 'view-explore' : (val === 'behance' ? 'view-ext' : '');
      if (kind) { ring.classList.add(kind); if (lab) lab.classList.add(kind); }
    });
  }

  /* ---------- GALLERY STACK — deal, drag, select & zoom ---------- */
  var g = document.querySelector('[data-gallery]');
  if (g) {
    var stack = g.querySelector('.gallery__stack');
    var cards = Array.prototype.slice.call(g.querySelectorAll('.gcard'));
    var zoomUI = g.querySelector('.gallery__zoom');
    var zin = g.querySelector('[data-zoom="in"]');
    var zout = g.querySelector('[data-zoom="out"]');
    /* deterministic scatter slots: [x vw, y vh, rotate deg] from centre */
    var slots = [
      [-30, -17, -6], [29, -18, 5], [-34, 9, -4], [33, 8, 6], [-19, 24, -3],
      [21, 24, 4], [-8, -25, 3], [9, 21, -5], [-27, -2, 2], [27, -6, -4]
    ];
    var revealed = 0, busy = false, selected = null, topZ = 200;
    var frame = g.querySelector('.collage-frame');

    function ping() { g.dispatchEvent(new CustomEvent('collage:change')); }
    /* keep a dealt card fully inside the collage frame */
    function clampSt(c) {
      if (!frame || !c._st) return;
      var fr = frame.getBoundingClientRect(), st = stack.getBoundingClientRect();
      if (fr.width < 4) return;
      var pad = 16;
      var hw = c.offsetWidth * c._st.scale / 2, hh = c.offsetHeight * c._st.scale / 2;
      var cx = st.left + st.width / 2, cy = st.top + st.height / 2;
      var minX = fr.left + pad + hw - cx, maxX = fr.right - pad - hw - cx;
      var minY = fr.top + pad + hh - cy, maxY = fr.bottom - pad - hh - cy;
      if (minX > maxX) { minX = maxX = (minX + maxX) / 2; }
      if (minY > maxY) { minY = maxY = (minY + maxY) / 2; }
      c._st.x = Math.max(minX, Math.min(maxX, c._st.x));
      c._st.y = Math.max(minY, Math.min(maxY, c._st.y));
    }

    function stackTransform(i) {
      var r = (i % 2 ? -1 : 1) * (1.5 + (i % 3));
      var lift = i * 1.4; // subtle staggered pile
      return { r: r, css: 'translate(-50%, calc(-50% - ' + lift + 'px)) rotate(' + r + 'deg)' };
    }
    function applyOut(c) {
      clampSt(c);
      var s = c._st;
      c.style.transform = 'translate(calc(-50% + ' + s.x + 'px), calc(-50% + ' + s.y + 'px)) rotate(' + s.rot + 'deg) scale(' + s.scale + ')';
      ping();
    }
    function setTop() {
      cards.forEach(function (c) { c.classList.remove('is-top'); });
      if (cards[revealed]) cards[revealed].classList.add('is-top');
    }
    function layoutStack() {
      cards.forEach(function (c, i) {
        if (c.classList.contains('is-out')) return;
        var t = stackTransform(i - revealed);
        c.dataset.r = t.r;
        c.style.zIndex = cards.length - i;
        c.style.transform = t.css;
      });
    }
    function seedStack() {
      cards.forEach(function (c, i) {
        var t = stackTransform(i);
        c.dataset.r = t.r;
        c.style.zIndex = cards.length - i;
        c.style.transform = t.css;
      });
    }
    seedStack();
    setTop();

    /* lift a card straight off the pile into a draggable state */
    function dealCard(c) {
      if (c.classList.contains('is-out')) return;
      c._st = { x: 0, y: 0, rot: parseFloat(c.dataset.r) || 0, scale: 1 };
      c.classList.add('is-out'); c.classList.remove('is-top');
      c.style.zIndex = ++topZ;
      revealed++;
      applyOut(c);
      g.classList.add('gallery--started');
      if (revealed >= cards.length) g.classList.add('gallery--done');
      layoutStack();
      setTop();
    }

    function deal() {
      if (busy || revealed >= cards.length) return;
      var c = cards[revealed], sl = slots[revealed % slots.length];
      c._st = { x: sl[0] / 100 * window.innerWidth, y: sl[1] / 100 * window.innerHeight, rot: sl[2], scale: 1 };
      c.classList.add('is-out'); c.classList.remove('is-top');
      c.style.zIndex = ++topZ;
      applyOut(c);
      revealed++;
      busy = true; setTimeout(function () { busy = false; }, 140);
      g.classList.add('gallery--started');
      g.classList.toggle('gallery--done', revealed >= cards.length);
      layoutStack();
      setTop();
    }
    function select(c) {
      if (selected && selected !== c) selected.classList.remove('is-sel');
      selected = c || null;
      if (selected) { selected.classList.add('is-sel'); selected.style.zIndex = ++topZ; }
      if (zin) zin.disabled = !selected;
      if (zout) zout.disabled = !selected;
      ping();
    }
    function restackAll() {
      revealed = 0; select(null);
      g.classList.remove('gallery--done', 'gallery--started');
      cards.forEach(function (c) { c.classList.remove('is-out', 'is-sel'); c._st = null; });
      seedStack();
      setTop();
      ping();
    }

    /* drag straight from the pile: pointerdown on the top card deals it, then drags */

    /* drag + select for dealt cards */
    var drag = null;
    cards.forEach(function (c) {
      c.addEventListener('pointerdown', function (e) {
        if (!c.classList.contains('is-out')) {
          if (!c.classList.contains('is-top')) return;
          dealCard(c);
        }
        e.preventDefault();
        select(c);
        c.classList.add('is-dragging');
        drag = { c: c, sx: e.clientX, sy: e.clientY, ox: c._st.x, oy: c._st.y };
        try { c.setPointerCapture(e.pointerId); } catch (_) {}
      });
      c.addEventListener('pointermove', function (e) {
        if (!drag || drag.c !== c) return;
        c._st.x = drag.ox + (e.clientX - drag.sx);
        c._st.y = drag.oy + (e.clientY - drag.sy);
        applyOut(c);
      });
      function end(e) { if (drag && drag.c === c) { drag = null; c.classList.remove('is-dragging'); try { c.releasePointerCapture(e.pointerId); } catch (_) {} } }
      c.addEventListener('pointerup', end);
      c.addEventListener('pointercancel', end);
    });

    /* click empty space to deselect */
    g.addEventListener('click', function (e) {
      if (e.target === g || e.target === stack) select(null);
    });

    function zoom(step) {
      if (!selected || !selected._st) return;
      selected._st.scale = Math.max(0.55, Math.min(2.6, selected._st.scale + step));
      applyOut(selected);
    }
    if (zin) zin.addEventListener('click', function (e) { e.stopPropagation(); zoom(0.18); });
    if (zout) zout.addEventListener('click', function (e) { e.stopPropagation(); zoom(-0.18); });

    var reset = g.querySelector('.gallery__reset');
    if (reset) reset.addEventListener('click', restackAll);
  }

  /* ---------- CONTACT reveal (footer headline uses data-lines) ---------- */
  var contact = document.querySelector('.contact');
  if (contact) {
    if (reduce) { contact.classList.add('in'); }
    else {
      var cio = new IntersectionObserver(function (en) {
        en.forEach(function (e) { if (e.isIntersecting) { contact.classList.add('in'); cio.disconnect(); } });
      }, { threshold: 0.12 });
      cio.observe(contact);
    }
  }
})();
