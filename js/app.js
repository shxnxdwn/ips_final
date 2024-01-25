"use strict";

// Safari Mobile Height Fix

const setPopupHeight = () => {
    const popup = document.querySelector('.popup');
    const windowHeight = window.innerHeight;
    popup.style.height = `${windowHeight}px`;
};

window.addEventListener('DOMContentLoaded', setPopupHeight);
window.addEventListener('resize', setPopupHeight);
