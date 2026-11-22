// Pathwisse prototype interactivity — client-side only, no backend, no real auth.
// Adds: real email capture, roadmap-switcher dropdown, avatar menu, locked-lesson
// modal, lesson mark-complete toggle, List/Grid and profile tab toggles.
(function(){
  function byId(id){ return document.getElementById(id); }
  function stop(e){ if(e){ if(e.stopPropagation) e.stopPropagation(); if(e.preventDefault) e.preventDefault(); } }

  function closePanel(id){ var el = byId(id); if(el) el.style.display = 'none'; }
  function openPanel(id, disp){ var el = byId(id); if(el) el.style.display = disp || 'block'; }
  function togglePanel(id, disp){
    var el = byId(id);
    if(!el) return;
    var hidden = window.getComputedStyle(el).display === 'none';
    el.style.display = hidden ? (disp || 'block') : 'none';
  }

  var PW = {
    toggleRoadmapDropdown: function(e){ stop(e); togglePanel('roadmapDropdown'); },
    closeRoadmapDropdown: function(e){ stop(e); closePanel('roadmapDropdown'); },
    toggleUserMenu: function(e){ stop(e); togglePanel('userDropdown'); },
    closeUserMenu: function(e){ stop(e); closePanel('userDropdown'); },
    openSigninModal: function(e){ stop(e); openPanel('signinModal', 'flex'); },
    closeSigninModal: function(e){ stop(e); closePanel('signinModal'); },

    signOut: function(){
      try{
        localStorage.removeItem('pw_auth');
        localStorage.removeItem('pw_pending_email');
        Object.keys(localStorage).forEach(function(k){
          if(k.indexOf('pw_lesson_') === 0) localStorage.removeItem(k);
        });
      }catch(e){}
      location.href = '01-welcome.html';
    },

    sendMagicLink: function(e, inputId){
      stop(e);
      try{
        var input = byId(inputId);
        var val = input && input.value ? input.value.trim() : '';
        if(val) localStorage.setItem('pw_pending_email', val);
      }catch(err){}
      location.href = '07-check-inbox.html';
    },

    useGoogle: function(e){
      stop(e);
      try{ localStorage.setItem('pw_pending_email', 'ada@college.edu'); }catch(err){}
      location.href = '09-signing-in.html';
    },

    toggleMarkComplete: function(){
      try{
        var done = localStorage.getItem('pw_lesson_0101_done') === '1';
        localStorage.setItem('pw_lesson_0101_done', done ? '0' : '1');
      }catch(e){}
      PW.renderMarkComplete();
    },

    renderMarkComplete: function(){
      var mark = byId('markCompleteMark');
      if(!mark) return;
      var done = false;
      try{ done = localStorage.getItem('pw_lesson_0101_done') === '1'; }catch(e){}
      if(done){
        mark.style.cssText = 'width:1rem;height:1rem;border-radius:50%;background:#1E9B5C;border:0.125rem solid #1E9B5C;display:flex;align-items:center;justify-content:center;color:#fff;font-size:0.625rem;font-weight:700;line-height:1';
        mark.textContent = '✓';
      } else {
        mark.style.cssText = 'width:1rem;height:1rem;border:0.125rem solid #CFCFD8;border-radius:50%';
        mark.textContent = '';
      }
    },

    selectTab: function(el){
      if(!el || !el.parentElement) return;
      var sibs = el.parentElement.children;
      for(var i=0;i<sibs.length;i++){ sibs[i].classList.remove('on'); }
      el.classList.add('on');
    }
  };

  document.addEventListener('click', function(){
    closePanel('roadmapDropdown');
    closePanel('userDropdown');
  });
  document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
      closePanel('roadmapDropdown');
      closePanel('userDropdown');
      closePanel('signinModal');
    }
  });
  document.addEventListener('DOMContentLoaded', function(){
    PW.renderMarkComplete();
  });

  window.PW = PW;
})();
