/* ============================================================
   KUSHAGRA SHARAN — "A PERSON, IN QUESTIONS"  —  interactions
   ============================================================ */
(function(){
  'use strict';
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine   = matchMedia('(hover:hover) and (pointer:fine)').matches;
  document.body.classList.add(reduce ? 'reduced' : 'motion');

  /* ---------- LOADER ---------- */
  var load = document.querySelector('.load');
  function endLoad(){
    if(!load) return;
    load.classList.add('done');
    document.body.classList.remove('loading');
    setTimeout(function(){ if(load && load.parentNode) load.parentNode.removeChild(load); }, 1100);
    kickHero();
  }
  if(load){
    var q = load.querySelector('.load__q');
    var bar = load.querySelector('.load__bar i');
    var pct = load.querySelector('.load__pct');
    if(q) requestAnimationFrame(function(){ q.classList.add('on'); });
    if(reduce){ setTimeout(endLoad, 500); }
    else {
      var p = 0;
      var t = setInterval(function(){
        p += Math.random()*16 + 5;
        if(p >= 100){ p = 100; clearInterval(t); setTimeout(endLoad, 420); }
        if(bar) bar.style.width = p + '%';
        if(pct) pct.textContent = String(Math.floor(p)).padStart(3,'0');
      }, 130);
    }
  } else { document.body.classList.remove('loading'); kickHero(); }

  function kickHero(){
    var hero = document.querySelector('.hero');
    if(hero) hero.classList.add('in');
  }

  /* ---------- CUSTOM CURSOR ---------- */
  if(fine){
    document.body.classList.add('cur');
    var dot = el('div','cur-dot'), ring = el('div','cur-ring'), clab = el('div','cur-lab');
    document.body.appendChild(dot); document.body.appendChild(ring); document.body.appendChild(clab);
    var mx=innerWidth/2, my=innerHeight/2, rx=mx, ry=my;
    addEventListener('mousemove', function(e){
      mx=e.clientX; my=e.clientY;
      dot.style.transform='translate('+mx+'px,'+my+'px) translate(-50%,-50%)';
      clab.style.transform='translate('+mx+'px,'+my+'px) translate(-50%,-50%)';
    });
    (function loop(){
      rx += (mx-rx)*0.18; ry += (my-ry)*0.18;
      ring.style.transform='translate('+rx+'px,'+ry+'px) translate(-50%,-50%)'+ring._extra;
      requestAnimationFrame(loop);
    })();
    ring._extra=' scale(.55)';
    function setRing(cls, extra){ ring.className='cur-ring '+cls; ring._extra=extra; }
    // hover targets
    document.querySelectorAll('a,button,.workrow,.craft span').forEach(function(t){
      t.addEventListener('mouseenter', function(){ setRing('hov',' scale(1)'); });
      t.addEventListener('mouseleave', function(){ setRing('',' scale(.55)'); clab.classList.remove('on'); });
    });
    // "view" targets — images / art
    document.querySelectorAll('[data-view]').forEach(function(t){
      t.addEventListener('mouseenter', function(){ setRing('hov view',' scale(1)'); clab.textContent=t.getAttribute('data-view'); clab.classList.add('on'); });
      t.addEventListener('mouseleave', function(){ setRing('',' scale(.55)'); clab.classList.remove('on'); });
    });
  }

  /* ---------- REVEAL (IntersectionObserver) ---------- */
  var revealEls = [].slice.call(document.querySelectorAll('.facet,.reveal'));
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
  }, { threshold:0.14, rootMargin:'0px 0px -8% 0px' });
  revealEls.forEach(function(s){ io.observe(s); });
  // scroll fallback — guarantees reveal even if IO misses a programmatic scroll
  function revealCheck(){
    var vh = innerHeight;
    for(var i=revealEls.length-1;i>=0;i--){
      var el = revealEls[i], r = el.getBoundingClientRect();
      if(r.top < vh*0.86 && r.bottom > 0){ el.classList.add('in'); revealEls.splice(i,1); }
    }
  }
  addEventListener('scroll', revealCheck, {passive:true});
  addEventListener('resize', revealCheck);
  revealCheck();

  /* ---------- PARALLAX (data-para = speed, +down / -up) ---------- */
  var paras = [].slice.call(document.querySelectorAll('[data-para]'));
  var ticking=false;
  function onScroll(){
    if(ticking) return; ticking=true;
    requestAnimationFrame(function(){
      var vh = innerHeight;
      paras.forEach(function(el){
        var r = el.getBoundingClientRect();
        if(r.bottom < -200 || r.top > vh+200) return;
        var mid = r.top + r.height/2;
        var off = (mid - vh/2) / vh;               // -0.5..0.5 through viewport
        var sp = parseFloat(el.getAttribute('data-para')) || 0;
        el.style.transform = 'translate3d(0,'+(off*sp*100).toFixed(1)+'px,0)';
      });
      ticking=false;
    });
  }
  if(!reduce && paras.length){ addEventListener('scroll', onScroll, {passive:true}); addEventListener('resize', onScroll); onScroll(); }

  /* ---------- FACET INDEX active state ---------- */
  var sections = [].slice.call(document.querySelectorAll('[data-facet]'));
  var idxItems = [].slice.call(document.querySelectorAll('.index__i'));
  if(sections.length && idxItems.length){
    var io2 = new IntersectionObserver(function(entries){
      entries.forEach(function(en){
        if(en.isIntersecting){
          var id = en.target.getAttribute('data-facet');
          idxItems.forEach(function(it){ it.classList.toggle('on', it.getAttribute('data-goto')===id); });
        }
      });
    }, { threshold:0.5 });
    sections.forEach(function(s){ io2.observe(s); });
    idxItems.forEach(function(it){
      it.addEventListener('click', function(){
        var t = document.getElementById(it.getAttribute('data-goto'));
        if(t) t.scrollIntoView({behavior: reduce?'auto':'smooth', block:'start'});
      });
    });
  }

  /* ---------- MARQUEE ---------- */
  var mq = document.querySelector('.mq__t');
  if(mq && !reduce){
    var clone = mq.cloneNode(true); mq.parentNode.appendChild(clone);
    var x=0, w=mq.getBoundingClientRect().width;
    function mloop(){ x -= 0.5; if(-x >= w) x=0; mq.style.transform='translateX('+x+'px)'; clone.style.transform='translateX('+x+'px)'; requestAnimationFrame(mloop); }
    clone.style.position='absolute'; clone.style.left=w+'px'; clone.style.top='0';
    mq.parentNode.style.position='relative';
    requestAnimationFrame(mloop);
  }

  /* ---------- WORK cursor-follow float ---------- */
  var floatEl = document.querySelector('.workfloat');
  if(floatEl && fine){
    var rows = [].slice.call(document.querySelectorAll('.workrow'));
    var imgs = {};
    rows.forEach(function(r){
      var src=r.getAttribute('data-img'); if(src && !imgs[src]){ var im=el('img'); im.src=src; im.setAttribute('data-k',src); floatEl.appendChild(im); imgs[src]=im; }
    });
    var fx=0,fy=0,tx=0,ty=0;
    addEventListener('mousemove', function(e){ tx=e.clientX; ty=e.clientY; });
    (function floop(){ fx+=(tx-fx)*0.14; fy+=(ty-fy)*0.14; floatEl.style.transform='translate('+fx+'px,'+fy+'px) translate(-50%,-50%)'+(floatEl.classList.contains('show')?' scale(1)':' scale(.6)'); requestAnimationFrame(floop); })();
    rows.forEach(function(r){
      r.addEventListener('mouseenter', function(){
        var src=r.getAttribute('data-img'); floatEl.classList.add('show');
        for(var k in imgs) imgs[k].classList.toggle('on', k===src);
      });
      r.addEventListener('mouseleave', function(){ floatEl.classList.remove('show'); });
    });
  }

  /* ---------- year ---------- */
  var y = document.getElementById('year'); if(y) y.textContent = new Date().getFullYear();

  function el(tag, cls){ var e=document.createElement(tag); if(cls) e.className=cls; return e; }
})();
