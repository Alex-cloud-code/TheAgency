const footerYearEl = document.querySelector('.footer__year');
let today = new Date();
let year = today.getFullYear();

footerYearEl.textContent = year;

const burgerEl = document.querySelector('.burger-menu');
const menuEl = document.querySelector('.menu');
const headerEl = document.querySelector('.header_burger-style');
const linkEl = document.querySelector('.menu__link');
const closureEl = document.querySelector('.closure');

burgerEl.addEventListener('click', function () {
  menuEl.classList.add('menu_visible');
  closureEl.classList.add('closure_visible');
  burgerEl.classList.remove('burger-menu');
  headerEl.classList.remove('header_burger-style');
});

menuEl.addEventListener('click', function () {
    menuEl.classList.remove('menu_visible');
    closureEl.classList.remove('closure_visible');
    burgerEl.classList.add('burger-menu');
    headerEl.classList.add('header_burger-style');
});

const meetPersone = document.querySelector('.meet__person');
const meetPeople = document.querySelectorAll('.meet-peoples__persone');
  
meetPeople.forEach(miniImg=> {
    miniImg.addEventListener('click', function (event) {
      meetPersone.src = event.target.src;
    });    
});

const bioPerson1 = document.querySelector('.meet-info__bio-person-1');
const bioPerson2 = document.querySelector('.meet-info__bio-person-2');
const bioPerson3 = document.querySelector('.meet-info__bio-person-3');
const bioPerson4 = document.querySelector('.meet-info__bio-person-4');

const meetPerson1 = document.querySelector('.meet-persone-1');
const meetPerson2 = document.querySelector('.meet-persone-2');
const meetPerson3 = document.querySelector('.meet-persone-3');
const meetPerson4 = document.querySelector('.meet-persone-4');

meetPerson1.addEventListener('click', function () {
  bioPerson1.classList.remove('meet-info__invisible');
  bioPerson2.classList.remove('meet-info__visible');
  bioPerson3.classList.remove('meet-info__visible');
  bioPerson4.classList.remove('meet-info__visible');
});

meetPerson2.addEventListener('click', function () {
  bioPerson1.classList.add('meet-info__invisible');
  bioPerson2.classList.add('meet-info__visible');
  bioPerson3.classList.remove('meet-info__visible');
  bioPerson4.classList.remove('meet-info__visible');
});

meetPerson3.addEventListener('click', function () {
  bioPerson1.classList.add('meet-info__invisible');
  bioPerson2.classList.remove('meet-info__visible');
  bioPerson3.classList.add('meet-info__visible');
  bioPerson4.classList.remove('meet-info__visible');
});

meetPerson4.addEventListener('click', function () {
  bioPerson1.classList.add('meet-info__invisible');
  bioPerson2.classList.remove('meet-info__visible');
  bioPerson3.classList.remove('meet-info__visible');
  bioPerson4.classList.add('meet-info__visible');
});

const productsItem1 = document.querySelector('.products-items__item-1');
const productsItem2 = document.querySelector('.products-items__item-2');
const productsItem3 = document.querySelector('.products-items__item-3');
const productsItem4 = document.querySelector('.products-items__item-4');
const productsItem5 = document.querySelector('.products-items__item-5');
const productsItem6 = document.querySelector('.products-items__item-6');
const productsItem7 = document.querySelector('.products-items__item-7');
const productsItem8 = document.querySelector('.products-items__item-8');

const productslinks1 = document.querySelector('.products-links__filter-1');
const productslinks2 = document.querySelector('.products-links__filter-2');
const productslinks3 = document.querySelector('.products-links__filter-3');
const productslinks4 = document.querySelector('.products-links__filter-4');
const productslinks5 = document.querySelector('.products-links__filter-5');

