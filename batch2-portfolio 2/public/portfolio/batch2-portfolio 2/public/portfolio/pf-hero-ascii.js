/* ============================================================
   KS Portfolio — HERO ASCII PORTRAIT
   Converts the halftone portrait to green ASCII art, printed
   bottom-centre behind the hero text and in front of the grid.
   ============================================================ */
(function () {
  'use strict';
  var pre = document.querySelector('.hero__ascii');
  if (!pre) return;
  var src = pre.getAttribute('data-src'); if (!src) return;
  var RAMP = '@#%&*+=~-:,. ';
  var img = new Image();
  img.onload = function () {
    var COLS = 132;
    var ar = img.naturalHeight / img.naturalWidth;
    var rows = Math.max(8, Math.round(COLS * ar * 0.5));
    var c = document.createElement('canvas'); c.width = COLS; c.height = rows;
    var x = c.getContext('2d');
    x.drawImage(img, 0, 0, COLS, rows);
    var d; try { d = x.getImageData(0, 0, COLS, rows).data; } catch (e) { return; }
    var out = '';
    for (var yy = 0; yy < rows; yy++) {
      var line = '';
      for (var xx = 0; xx < COLS; xx++) {
        var i = (yy * COLS + xx) * 4;
        var a = d[i + 3] / 255;
        var lum = (d[i] * 0.299 + d[i + 1] * 0.587 + d[i + 2] * 0.114) / 255;
        var dens = a * (1 - lum);           /* opaque + dark => dense glyph */
        var idx = Math.round((1 - dens) * (RAMP.length - 1));
        line += RAMP[Math.max(0, Math.min(RAMP.length - 1, idx))];
      }
      out += line + '\n';
    }
    pre.textContent = out;
  };
  img.src = src;
})();
