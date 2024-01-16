import Swiper from 'swiper';
import { Navigation, Autoplay } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Autoplay],
    navigation: {
        nextEl: ".projects__button_next",
        prevEl: ".projects__button_prev",
    },
    autoplay: {
        delay: 3000,
    },
});
