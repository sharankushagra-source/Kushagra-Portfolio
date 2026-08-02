/* KS portfolio — behavior: scrollspy nav, theme switcher, mobile nav, copy. */
(function () {
  'use strict';

  /* ---- Theme (accent) switcher, persisted ---- */
  var ACCENTS = ['clay', 'indigo', 'forest', 'ink'];
  var stored = null;
  try { stored = localStorage.getItem('ks-accent-v2'); } catch (e) {}
  var accent = ACCENTS.indexOf(stored) >= 0 ? stored : 'indigo';
  applyAccent(accent);

  function applyAccent(a) {
    document.documentElement.setAttribute('data-accent', a);
    try { localStorage.setItem('ks-accent-v2', a); } catch (e) {}
    document.querySelectorAll('.swatch-btn').forEach(function (b) {
      b.classList.toggle('is-on', b.getAttribute('data-accent') === a);
    });
  }

  document.addEventListener('click', function (e) {
    var sw = e.target.closest('.swatch-btn');
    if (sw) { applyAccent(sw.getAttribute('data-accent')); return; }

    /* copy install command */
    var cp = e.target.closest('.install__copy');
    if (cp) {
      var txt = cp.getAttribute('data-copy') || '';
      if (navigator.clipboard) navigator.clipboard.writeText(txt).catch(function () {});
      var old = cp.textContent; cp.textContent = 'copied'; 
      setTimeout(function () { cp.textContent = old; }, 1400);
      return;
    }

    /* mobile nav: open/close + close on link click */
    if (e.target.closest('.navtoggle')) { setNav(true); return; }
    if (e.target.closest('.scrim')) { setNav(false); return; }
    if (e.target.closest('.docnav__link')) { if (window.innerWidth <= 940) setNav(false); }
  });

  function setNav(open) {
    var nav = document.querySelector('.docnav');
    var scrim = document.querySelector('.scrim');
    if (nav) nav.classList.toggle('is-open', open);
    if (scrim) scrim.classList.toggle('is-open', open);
  }

  /* ---- Scrollspy: highlight the nav link for the section in view ---- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.docnav__link'));
  var byId = {};
  links.forEach(function (l) {
    var id = (l.getAttribute('href') || '').replace('#', '');
    if (id) byId[id] = l;
  });
  var sections = links
    .map(function (l) { return document.getElementById((l.getAttribute('href') || '').replace('#', '')); })
    .filter(Boolean);

  function setActive(id) {
    links.forEach(function (l) {
      l.classList.toggle('is-active', (l.getAttribute('href') || '') === '#' + id);
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var visible = {};
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { visible[en.target.id] = en.isIntersecting ? en.intersectionRatio : 0; });
      var best = null, bestR = 0;
      Object.keys(visible).forEach(function (id) { if (visible[id] > bestR) { bestR = visible[id]; best = id; } });
      if (best) setActive(best);
    }, { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.6, 1] });
    sections.forEach(function (s) { io.observe(s); });
  }

  /* ---- Year ---- */
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
