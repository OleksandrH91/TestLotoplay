const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    burger.classList.toggle('open'); // Анимирует иконку (крестик)
    nav.classList.toggle('open');    // Выдвигает само меню (из right: -100% в 0)
});
