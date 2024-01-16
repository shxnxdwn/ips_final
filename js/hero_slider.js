"use strict";

const heroSlider = document.querySelector('.hero__slider');
const images = heroSlider.querySelectorAll('img');

const sliderActiveImage = 'img/hero/slider-active.svg';
const sliderInactiveImage = 'img/hero/slider-inactive.svg';

let count = 0;

const changeImages = () => {
    images.forEach((image) => {
        image.src = sliderInactiveImage;
    });
    images[count].src = sliderActiveImage;
    count = (count + 1) % images.length;
    setTimeout(changeImages, 4000);
};

changeImages();