productslinks1.addEventListener('click', function () {
  productslinks1.classList.add('products-links__filter_active');
  productslinks2.classList.remove('products-links__filter_active');
  productslinks3.classList.remove('products-links__filter_active');
  productslinks4.classList.remove('products-links__filter_active');
  productslinks5.classList.remove('products-links__filter_active');
  productsItem1.classList.remove('products-items__invisible');
  productsItem2.classList.remove('products-items__invisible');
  productsItem3.classList.remove('products-items__invisible');
  productsItem4.classList.remove('products-items__invisible');
  productsItem5.classList.remove('products-items__invisible');
  productsItem6.classList.remove('products-items__invisible');
  productsItem7.classList.remove('products-items__invisible');
  productsItem8.classList.remove('products-items__invisible');
});

productslinks2.addEventListener('click', function () {
  productslinks1.classList.remove('products-links__filter_active');
  productslinks2.classList.add('products-links__filter_active');
  productslinks3.classList.remove('products-links__filter_active');
  productslinks4.classList.remove('products-links__filter_active');
  productslinks5.classList.remove('products-links__filter_active');
  productsItem1.classList.remove('products-items__invisible');
  productsItem2.classList.add('products-items__invisible');
  productsItem3.classList.add('products-items__invisible');
  productsItem4.classList.remove('products-items__invisible');
  productsItem5.classList.add('products-items__invisible');
  productsItem6.classList.add('products-items__invisible');
  productsItem7.classList.add('products-items__invisible');
  productsItem8.classList.add('products-items__invisible');
});

productslinks3.addEventListener('click', function () {
  productslinks1.classList.remove('products-links__filter_active');
  productslinks2.classList.remove('products-links__filter_active');
  productslinks3.classList.add('products-links__filter_active');
  productslinks4.classList.remove('products-links__filter_active');
  productslinks5.classList.remove('products-links__filter_active');
  productsItem1.classList.add('products-items__invisible');
  productsItem2.classList.add('products-items__invisible');
  productsItem3.classList.remove('products-items__invisible');
  productsItem4.classList.add('products-items__invisible');
  productsItem5.classList.add('products-items__invisible');
  productsItem6.classList.remove('products-items__invisible');
  productsItem7.classList.add('products-items__invisible');
  productsItem8.classList.add('products-items__invisible');
});

productslinks4.addEventListener('click', function () {
  productslinks1.classList.remove('products-links__filter_active');
  productslinks2.classList.remove('products-links__filter_active');
  productslinks3.classList.remove('products-links__filter_active');
  productslinks4.classList.add('products-links__filter_active');
  productslinks5.classList.remove('products-links__filter_active');
  productsItem1.classList.add('products-items__invisible');
  productsItem2.classList.remove('products-items__invisible');
  productsItem3.classList.add('products-items__invisible');
  productsItem4.classList.add('products-items__invisible');
  productsItem5.classList.remove('products-items__invisible');
  productsItem6.classList.add('products-items__invisible');
  productsItem7.classList.add('products-items__invisible');
  productsItem8.classList.add('products-items__invisible');
});

productslinks5.addEventListener('click', function () {
  productslinks1.classList.remove('products-links__filter_active');
  productslinks2.classList.remove('products-links__filter_active');
  productslinks3.classList.remove('products-links__filter_active');
  productslinks4.classList.remove('products-links__filter_active');
  productslinks5.classList.add('products-links__filter_active');
  productsItem1.classList.add('products-items__invisible');
  productsItem2.classList.add('products-items__invisible');
  productsItem3.classList.add('products-items__invisible');
  productsItem4.classList.add('products-items__invisible');
  productsItem5.classList.add('products-items__invisible');
  productsItem6.classList.add('products-items__invisible');
  productsItem7.classList.remove('products-items__invisible');
  productsItem8.classList.remove('products-items__invisible');
});

const toTopBtn = document.querySelector(".to-top");
window.addEventListener("scroll", trackScroll);
toTopBtn.addEventListener("click", goTop);

function trackScroll() {
    const scrolled = window.scrollY;
  const coords = document.documentElement.clientHeight;
  if (scrolled > coords) {
    toTopBtn.classList.add("to-top_show");
  } else {
    toTopBtn.classList.remove("to-top_show");
  }
}

function goTop() {
  if (window.scrollY > 0) {
    window.scrollBy(0, -75);
    setTimeout(goTop, 0);
  }
}