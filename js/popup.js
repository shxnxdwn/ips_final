"use strict";

const popup = document.querySelector('.popup');
const buttons = document.querySelectorAll('.button');

function openPopup(event) {
    event.preventDefault();
    popup.classList.toggle('popup-open');

    if (document.body.classList.contains('noScroll')) {
        document.body.classList.remove('noScroll');
    } else {
        setTimeout(() => {
            document.body.classList.add('noScroll');
        }, 500);
    }
}

for (let button of buttons) {
    button.addEventListener('click', openPopup);
}
