/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/burger.js":
/*!**********************************!*\
  !*** ./src/js/modules/burger.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const burger = () => {
   const trigger = document.querySelector('.burger__icon'),
         content = document.querySelector('.burger-content'),
         bg = document.querySelector('.wrapper');

   const changer = () => {
      content.classList.toggle('_active');
      trigger.classList.toggle('_active');
      bg.classList.toggle('wrapper-background');
   }

   trigger.addEventListener('click', () => {
      changer();

   });

   document.addEventListener('keyup', (event) => {
      if (event.code === 'Escape' && !content.classList.contains('_active')) {
         changer();
      }
   });

   document.addEventListener('click', (event) => {
      if (event.target === bg && bg.classList.contains('wrapper-background')) {
         changer();
      }
   });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modal = () => {
   const trigger = document.querySelectorAll('.modal-btn'),
         envir = document.querySelector('.modal'),
         content = document.querySelector('.modal__inner'),
         close = document.querySelector('.modal__close');

   const changer = () => {
      content.classList.toggle('_active');
      envir.classList.toggle('_active');
      document.body.classList.toggle('_lock');
   }

   trigger.forEach((elem) => {
      elem.addEventListener('click', () => {
         changer();
      });
   })

   close.addEventListener('click', () => {
      changer();
   });

   document.addEventListener('keyup', (event) => {
      if (event.code === 'Escape' && !content.classList.contains('_active')) {
         changer();
      }
   });

   envir.addEventListener('click', (event) => {
      if (event.target === envir) {
         changer();
      }
   });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import cards from "./cards"

function slider({container, cards, wrap, nextArr, prevArr}) {
   function nextSlide (value) {
      slideField.style.transform = `translateX(-${value}px)`
   }

   // Переменные
      // Слайдер - каруселька
         const items = document.querySelectorAll(cards),
               wrapper = document.querySelector(wrap),
               slideField = document.querySelector(container),
               width = window.getComputedStyle(wrapper).width,
               arrowNext = document.querySelector(nextArr),
               arrowPrev = document.querySelector(prevArr);


      // Тач слайдер
         let start = 0,
             move = 0,
             offset = 0,
             endTotal = 0,
             n = 1;
         

   slideField.style.width = 100 * items.length + '%';

   items.forEach(item => {
      item.style.width = width;
   });
   

   // Слайд вперед по клику стрелки
   arrowNext.addEventListener('click', () => {
      offset += +width.replace(/\D/g, '') - move;         
      if (offset >= +width.replace(/\D/g, '') * (items.length)) {
         offset = 0;
      }

      if (n === items.length) {
         n = 1;
      } else {
         n++;
      }
      nextSlide(offset);
      move = 0;
   });



   // Слайд назад по клику стрелки
   arrowPrev.addEventListener('click', () => {
      offset -= +width.replace(/\D/g, '') + move;
      if (offset < 0) {
         offset = +width.replace(/\D/g, '') * (items.length - 1);
      }

      if (n === 1) {
         n = items.length;
      } else {
         n--;
      }

      nextSlide(offset);
      move = 0;
   });



//_____________________________ Для компухтера ______________________


   // Событие нажать
   wrapper.addEventListener('mousedown', swipeMove);
   wrapper.addEventListener('touchstart', swipeMove);

   // Функция нажать
   function swipeMove (event) {
      event.preventDefault();
      endTotal = offset;

      // Чтобы избежать конфликта присваиваний, делаем проверку на мобилку
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
         start = event.touches[0].clientX;
      } else {
         start = event.clientX;
      }



      // Событие move
      wrapper.addEventListener('mousemove', moveFunc);
      wrapper.addEventListener('touchmove', moveFunc);


      // Функция move
      function moveFunc (event) {

         // Чтобы избежать конфликта присваиваний, делаем проверку на мобилку
         if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            move = start - event.touches[0].clientX;
         } else {
            move = start - event.clientX;
         }

         offset = move + endTotal;
         
         // Проверка выравнить слайд по центру при свайпе вправо  [коэффициент 2.5 - доля от ширины слайдера, при которой произойдет выравнивание]
         if ((move >= +width.replace(/\D/g, '') / 6)) {
            nextSlideE();
            move = 0;
         }

         // Проверка выравнить слайд по центру при свайпе влево   [коэффициент 2.5 - доля от ширины слайдера, при которой произойдет выравнивание]
         if (((Math.abs(move) >= +width.replace(/\D/g, '') / 6)) && (move < 0)) {
            prevSlideE();
            move = 0;
         }

         // Перемотка в начало
         if (offset > (+width.replace(/\D/g, '') * (items.length - 1)) + 120) {
            offset = 0;
         }

         // Перемотка в конец
         if (offset < -120) {
            offset = +width.replace(/\D/g, '') * (items.length - 1);
         }
         nextSlide(Math.abs(offset));
      }


      // Событие отжать
      window.addEventListener('mouseup', upFunc);
      window.addEventListener('touchend', upFunc);

      function upFunc() {
         wrapper.removeEventListener('mousemove', moveFunc);
         wrapper.removeEventListener('touchmove', moveFunc);
         // Запоминаем значение мува при отпускании мыши, чтобы при следующем клике значения ++
         endTotal = offset;
      }
 

      // Выравнить слайд по центру при свайпе вправо
      function nextSlideE () {
         // Останавливаем функцию слежения при выравнивании слайда по центру
         wrapper.removeEventListener('mousemove', moveFunc);
         wrapper.removeEventListener('touchmove', moveFunc);
         nextSlideEV ();
      }  

      // Выравнить слайд по центру при свайпе влево
      function prevSlideE () {
         // Останавливаем функцию слежения при выравнивании слайда по центру
         wrapper.removeEventListener('mousemove', moveFunc);
         wrapper.removeEventListener('touchmove', moveFunc);
         prevSlideEV ();
      }
   }


   // Выравнить слайд по центру при свайпе вправо
   function nextSlideEV() {
      offset = n * (+width.replace(/\D/g, ''));
      if (n === items.length) {
         n = 1;
      } else {
         n++;
      }
   }  

   // Выравнить слайд по центру при свайпе влево
   function prevSlideEV() {
      if (n === 1) {
         n = items.length;
      } else {
         n--;
      }
      offset = (n - 1) * (+width.replace(/\D/g, ''));
   }

};




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger */ "./src/js/modules/burger.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");






window.addEventListener('DOMContentLoaded', () => {
   (0,_modules_burger__WEBPACK_IMPORTED_MODULE_0__["default"])();
   (0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])();
   (0,_modules_slider__WEBPACK_IMPORTED_MODULE_2__["default"])({
      container: '.slider__items',
      cards: '.slider__item',
      wrap: '.slider__wrapper',
      nextArr: '.slider__arrow-right',
      prevArr: '.slider__arrow-left'
   });
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map