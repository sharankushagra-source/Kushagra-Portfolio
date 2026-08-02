/* ============================================================
   KS Portfolio — SKETCHBOOK COLLAGE
   Live ASCII console: re-types the arrangement inside the frame
   as the visitor drags/scales pieces, and "Capture" downloads
   the collage rendered as colored ASCII art (PNG).
   Relies on card state (_st) set by pf-facets.js.
   ============================================================ */
(function () {
  'use strict';
  var g = document.querySelector('[data-gallery]'); if (!g) return;
  var frame = g.querySelector('.collage-frame');
  var stack = g.querySelector('.gallery__stack');
  var pre = g.querySelector('.console__pre');
  var cap = g.querySelector('[data-capture]');
  var dl = g.querySelector('[data-download]');
  var flash = g.querySelector('.collage-flash');
  if (!frame || !stack || !pre) return;
  var cards = Array.prototype.slice.call(g.querySelectorAll('.gcard'));
  var RAMP = '@#%&*+=~-:,. '; /* dark pixel -> dense glyph */
  var CREAM = '#F1EEE7', INK = '#16110C';

  function outs() {
    return cards.filter(function (c) { return c.classList.contains('is-out') && c._st; })
      .sort(function (a, b) { return (parseInt(a.style.zIndex, 10) || 0) - (parseInt(b.style.zIndex, 10) || 0); });
  }

  /* rasterize the frame contents at a uniform scale (px per CSS px) */
  function drawScene(scale) {
    var fr = frame.getBoundingClientRect(), st = stack.getBoundingClientRect();
    var W = Math.max(2, Math.round(fr.width * scale)), H = Math.max(2, Math.round(fr.height * scale));
    var cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    var x = cv.getContext('2d');
    x.fillStyle = CREAM; x.fillRect(0, 0, W, H);
    outs().forEach(function (c) {
      var img = c.querySelector('img');
      if (!img || !img.complete || !img.naturalWidth) return;
      var s = c._st;
      var cx = (st.left + st.width / 2 + s.x - fr.left) * scale;
      var cy = (st.top + st.height / 2 + s.y - fr.top) * scale;
      var w = c.offsetWidth * s.scale * scale, h = c.offsetHeight * s.scale * scale;
      x.save();
      x.translate(cx, cy); x.rotate((s.rot || 0) * Math.PI / 180);
      /* object-fit: cover crop */
      var br = w / h, ir = img.naturalWidth / img.naturalHeight, sw, sh, sx0, sy0;
      if (ir > br) { sh = img.naturalHeight; sw = sh * br; sx0 = (img.naturalWidth - sw) / 2; sy0 = 0; }
      else { sw = img.naturalWidth; sh = sw / br; sx0 = 0; sy0 = (img.naturalHeight - sh) / 2; }
      x.drawImage(img, sx0, sy0, sw, sh, -w / 2, -h / 2, w, h);
      x.restore();
    });
    return cv;
  }

  function sample(scene, cols, rows) {
    var t = document.createElement('canvas'); t.width = cols; t.height = rows;
    var tx = t.getContext('2d');
    tx.fillStyle = CREAM; tx.fillRect(0, 0, cols, rows);
    tx.drawImage(scene, 0, 0, cols, rows);
    try { return tx.getImageData(0, 0, cols, rows).data; } catch (e) { return null; }
  }

  /* ---------- live console ---------- */
  var dirty = true, visible = true;
  function syncBtns() {
    var has = outs().length > 0;
    if (cap) cap.disabled = !has;
    if (dl) dl.disabled = !has;
  }
  g.addEventListener('collage:change', function () { dirty = true; syncBtns(); });
  syncBtns();
  if ('IntersectionObserver' in window)
    new IntersectionObserver(function (en) { visible = en[0].isIntersecting; }, { threshold: 0.01 }).observe(g);

  function renderLive() {
    var os = outs();
    if (cap) cap.disabled = !os.length;
    if (dl) dl.disabled = !os.length;
    if (!os.length) {
      pre.textContent = '> collage.tty ready\n> deal the pile to begin _';
      return;
    }
    var fr = frame.getBoundingClientRect();
    if (fr.width < 4) return;
    var cols = 46, rows = Math.max(6, Math.round(cols * (fr.height / fr.width) * 0.52));
    var d = sample(drawScene(150 / fr.width), cols, rows);
    if (!d) return;
    var str = '', i = 0;
    for (var yy = 0; yy < rows; yy++) {
      for (var xx = 0; xx < cols; xx++, i += 4) {
        var lum = (d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114) / 255;
        str += RAMP[Math.min(RAMP.length - 1, Math.floor(lum * RAMP.length))];
      }
      str += '\n';
    }
    pre.textContent = str;
  }
  (function tick() {
    requestAnimationFrame(tick);
    if (!dirty || !visible) return;
    dirty = false; renderLive();
  })();

  /* ---------- capture: PNG styled like the live console window ---------- */
  var GREEN = '#7CF03A', TERM = '#14100B', BAR = '#1D1710';

  function capture() {
    var os = outs(); if (!os.length) return;
    var fr = frame.getBoundingClientRect();
    var cols = 220, rows = Math.max(10, Math.round(cols * (fr.height / fr.width) * 0.52));
    var d = sample(drawScene(1400 / fr.width), cols, rows);
    if (!d) return;
    var lines = [], i = 0;
    for (var yy = 0; yy < rows; yy++) {
      var line = '';
      for (var xx = 0; xx < cols; xx++, i += 4) {
        var lum = (d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114) / 255;
        line += RAMP[Math.min(RAMP.length - 1, Math.floor(lum * RAMP.length))];
      }
      lines.push(line);
    }
    var cw = 9, ch = 17, pad = 44, bar = 52;
    var W = pad * 2 + cols * cw, H = bar + pad * 2 + rows * ch + 40;
    var cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    var x = cv.getContext('2d');
    /* window body */
    x.fillStyle = TERM;
    if (x.roundRect) { x.beginPath(); x.roundRect(0, 0, W, H, 18); x.fill(); x.clip(); }
    else x.fillRect(0, 0, W, H);
    /* title bar */
    x.fillStyle = BAR; x.fillRect(0, 0, W, bar);
    var dots = ['#E01E8F', '#6522E0', '#7CF03A'];
    for (var k = 0; k < 3; k++) {
      x.fillStyle = dots[k];
      x.beginPath(); x.arc(30 + k * 24, bar / 2, 7, 0, 6.2832); x.fill();
    }
    x.fillStyle = '#8A8177';
    x.font = '16px ui-monospace, Menlo, Consolas, monospace';
    x.textBaseline = 'middle';
    x.fillText('collage.tty — live ascii', 108, bar / 2);
    /* ascii art */
    x.textBaseline = 'top';
    x.font = '700 15px ui-monospace, Menlo, Consolas, monospace';
    x.fillStyle = GREEN;
    for (var r2 = 0; r2 < rows; r2++) {
      var ln = lines[r2];
      for (var c2 = 0; c2 < cols; c2++) {
        if (ln[c2] === ' ') continue;
        x.fillText(ln[c2], pad + c2 * cw, bar + pad + r2 * ch);
      }
    }
    /* footer details */
    x.fillStyle = GREEN;
    x.font = '800 13px Archivo, system-ui, sans-serif';
    try { x.letterSpacing = '2px'; } catch (e) {}
    x.textBaseline = 'middle';
    x.fillText('SKETCHBOOK COLLAGE — KUSHAGRA SHARAN', pad, H - 34);
    x.textAlign = 'right';
    x.fillText('ASCII · ' + new Date().toISOString().slice(0, 10), W - pad, H - 34);
    x.textAlign = 'left';
    if (flash) { flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go'); }
    var url;
    try { url = cv.toDataURL('image/png'); } catch (e) { return; }
    var a = document.createElement('a');
    a.href = url; a.download = 'ks-sketchbook-collage-ascii.png';
    document.body.appendChild(a); a.click(); a.remove();
  }
  if (cap) cap.addEventListener('click', capture);

  /* ---------- plain-image download: the collage exactly as arranged ---------- */
  function drawFull(scale) {
    var fr = frame.getBoundingClientRect(), st = stack.getBoundingClientRect();
    var os = outs();
    var minX = 0, minY = 0, maxX = fr.width, maxY = fr.height;
    os.forEach(function (c) {
      var s = c._st;
      var cx = st.left + st.width / 2 + s.x - fr.left, cy = st.top + st.height / 2 + s.y - fr.top;
      var diag = Math.sqrt(Math.pow(c.offsetWidth * s.scale, 2) + Math.pow(c.offsetHeight * s.scale, 2)) / 2;
      minX = Math.min(minX, cx - diag); minY = Math.min(minY, cy - diag);
      maxX = Math.max(maxX, cx + diag); maxY = Math.max(maxY, cy + diag);
    });
    var W = Math.max(2, Math.round((maxX - minX) * scale)), H = Math.max(2, Math.round((maxY - minY) * scale));
    var cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    var x = cv.getContext('2d');
    os.forEach(function (c) {
      var img = c.querySelector('img');
      if (!img || !img.complete || !img.naturalWidth) return;
      var s = c._st;
      var cx = (st.left + st.width / 2 + s.x - fr.left - minX) * scale;
      var cy = (st.top + st.height / 2 + s.y - fr.top - minY) * scale;
      var w = c.offsetWidth * s.scale * scale, h = c.offsetHeight * s.scale * scale;
      x.save();
      x.translate(cx, cy); x.rotate((s.rot || 0) * Math.PI / 180);
      var br = w / h, ir = img.naturalWidth / img.naturalHeight, sw, sh, sx0, sy0;
      if (ir > br) { sh = img.naturalHeight; sw = sh * br; sx0 = (img.naturalWidth - sw) / 2; sy0 = 0; }
      else { sw = img.naturalWidth; sh = sw / br; sx0 = 0; sy0 = (img.naturalHeight - sh) / 2; }
      x.drawImage(img, sx0, sy0, sw, sh, -w / 2, -h / 2, w, h);
      x.restore();
    });
    return cv;
  }

  function downloadCollage() {
    var os = outs(); if (!os.length) return;
    var art = drawFull(2);                 /* transparent collage, tight bounds */
    var pad = 64, foot = 60;
    var W = art.width + pad * 2, H = art.height + pad * 2 + foot;
    var cv = document.createElement('canvas'); cv.width = W; cv.height = H;
    var x = cv.getContext('2d');
    /* no fill — background stays transparent */
    x.drawImage(art, pad, pad);
    /* frame boundary only (double hairline, no fill) */
    x.strokeStyle = INK; x.lineWidth = 3; x.strokeRect(22, 22, W - 44, H - 44);
    x.lineWidth = 1; x.strokeRect(30, 30, W - 60, H - 60);
    /* KUSHAGRA SHARAN watermark, terminal/ascii styling */
    x.fillStyle = INK; x.textBaseline = 'middle';
    x.font = '800 15px ui-monospace, Menlo, Consolas, monospace';
    try { x.letterSpacing = '2px'; } catch (e) {}
    x.textAlign = 'left';
    x.fillText('SKETCHBOOK COLLAGE — KUSHAGRA SHARAN', pad, H - 42);
    x.textAlign = 'right';
    x.fillText(new Date().toISOString().slice(0, 10), W - pad, H - 42);
    x.textAlign = 'left';
    if (flash) { flash.classList.remove('go'); void flash.offsetWidth; flash.classList.add('go'); }
    var url;
    try { url = cv.toDataURL('image/png'); } catch (e) { return; }
    var a = document.createElement('a');
    a.href = url; a.download = 'ks-sketchbook-collage.png';
    document.body.appendChild(a); a.click(); a.remove();
  }
  if (dl) dl.addEventListener('click', downloadCollage);

  renderLive();
})();
