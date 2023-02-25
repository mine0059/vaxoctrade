"use strict";


// add event on element 

const addEventOnElement = function(elem, type, callback) {
    if (elem.length > 1) {
        for(i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback);
    }
}

// visibility toggle
const togglePassword = document.querySelector("[data-toggle-password]");
const password = document.querySelector("[data-password]");

const visibility = function() {
    if (password.type === 'password') {
        password.type = 'text';
    } else {
        password.type = 'password';
    }
}

addEventOnElement(togglePassword, 'click', visibility);

