const filterButton = document.getElementById('filter-button');
const filterMenu = document.querySelector('.filter-menu');

filterButton.addEventListener('click', () => {
  filterMenu.style.display = filterMenu.style.display === 'block' ? 'none' : 'block';
});

