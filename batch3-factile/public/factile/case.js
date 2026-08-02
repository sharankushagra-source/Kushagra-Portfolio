/* Factile scroll case study — interactions */
(function(){
  'use strict';
  /* progress bar */
  var fill=document.querySelector('.topbar .fill');
  function prog(){ var h=document.documentElement; var max=h.scrollHeight-h.clientHeight; fill.style.width=(max>0?(h.scrollTop/max*100):0)+'%'; }
  window.addEventListener('scroll',prog,{passive:true}); prog();

  /* reveal on scroll */
  var io=new IntersectionObserver(function(en){en.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.08});
  document.querySelectorAll('.rise').forEach(function(el){io.observe(el);});

  /* rails: debt (rail1) and section (rail2) — mutually exclusive, driven by one scroll fn */
  var rail=document.querySelector('.rail');
  var rail2=document.querySelector('.rail2');
  var railZone=document.querySelector('[data-railzone]');
  var closing=document.getElementById('closing');
  var layers=[].slice.call(document.querySelectorAll('[data-layer]'));
  var navs=[].slice.call(document.querySelectorAll('[data-nav]'));

  if(rail&&layers.length){
    var links=[].slice.call(rail.querySelectorAll('a'));
    var rio=new IntersectionObserver(function(en){en.forEach(function(e){
      if(e.isIntersecting){var id=e.target.getAttribute('data-layer');
        links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+id);});}
    });},{rootMargin:'-45% 0px -45% 0px'});
    layers.forEach(function(l){rio.observe(l);});
  }
  var links2=rail2?[].slice.call(rail2.querySelectorAll('a')):[];
  function activeNav(){
    if(!navs.length||!links2.length)return;
    var line=window.innerHeight*0.4,cur=null;
    navs.forEach(function(n){if(n.getBoundingClientRect().top<=line)cur=n.id;});
    links2.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+cur);});
  }

  function rails(){
    var vh=window.innerHeight;
    /* rail1: while the debt zone occupies the viewport center */
    var inZone=false;
    if(railZone){var z=railZone.getBoundingClientRect();inZone=z.top<vh*0.5&&z.bottom>vh*0.35;}
    /* rail2: debt zone scrolled above the 35% line, and not on the closing canvas */
    var onClosing=false;
    if(closing){var c=closing.getBoundingClientRect();onClosing=c.top<vh*0.6&&c.bottom>0;}
    var passed=railZone?railZone.getBoundingClientRect().bottom<vh*0.35:false;
    if(rail)rail.classList.toggle('show',inZone&&!onClosing);
    if(rail2)rail2.classList.toggle('show',passed&&!inZone&&!onClosing);
  }
  window.addEventListener('scroll',function(){rails();activeNav();},{passive:true});
  window.addEventListener('resize',function(){rails();activeNav();});rails();activeNav();

  /* before/after sliders */
  document.querySelectorAll('.ba').forEach(function(el){
    var after=el.querySelector('.after-lyr'),handle=el.querySelector('.handle'),aimg=after.querySelector('img');
    function size(){aimg.style.width=el.clientWidth+'px';}
    function set(px){var r=el.getBoundingClientRect();var p=Math.max(0,Math.min(1,(px-r.left)/r.width));after.style.width=(p*100)+'%';handle.style.left=(p*100)+'%';}
    var drag=false;
    function down(e){drag=true;set(e.touches?e.touches[0].clientX:e.clientX);e.preventDefault();}
    function move(e){if(!drag)return;set(e.touches?e.touches[0].clientX:e.clientX);if(e.cancelable)e.preventDefault();}
    function up(){drag=false;}
    el.addEventListener('mousedown',down);window.addEventListener('mousemove',move);window.addEventListener('mouseup',up);
    el.addEventListener('touchstart',down,{passive:false});window.addEventListener('touchmove',move,{passive:false});window.addEventListener('touchend',up);
    size();window.addEventListener('resize',size);
  });

  /* lightbox */
  var lb=document.getElementById('lightbox');
  if(lb){
    var lbimg=lb.querySelector('img');
    function open(src,alt){lbimg.src=src;lbimg.alt=alt||'';lb.classList.add('open');}
    function close(){lb.classList.remove('open');lbimg.removeAttribute('src');}
    document.querySelectorAll('.frame img,.annot img,.zc .zi img').forEach(function(im){
      im.addEventListener('click',function(e){e.stopPropagation();open(im.currentSrc||im.src,im.alt);});
    });
    lb.addEventListener('click',function(e){if(e.target===lb||e.target.closest('.lbx'))close();});
    document.addEventListener('keydown',function(e){if(e.key==='Escape'&&lb.classList.contains('open'))close();});
  }
})();
