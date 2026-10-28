/* Upload assets/profile/headshot.jpg to replace the initials after deployment. */
(() => {
  const frame = document.querySelector('[data-headshot-src]');
  const placeholder = frame?.querySelector('.portrait-placeholder');
  if (!placeholder) return;

  // Load off-screen so a missing or invalid file never shows a broken-image icon.
  const portrait = new Image();
  portrait.alt = 'Ting-Yu Chang';
  portrait.width = 800;
  portrait.height = 1000;
  portrait.decoding = 'async';
  portrait.addEventListener('load', () => {
    if (!portrait.naturalWidth) return;
    placeholder.replaceWith(portrait);
    frame.closest('figure')?.setAttribute('aria-label', 'Portrait of Ting-Yu Chang');
  }, { once: true });
  portrait.src = frame.dataset.headshotSrc;
})();
