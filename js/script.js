// burger-menu

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__menu_list');
let menuBtns = document.querySelectorAll('.header__menu_btns');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    menuBtns.forEach(item => {
        item.classList.toggle('active');
    })
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

// blog animation
 
document.addEventListener('DOMContentLoaded', function() {
    let animItems = document.querySelectorAll('.anim-item');
    const windowAnim = document.querySelector('.main__blog_block');
    if(animItems.length > 0) {
        windowAnim.addEventListener('scroll', animOnScroll);
        function animOnScroll() {
            for(let i = 0; i < animItems.length; i++) {
                const animItem = animItems[i];
                const animItemHeight = animItem.offsetHeight - 50;
                const animItemOffset = offset(animItem).top;
                const animStart = 4;
                

                let animItemPoint = windowAnim.clientHeight - animItemHeight / animStart;
                if(animItemHeight > windowAnim.clientHeight) {
                    animItemPoint = windowAnim.clientHeight - windowAnim.clientHeight / animStart;
                }
                if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                    animItem.classList.add('_anime');
                } else {
                    animItem.classList.remove('_anime');

                }
            }
        }
        function offset(el) {
            const rect = el.getBoundingClientRect(),
            scrollLeft = windowAnim.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = windowAnim.pageYOffset || document.documentElement.scrollTop;

            return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
        }
        animOnScroll();
    }

    
});
