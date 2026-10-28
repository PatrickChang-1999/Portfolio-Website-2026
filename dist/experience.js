/* One-time graphic reveals; the page and links work without JavaScript. */
(() => {
  const targets=document.querySelectorAll('.career-flow,.career-entry');
  if(!('IntersectionObserver' in window))return;
  const observer=new IntersectionObserver(entries=>{
    for(const entry of entries){
      if(!entry.isIntersecting)continue;
      entry.target.classList.add(entry.target.matches('.career-flow')?'flow-visible':'role-visible');
      observer.unobserve(entry.target);
    }
  },{threshold:0.08});
  targets.forEach(target=>observer.observe(target));
})();
