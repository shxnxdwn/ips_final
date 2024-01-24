"use strict";

const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: ".projects__button_next",
        prevEl: ".projects__button_prev",
    },
    autoplay: {
        delay: 3000,
    },
});

const prevButton = document.querySelector('.projects__button_prev img');
const nextButton = document.querySelector('.projects__button_next img');

function updateButtonsState() {
    if (swiper.isBeginning) {
        prevButton.src = 'img/projects/arrow-left.svg';
    } else {
        prevButton.src = 'img/projects/arrow-left-active.svg';
    }

    if (swiper.isEnd) {
        nextButton.src = 'img/projects/arrow-right.svg';
    } else {
        nextButton.src = 'img/projects/arrow-right-active.svg';
    }
}

swiper.on('slideChange', () => {
    updateButtonsState();
});

swiper.on('reachEnd', () => {
    updateButtonsState();
});
