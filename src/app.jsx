import { useEffect } from 'react';

/*
  Kushagra Sharan — Portfolio (React port)
  ----------------------------------------
  The markup below is the portfolio, expressed as JSX. All motion/interaction
  (loader, cursor, morphing grid background, scroll-spy nav, warping skill
  titles, journey trail, draggable sketchbook collage + ASCII console, marquee,
  reveals) is driven by the original vanilla scripts in /public/portfolio/*.js,
  which are loaded — in order — by the effect at the bottom, AFTER this markup
  has mounted so they can find the DOM nodes they hook into.
*/

// arrow used in a couple of CTAs
const Arrow = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const DiagArrow = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

export default function App() {
  useEffect(() => {
    // Soft Grid tuning: gentler skill hover growth
    window.KS_SKILL_GROW = 0.41;
    // yawn-synced loader: count crawls on the inhale, sprints to 100 on the exhale.
    (function(){
      var num = document.querySelector('.loader__num');
      var INHALE_END = 1500, EXHALE_END = 2420, N = 3;
      window.KS_LOADER_MIN_MS = EXHALE_END;
      var audio = new Audio('/portfolio/sfx/yawn.wav'); audio.preload='auto'; audio.volume=0.9;
      function playYawn(){ try{audio.currentTime=0;}catch(e){} var q=audio.play(); if(q&&q.catch)q.catch(function(){}); }
      playYawn();
      function gate(){ if(document.body.classList.contains('loading') && audio.paused) playYawn(); window.removeEventListener('pointerdown', gate); }
      window.addEventListener('pointerdown', gate);
      audio.addEventListener('ended', function(){ window.removeEventListener('pointerdown', gate); });
      if(num){ var easeOut=function(x){return 1-Math.pow(1-x,2);}; var t0=performance.now();
        (function frame(now){ var t=now-t0, val;
          if(t<=INHALE_END) val=Math.round(easeOut(t/INHALE_END)*N);
          else if(t<=EXHALE_END) val=Math.round(N+easeOut((t-INHALE_END)/(EXHALE_END-INHALE_END))*(100-N));
          else val=100;
          num.textContent=val;
          if(t<EXHALE_END) requestAnimationFrame(frame); else num.textContent=100;
        })(t0);
      }
    })();
    // 1) load the interaction scripts sequentially against the mounted DOM
    const scripts = [
      '/portfolio/pf.js',
      '/portfolio/pf-facets.js',
      '/portfolio/pf-collage.js',
      '/portfolio/pf-morph.js',
      '/portfolio/pf-skills.js',
      '/portfolio/pf-journey.js',
      '/portfolio/pf-sfx.js',
    ];
    const added = [];
    let cancelled = false;

    function loadNext(i) {
      if (cancelled || i >= scripts.length) { if (!cancelled) wireInline(); return; }
      const s = document.createElement('script');
      s.src = scripts[i];
      s.defer = false;
      s.onload = () => loadNext(i + 1);
      s.onerror = () => loadNext(i + 1);
      document.body.appendChild(s);
      added.push(s);
    }

    // 2) the two small inline behaviours the original page kept in <script> tags
    function wireInline() {
      // forward window pointer moves to the morphing-grid background
      const host = document.querySelector('.bgmorph');
      if (host) {
        window.__pfPointer = (e) => {
          host.dispatchEvent(new PointerEvent('pointermove', { clientX: e.clientX, clientY: e.clientY }));
        };
        window.addEventListener('pointermove', window.__pfPointer);
      }
      // theme toggle
      const wrap = document.querySelector('.themebtn');
      if (wrap) {
        const apply = (t) => {
          document.documentElement.classList.toggle('theme-light', t === 'light');
          wrap.querySelectorAll('button').forEach((b) => b.classList.toggle('on', b.getAttribute('data-theme-set') === t));
          try { localStorage.setItem('pf-facets-theme', t); } catch (e) {}
        };
        apply(document.documentElement.classList.contains('theme-light') ? 'light' : 'dark');
        wrap.querySelectorAll('button').forEach((b) => {
          b.addEventListener('click', () => apply(b.getAttribute('data-theme-set')));
        });
      }
      // sound toggle (pf-sfx.js exposes window.KSSound)
      const sbtn = document.querySelector('.sfxbtn');
      if (sbtn && window.KSSound) {
        const sync = () => sbtn.setAttribute('aria-pressed', window.KSSound.isOn() ? 'true' : 'false');
        window.KSSound.initial(); sync();
        sbtn.addEventListener('click', () => { window.KSSound.toggle(); sync(); });
      }
      // mobile: arm-then-go for the featured case-study card
      const card = document.querySelector('.workfeat');
      if (card) {
        const isMobile = () => window.matchMedia('(max-width:760px)').matches;
        card.addEventListener('click', (ev) => {
          if (!isMobile()) return;
          if (card.classList.contains('is-armed')) return;
          if (ev.target.closest('.workfeat__cta')) return;
          ev.preventDefault();
          card.classList.add('is-armed');
        });
        document.addEventListener('click', (ev) => {
          if (card.classList.contains('is-armed') && !card.contains(ev.target)) card.classList.remove('is-armed');
        });
      }
    }

    loadNext(0);

    return () => {
      cancelled = true;
      if (window.__pfPointer) { window.removeEventListener('pointermove', window.__pfPointer); delete window.__pfPointer; }
      added.forEach((s) => s.remove());
    };
  }, []);

  return (
    <>
      {/* full-page morphing grid background */}
      <style>{`
        .bgmorph{ opacity:0.75; transition:opacity .45s ease; }
        .topbar{ position:fixed; top:var(--edge); right:var(--edge); left:auto; z-index:130; display:inline-flex; align-items:stretch; gap:8px; }
        .topbar .themebtn{ position:static; top:auto; right:auto; left:auto; }
        .sfxbtn{ flex:0 0 auto; width:39px; height:39px; align-self:center; padding:0; display:inline-flex; align-items:center; justify-content:center; border-radius:50%; cursor:pointer; background:color-mix(in srgb, var(--bg) 72%, transparent); border:1.5px solid color-mix(in srgb, var(--fg) 20%, transparent); backdrop-filter:blur(10px); -webkit-backdrop-filter:blur(10px); color:color-mix(in srgb, var(--fg) 62%, transparent); transition:color .25s, background .25s, border-color .25s; }
        .sfxbtn:hover{ color:var(--fg); }
        .sfxbtn svg{ width:16px; height:16px; display:block; }
        .sfxbtn .i-on{ display:none; } .sfxbtn .i-off{ display:block; }
        html.sfx-on .sfxbtn{ color:#fff; background:var(--hot); border-color:transparent; }
        html.sfx-on .sfxbtn .i-on{ display:block; } html.sfx-on .sfxbtn .i-off{ display:none; }
        .hero__scrollcue i::after{ background:#E01E8F !important; }
        @media (max-width:760px){
          .workfeat.is-armed{ outline:2px solid var(--hot); outline-offset:2px; box-shadow:0 0 0 1px var(--hot), 0 24px 60px -24px color-mix(in srgb, var(--hot) 60%, transparent); }
          .workfeat.is-armed .workfeat__cta{ color:#fff; background:var(--hot); border-radius:100px; padding:10px 18px; }
          .workfeat.is-armed .workfeat__cta svg{ stroke:#fff; }
        }
        body:has(:is(h1,h2,h3,h4,p,li,a,span,.lab,.hero__title,.hero__lead,.sechead,.skill,.jrow):hover) .bgmorph{ opacity:0.32; }
      `}</style>
      <div className="bgmorph" data-morph aria-hidden="true"><canvas></canvas></div>

      {/* loader */}
      <div className="loader">
        <div className="loader__num">0</div>
        <div className="loader__word">KUSHAGRA SHARAN — <b>PRODUCT DESIGNER</b></div>
      </div>

      {/* cursor */}
      <div className="cursor" aria-hidden="true"></div>
      <div className="cursor__ring" aria-hidden="true"></div>
      <div className="cursor__lab" aria-hidden="true"></div>

      {/* nav */}
      <header className="nav">
        <a className="nav__logo" href="#top" aria-label="Kushagra Sharan"><span className="mk">KS</span></a>
        <nav className="hindex" aria-label="Sections">
          <button className="hindex__i" data-goto="services" type="button"><span className="dot"></span><span className="txt">What I do</span></button>
          <button className="hindex__i" data-goto="work" type="button"><span className="dot"></span><span className="txt">Work</span></button>
          <button className="hindex__i" data-goto="experience" type="button"><span className="dot"></span><span className="txt">Experience</span></button>
          <button className="hindex__i" data-goto="sketchbook" type="button"><span className="dot"></span><span className="txt">Sketchbook</span></button>
          <button className="hindex__i" data-goto="contact" type="button"><span className="dot"></span><span className="txt">Contact</span></button>
        </nav>
      </header>

      {/* ============ HERO ============ */}
      <header className="hero" id="top">
        <div className="wrap hero__inner">
          <div className="hero__lead">
            <span className="hero__eyebrow lab"><span className="d"></span> Product Designer &amp; Illustrator · Est. 2023</span>
            <h1 className="hero__title"><span className="ln"><span>Kushagra</span></span><span className="ln"><span><em>Sharan.</em></span></span></h1>
          </div>
          <div className="hero__side">
            <p className="hero__sub">UX-led product design, shipped end to end. I make complex workflows feel obvious.</p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="#services">Enter<Arrow /></a>
              <a className="btn btn--ghost" href="#work">See the work</a>
            </div>
          </div>
        <div className="hero__scrollcue">Scroll <i></i></div></div>
        </header>

      {/* marquee */}
      <div className="mq" aria-hidden="true">
        <div className="mq__t"><span>UX Design</span><span>Design Systems</span><span>Product Strategy</span><span>Accessibility — AAA</span><span>Rapid Execution</span><span>Problem Framing</span></div>
      </div>

      {/* ============ SERVICES / WHAT I DO ============ */}
      <section className="section" id="services">
        <div className="wrap">
          <div className="sechead">
            <div className="sechead__l">
              <div className="chap"><span className="chap__n">01</span><span className="chap__rule"></span><span className="chap__t">What I do</span></div>
              <h2 className="sechead__title" data-lines>How I<br />work.</h2>
            </div>
            <p className="lab" style={{ maxWidth: '38ch' }}>Two-plus years taking features from problem framing through flows, polished UI, and developer handoff — most recently leading end-to-end design for Factile (2M+ users) and the Vesta real-estate platform.</p>
          </div>
        </div>
        <div className="wrap">
          <div className="svc">
            <svg className="svc-filters" aria-hidden="true"><defs>
              <filter id="warp1" x="-40%" y="-90%" width="180%" height="280%" colorInterpolationFilters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.009 0.02" numOctaves="1" seed="7" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G" /></filter>
              <filter id="warp2" x="-40%" y="-90%" width="180%" height="280%" colorInterpolationFilters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.011 0.018" numOctaves="1" seed="19" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G" /></filter>
              <filter id="warp3" x="-40%" y="-90%" width="180%" height="280%" colorInterpolationFilters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.008 0.024" numOctaves="1" seed="3" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G" /></filter>
              <filter id="warp4" x="-40%" y="-90%" width="180%" height="280%" colorInterpolationFilters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.012 0.019" numOctaves="1" seed="42" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G" /></filter>
              <filter id="warp5" x="-40%" y="-90%" width="180%" height="280%" colorInterpolationFilters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.01 0.022" numOctaves="1" seed="11" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G" /></filter>
              <filter id="warp6" x="-40%" y="-90%" width="180%" height="280%" colorInterpolationFilters="sRGB"><feTurbulence type="fractalNoise" baseFrequency="0.009 0.021" numOctaves="1" seed="27" result="n" /><feDisplacementMap in="SourceGraphic" in2="n" scale="0" xChannelSelector="R" yChannelSelector="G" /></filter>
            </defs></svg>
            <p className="svc__intro"><i></i> Hover a strength</p>
            <div className="skill" data-skill style={{ left: '22%', top: '5%' }}><span className="skill__n">01</span><h3 className="skill__t" style={{ filter: 'url(#warp1)' }} tabIndex={0}>UX Design</h3><span className="skill__desc">Flows so clear the interface feels inevitable.</span></div>
            <div className="skill" data-skill style={{ left: '42%', top: '21%' }}><span className="skill__n">02</span><h3 className="skill__t" style={{ filter: 'url(#warp2)' }} tabIndex={0}>Design Systems</h3><span className="skill__desc">One system — every screen consistent, faster to build.</span></div>
            <div className="skill" data-skill style={{ left: '18%', top: '37%' }}><span className="skill__n">03</span><h3 className="skill__t" style={{ filter: 'url(#warp3)' }} tabIndex={0}>Problem Framing</h3><span className="skill__desc">The real problem, found before the first screen.</span></div>
            <div className="skill" data-skill style={{ left: '40%', top: '53%' }}><span className="skill__n">04</span><h3 className="skill__t" style={{ filter: 'url(#warp4)' }} tabIndex={0}>Accessibility</h3><span className="skill__desc">Software that welcomes the people it usually intimidates.</span></div>
            <div className="skill" data-skill style={{ left: '22%', top: '69%' }}><span className="skill__n">05</span><h3 className="skill__t" style={{ filter: 'url(#warp5)' }} tabIndex={0}>Rapid Execution</h3><span className="skill__desc">High craft, shipped fast when the timeline is tight.</span></div>
            <div className="skill" data-skill style={{ left: '40%', top: '85%' }}><span className="skill__n">06</span><h3 className="skill__t" style={{ filter: 'url(#warp6)' }} tabIndex={0}>Communication</h3><span className="skill__desc">Narrating the “why” so product, design and eng move as one.</span></div>
          </div>
        </div>
      </section>

      {/* ============ SELECTED WORK ============ */}
      <section className="section" id="work">
        <div className="wrap">
          <div className="sechead">
            <div className="sechead__l">
              <div className="chap"><span className="chap__n">02</span><span className="chap__rule"></span><span className="chap__t">Selected work</span></div>
              <h2 className="sechead__title" data-lines>What I’ve<br />shipped.</h2>
            </div>
            <p className="lab" style={{ maxWidth: '28ch' }}>One flagship case study I shipped end to end — plus a few explorations on Behance.</p>
          </div>
        </div>
        <div className="wrap">
          <a className="workfeat" href="design-system/index.html" data-view="Explore">
            <div className="workfeat__media"><span className="workfeat__art" role="img" aria-label="Abstract illustration — tokens combining into components and full screens"></span></div>
            <div className="workfeat__body">
              <span className="workfeat__badge"><i></i> Flagship · Case study</span>
              <h3 className="workfeat__title">Accessible<br />Foundations</h3>
              <p className="workfeat__desc">An end-to-end design system for a WCAG AA/AAA product — tokens, components and patterns that keep every screen consistent and welcoming to a non-technical audience.</p>
              <span className="workfeat__tags"><span className="work__tag">Design System</span><span className="work__tag">Accessibility</span><span className="work__tag">WCAG AA / AAA</span></span>
              <span className="workfeat__cta">Explore the system <DiagArrow /></span>
            </div>
          </a>
          <div className="work">
            <a className="work__row" href="https://www.behance.net/gallery/234598321/Good-Grammar-AI-A-Dashboard-for-Smarter-Communication" target="_blank" rel="noopener" data-img="portfolio/img/good-grammar.png" data-view="Behance">
              <span className="work__l"><span className="work__n">01</span><span className="work__name">Good Grammar AI</span></span>
              <span className="work__meta">
                <span className="work__tags"><span className="work__tag">Product</span><span className="work__tag">Dashboard</span></span>
                <span className="work__go"><DiagArrow /></span>
              </span>
            </a>
            <a className="work__row" href="https://www.behance.net/gallery/222268639/Health-Wellness-Website-Design" target="_blank" rel="noopener" data-img="portfolio/img/supplement.png" data-view="Behance">
              <span className="work__l"><span className="work__n">02</span><span className="work__name">The Supplement</span></span>
              <span className="work__meta">
                <span className="work__tags"><span className="work__tag">Web</span><span className="work__tag">E-commerce</span></span>
                <span className="work__go"><DiagArrow /></span>
              </span>
            </a>
            <a className="work__row" href="https://www.behance.net/gallery/233657339/Bento-Wireframing-Mini-Kit" target="_blank" rel="noopener" data-img="portfolio/img/mini-kit.png" data-view="Behance">
              <span className="work__l"><span className="work__n">03</span><span className="work__name">Bento Mini Kit</span></span>
              <span className="work__meta">
                <span className="work__tags"><span className="work__tag">UI Kit</span><span className="work__tag">Wireframes</span></span>
                <span className="work__go"><DiagArrow /></span>
              </span>
            </a>
          </div>
          <div className="work__float" aria-hidden="true"></div>
        </div>
      </section>

      {/* ============ EXPERIENCE ============ */}
      <section className="section jrny" id="experience">
        <div className="wrap">
          <div className="sechead">
            <div className="sechead__l">
              <div className="chap"><span className="chap__n">03</span><span className="chap__rule"></span><span className="chap__t">The journey</span></div>
              <h2 className="sechead__title" data-lines>Where I've<br />been.</h2>
            </div>
            <p className="lab" style={{ maxWidth: '36ch' }}>A path, not a résumé — from first principles to shipping product. Scroll to travel the route.</p>
          </div>
          <div className="jrny__map" data-journey>
            <svg className="jrny__trail" aria-hidden="true"><defs><linearGradient id="jgrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#6522E0" /><stop offset="1" stopColor="#E01E8F" /></linearGradient></defs><path className="jrny__trail-base"></path><path className="jrny__trail-prog"></path></svg>
            <ol className="jrny__list">
              <li className="jstep" data-step>
                <div className="jstep__pin">01</div>
                <div className="jstep__when">Before 2023 · Foundations</div>
                <h3 className="jstep__role">First principles</h3>
                <span className="jstep__org">IIIT Jabalpur · CUSAT</span>
                <ul className="jstep__keys">
                  <li>Sketching</li><li>Close observation</li><li>Art &amp; crafts</li><li>First-principles thinking</li><li>Curiosity</li>
                </ul>
              </li>
              <li className="jstep" data-step>
                <div className="jstep__pin">02</div>
                <div className="jstep__when">Aug 2023 — Oct 2025</div>
                <h3 className="jstep__role">UX/UI Designer</h3>
                <span className="jstep__org">SimplePlan Media</span>
                <ul className="jstep__keys">
                  <li>Flows &amp; wireframes</li><li>Hi-fi UI</li><li>E-commerce</li><li>Healthcare</li><li>Logistics</li><li>BundleSuite · Shopify</li><li>Concept → handoff</li><li>Dev collaboration</li>
                </ul>
              </li>
              <li className="jstep" data-step>
                <div className="jstep__pin">03</div>
                <div className="jstep__when">Oct 2025 — Present · Now</div>
                <h3 className="jstep__role">Senior UX/UI Designer</h3>
                <span className="jstep__org">Deligence Technologies</span>
                <ul className="jstep__keys">
                  <li>End-to-end design</li><li>Problem framing</li><li>Dev-ready specs</li><li>Factile · +13–14% new users</li><li>~10% revenue</li><li>WCAG AA / AAA</li><li>Vesta · 23→15 steps</li>
                </ul>
              </li>
            </ol>
            <div className="jrny__more" aria-hidden="true">
              <span className="jrny__more-line"></span>
              <span className="jrny__more-dot"></span>
              <p>The journey is still on — more adventures ahead</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SKETCHBOOK ============ */}
      <section className="section sketch" id="sketchbook">
        <div className="wrap">
          <div className="sechead">
            <div className="sechead__l">
              <div className="chap"><span className="chap__n">04</span><span className="chap__rule"></span><span className="chap__t">Sketchbook</span></div>
              <h2 className="sechead__title" data-lines>The other<br />half.</h2>
            </div>
            <p className="lab" style={{ maxWidth: '36ch' }}>The other half of the practice — illustration and poster art. Deal the pile, then build your own collage inside the frame: drag and resize the pieces, and when it feels yours, hit capture for a little surprise.</p>
          </div>
        </div>
        <div className="wrap">
          <div className="gallery" data-gallery>
            <div className="collage-frame" aria-hidden="true"></div>
            <div className="gallery__stack">
              <figure className="gcard" data-view="Drag"><img src="portfolio/img/sk-knight2.jpg" alt="A Knight of the Seven Kingdoms — poster illustration" loading="lazy" /></figure>
              <figure className="gcard" data-view="Drag"><img src="portfolio/img/sk-onepiece.jpg" alt="One Piece — Zoro" loading="lazy" /></figure>
              <figure className="gcard" data-view="Drag"><img src="portfolio/img/sk-peaky2.jpg" alt="Peaky Blinders — The Immortal Man" loading="lazy" /></figure>
              <figure className="gcard" data-view="Drag"><img src="portfolio/img/sk-surfer.jpg" alt="Silver Surfer" loading="lazy" /></figure>
              <figure className="gcard" data-view="Drag"><img src="portfolio/img/sk-mj.png" alt="Michael Jackson" loading="lazy" /></figure>
              <figure className="gcard" data-view="Drag"><img src="portfolio/img/sk-frieren2.jpg" alt="Frieren — Beyond Journey's End" loading="lazy" /></figure>
              <figure className="gcard" data-view="Drag"><img src="portfolio/img/sk-rivers.jpg" alt="Festival — three rivers" loading="lazy" /></figure>
              <figure className="gcard" data-view="Drag"><img src="portfolio/img/sk-canyoudo2.jpg" alt="Can you do — portrait study" loading="lazy" /></figure>
              <figure className="gcard" data-view="Drag"><img src="portfolio/img/sk-weak.jpg" alt="Weak? — graffiti study" loading="lazy" /></figure>
            </div>
            <div className="gallery__zoom" aria-label="Resize selected piece">
              <button type="button" data-zoom="out" aria-label="Shrink" disabled><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="21" y2="21" /><line x1="8" y1="11" x2="14" y2="11" /></svg></button>
              <button type="button" data-zoom="in" aria-label="Enlarge" disabled><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><line x1="16.5" y1="16.5" x2="21" y2="21" /><line x1="8" y1="11" x2="14" y2="11" /><line x1="11" y1="8" x2="11" y2="14" /></svg></button>
            </div>
            <button className="gallery__reset" type="button">Restack</button>
            <a className="gallery__insta" href="https://www.instagram.com/drawanyday?igsh=MW1keXhscTdpeXZndg==" target="_blank" rel="noopener" data-view="Instagram" aria-label="@drawanyday — sketchbook on Instagram" title="@drawanyday — sketchbook on Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2.5" y="2.5" width="19" height="19" rx="5.5" /><circle cx="12" cy="12" r="4.4" /><circle cx="17.6" cy="6.4" r="1.15" fill="currentColor" stroke="none" /></svg></a>
            <div className="console" data-console aria-label="Live ASCII preview of your collage">
              <div className="console__bar"><i></i><i></i><i></i><span>collage.tty — live ascii</span></div>
              <pre className="console__pre" aria-hidden="true">&gt; collage.tty ready
&gt; deal the pile to begin _</pre>
              <button className="console__cap" type="button" data-capture disabled>Capture · ASCII</button>
            </div>
            <button className="collage-dl" type="button" data-download disabled>Download · Collage</button>
            <div className="collage-flash" aria-hidden="true"></div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="contact" id="contact">
        <div className="wrap">
          <span className="lab">Get started</span>
          <h2 className="contact__big" data-lines>Let's make<br />something <em>different</em>.</h2>
          <a className="contact__mail" href="mailto:sharan.kushagra@gmail.com" data-view="Email">
            <span className="circ"><svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg></span>
            sharan.kushagra@gmail.com
          </a>
          <div className="contact__grid">
            <div className="contact__col">
              <span className="lab">Elsewhere</span>
              <a href="https://www.linkedin.com/in/sharan-kushagra" target="_blank" rel="noopener">LinkedIn ↗</a>
              <a href="https://www.behance.net/superchargedINK" target="_blank" rel="noopener">Behance ↗</a>
            </div>
            <div className="contact__col">
              <span className="lab">Direct</span>
              <a href="tel:+919305664633">+91 93056 64633</a>
              <a href="portfolio/Kushagra-Sharan-Resume.pdf" target="_blank" rel="noopener">Résumé (PDF) ↓</a>
            </div>
            <div className="contact__col">
              <span className="lab">Based in</span>
              <a href="#top">New Delhi, India</a>
              <a href="#top">Available for roles</a>
            </div>
          </div>
          <a className="foot__kit" href="Facets UI Kit.html" data-view="Explore">
            <span className="foot__kit-t">UI Facets Kit <span aria-hidden="true">↗</span></span>
            <span className="foot__kit-d">The tokens, components and interaction patterns this entire site is built from — open the kit to see the parts.</span>
          </a>
          <div className="foot">
            <span>© <span id="year">2025</span> Kushagra Sharan</span>
            <span className="madewith">Made with Claude Design <svg className="pxheart" width="14" height="12" viewBox="0 0 14 12" shapeRendering="crispEdges" fill="#7CF03A" aria-hidden="true"><rect x="2" y="0" width="2" height="2"></rect><rect x="4" y="0" width="2" height="2"></rect><rect x="8" y="0" width="2" height="2"></rect><rect x="10" y="0" width="2" height="2"></rect><rect x="0" y="2" width="14" height="2"></rect><rect x="0" y="4" width="14" height="2"></rect><rect x="2" y="6" width="10" height="2"></rect><rect x="4" y="8" width="6" height="2"></rect><rect x="6" y="10" width="2" height="2"></rect></svg></span>
          </div>
        </div>
      </section>

      {/* sound + theme toolbar */}
      <div className="topbar">
        <button className="sfxbtn" type="button" aria-label="Toggle sound effects" aria-pressed="false">
          <svg className="i-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
            <line x1="22" y1="9" x2="16" y2="15" /><line x1="16" y1="9" x2="22" y2="15" />
          </svg>
          <svg className="i-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
            <path d="M15.5 8.5a5 5 0 0 1 0 7" /><path d="M18.5 5.5a9 9 0 0 1 0 13" />
          </svg>
        </button>
        {/* theme toggle */}
        <div className="themebtn" role="group" aria-label="Theme">
          <button type="button" data-theme-set="dark">Dark</button>
          <button type="button" data-theme-set="light">Light</button>
        </div>
      </div>
    </>
  );
}
