const menu = document.querySelector('.navlinks');
const operateMenu = document.querySelector('.nav-operators');
const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');


operateMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    openMenu.classList.toggle('active');
    closeMenu.classList.toggle('active');
});