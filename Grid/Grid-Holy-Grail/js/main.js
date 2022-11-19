const d = document;

const toggle = d.getElementById('toggleMenu');

const toggleMenu = () => {
  const $outerGrid = d.querySelector('.outer-grid');
  $outerGrid.classList.toggle('outer-grid-expanded')
  const $nav = d.querySelector('nav');
  $nav.classList.toggle('hide-nav')
}

d.addEventListener('click', (e) => {
  if (e.target === toggle) {
    toggleMenu();
  }
});
