"use strict";

AOS.init({
    disable () {
      return document.documentElement.clientWidth < 1023;
    },
    offset: 300,
    delay: 100,
    once: true,
});

window.addEventListener('load', AOS.refresh);
