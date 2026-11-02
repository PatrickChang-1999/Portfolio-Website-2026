/* Keep old bookmarks working and hide explicit index filenames. */
(() => {
  const destination = document.currentScript?.dataset.redirect;
  if (destination) {
    location.replace(destination + location.search + location.hash);
    return;
  }
  if (location.pathname.endsWith('/index.html')) {
    location.replace('./' + location.search + location.hash);
  }
})();
