import { useEffect } from 'react';
const MARKUP = `<!-- ENTER gate: a single tap that unlocks audio, then the loader + yawn begin -->
<div class="enter" id="enterGate">
  <div class="enter__inner">
    <button class="enter__btn" type="button" id="enterBtn">
      Enter
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
    </button>
    <span class="enter__note">Best with sound on</span>
  </div>
</div>

<!-- full-page morphing grid background -->
<div class="bgmorph" data-morph aria-hidden="true"><canvas></canvas></div>

<!-- loader -->
<div class="loader">
  <div class="loader__num">0</div>
  <div class="loader__word">KUSHAGRA SHARAN — <b>PRODUCT DESIGNER</b></div>
</div>

<!-- cursor -->
<div class="cursor" aria-hidden="true"></div>
<div class="cursor__ring" aria-hidden="true"></div>
<div class="cursor__lab" aria-hidden="true"></div>

<!-- nav -->
<header class="nav">
  <a class="nav__logo" href="#top" aria-label="Kushagra Sharan"><span class="mk">KS</span></a>
  <nav class="hindex" aria-label="Sections">
    <button class="hindex__i" data-goto="services" type="button"><span class="dot"></span><span class="txt">What I do</span></button>
    <button class="hindex__i" data-goto="work" type="button"><span class="dot"></span><span class="txt">Work</span></button>
    <button class="hindex__i" data-goto="experience" type="button"><span class="dot"></span><span class="txt">Experience</span></button>
    <button class="hindex__i" data-goto="sketchbook" type="button"><span class="dot"></span><span class="txt">Sketchbook</span></button>
    <button class="hindex__i" data-goto="contact" type="button"><span class="dot"></span><span class="txt">Contact</span></button>
  </nav>
</header>

<!-- ============ HERO ============ -->
<header class="hero" id="top">
  <div class="wrap hero__inner">
    <div class="hero__lead">
      <span class="hero__eyebrow lab"><span class="d"></span> Product Designer &amp; Illustrator · Est. 2023</span>
      <h1 class="hero__title"><span class="ln"><span>Kushagra</span></span><span class="ln"><span><em>Sharan.</em></span></span></h1>
    </div>
    <div class="hero__side">
      <p class="hero__sub">UX-led product design, shipped end to end. I make complex workflows feel obvious.</p>
      <div class="hero__cta">
        <a class="btn btn--primary" href="#services">Enter
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
        <a class="btn btn--ghost" href="#work">See the work</a>
      </div>
    </div>
    <div class="hero__scrollcue">Scroll <i></i></div>
  </div>
</header>

<!-- marquee -->
<div class="mq" aria-hidden="true">
  <div class="mq__t"><span>UX Design</span><span>Design Systems</span><span>Product Strategy</span><span>Accessibility — AAA</span><span>Rapid Execution</span><span>Problem Framing</span></div>
</div>

<!-- ============ SERVICES / WHAT I DO ============ -->
<section class="section" id="services">
  <div class="wrap">
    <div class="sechead">
      <div class="sechead__l">
        <div class="chap"><span class="chap__n">01</span><span class="chap__rule"></span><span class="chap__t">What I do</span></div>
        <h2 class="sechead__title" data-lines>How I<br>work.</h2>
      </div>
      <p class="lab" style="max-width:38ch">Two-plus years taking features from problem framing through flows, polished UI, and developer handoff — most recently leading end-to-end design for Factile (2M+ users) and the Vesta real-estate platform.</p>
    </div>
  </div>
  <div class="wrap">
    <div class="svc">
      <svg class="svc-filters" aria-hidden="true"><defs>
        <filter id="warp1" x="-40%" y="-90%" width="180%" height="280%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.009 0.02" numOctaves="1" seed="7" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G"/></filter>
        <filter id="warp2" x="-40%" y="-90%" width="180%" height="280%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.011 0.018" numOctaves="1" seed="19" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G"/></filter>
        <filter id="warp3" x="-40%" y="-90%" width="180%" height="280%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.008 0.024" numOctaves="1" seed="3" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G"/></filter>
        <filter id="warp4" x="-40%" y="-90%" width="180%" height="280%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.019" numOctaves="1" seed="42" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G"/></filter>
        <filter id="warp5" x="-40%" y="-90%" width="180%" height="280%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.01 0.022" numOctaves="1" seed="11" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G"/></filter>
        <filter id="warp6" x="-40%" y="-90%" width="180%" height="280%" color-interpolation-filters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.009 0.021" numOctaves="1" seed="27" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G"/></filter>
      </defs></svg>
      <p class="svc__intro"><i></i> Hover a strength</p>
      <div class="skill" data-skill style="left:22%; top:5%"> <span class="skill__n">01</span><h3 class="skill__t" style="filter:url(#warp1)" tabindex="0">UX Design</h3></div>
      <div class="skill" data-skill style="left:42%; top:21%"> <span class="skill__n">02</span><h3 class="skill__t" style="filter:url(#warp2)" tabindex="0">Design Systems</h3></div>
      <div class="skill" data-skill style="left:18%; top:37%"> <span class="skill__n">03</span><h3 class="skill__t" style="filter:url(#warp3)" tabindex="0">Problem Framing</h3></div>
      <div class="skill" data-skill style="left:40%; top:53%"> <span class="skill__n">04</span><h3 class="skill__t" style="filter:url(#warp4)" tabindex="0">Accessibility</h3></div>
      <div class="skill" data-skill style="left:22%; top:69%"> <span class="skill__n">05</span><h3 class="skill__t" style="filter:url(#warp5)" tabindex="0">Rapid Execution</h3></div>
      <div class="skill" data-skill style="left:40%; top:85%"> <span class="skill__n">06</span><h3 class="skill__t" style="filter:url(#warp6)" tabindex="0">Communication</h3></div>
    </div>
  </div>
<!-- strength stat overlay -->
<div class="skmodal" id="skmodal" aria-hidden="true" role="region" aria-labelledby="skmodal-title">
  <div class="skmodal__card">
    <span class="skmodal__ey" id="skmodal-ey">01</span>
    <h3 class="skmodal__title" id="skmodal-title">UX Design</h3>
    <div class="skmodal__grid" id="skmodal-grid"></div>
  </div>
</div>
</section>
<section class="section" id="work">
  <div class="wrap">
    <div class="sechead">
      <div class="sechead__l">
        <div class="chap"><span class="chap__n">02</span><span class="chap__rule"></span><span class="chap__t">Selected work</span></div>
        <h2 class="sechead__title" data-lines>What I've<br>shipped.</h2>
      </div>
      <p class="lab" style="max-width:30ch">Two case studies I shipped end to end — with the next one already in the works.</p>
    </div>
  </div>
  <div class="wrap">
    <a class="workfeat" href="case-study-factile.html" data-view="Explore">
      <div class="workfeat__media"><span class="workfeat__art workfeat__art--factile" role="img" aria-label="Abstract illustration — the Factile customize flow, untangled from overloaded settings into a clear guided experience"></span></div>
      <div class="workfeat__body">
        <span class="workfeat__badge"><i></i> Case study · Product</span>
        <h3 class="workfeat__title">Factile<br>Customize</h3>
        <p class="workfeat__desc">Rebuilding the game-customization flow of a live quiz platform — untangling three layers of design debt across UI, interaction and product model into one coherent, self-explaining experience.</p>
        <span class="workfeat__tags"><span class="work__tag">Product Design</span><span class="work__tag">Interaction</span><span class="work__tag">Systems Thinking</span></span>
        <span class="workfeat__cta">Read the case study <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
      </div>
    </a>
    <a class="workfeat" href="design-system/index.html" data-view="Explore" style="margin-top:clamp(20px,3vh,34px)">
      <div class="workfeat__media"><span class="workfeat__art" role="img" aria-label="Abstract illustration — tokens combining into components and full screens"></span></div>
      <div class="workfeat__body">
        <span class="workfeat__badge"><i></i> Flagship · Case study</span>
        <h3 class="workfeat__title">Accessible<br>Foundations</h3>
        <p class="workfeat__desc">An end-to-end design system for a WCAG AA/AAA product — tokens, components and patterns that keep every screen consistent and welcoming to a non-technical audience.</p>
        <span class="workfeat__tags"><span class="work__tag">Design System</span><span class="work__tag">Accessibility</span><span class="work__tag">WCAG AA / AAA</span></span>
        <span class="workfeat__cta">Explore the system <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg></span>
      </div>
    </a>
    <div class="soon" id="soonMarquee" role="img" aria-label="Next case study — coming soon">
      <div class="soon__track" aria-hidden="true">
        <span>Next case study</span><span class="soon__dot">✦</span><span>Coming soon</span><span class="soon__dot">✦</span><span>Next case study</span><span class="soon__dot">✦</span><span>Coming soon</span><span class="soon__dot">✦</span>
        <span>Next case study</span><span class="soon__dot">✦</span><span>Coming soon</span><span class="soon__dot">✦</span><span>Next case study</span><span class="soon__dot">✦</span><span>Coming soon</span><span class="soon__dot">✦</span>
      </div>
    </div>
  </div>
</section>

<!-- ============ EXPERIENCE ============ -->
<section class="section jrny" id="experience">
  <div class="wrap">
    <div class="sechead">
      <div class="sechead__l">
        <div class="chap"><span class="chap__n">03</span><span class="chap__rule"></span><span class="chap__t">The journey</span></div>
        <h2 class="sechead__title" data-lines>Where I've<br>been.</h2>
      </div>
      <p class="lab" style="max-width:36ch">A path, not a résumé — from first principles to shipping product. Scroll to travel the route.</p>
    </div>
    <div class="jrny__map" data-journey>
      <svg class="jrny__trail" aria-hidden="true"><defs><linearGradient id="jgrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6522E0"/><stop offset="1" stop-color="#E01E8F"/></linearGradient></defs><path class="jrny__trail-base"></path><path class="jrny__trail-prog"></path></svg>
      <ol class="jrny__list">
        <li class="jstep" data-step>
          <div class="jstep__pin">01</div>
          <div class="jstep__when">Before 2023 · Foundations</div>
          <h3 class="jstep__role">First principles</h3>
          <span class="jstep__org">IIIT Jabalpur · CUSAT</span>
          <ul class="jstep__keys">
            <li>Sketching</li><li>Close observation</li><li>Art &amp; crafts</li><li>First-principles thinking</li><li>Curiosity</li>
          </ul>
        </li>
        <li class="jstep" data-step>
          <div class="jstep__pin">02</div>
          <div class="jstep__when">Aug 2023 — Oct 2025</div>
          <h3 class="jstep__role">UX/UI Designer</h3>
          <span class="jstep__org">SimplePlan Media</span>
          <ul class="jstep__keys">
            <li>Flows &amp; wireframes</li><li>Hi-fi UI</li><li>E-commerce</li><li>Healthcare</li><li>Logistics</li><li>BundleSuite · Shopify</li><li>Concept → handoff</li><li>Dev collaboration</li>
          </ul>
        </li>
        <li class="jstep" data-step>
          <div class="jstep__pin">03</div>
          <div class="jstep__when">Oct 2025 — Present · Now</div>
          <h3 class="jstep__role">Senior UX/UI Designer</h3>
          <span class="jstep__org">Deligence Technologies</span>
          <ul class="jstep__keys">
            <li>End-to-end design</li><li>Problem framing</li><li>Dev-ready specs</li><li>Factile · +13–14% new users</li><li>~10% revenue</li><li>WCAG AA / AAA</li><li>Vesta · 23→15 steps</li>
          </ul>
        </li>
      </ol>
      <div class="jrny__more" aria-hidden="true">
        <span class="jrny__more-line"></span>
        <span class="jrny__more-dot"></span>
        <p>The journey is still on — more adventures ahead</p>
      </div>
    </div>
  </div>
</section>

<!-- ============ SKETCHBOOK ============ -->
<section class="section sketch" id="sketchbook">
  <div class="wrap">
    <div class="sechead">
      <div class="sechead__l">
        <div class="chap"><span class="chap__n">04</span><span class="chap__rule"></span><span class="chap__t">Sketchbook</span></div>
        <h2 class="sechead__title" data-lines>The other<br>half.</h2>
      </div>
      <p class="lab" style="max-width:36ch">The other half of the practice — illustration and poster art. Deal the pile, then build your own collage inside the frame: drag and resize the pieces, and when it feels yours, hit capture for a little surprise.</p>
    </div>
  </div>
  <div class="wrap">
    <div class="gallery" data-gallery>
      <div class="collage-frame" aria-hidden="true"></div>
      <div class="gallery__stack">
        <figure class="gcard" data-view="Drag"><img src="portfolio/img/sk-knight2.jpg" alt="A Knight of the Seven Kingdoms — poster illustration" loading="lazy" /></figure>
        <figure class="gcard" data-view="Drag"><img src="portfolio/img/sk-onepiece.jpg" alt="One Piece — Zoro" loading="lazy" /></figure>
        <figure class="gcard" data-view="Drag"><img src="portfolio/img/sk-peaky2.jpg" alt="Peaky Blinders — The Immortal Man" loading="lazy" /></figure>
        <figure class="gcard" data-view="Drag"><img src="portfolio/img/sk-surfer.jpg" alt="Silver Surfer" loading="lazy" /></figure>
        <figure class="gcard" data-view="Drag"><img src="portfolio/img/sk-mj.png" alt="Michael Jackson" loading="lazy" /></figure>
        <figure class="gcard" data-view="Drag"><img src="portfolio/img/sk-frieren2.jpg" alt="Frieren — Beyond Journey's End" loading="lazy" /></figure>
        <figure class="gcard" data-view="Drag"><img src="portfolio/img/sk-rivers.jpg" alt="Festival — three rivers" loading="lazy" /></figure>
        <figure class="gcard" data-view="Drag"><img src="portfolio/img/sk-canyoudo2.jpg" alt="Can you do — portrait study" loading="lazy" /></figure>
        <figure class="gcard" data-view="Drag"><img src="portfolio/img/sk-weak.jpg" alt="Weak? — graffiti study" loading="lazy" /></figure>
      </div>
      <div class="gallery__zoom" aria-label="Resize selected piece">
        <button type="button" data-zoom="out" aria-label="Shrink" disabled><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/><line x1="8" y1="11" x2="14" y2="11"/></svg></button>
        <button type="button" data-zoom="in" aria-label="Enlarge" disabled><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="16.5" y1="16.5" x2="21" y2="21"/><line x1="8" y1="11" x2="14" y2="11"/><line x1="11" y1="8" x2="11" y2="14"/></svg></button>
      </div>
      <button class="gallery__reset" type="button">Restack</button>
      <a class="gallery__insta" href="https://www.instagram.com/drawanyday?igsh=MW1keXhscTdpeXZndg==" target="_blank" rel="noopener" data-view="Instagram" aria-label="@drawanyday — sketchbook on Instagram" title="@drawanyday — sketchbook on Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5"/><circle cx="12" cy="12" r="4.4"/><circle cx="17.6" cy="6.4" r="1.15" fill="currentColor" stroke="none"/></svg></a>
      <div class="console" data-console aria-label="Live ASCII preview of your collage">
        <div class="console__bar"><i></i><i></i><i></i><span>collage.tty — live ascii</span></div>
        <pre class="console__pre" aria-hidden="true">&gt; collage.tty ready
&gt; deal the pile to begin _</pre>
        <button class="console__cap" type="button" data-capture disabled>Capture · ASCII</button>
      </div>
      <button class="collage-dl" type="button" data-download disabled>Download · Collage</button>
      <div class="collage-flash" aria-hidden="true"></div>
    </div>
  </div>
</section>

<!-- ============ CONTACT ============ -->
<section class="contact" id="contact">
  <div class="wrap">
    <span class="lab">Get started</span>
    <h2 class="contact__big" data-lines>Let's make<br>something <em>different</em>.</h2>
    <a class="contact__mail" href="mailto:sharan.kushagra@gmail.com" data-view="Email">
      <span class="circ"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></span>
      sharan.kushagra@gmail.com
    </a>
    <div class="contact__grid">
      <div class="contact__col">
        <span class="lab">Elsewhere</span>
        <a href="https://www.linkedin.com/in/sharan-kushagra" target="_blank" rel="noopener">LinkedIn ↗</a>
        <a href="https://www.behance.net/superchargedINK" target="_blank" rel="noopener">Behance ↗</a>
      </div>
      <div class="contact__col">
        <span class="lab">Direct</span>
        <a href="tel:+919305664633">+91 93056 64633</a>
        <a href="portfolio/Kushagra-Sharan-Resume.pdf" target="_blank" rel="noopener">Résumé (PDF) ↓</a>
      </div>
      <div class="contact__col">
        <span class="lab">Based in</span>
        <a href="#top">New Delhi, India</a>
        <a href="#top">Available for roles</a>
      </div>
    </div>
    <a class="foot__kit" href="Facets UI Kit.html" data-view="Explore">
      <span class="foot__kit-t">UI Facets Kit <span aria-hidden="true">↗</span></span>
      <span class="foot__kit-d">The tokens, components and interaction patterns this entire site is built from — open the kit to see the parts.</span>
    </a>
    <div class="foot">
      <span>© <span id="year">2025</span> Kushagra Sharan</span>
      <span class="madewith">Made with Claude Design <svg class="pxheart" width="14" height="12" viewBox="0 0 14 12" shape-rendering="crispEdges" fill="#7CF03A" aria-hidden="true"><rect x="2" y="0" width="2" height="2"></rect><rect x="4" y="0" width="2" height="2"></rect><rect x="8" y="0" width="2" height="2"></rect><rect x="10" y="0" width="2" height="2"></rect><rect x="0" y="2" width="14" height="2"></rect><rect x="0" y="4" width="14" height="2"></rect><rect x="2" y="6" width="10" height="2"></rect><rect x="4" y="8" width="6" height="2"></rect><rect x="6" y="10" width="2" height="2"></rect></svg></span>
    </div>
  </div>
</section>

<!-- sound + theme toolbar -->
<div class="topbar">
<button class="sfxbtn" type="button" aria-label="Toggle sound effects" aria-pressed="false">
  <svg class="i-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none"></polygon>
    <line x1="22" y1="9" x2="16" y2="15"></line><line x1="16" y1="9" x2="22" y2="15"></line>
  </svg>
  <svg class="i-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none"></polygon>
    <path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18.5 5.5a9 9 0 0 1 0 13"></path>
  </svg>
</button>

<!-- theme toggle -->
<div class="themebtn" role="group" aria-label="Theme">
  <button type="button" data-theme-set="dark">Dark</button>
  <button type="button" data-theme-set="light">Light</button>
</div>
</div>


<!-- yawn-synced loader (Loader Lab component): starts on the Enter tap so the yawn is always audible.
     Count crawls on the inhale, sprints to 100 on the exhale; original loader visuals kept. -->`;
