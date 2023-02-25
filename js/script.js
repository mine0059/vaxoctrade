"use strict";


// add event on element

const addEventOnElem = function(elem, type, callback) {
    if (elem.length > 1) {
        for(let i = 0; i < elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
} 

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelector("[data-nav-toggler]");
const navLink = document.querySelectorAll("[ data-nav-link]");


// a trial code would be removed if it doesnt work well
// const activeHeaderNav = function() {
//     if (window.screenY == 0) {
//         header.classList.add('active');
//     } else {
//         header.classList.remove('active');
//     }
// }

// addEventOnElem(navToggler, 'click', activeHeaderNav);

const toggleNavbar = function() {
    navbar.classList.toggle('active');
    navToggler.classList.toggle('active');
    // header.classList.toggle('active');
    // navToggler.classList.toggle('activeC');
    document.body.classList.toggle('active');
}

addEventOnElem(navToggler, 'click', toggleNavbar);

const closeNavbar = function() {
    navToggler.classList.remove('active');
    navbar.classList.remove('active');
    // header.classList.remove('active');
    // navToggler.classList.remove('activeC');
    document.body.classList.remove('active');
}

addEventOnElem(navLink, 'click', closeNavbar);

// header

const header = document.querySelector("[data-header]");

const activeHeader = function() {
    if (window.scrollY >= 100) {
        header.classList.add('active');
        navToggler.classList.add('activeC');
    } else {
        header.classList.remove('active');
        navToggler.classList.remove('activeC');
    }
}

addEventOnElem(window, 'scroll', activeHeader);

// swiper

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    // spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });