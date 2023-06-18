const footerYearEl = document.querySelector('.footer__year');
let today = new Date();
let year = today.getFullYear();

footerYearEl.textContent = year;

const burgerEl = document.querySelector('.burger-menu');
const menuEl = document.querySelector('.menu');
const headerEl = document.querySelector('.header_burger-style');
const linkEl = document.querySelector('.menu__link');

burgerEl.addEventListener('click', function () {
  menuEl.classList.add('menu_vivsible');
  burgerEl.classList.remove('burger-menu');
  headerEl.classList.remove('header_burger-style');
});

menuEl.addEventListener('click', function () {
    menuEl.classList.remove('menu_vivsible');
    burgerEl.classList.add('burger-menu');
    headerEl.classList.add('header_burger-style');
  });