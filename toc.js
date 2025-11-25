const tocButton = document.getElementById('toc-button');
const tocMenu = document.getElementById('toc-menu');

tocButton.addEventListener('click', (e) => {
  e.stopPropagation();
  tocMenu.classList.toggle('toc-hidden');
});

document.addEventListener('click', (e) => {
  if (!tocMenu.contains(e.target) && !tocButton.contains(e.target)) {
    tocMenu.classList.add('toc-hidden');
  }
});
