"use strict";

const burger = document.querySelector('.nav__burger-button');
const menu = document.querySelector('.nav__list');

burger.addEventListener('click', () => {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    document.body.classList.toggle('noScroll');
});






















