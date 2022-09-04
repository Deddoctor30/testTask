'use strict';

import burger from "./modules/burger";
import modal from "./modules/modal";
import slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
   burger();
   modal();
   slider({
      container: '.slider__items',
      cards: '.slider__item',
      wrap: '.slider__wrapper',
      nextArr: '.slider__arrow-right',
      prevArr: '.slider__arrow-left'
   });
});
