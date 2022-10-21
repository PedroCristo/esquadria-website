
// LANDING PAGE NAVIGATION 
const openMenu = document.querySelector('.fa')
const closeMenu = document.querySelector('.fa-times')
const menuToggler = document.querySelector('.toggler')
const showCase = document.querySelector('.showcase')
const menu = document.querySelector('.menu')

const closeMenuMobile = document.querySelector('.fa-times-2')
const menuToggler2 = document.querySelector('.toggler-2')

menuToggler.addEventListener('click', () => {

    menuToggler.classList.toggle('active')
    closeMenu.classList.toggle('active')
    openMenu.classList.toggle('active')
    showCase.classList.toggle('active')
    menu.classList.toggle('active')
})

menuToggler2.addEventListener('click', () => {

    menuToggler.classList.toggle('active')
    closeMenu.classList.toggle('active')
    openMenu.classList.toggle('active')
    showCase.classList.toggle('active')
    menu.classList.toggle('active')
})

 //PRELOADER

 var loader = document.getElementById("preloader");

 window.addEventListener("load", function(){

   loader.style.display = "none";
 })



