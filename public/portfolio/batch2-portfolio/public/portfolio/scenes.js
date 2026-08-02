/* ============================================================
   SCENES — hero letter-split, scroll reveals, HUD progress,
   marquee, full-screen menu, and the dot-morph skills field.
   ============================================================ */
(function () {
  'use strict';

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    && !/[?&]motion=on/.test(location.search);
  var doc = document.documentElement;
  doc.classList.add(reduce ? 'reduced' : 'motion');

  /* ---------- hero letter split ---------- */
  document.querySelectorAll('[data-split]').forEach(function (el) {
    var html = el.innerHTML;
    // split only top-level text, keep nested <span> wrappers
    walkSplit(el);
  });
  function walkSplit(node) {
    var kids = Array.prototype.slice.call(node.childNodes);
    kids.forEach(function (n) {
      if (n.nodeType === 3) {
        var frag = document.createDocumentFragment();
        n.textContent.split('').forEach(function (ch, i) {
          if (ch === ' ') { frag.appendChild(document.createTextNode(' ')); return; }
          var s = document.createElement('span');
          s.className = 'ch'; s.textContent = ch;
          s.style.transitionDelay = (0.03 * splitI++) + 's';
          frag.appendChild(s);
        });
        node.replaceChild(frag, n);
      } else if (n.nodeType === 1 && !n.classList.contains('ch')) {
        walkSplit(n);
      }
    });
  }
  var splitI = 0;

  requestAnimationFrame(function () {
    requestAnimationFrame(function () {
      var hero = document.querySelector('.hero'); if (hero) hero.classList.add('in');
    });
  });

  /* ---------- reveal on scroll ---------- */
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold: 0.16, rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('[data-rise], .proj, .band').forEach(function (el, i) {
    if (el.hasAttribute('data-rise')) el.style.transitionDelay = ((i % 4) * 0.05) + 's';
    io.observe(el);
  });

  /* band words fade */
  document.querySelectorAll('[data-words]').forEach(function (el) {
    var words = el.textContent.split(' ');
    el.innerHTML = words.map(function (w, i) {
      if (w === '—') return w;
      return '<span class="w" style="transition-delay:' + (i * 0.045) + 's">' + w + '</span>';
    }).join(' ');
    // keep <em> — re-mark accent words wrapped in [] ... handled in HTML directly
  });

  /* ---------- HUD scroll progress ---------- */
  var bar = document.querySelector('.hud__bar i');
  function prog() {
    if (!bar) return;
    var h = doc.scrollHeight - window.innerHeight;
    var p = h > 0 ? (window.scrollY / h) * 100 : 0;
    bar.style.width = p.toFixed(1) + '%';
  }
  window.addEventListener('scroll', prog, { passive: true });
  window.addEventListener('resize', prog);
  prog();

  /* ---------- marquee ---------- */
  document.querySelectorAll('.strip__track').forEach(function (tr) {
    if (reduce) return;
    tr.innerHTML += tr.innerHTML;                 // duplicate for seamless loop
    var x = 0, w = tr.scrollWidth / 2, dir = tr.getAttribute('data-dir') === 'r' ? 1 : -1;
    (function tick() {
      x += 0.4 * dir;
      if (dir < 0 && x <= -w) x = 0;
      if (dir > 0 && x >= 0) x = -w;
      tr.style.transform = 'translateX(' + x + 'px)';
      requestAnimationFrame(tick);
    })();
  });

  /* ---------- full-screen menu ---------- */
  var navbtn = document.querySelector('.navbtn');
  if (navbtn) navbtn.addEventListener('click', function () { document.body.classList.toggle('menu-open'); });
  document.querySelectorAll('.menu__list a').forEach(function (a) {
    a.addEventListener('click', function () { document.body.classList.remove('menu-open'); });
  });

  /* smooth anchor scroll */
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="#"]'); if (!a) return;
    var href = a.getAttribute('href'); if (href.length < 2) return;
    var t = document.querySelector(href); if (!t) return;
    e.preventDefault();
    window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 10, behavior: reduce ? 'auto' : 'smooth' });
  });

  /* ---------- year ---------- */
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();

  /* ============================================================
     SKILLS FIELD — dot grid morphs to spell each skill's insight.
     Restyled stark B&W + accent. Adapted from the base portfolio.
     ============================================================ */
  var SKILLS = {
    frame:  { x: 18, y: 26, n: 'Problem Framing', i: 'Find the real problem before designing the obvious one.' },
    ux:     { x: 40, y: 40, n: 'UX Design',       i: 'Flows so clear the interface feels inevitable.' },
    system: { x: 26, y: 60, n: 'Design Systems',  i: 'One system — every screen consistent, faster to build.' },
    exec:   { x: 82, y: 26, n: 'Rapid Execution', i: 'High craft, shipped fast when the timeline is tight.' },
    comm:   { x: 70, y: 74, n: 'Communication',   i: 'I narrate the why so teams move together.' },
    lead:   { x: 56, y: 88, n: 'Leadership',      i: 'Calm direction when scope and pressure climb.' }
  };
  var QUAD = [['tl','Set direction'],['tr','Lead delivery'],['bl','Frame problems'],['br','Make & ship']];
  var EDGE = [['t','Leadership'],['b','Craft'],['l','Strategy'],['r','Execution']];

  function accentHex() { return getComputedStyle(doc).getPropertyValue('--accent').trim() || '#FF3B14'; }

  function buildField(surf) {
    surf.classList.add('field');
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg'); svg.setAttribute('class', 'field__defs'); svg.setAttribute('aria-hidden', 'true');
    svg.innerHTML = '<defs><filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="4" result="b"/><feColorMatrix in="b" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="g"/><feComposite in="SourceGraphic" in2="g" operator="atop"/></filter></defs>';
    surf.appendChild(svg);

    var grid = document.createElement('div'); grid.className = 'field__grid'; surf.appendChild(grid);
    ['h', 'v'].forEach(function (d) { var c = document.createElement('span'); c.className = 'field__cross field__cross--' + d; surf.appendChild(c); });
    QUAD.forEach(function (q) { var el = document.createElement('span'); el.className = 'field__quad field__quad--' + q[0]; el.textContent = q[1]; surf.appendChild(el); });
    EDGE.forEach(function (q) { var el = document.createElement('span'); el.className = 'field__edge field__edge--' + q[0]; el.textContent = q[1]; surf.appendChild(el); });

    var SP = 9, dots = [], cols = 0, rows = 0, offx = 0, offy = 0, gmap = null;
    function layout() {
      grid.innerHTML = ''; dots = [];
      var w = surf.clientWidth, h = surf.clientHeight; if (!w || !h) return;
      cols = Math.max(2, Math.floor((w - 16) / SP)); rows = Math.max(2, Math.floor((h - 16) / SP));
      offx = (w - (cols - 1) * SP) / 2; offy = (h - (rows - 1) * SP) / 2;
      surf.style.backgroundImage = 'radial-gradient(circle, rgba(10,10,10,.12) 1px, transparent 1.7px)';
      surf.style.backgroundSize = SP + 'px ' + SP + 'px';
      surf.style.backgroundPosition = (offx - SP / 2) + 'px ' + (offy - SP / 2) + 'px';
      gmap = new Int32Array(cols * rows);
      var frag = document.createDocumentFragment(), gi = 0;
      for (var r = 0; r < rows; r++) for (var c = 0; c < cols; c++) {
        var d = document.createElement('span'); d.className = 'field__dot';
        var x = offx + c * SP, y = offy + r * SP;
        d.style.left = x + 'px'; d.style.top = y + 'px';
        frag.appendChild(d); dots.push({ el: d, x: x, y: y });
        gmap[c * rows + r] = gi++;
      }
      grid.appendChild(frag);
    }
    layout();

    var skillEls = {}, ACC = accentHex();
    Object.keys(SKILLS).forEach(function (k) {
      var s = SKILLS[k];
      var d = document.createElement('span'); d.className = 'field__skill'; d.setAttribute('data-skill-dot', k); d.setAttribute('data-magnetic',''); d.setAttribute('data-cursor-label', s.n.split(' ')[0]);
      d.style.left = s.x + '%'; d.style.bottom = s.y + '%'; d.style.background = 'var(--ink)';
      surf.appendChild(d);
      var lab = document.createElement('span');
      lab.className = 'field__lab' + (s.x > 56 ? ' field__lab--left' : '');
      lab.textContent = s.n; lab.style.left = s.x + '%'; lab.style.bottom = s.y + '%';
      lab.setAttribute('data-skill-dot', k);
      surf.appendChild(lab);
      skillEls[k] = { dot: d, lab: lab };
      d.addEventListener('mouseenter', function () { focusSkill(k); });
      lab.addEventListener('mouseenter', function () { focusSkill(k); });
    });

    var lens = document.createElement('div'); lens.className = 'field__lens'; surf.appendChild(lens);
    var focused = null, unfocusT = null;

    var mx = -9999, my = -9999, RAD = 42, prevHot = [], moveQueued = false;
    function frame() {
      for (var p = 0; p < prevHot.length; p++) { prevHot[p].el.style.transform = 'translate(-50%,-50%) scale(1)'; prevHot[p].el.style.background = ''; }
      prevHot = [];
      if (mx < -1000) return;
      for (var i = 0; i < dots.length; i++) {
        var dt = dots[i], dx = dt.x - mx, dy = dt.y - my;
        if (dx < -RAD || dx > RAD || dy < -RAD || dy > RAD) continue;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < RAD) { var t = 1 - dist / RAD; var sc = 1 + t * t * 1.9; dt.el.style.transform = 'translate(-50%,-50%) scale(' + sc.toFixed(3) + ')'; dt.el.style.background = 'var(--accent)'; prevHot.push(dt); }
      }
    }
    surf.addEventListener('mousemove', function (e) {
      if (focused) return;
      var r = surf.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top;
      lens.style.transform = 'translate(' + mx + 'px,' + my + 'px) translate(-50%,-50%)';
      lens.style.opacity = '1';
      if (!moveQueued) { moveQueued = true; requestAnimationFrame(function () { moveQueued = false; frame(); }); }
    });
    surf.addEventListener('mouseleave', function () {
      if (focused) { unfocus(); return; }
      mx = my = -9999; lens.style.opacity = '0'; frame();
    });

    function wrapText(ctx, text, maxW) {
      var words = text.split(' '), lines = [], line = '';
      for (var i = 0; i < words.length; i++) {
        var test = line ? line + ' ' + words[i] : words[i];
        if (ctx.measureText(test).width > maxW && line) { lines.push(line); line = words[i]; } else line = test;
      }
      if (line) lines.push(line); return lines;
    }
    function textPoints(text) {
      var w = surf.clientWidth, h = surf.clientHeight;
      var cv = document.createElement('canvas'), ctx = cv.getContext('2d');
      var fs = Math.max(30, Math.min(52, w / 13)), ff = '800 ' + fs + "px Archivo, system-ui, sans-serif";
      ctx.font = ff;
      var maxW = Math.min(w * 0.78, 620);
      var lines = wrapText(ctx, text, maxW);
      var lineH = fs * 1.14, blockW = 0;
      lines.forEach(function (l) { blockW = Math.max(blockW, ctx.measureText(l).width); });
      cv.width = Math.ceil(blockW) + 6; cv.height = Math.ceil(lines.length * lineH) + 8;
      ctx.font = ff; ctx.fillStyle = '#000'; ctx.textBaseline = 'top';
      lines.forEach(function (l, i) { var lw = ctx.measureText(l).width; ctx.fillText(l, (cv.width - lw) / 2, i * lineH); });
      var data = ctx.getImageData(0, 0, cv.width, cv.height).data;
      var pts = [], step = 3;
      for (var y = 0; y < cv.height; y += step) for (var x = 0; x < cv.width; x += step) {
        if (data[(y * cv.width + x) * 4 + 3] > 128) pts.push({ x: x, y: y });
      }
      var ox = (w - cv.width) / 2, oy = (h - cv.height) / 2;
      for (var i = 0; i < pts.length; i++) { pts[i].x += ox; pts[i].y += oy; }
      return pts;
    }
    function nearestFreeDot(px, py, used) {
      var c0 = Math.round((px - offx) / SP), r0 = Math.round((py - offy) / SP);
      for (var ring = 0; ring < 12; ring++) {
        for (var dc = -ring; dc <= ring; dc++) for (var dr = -ring; dr <= ring; dr++) {
          if (ring > 0 && Math.abs(dc) !== ring && Math.abs(dr) !== ring) continue;
          var c = c0 + dc, r = r0 + dr;
          if (c < 0 || r < 0 || c >= cols || r >= rows) continue;
          var idx = gmap[c * rows + r];
          if (!used[idx]) return idx;
        }
      }
      return -1;
    }
    function focusSkill(k) {
      if (unfocusT) { clearTimeout(unfocusT); unfocusT = null; }
      if (focused === k) return;
      focused = k; lens.style.opacity = '0';
      surf.classList.add('is-focused');
      var pts = textPoints(SKILLS[k].i), col = accentHex();
      var used = new Uint8Array(dots.length);
      for (var i = 0; i < dots.length; i++) { dots[i].el.style.opacity = '0.06'; dots[i].el.style.background = ''; dots[i].el.style.transform = 'translate(-50%,-50%) scale(0.55)'; }
      for (var p = 0; p < pts.length; p++) {
        var best = nearestFreeDot(pts[p].x, pts[p].y, used);
        if (best < 0) continue; used[best] = 1;
        var dt = dots[best];
        dt.el.style.opacity = '1'; dt.el.style.background = 'var(--ink)';
        dt.el.style.transform = 'translate(' + (pts[p].x - dt.x).toFixed(1) + 'px,' + (pts[p].y - dt.y).toFixed(1) + 'px) translate(-50%,-50%) scale(0.92)';
      }
      for (var key in skillEls) {
        var on = key === k;
        skillEls[key].dot.style.opacity = on ? '1' : '0.14';
        skillEls[key].dot.style.background = on ? 'var(--accent)' : '';
        skillEls[key].lab.style.opacity = on ? '1' : '0.14';
        skillEls[key].lab.style.color = on ? col : '';
      }
    }
    function unfocus() {
      if (!focused) return; focused = null;
      surf.classList.remove('is-focused');
      for (var i = 0; i < dots.length; i++) { dots[i].el.style.opacity = ''; dots[i].el.style.background = ''; dots[i].el.style.transform = 'translate(-50%,-50%) scale(1)'; }
      for (var key in skillEls) { var e = skillEls[key]; e.dot.style.opacity = ''; e.dot.style.background = ''; e.lab.style.opacity = ''; e.lab.style.color = ''; }
    }
    surf.addEventListener('click', function (e) {
      var hit = e.target.closest('[data-skill-dot]');
      if (hit) { var k = hit.getAttribute('data-skill-dot'); if (focused === k) unfocus(); else focusSkill(k); }
      else unfocus();
    });
    var rt; window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(function () { unfocus(); layout(); }, 150); });
    if (dots.length === 0 && 'ResizeObserver' in window) {
      var ro = new ResizeObserver(function () {
        if (dots.length === 0 && surf.clientHeight > 0) { layout(); }
      });
      ro.observe(surf);
    }
  }

  var fullPlot = document.querySelector('.plot--full');
  if (fullPlot) buildField(fullPlot);
})();
