"use strict";

const burger = document.querySelector('.nav__burger-button');
const menu = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');

    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = '';
    } else {
        document.body.style.overflow = 'hidden';
    }
});






















