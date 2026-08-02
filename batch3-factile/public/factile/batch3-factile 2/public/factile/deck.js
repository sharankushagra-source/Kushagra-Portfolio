/* Factile case study deck — manual engine (no autoplay) */
(function(){
  'use strict';
  var canvas=document.querySelector('.canvas');
  var slides=Array.prototype.slice.call(document.querySelectorAll('.slide'));
  var n=slides.length;
  var i=0;
  var counter=document.querySelector('.counter');
  var fsBtn=document.querySelector('.ctrl.fs');
  var hint=document.querySelector('.hint');

  function fit(){ var s=Math.min(window.innerWidth/1920, window.innerHeight/1080); canvas.style.transform='scale('+s+')'; }
  window.addEventListener('resize',fit); fit();

  function render(){
    slides.forEach(function(sl,idx){ sl.classList.toggle('active',idx===i); });
    counter.textContent=String(i+1).padStart(2,'0')+' / '+String(n).padStart(2,'0');
  }
  function go(idx){ i=(idx+n)%n; render(); }
  function next(){ go(i+1); }
  function prev(){ go(i-1); }

  function toggleFs(){
    var el=document.documentElement;
    var rf=el.requestFullscreen||el.webkitRequestFullscreen||el.msRequestFullscreen;
    var xf=document.exitFullscreen||document.webkitExitFullscreen||document.msExitFullscreen;
    try{
      if(document.fullscreenElement||document.webkitFullscreenElement){ if(xf) xf.call(document); }
      else if(rf){ var r=rf.call(el); if(r&&r.catch) r.catch(function(){}); }
    }catch(e){}
  }

  /* before/after sliders */
  function initBA(el){
    var after=el.querySelector('.after-lyr');
    var handle=el.querySelector('.handle');
    var afterImg=after.querySelector('img');
    function sizeAfter(){ afterImg.style.width=el.clientWidth+'px'; }
    function set(px){ var r=el.getBoundingClientRect(); var pct=Math.max(0,Math.min(1,(px-r.left)/r.width)); after.style.width=(pct*100)+'%'; handle.style.left=(pct*100)+'%'; }
    var drag=false;
    function down(e){ drag=true; move(e); e.preventDefault(); e.stopPropagation(); }
    function move(e){ if(!drag)return; var x=(e.touches?e.touches[0].clientX:e.clientX); set(x); if(e.cancelable)e.preventDefault(); }
    function up(){ drag=false; }
    el.addEventListener('mousedown',down);
    window.addEventListener('mousemove',move); window.addEventListener('mouseup',up);
    el.addEventListener('touchstart',down,{passive:false}); window.addEventListener('touchmove',move,{passive:false}); window.addEventListener('touchend',up);
    sizeAfter(); window.addEventListener('resize',sizeAfter);
  }
  document.querySelectorAll('.ba').forEach(initBA);

  document.querySelector('.ctrl.prev').addEventListener('click',function(){ prev(); });
  document.querySelector('.ctrl.next').addEventListener('click',function(){ next(); });
  if(fsBtn) fsBtn.addEventListener('click',toggleFs);

  document.addEventListener('keydown',function(e){
    if(e.key==='ArrowRight'||e.key===' '){ e.preventDefault(); next(); }
    else if(e.key==='ArrowLeft'){ prev(); }
    else if(e.key.toLowerCase()==='f'){ e.preventDefault(); toggleFs(); }
    else if(e.key==='Home'){ go(0); }
    else if(e.key==='End'){ go(n-1); }
  });

  setTimeout(function(){ if(hint) hint.classList.add('hidden'); },6000);

  /* image lightbox — click any static image to magnify; backdrop / close / Esc dismiss */
  var lb=document.getElementById('lightbox');
  if(lb){
    var lbimg=lb.querySelector('img');
    function openLb(src,alt){ lbimg.src=src; lbimg.alt=alt||''; lb.classList.add('open'); }
    function closeLb(){ lb.classList.remove('open'); lbimg.removeAttribute('src'); }
    document.querySelectorAll('.imgframe img,.annot img,.callout .cimg img').forEach(function(im){
      im.addEventListener('click',function(e){ e.stopPropagation(); openLb(im.currentSrc||im.src, im.alt); });
    });
    lb.addEventListener('click',function(e){ if(e.target===lb||e.target.closest('.lbclose')) closeLb(); });
    document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&lb.classList.contains('open')) closeLb(); });
  }

  render();
})();
