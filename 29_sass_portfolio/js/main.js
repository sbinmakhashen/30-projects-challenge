const menuBtn = document.querySelector('.menu-btn');
const menuBurger = document.querySelector('.menu-btn-burger');

let isMenuOpen = false;

menuBtn.addEventListener('click', handleMenu);

function handleMenu() {
  if (!isMenuOpen) {
    menuBurger.classList.add('open');
    isMenuOpen = true;
  } else {
    menuBurger.classList.remove('open');
    isMenuOpen = false;
  }
}
