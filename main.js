const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-nav");
const triangle = document.querySelector('.triangle')

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    triangle.classList.toggle('active')
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}