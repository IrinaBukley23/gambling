let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu_list');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})