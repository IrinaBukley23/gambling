// burger-menu

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu_list');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

// lang switcher

let langBtn = document.querySelector('.lang');
let langList = document.querySelector('.lang__list');
let lantItems = document.querySelectorAll('.lang__list-item span');

langBtn.addEventListener('click', () => {
    langList.classList.add('active');
});

lantItems.forEach(item => {
    item.parentElement.addEventListener('click', (e) => {
        langList.classList.remove('active');
        langBtn.innerHTML = `<img src="./img/icons/Union.png" alt="planet"> <span>${e.currentTarget.dataset.lang}</span>` ;
    })
})