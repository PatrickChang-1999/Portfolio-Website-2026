/* Progressive enhancement: text stays visible without animation support. */
window.mountPortfolioMotion = function(root = document) {
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');
  const running=new Set();
  const targets=[];
  const groups=[
    '.hero .eyebrow,.hero h1,.hero-body,.hero-footer',
    '.page-intro h1,.page-intro p', '.home-work-head,.home-card',
    '.work-item', '.experience-row', '.workflow-steps>li', '.cap-table tr',
    '.about-grid .lead,.about-grid>div>p,.education-milestone', 'footer>.wrap'
  ];
  for(const selector of groups) root.querySelectorAll(selector).forEach((element,index)=>targets.push({element,delay:Math.min(index*65,195)}));
  let observer;
  function reveal(element,delay) {
    if(reduced.matches || !element.animate) return;
    const motion=element.animate([
      {opacity:0,transform:element.matches('tr')?'none':'translateY(10px)'},
      {opacity:1,transform:'none'}
    ],{duration:480,delay,easing:'cubic-bezier(.22,1,.36,1)',fill:'backwards'});
    running.add(motion);
    motion.onfinish=()=>running.delete(motion);
    motion.oncancel=()=>running.delete(motion);
  }
  if(!reduced.matches && 'IntersectionObserver' in window) {
    const delays=new Map(targets.map(item=>[item.element,item.delay]));
    observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(entry.isIntersecting){reveal(entry.target,delays.get(entry.target)||0);observer.unobserve(entry.target);}
    }),{threshold:0.06,rootMargin:'0px 0px -16px 0px'});
    targets.forEach(item=>observer.observe(item.element));
  }
  function cancelAll(){for(const motion of running)motion.cancel();}
  function preferenceChange(){if(reduced.matches){observer?.disconnect();cancelAll();}}
  function onFocus(event){for(const motion of running)if(motion.effect?.target?.contains(event.target))motion.finish();}
  root.addEventListener('focusin',onFocus);
  reduced.addEventListener('change',preferenceChange);
  return ()=>{observer?.disconnect();cancelAll();root.removeEventListener('focusin',onFocus);reduced.removeEventListener('change',preferenceChange);};
};
if(document.body.classList.contains('motion-enabled'))window.mountPortfolioMotion(document);
