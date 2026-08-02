/* ============================================================
   KS Portfolio — SOUND EFFECTS layer (opt-in, persisted)
   - grass  → grid-morph pointer movement (footstep, distance-gated)
   - birds  → hover over interactive / content elements (cooldown)
   - thud   → click / pointerdown on buttons & links
   Web Audio API: low-latency, overlapping playback, one master gain.
   Toggle wired by the page; state in localStorage 'pf-sfx'.
   ============================================================ */
(function () {
  'use strict';
  var KEY = 'pf-sfx';
  var SRC = {
    grass: 'portfolio/sfx/grass.wav',
    birds: 'portfolio/sfx/birds.wav',
    leaves:'portfolio/sfx/leaves.wav',
    fish:  'portfolio/sfx/fish.wav',
    click: 'portfolio/sfx/click.wav',
    meadow:'portfolio/sfx/meadow.wav'
  };
  var VOL = { grass: 0.28, birds: 0.32, leaves: 0.5, fish: 0.42, click: 0.5, meadow: 0.55 };

  var ctx = null, master = null, buffers = {}, ready = false, loading = false;
  var on = false;

  function enabled() { return on; }

  /* First-gesture unlock: a fresh page (e.g. returning from a case study, where the
     Enter gate is skipped) starts with a SUSPENDED AudioContext. pointermove (grass)
     is not a user gesture, so audio can't start until a real click/tap/key. Resume on
     the earliest such gesture so the SFX come back to life without re-showing the gate. */
  function primeAudio() {
    if (!on) return;
    boot();
    if (ctx && ctx.state === 'suspended') { try { ctx.resume(); } catch (e) {} }
  }
  ['pointerdown', 'touchstart', 'keydown'].forEach(function (ev) {
    window.addEventListener(ev, primeAudio, { passive: true });
  });

  function boot() {
    if (ctx || loading) return;
    loading = true;
    try {
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      master = ctx.createGain();
      master.gain.value = 0.9;
      master.connect(ctx.destination);
    } catch (e) { loading = false; return; }
    Object.keys(SRC).forEach(function (name) {
      fetch(SRC[name]).then(function (r) { return r.arrayBuffer(); })
        .then(function (buf) { return ctx.decodeAudioData(buf); })
        .then(function (audio) { buffers[name] = audio; ready = true; })
        .catch(function () {});
    });
  }

  /* play a buffer, optional playbackRate jitter + gain, optional slice length */
  function play(name, gain, rateJit, maxDur) {
    if (!on || !ctx || !buffers[name]) return;
    if (ctx.state === 'suspended') ctx.resume();
    var src = ctx.createBufferSource();
    src.buffer = buffers[name];
    if (rateJit) src.playbackRate.value = 1 + (Math.random() * 2 - 1) * rateJit;
    var g = ctx.createGain();
    g.gain.value = (gain != null ? gain : 1) * (VOL[name] || 0.5);
    src.connect(g); g.connect(master);
    src.start(0);
    if (maxDur) {
      // quick fade-out so a long clip only contributes a short tactile hit
      var t = ctx.currentTime;
      g.gain.setValueAtTime(g.gain.value, t + maxDur * 0.7);
      g.gain.linearRampToValueAtTime(0.0001, t + maxDur);
      src.stop(t + maxDur + 0.02);
    }
  }

  /* ---------- GRASS: footsteps as the pointer crosses the grid (dimmed in the sketchbook) ---------- */
  var lastX = null, lastY = null, acc = 0, lastStep = 0;
  var STEP_DIST = 190;     // px of travel per footstep
  var STEP_GAP = 240;      // ms min between steps
  var sketchEl = document.getElementById('sketchbook');
  function gateVisible() {
    // the Enter gate blocks grass ONLY while it's actually on screen. On a skip-intro
    // return the gate is display:none (but has no .hide class), so check real visibility.
    var g = document.querySelector('.enter');
    return g && g.offsetParent !== null;
  }
  function grassFactor(y) {
    // 30% volume while the pointer is within the sketchbook section (grass there is distracting)
    if (!sketchEl) return 1;
    var r = sketchEl.getBoundingClientRect();
    return (y >= r.top && y <= r.bottom) ? 0.3 : 1;
  }
  window.addEventListener('pointermove', function (e) {
    if (!on) { lastX = e.clientX; lastY = e.clientY; return; }
    if (gateVisible()) { lastX = e.clientX; lastY = e.clientY; return; }   // no grass while the Enter gate is on screen
    if (lastX != null) {
      acc += Math.hypot(e.clientX - lastX, e.clientY - lastY);
      var now = performance.now();
      if (acc >= STEP_DIST && now - lastStep > STEP_GAP) {
        acc = 0; lastStep = now;
        play('grass', 0.9 * grassFactor(e.clientY), 0.14, 0.5);
      }
    }
    lastX = e.clientX; lastY = e.clientY;
  }, { passive: true });

  /* ---------- BIRDS: hover over INTERACTIVE elements (buttons, logo, nav, toggles) ---------- */
  var HOVER_SEL = 'a,button,[role="button"],.sfxbtn,.themebtn button,.index__i,.workrow,nav a,.nav a';
  /* ---------- LEAVES: dry-leaf rustle WHILE hovering a skill — loudness & speed track
     how hard the text is morphing (driven by pointer movement over the label) ---------- */
  var SKILL_SEL = '[data-skill],.svc .skill,.skill';
  var lastChirp = 0, CHIRP_GAP = 420;
  var leafEl = null, leafOn = false, leafTimer = 0;
  var morphAmt = 0;   // 0..1 warp intensity from pointer speed

  /* one short crush of leaves (a slice of the clip, quick attack + decay) */
  function leafGrain() {
    if (!on || !ctx || !buffers.leaves) return;
    var buf = buffers.leaves;
    var src = ctx.createBufferSource();
    src.buffer = buf;
    src.playbackRate.value = 0.82 + Math.random() * 0.5 + morphAmt * 0.4;   // faster = harder crush
    var dur = 0.28 + Math.random() * 0.22;                                   // short crush per grain
    var off = Math.random() * Math.max(0.001, buf.duration - dur - 0.05);    // random slice for variation
    var g = ctx.createGain();
    var lvl = VOL.leaves * (0.35 + 0.75 * morphAmt) * (0.7 + Math.random() * 0.3);
    var t = ctx.currentTime;
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(lvl, t + 0.02);          // crisp attack
    g.gain.setValueAtTime(lvl, t + dur * 0.6);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);   // decay
    src.connect(g); g.connect(master);
    try { src.start(t, off, dur + 0.02); } catch (e) { src.start(t); }
  }

  /* self-scheduling loop: grains overlap so it sounds like leaves continuously crushed;
     denser & louder the harder the text morphs, sparser when the pointer rests */
  function leafSchedule() {
    if (!leafOn) { leafTimer = 0; return; }
    leafGrain();
    morphAmt *= 0.86;                                        // decay when still
    var gap = 90 + (1 - morphAmt) * 150;                     // ~90ms (busy) → ~240ms (calm)
    gap *= 0.75 + Math.random() * 0.5;                       // irregular = organic
    leafTimer = setTimeout(leafSchedule, gap);
  }
  function startLeaf() {
    if (!on || leafOn) return;
    if (ctx && ctx.state === 'suspended') ctx.resume();
    leafOn = true;
    leafSchedule();
  }
  function stopLeaf() {
    leafOn = false;
    if (leafTimer) { clearTimeout(leafTimer); leafTimer = 0; }
    morphAmt = 0;
  }

  document.addEventListener('pointerover', function (e) {
    if (!on || !e.target.closest) return;
    if (e.target.closest('.enter')) return;   // no SFX on the Enter gate
    var sk = e.target.closest(SKILL_SEL);
    if (sk) {
      if (sk !== leafEl) { leafEl = sk; morphAmt = Math.max(morphAmt, 0.35); startLeaf(); }
      return;
    }
    var now = performance.now();
    var t = e.target.closest(HOVER_SEL);
    if (!t) return;
    if (e.relatedTarget && t.contains(e.relatedTarget)) return;
    if (now - lastChirp < CHIRP_GAP) return;
    lastChirp = now; play('birds', 0.6, 0.08, 1.1);
  }, { passive: true });
  document.addEventListener('pointerout', function (e) {
    if (!leafEl || !e.target.closest) return;
    var sk = e.target.closest(SKILL_SEL);
    if (!sk) return;
    if (e.relatedTarget && sk.contains(e.relatedTarget)) return;
    leafEl = null; stopLeaf();
  }, { passive: true });
  /* pointer speed over a skill → morph intensity */
  var pmX = null, pmY = null;
  document.addEventListener('pointermove', function (e) {
    if (!leafEl) { pmX = e.clientX; pmY = e.clientY; return; }
    if (pmX != null) {
      var d = Math.hypot(e.clientX - pmX, e.clientY - pmY);
      morphAmt = Math.min(1, morphAmt + d / 90);   // faster movement = bigger warp = louder rustle
    }
    pmX = e.clientX; pmY = e.clientY;
  }, { passive: true });

  /* ---------- FISH: one flap per keyword chip as the journey milestone reveals ---------- */
  (function () {
    var mapEl = document.querySelector('[data-journey]');
    if (!mapEl) return;
    var steps = [].slice.call(mapEl.querySelectorAll('[data-step]'));
    var seen = steps.map(function (s) { return s.classList.contains('is-active'); });
    var mo = new MutationObserver(function (muts) {
      muts.forEach(function (m) {
        var i = steps.indexOf(m.target);
        if (i < 0) return;
        var active = m.target.classList.contains('is-active');
        if (active && !seen[i]) {
          seen[i] = true;
          if (!on) return;
          // one flap as the role + company name appear, another as the chips start appearing
          setTimeout(function () { if (on) play('fish', 0.9, 0.08, 0.8); }, 340);   // role / org reveal
          setTimeout(function () { if (on) play('fish', 0.9, 0.08, 0.8); }, 600);   // chips begin
        }
        if (!active) seen[i] = false;
      });
    });
    steps.forEach(function (s) { mo.observe(s, { attributes: true, attributeFilter: ['class'] }); });
  })();

  /* ---------- CLICK: bird-flutter on press of interactive elements ---------- */
  document.addEventListener('pointerdown', function (e) {
    if (!on) return;
    if (e.target.closest && e.target.closest('.enter')) return;   // no click SFX on the Enter gate
    var t = e.target.closest && e.target.closest('a,button,[role="button"],.workrow,.index__i,.sfxbtn,.themebtn button');
    if (!t) return;
    play('click', 0.95, 0.08, 0.6);
  }, { passive: true });

  /* ---------- looping ambience (e.g. meadow wind while hovering) ---------- */
  var loopSrc = null, loopGain = null;
  function loopStart(name, gain) {
    if (!on || !ctx || !buffers[name] || loopSrc) return;
    if (ctx.state === 'suspended') ctx.resume();
    loopSrc = ctx.createBufferSource();
    loopSrc.buffer = buffers[name];
    loopSrc.loop = true;
    loopGain = ctx.createGain();
    loopGain.gain.value = 0.0001;
    loopSrc.connect(loopGain); loopGain.connect(master);
    loopSrc.start(0);
    var t = ctx.currentTime, target = (gain != null ? gain : 1) * (VOL[name] || 0.5);
    loopGain.gain.linearRampToValueAtTime(target, t + 0.35);
  }
  function loopStop() {
    if (!loopSrc) return;
    var s = loopSrc, g = loopGain; loopSrc = null; loopGain = null;
    try {
      var t = ctx.currentTime;
      g.gain.cancelScheduledValues(t);
      g.gain.setValueAtTime(g.gain.value, t);
      g.gain.linearRampToValueAtTime(0.0001, t + 0.4);
      s.stop(t + 0.45);
    } catch (e) { try { s.stop(); } catch (e2) {} }
  }

  /* ---------- public API for the page toggle ---------- */
  window.KSSound = {
    loopStart: function (name, gain) { loopStart(name, gain); },
    loopStop: function () { loopStop(); },
    set: function (v) {
      on = !!v;
      if (on) { boot(); if (ctx && ctx.state === 'suspended') ctx.resume(); }
      else { leafEl = null; stopLeaf(); loopStop(); }
      try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch (e) {}
      document.documentElement.classList.toggle('sfx-on', on);
      return on;
    },
    toggle: function () { return this.set(!on); },
    isOn: function () { return on; },
    initial: function () {
      var v = 'off';
      try { v = localStorage.getItem(KEY) || 'off'; } catch (e) {}
      // don't auto-play audio; just reflect stored intent visually and boot lazily on first gesture
      on = (v === 'on');
      document.documentElement.classList.toggle('sfx-on', on);
      if (on) boot();
      return on;
    }
  };
})();
