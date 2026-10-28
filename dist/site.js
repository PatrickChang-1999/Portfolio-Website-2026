/* Shared navigation and local clock; no layout or style changes. */
(() => {
  const island=document.querySelector('.nav-island');
  const menu=document.querySelector('.menu');
  const links=document.querySelector('.links');
  const clock=document.getElementById('local-time');
  function setMenu(open){
    island.classList.toggle('open',open);
    menu.setAttribute('aria-expanded',String(open));
    menu.setAttribute('aria-label',open?'Close menu':'Open menu');
    links.inert=!open;
    links.setAttribute('aria-hidden',String(!open));
  }
  menu.addEventListener('click',()=>setMenu(!island.classList.contains('open')));
  island.addEventListener('focusout',event=>{
    if(!island.contains(event.relatedTarget))setMenu(false);
  });
  links.addEventListener('click',e=>{if(e.target.closest('a'))setMenu(false)});
  document.addEventListener('click',e=>{if(!island.contains(e.target))setMenu(false)});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&island.classList.contains('open')){setMenu(false);menu.focus()}});
  function updateClock(){
    const now=new Date();
    clock.textContent=new Intl.DateTimeFormat('en-US',{timeZone:'America/Los_Angeles',hour:'numeric',minute:'2-digit',hour12:true}).format(now);
    clock.setAttribute('datetime',now.toISOString());
  }
  updateClock();
  setInterval(updateClock,30000);
  document.getElementById('year').textContent=new Date().getFullYear();
})();
