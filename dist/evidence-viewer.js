/* Shared case-study image viewer. Keep the background page in place. */
(() => {
  const slideDialog=document.querySelector('.slide-dialog');
  let slidePlaceholder=null;
  let activeSlideTrigger=null;
  document.querySelectorAll('.slide-frame .slide-open').forEach(button=>{
    button.addEventListener('click',()=>{
      if(slideDialog.open)return;
      activeSlideTrigger=button;
      const figure=button.closest('.slide-frame');
      // Reserve the figure's exact footprint while it lives in the dialog.
      const bounds=figure.getBoundingClientRect();
      const style=getComputedStyle(figure);
      slidePlaceholder=document.createElement('div');
      slidePlaceholder.setAttribute('aria-hidden','true');
      slidePlaceholder.style.height=bounds.height+'px';
      slidePlaceholder.style.margin=style.margin;
      slidePlaceholder.style.visibility='hidden';
      figure.before(slidePlaceholder);
      slideDialog.append(figure);
      slideDialog.showModal();
      figure.querySelector('.slide-close').focus();
    });
  });
  document.querySelectorAll('.slide-close').forEach(button=>button.addEventListener('click',()=>slideDialog.close()));
  slideDialog.addEventListener('click',event=>{if(event.target===slideDialog)slideDialog.close()});
  slideDialog.addEventListener('close',()=>{
    const figure=slideDialog.querySelector('.slide-frame');
    if(figure&&slidePlaceholder){slidePlaceholder.replaceWith(figure);slidePlaceholder=null;activeSlideTrigger?.focus();activeSlideTrigger=null}
  });
})();