const SEQ = [
  { type:'inline', code:`window.KS_SKILL_GROW = 0.41;
  window.KS_LOADER_HOLD = true;   // hold the loader until the visitor taps Enter (unlocks audio too)
` },
  { type:'inline', code:`(function(){
  var num = document.querySelector('.loader__num');
  var INHALE_END = 1500, EXHALE_END = 2420, N = 3;
  window.KS_LOADER_MIN_MS = EXHALE_END;   // rollout syncs to the exhale (timed from release)
  var audio = new Audio('portfolio/sfx/yawn.wav');
  audio.preload = 'auto'; audio.volume = 0.9;
  var gateEl = document.getElementById('enterGate');
  var btn = document.getElementById('enterBtn');
  var easeOut = function(x){ return 1 - Math.pow(1 - x, 2); };
  var started = false;
  // if the visitor already entered earlier this tab session (e.g. returning from a
  // case study), skip the gate + loader entirely and land straight on the portfolio.
  var entered = false; try{ entered = sessionStorage.getItem('pf-entered') === '1'; }catch(e){}
  if (entered) {
    window.KS_LOADER_HOLD = false; window.KS_LOADER_MIN_MS = 0;
    document.documentElement.classList.add('skip-intro');
    if (gateEl) { gateEl.classList.add('hide'); gateEl.style.display = 'none'; }
    if (num) num.textContent = 100;
    // returning from a case study (#work) — restore the visitor to the work section
    if (location.hash === '#work') {
      requestAnimationFrame(function () {
        var w = document.getElementById('work');
        if (w) window.scrollTo(0, w.getBoundingClientRect().top + window.pageYOffset);
      });
    }
  }
  function begin(){
    if (started) return; started = true;
    try{ sessionStorage.setItem('pf-entered', '1'); }catch(e){}
    try{ audio.currentTime = 0; }catch(e){}
    var p = audio.play(); if (p && p.catch) p.catch(function(){});
    if (gateEl) gateEl.classList.add('hide');
    if (typeof window.KS_releaseLoader === 'function') window.KS_releaseLoader();
    else window.KS_LOADER_HOLD = false;
    if (num) {
      var t0 = performance.now();
      (function frame(now){
        var t = now - t0, val;
        if (t <= INHALE_END)      val = Math.round(easeOut(t / INHALE_END) * N);
        else if (t <= EXHALE_END) val = Math.round(N + easeOut((t - INHALE_END) / (EXHALE_END - INHALE_END)) * (100 - N));
        else                      val = 100;
        num.textContent = val;
        if (t < EXHALE_END) requestAnimationFrame(frame); else num.textContent = 100;
      })(t0);
    }
  }
  if (btn) btn.addEventListener('click', begin);
})();` },
  { type:'src', src:'/portfolio/pf.js' },
  { type:'src', src:'/portfolio/pf-facets.js' },
  { type:'src', src:'/portfolio/pf-collage.js' },
  { type:'src', src:'/portfolio/pf-morph.js' },
  { type:'src', src:'/portfolio/pf-skills.js' },
  { type:'src', src:'/portfolio/pf-skillmodal.js' },
  { type:'src', src:'/portfolio/pf-journey.js' },
  { type:'src', src:'/portfolio/pf-sfx.js' },
  { type:'inline', code:`(function(){
  if(!window.KSSound) return;
  var btn = document.querySelector('.sfxbtn'); if(!btn) return;
  function sync(){ var on = window.KSSound.isOn(); btn.setAttribute('aria-pressed', on ? 'true' : 'false'); }
  window.KSSound.initial(); sync();
  btn.addEventListener('click', function(){ window.KSSound.toggle(); sync(); });
})();` },
  { type:'inline', code:`(function(){
  /* mobile only: arm-then-go for the featured case-study cards */
  var cards = [].slice.call(document.querySelectorAll('.workfeat'));
  var isMobile = function(){ return window.matchMedia('(max-width:760px)').matches; };
  cards.forEach(function(card){
    card.addEventListener('click', function(e){
      if(!isMobile()) return;                              // desktop: normal link
      if(card.classList.contains('is-armed')) return;      // armed: let the navigation happen
      var cta = e.target.closest('.workfeat__cta');
      if(cta) return;                                       // tapping the CTA directly navigates
      e.preventDefault();                                   // first tap on the card body: just arm + glow
      cards.forEach(function(c){ if(c!==card) c.classList.remove('is-armed'); });
      card.classList.add('is-armed');
    });
  });
  // tapping outside the cards disarms them
  document.addEventListener('click', function(e){
    cards.forEach(function(card){
      if(card.classList.contains('is-armed') && !card.contains(e.target)) card.classList.remove('is-armed');
    });
  });
})();` },
  { type:'inline', code:`(function(){
  /* coming-soon marquee: meadow wind loops while hovered (respects the sound toggle) */
  var soon = document.getElementById('soonMarquee'); if(!soon) return;
  var play = function(){ if(window.KSSound && window.KSSound.isOn()) window.KSSound.loopStart('meadow', 1); };
  var stop = function(){ if(window.KSSound) window.KSSound.loopStop(); };
  soon.addEventListener('pointerenter', play);
  soon.addEventListener('pointerleave', stop);
  window.addEventListener('blur', stop);
})();` },
  { type:'inline', code:`(function(){
  var host = document.querySelector('.bgmorph');
  if (!host) return;
  window.addEventListener('pointermove', function (e) {
    host.dispatchEvent(new PointerEvent('pointermove', { clientX: e.clientX, clientY: e.clientY }));
  });
})();` },
  { type:'inline', code:`(function(){
  var wrap = document.querySelector('.themebtn'); if(!wrap) return;
  function apply(t){
    document.documentElement.classList.toggle('theme-light', t==='light');
    wrap.querySelectorAll('button').forEach(function(b){ b.classList.toggle('on', b.getAttribute('data-theme-set')===t); });
    try{ localStorage.setItem('pf-facets-theme', t); }catch(e){}
  }
  apply(document.documentElement.classList.contains('theme-light') ? 'light' : 'dark');  wrap.querySelectorAll('button').forEach(function(b){
    b.addEventListener('click', function(){ apply(b.getAttribute('data-theme-set')); });
  });
})();` }
];
export default function App() {
  useEffect(() => {
    let cancelled = false;
    (async () => {
      for (const s of SEQ) {
        if (cancelled) return;
        if (s.type === 'src') { await new Promise((res) => { const el = document.createElement('script'); el.src = s.src; el.async = false; el.onload = res; el.onerror = res; document.body.appendChild(el); }); }
        else { const el = document.createElement('script'); el.textContent = s.code; document.body.appendChild(el); }
      }
    })();
    return () => { cancelled = true; };
  }, []);
  return <div dangerouslySetInnerHTML={{ __html: MARKUP }} />;
}
