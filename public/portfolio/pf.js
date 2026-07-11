/* ============================================================
   KS Portfolio — PLAYFIGHT DIRECTION · behaviour
   Loader counter · circular cursor · full-screen menu ·
   typewriter subline · scroll reveals · hero collage parallax ·
   selected-work cursor-follow image reveal · marquee.
   ============================================================ */
(function () {
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    && !/[?&]motion=on/.test(location.search);
  var fine = matchMedia('(pointer:fine)').matches;
  var doc = document.documentElement;
  doc.classList.add(reduce ? 'reduced' : 'motion');

  /* ============ LOADER ============ */
  var loader = document.querySelector('.loader');
  var numEl = document.querySelector('.loader__num');
  document.body.classList.add('loading');
  var _ended = false;
  function endLoader() {
    if (_ended) return; _ended = true;
    document.body.classList.remove('loading');
    if (loader) loader.classList.add('done');
    var hero = document.querySelector('.hero'); if (hero) hero.classList.add('in');
    startTypewriter();
  }
  /* absolute fail-safe: never leave the page scroll-locked, even if the
     stepped-loader timers are throttled (background tab, slow paint, etc.) */
  setTimeout(endLoader, 4500);
  var _reached100 = false;
  /* the `load` fallback must NOT preempt the stepped counter — otherwise it
     ends the loader before 100 is ever shown/held. Only let it end once the
     counter has actually landed on 100. */
  window.addEventListener('load', function () {
    setTimeout(function () { if (_reached100) endLoader(); }, 400);
  });
  if (reduce || !numEl) {
    if (numEl) numEl.textContent = '100';
    setTimeout(endLoader, 200);
  } else {
    /* 8 fixed, jumpy stops leading to a clearly-held 100 */
    var stops = [0, 46, 13, 72, 34, 91, 58, 84];
    var i = 0, HOLD = 185;
    (function jump() {
      numEl.textContent = stops[i];
      if (++i < stops.length) { setTimeout(jump, HOLD); return; }
      /* land on 100 and hold it long enough to read before rolling out */
      numEl.textContent = 100;
      _reached100 = true;
      setTimeout(endLoader, 232);
    })();
  }

  /* ============ CURSOR ============ */
  if (fine && !reduce) {
    var dot = document.querySelector('.cursor');
    var ring = document.querySelector('.cursor__ring');
    var lab = document.querySelector('.cursor__lab');
    if (dot && ring) {
      document.body.classList.add('pfcursor');
      var mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
      window.addEventListener('mousemove', function (e) { mx = e.clientX; my = e.clientY; }, { passive: true });
      (function rl() {
        requestAnimationFrame(rl);
        rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
        dot.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
        ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
        if (lab) { lab.style.left = rx + 'px'; lab.style.top = ry + 'px'; }
      })();
      document.addEventListener('mouseover', function (e) {
        var view = e.target.closest('[data-view]');
        var hov = e.target.closest('a,button,[data-magnetic],[data-view]');
        if (view) {
          ring.classList.add('is-hover', 'is-view');
          if (lab) { lab.textContent = view.getAttribute('data-view') || 'View'; lab.classList.add('on'); }
        } else if (hov) {
          ring.classList.add('is-hover'); ring.classList.remove('is-view');
          if (lab) lab.classList.remove('on');
        }
      });
      document.addEventListener('mouseout', function (e) {
        var hov = e.target.closest('a,button,[data-magnetic],[data-view]');
        if (hov && !e.relatedTarget) { ring.classList.remove('is-hover', 'is-view'); if (lab) lab.classList.remove('on'); }
        else if (hov && !hov.contains(e.relatedTarget)) { ring.classList.remove('is-hover', 'is-view'); if (lab) lab.classList.remove('on'); }
      });
    }
  }

  /* ============ MENU (hover draw-out + tap toggle) ============ */
  var navGroup = document.querySelector('.nav__group');
  var menuBtn = document.querySelector('.nav__menu');
  if (navGroup && menuBtn) {
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      var open = navGroup.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    navGroup.querySelectorAll('.nav__links a').forEach(function (a) {
      a.addEventListener('click', function () {
        navGroup.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('click', function (e) {
      if (!navGroup.contains(e.target)) {
        navGroup.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* smooth anchor scroll */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]'); if (!a) return;
    var href = a.getAttribute('href'); if (href.length < 2) return;
    var t = document.querySelector(href); if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 8, behavior: reduce ? 'auto' : 'smooth' });
  });

  /* ============ TYPEWRITER ============ */
  function startTypewriter() {
    var el = document.querySelector('[data-typewrite]'); if (!el) return;
    var lines = (el.getAttribute('data-typewrite') || '').split('|');
    if (reduce) { el.innerHTML = '<span class="cw">' + lines[0] + '</span>'; return; }
    var li = 0;
    function typeLine() {
      var full = lines[li], i = 0;
      (function type() {
        el.innerHTML = '<span class="cw">' + full.slice(0, i) + '</span><span class="caret">|</span>';
        i++;
        if (i <= full.length) setTimeout(type, 34 + Math.random() * 40);
        else setTimeout(erase, 2100);
      })();
      function erase() {
        (function del() {
          el.innerHTML = '<span class="cw">' + full.slice(0, i) + '</span><span class="caret">|</span>';
          i--;
          if (i >= 0) setTimeout(del, 18);
          else { li = (li + 1) % lines.length; setTimeout(typeLine, 260); }
        })();
      }
    }
    typeLine();
  }

  /* ============ REVEALS ============ */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('[data-rise], .sechead, .svc, .work, .xp').forEach(function (el) { io.observe(el); });

  // wrap reveal-line headings' inner text so overflow clip works
  document.querySelectorAll('[data-lines]').forEach(function (h) {
    var parts = h.innerHTML.split('<br>');
    h.innerHTML = parts.map(function (p) { return '<span class="reveal-line"><span>' + p + '</span></span>'; }).join('');
  });

  /* ============ HERO COLLAGE PARALLAX ============ */
  var phs = Array.prototype.slice.call(document.querySelectorAll('.hero__ph'));
  phs.forEach(function (p, i) { p.dataset.k = (0.04 + (i % 3) * 0.03).toFixed(3); });
  var pmx = 0, pmy = 0;
  if (fine && !reduce) {
    window.addEventListener('mousemove', function (e) {
      pmx = (e.clientX / innerWidth - 0.5); pmy = (e.clientY / innerHeight - 0.5);
    }, { passive: true });
  }
  function parallax() {
    var sy = window.scrollY;
    for (var i = 0; i < phs.length; i++) {
      var k = parseFloat(phs[i].dataset.k);
      var tx = pmx * 40 * k * 8, ty = -sy * k + pmy * 40 * k * 8;
      phs[i].style.transform = 'translate3d(' + tx.toFixed(1) + 'px,' + ty.toFixed(1) + 'px,0)';
    }
    requestAnimationFrame(parallax);
  }
  if (phs.length) parallax();

  /* ============ WORK — cursor-follow image reveal ============ */
  var floatEl = document.querySelector('.work__float');
  if (floatEl && fine) {
    var imgs = {}, current = null, fx = 0, fy = 0, tx = 0, ty = 0, shown = false;
    document.querySelectorAll('.work__row').forEach(function (row) {
      var key = row.getAttribute('data-img'); if (!key) return;
      if (!imgs[key]) {
        var im = document.createElement('img'); im.src = key; im.alt = ''; im.loading = 'lazy';
        floatEl.appendChild(im); imgs[key] = im;
      }
      row.addEventListener('mouseenter', function () {
        Object.keys(imgs).forEach(function (k) { imgs[k].classList.toggle('on', k === key); });
        floatEl.classList.add('show'); shown = true; current = key;
      });
      row.addEventListener('mouseleave', function () { floatEl.classList.remove('show'); shown = false; });
    });
    window.addEventListener('mousemove', function (e) { tx = e.clientX; ty = e.clientY; }, { passive: true });
    (function ff() {
      requestAnimationFrame(ff);
      fx += (tx - fx) * 0.12; fy += (ty - fy) * 0.12;
      floatEl.style.left = fx + 'px'; floatEl.style.top = fy + 'px';
    })();
  }

  /* ============ MARQUEE ============ */
  document.querySelectorAll('.mq__t').forEach(function (tr) {
    if (reduce) return;
    tr.innerHTML += tr.innerHTML;
    var x = 0, w = tr.scrollWidth / 2, dir = tr.getAttribute('data-dir') === 'r' ? 1 : -1;
    (function tick() {
      x += 0.75 * dir;
      if (dir < 0 && x <= -w) x = 0;
      if (dir > 0 && x >= 0) x = -w;
      tr.style.transform = 'translateX(' + x + 'px)';
      requestAnimationFrame(tick);
    })();
  });

  /* ============ year ============ */
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  /* ============ invert cursor over dark sections ============ */
  var darkEls = document.querySelectorAll('.contact, [data-theme="dark"]');
  if (darkEls.length) {
    function checkDark() {
      var mid = window.innerHeight / 2, on = false;
      darkEls.forEach(function (el) {
        var r = el.getBoundingClientRect();
        if (r.top <= mid && r.bottom >= mid) on = true;
      });
      document.body.classList.toggle('on-dark', on);
    }
    window.addEventListener('scroll', checkDark, { passive: true });
    window.addEventListener('resize', checkDark);
    checkDark();
  }
})();
