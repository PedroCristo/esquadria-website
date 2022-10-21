//PRELOADER

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.style.display = "none";
});

//NAVBAR BACKGROUND COLOR CHANGES WHEN WE SCROLL

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(document).scrollTop() > 120) {
      $(".header")
        .css("background-color", "#fff")
        .css("margin-top", "-10px")
        .css("box-shadow", "1px 10px 10px -1px rgba(1, 1, 1, 0.5)");
      $(".header a").css("font-size", "1em").css({ color: "black" });
      $(".header .logo").css("width", "100px");
      $(".fa").css("color", "#111");
    } else {
      $(".header")
        .css("background-color", "transparent")
        .css("margin-top", "0px")
        .css("box-shadow", "none");
      $(".header a").css("font-size", "1em").css("color", "white");
      $(".header .logo").css("width", "135px");
      $(".fa").css("color", "#fff");
    }
  });
});

//JavaScript for responsive navigation menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelector(".navigation-items");

const openMenu = document.querySelector(".fa-bars");
const closeMenu = document.querySelector(".fa-times");
const navLink = document.querySelector(".nav-link");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");

  openMenu.classList.toggle("active");
  closeMenu.classList.toggle("active");
});

navigationItems.addEventListener("click", () => {
  navigation.classList.toggle("active");

  openMenu.classList.toggle("active");
  closeMenu.classList.toggle("active");
  navLink.classList.toggle("active");
});

// header slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

//PARALLAX

$(window).scroll(function () {
  parallax();
});
function parallax() {
  var wScroll = $(window).scrollTop();

  $(".parallax").css("background-position", "center " + wScroll * 0.6 + "px");

  $(".parallax-2").css("background-position", "center " + wScroll * 2 + "px");

  $(".parallax-box").css("top", -50 + wScroll * 0.1 + "em");
}

// REQUIRED RECAPTCHA
function submitUserForm() {
  var response = grecaptcha.getResponse();
  if (response.length == 0) {
    document.getElementById("g-recaptcha-error").innerHTML =
      '<span style="color:red;">Este campo é de preenchimento obrigatório.</span>';
    return false;
  }
  return true;
}

function verifyCaptcha() {
  document.getElementById("g-recaptcha-error").innerHTML = "";
}
