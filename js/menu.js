// menu.js
const btnMenu = document.getElementById('menu-btn');
const mainMenu = document.querySelector('nav.menu');

btnMenu.addEventListener('click', () => {
  mainMenu.classList.toggle('menu-visible');
});

// Ferme le menu quand on clique sur un lien (pour mobile)
mainMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainMenu.classList.remove('menu-visible');
  });
});
