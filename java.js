let menuIcon = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');
