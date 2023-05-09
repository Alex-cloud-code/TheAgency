const footerYearEl = document.querySelector('.footer__year');
let today = new Date();
let year = today.getFullYear();

footerYearEl.textContent = year;