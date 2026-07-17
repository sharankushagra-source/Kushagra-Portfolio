/* Strength stat overlay — reveals a facets-style card on hover, anchored to a screen edge so the skills stay visible */
(function(){
  'use strict';
  var DATA = {
    'UX Design':        { ey:'01', side:'left', stats:[ {f:'2M+', l:'users designed for on Factile'}, {f:'+22.5%', l:'new paid users'} ] },
    'Design Systems':   { ey:'02', side:'left',  stats:[ {f:'24', l:'components in one system'}, {f:'100+', l:'design tokens'} ] },
    'Problem Framing':  { ey:'03', side:'left', stats:[ {f:'23 → 15', l:'steps to onboard a seller'}, {f:'3', l:'roles mapped end-to-end'} ] },
    'Accessibility':    { ey:'04', side:'left',  stats:[ {f:'AA / AAA', l:'WCAG conformance across the product'} ] },
    'Rapid Execution':  { ey:'05', side:'left', stats:[ {f:'1,104', l:'screens across Vesta’s 3 roles'}, {f:'25+', l:'Vesta flows in 6 months'}, {f:'100+', l:'Factile screens'}, {f:'9+', l:'Factile flows'} ] },
    'Communication':    { ey:'06', side:'left',  stats:[ {f:'4', l:'juniors mentored'}, {f:'Eng · PM · Founders', l:'aligned around one shared “why”'} ] }
  };
  var modal = document.getElementById('skmodal');
  if(!modal) return;
  var ey = document.getElementById('skmodal-ey');
  var title = document.getElementById('skmodal-title');
  var grid = document.getElementById('skmodal-grid');
  var card = modal.querySelector('.skmodal__card');

  function open(name, sk){
    var d = DATA[name]; if(!d) return;
    ey.textContent = d.ey;
    title.textContent = name;
    grid.innerHTML = '';
    d.stats.forEach(function(s){
      var cell = document.createElement('div');
      cell.className = 'skstat' + (s.f.length > 12 ? ' skstat--wide' : '');
      var fig = document.createElement('span'); fig.className = 'skstat__fig'; fig.textContent = s.f;
      var lab = document.createElement('span'); lab.className = 'skstat__lab'; lab.textContent = s.l;
      cell.appendChild(fig); cell.appendChild(lab); grid.appendChild(cell);
    });
    modal.className = 'skmodal open skmodal--' + d.side;
    modal.setAttribute('aria-hidden','false');
    if(sk && card){
      var r = sk.getBoundingClientRect();
      var top = Math.min(Math.max(r.top - 20, 12), window.innerHeight - card.offsetHeight - 12);
      card.style.top = top + 'px';
    }
  }
  function close(){
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden','true');
  }

  document.querySelectorAll('.skill').forEach(function(sk){
    var t = sk.querySelector('.skill__t');
    if(!t) return;
    var name = t.textContent.trim();
    var svc = sk.closest('.svc');
    sk.addEventListener('mouseenter', function(){ open(name, sk); if(svc){ svc.classList.add('svc-dim'); sk.classList.add('is-active'); } });
    sk.addEventListener('mouseleave', function(){ close(); if(svc){ svc.classList.remove('svc-dim'); sk.classList.remove('is-active'); } });
  });
})();
