/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/load-page.js":
/*!**********************************!*\
  !*** ./src/modules/load-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import MainPic from './img/restaurant.jpg';
// import './style.css';

// const content = document.querySelector('#content');

// function createHeader() {
//     const restaurantHeader = document.createElement('h1');
//     restaurantHeader.id = "restaurantName";

//     restaurantHeader.innerHTML = "Yim Fam";

//     return restaurantHeader;
// }

// function addRestaurantPic() {
//     const restaurantPic = new Image();
//     restaurantPic.classList = "main_pic";
//     restaurantPic.src = MainPic;

//     return restaurantPic;
// }

// function createDescript() {
//     const restrDescript = document.createElement('div');
//     restrDescript.classList = "description";

//     restrDescript.innerHTML = "Welcome to Yim Fam where we serve the best of Mama Yim's homemade cooking!"

//     return restrDescript;
// }

// function loadHome() {
//     content.appendChild(createHeader());
//     content.appendChild(addRestaurantPic());
//     content.appendChild(createDescript());
// }

// export default loadHome;

function createHeader(restaurantName) {
    const header = document.createElement('h1');
    header.id = "restaurant_name"
    header.innerHTML = restaurantName;

    return header;
}

function createRestrDescription(summary) {
    const description = document.createElement('div');
    description.classList = "restaurant_description";
    description.innerHTML = summary;

    return description;
}

function createBtn(id, text) {
    const btn = document.createElement('button');
    btn.id = id;
    btn.classList = "navTab";
    btn.innerHTML = text;
    return btn;
}

function createNavBar() {
    const navBar = document.createElement('nav');
    navBar.id = "nav";

    const homeBtn = createBtn('home', 'Home');
    const menuBtn = createBtn('menu', 'Menu');
    const contactBtn = createBtn('contact', 'Contact Us');

    navBar.appendChild(homeBtn);
    navBar.appendChild(menuBtn);
    navBar.appendChild(contactBtn);
    return navBar;
}

function createFooter(id, text) {
    const footer = document.createElement('footer');
    footer.id = id;
    const h3 = document.createElement('h3');
    h3.innerHTML = text;

    footer.appendChild(h3);
    return footer;
}

function loadPage() {
    createNavBar();
    createHeader('Yim Fam Dining');
    createRestrDescription('Fresh and delicious food made by yours truly, Mama Yim');
    createFooter('footer', 'Contact us now!');
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_load_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/load-page */ "./src/modules/load-page.js");


(0,_modules_load_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsUUFBUTs7Ozs7O1VDOUZ2QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjJDO0FBQzNDO0FBQ0EsOERBQVEsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9tb2R1bGVzL2xvYWQtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IE1haW5QaWMgZnJvbSAnLi9pbWcvcmVzdGF1cmFudC5qcGcnO1xyXG4vLyBpbXBvcnQgJy4vc3R5bGUuY3NzJztcclxuXHJcbi8vIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4vLyAgICAgY29uc3QgcmVzdGF1cmFudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbi8vICAgICByZXN0YXVyYW50SGVhZGVyLmlkID0gXCJyZXN0YXVyYW50TmFtZVwiO1xyXG5cclxuLy8gICAgIHJlc3RhdXJhbnRIZWFkZXIuaW5uZXJIVE1MID0gXCJZaW0gRmFtXCI7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlc3RhdXJhbnRIZWFkZXI7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGFkZFJlc3RhdXJhbnRQaWMoKSB7XHJcbi8vICAgICBjb25zdCByZXN0YXVyYW50UGljID0gbmV3IEltYWdlKCk7XHJcbi8vICAgICByZXN0YXVyYW50UGljLmNsYXNzTGlzdCA9IFwibWFpbl9waWNcIjtcclxuLy8gICAgIHJlc3RhdXJhbnRQaWMuc3JjID0gTWFpblBpYztcclxuXHJcbi8vICAgICByZXR1cm4gcmVzdGF1cmFudFBpYztcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlRGVzY3JpcHQoKSB7XHJcbi8vICAgICBjb25zdCByZXN0ckRlc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbi8vICAgICByZXN0ckRlc2NyaXB0LmNsYXNzTGlzdCA9IFwiZGVzY3JpcHRpb25cIjtcclxuXHJcbi8vICAgICByZXN0ckRlc2NyaXB0LmlubmVySFRNTCA9IFwiV2VsY29tZSB0byBZaW0gRmFtIHdoZXJlIHdlIHNlcnZlIHRoZSBiZXN0IG9mIE1hbWEgWWltJ3MgaG9tZW1hZGUgY29va2luZyFcIlxyXG5cclxuLy8gICAgIHJldHVybiByZXN0ckRlc2NyaXB0O1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBsb2FkSG9tZSgpIHtcclxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChhZGRSZXN0YXVyYW50UGljKCkpO1xyXG4vLyAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVEZXNjcmlwdCgpKTtcclxuLy8gfVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgbG9hZEhvbWU7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIocmVzdGF1cmFudE5hbWUpIHtcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoZWFkZXIuaWQgPSBcInJlc3RhdXJhbnRfbmFtZVwiXHJcbiAgICBoZWFkZXIuaW5uZXJIVE1MID0gcmVzdGF1cmFudE5hbWU7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUmVzdHJEZXNjcmlwdGlvbihzdW1tYXJ5KSB7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0ID0gXCJyZXN0YXVyYW50X2Rlc2NyaXB0aW9uXCI7XHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBzdW1tYXJ5O1xyXG5cclxuICAgIHJldHVybiBkZXNjcmlwdGlvbjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQnRuKGlkLCB0ZXh0KSB7XHJcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGJ0bi5pZCA9IGlkO1xyXG4gICAgYnRuLmNsYXNzTGlzdCA9IFwibmF2VGFiXCI7XHJcbiAgICBidG4uaW5uZXJIVE1MID0gdGV4dDtcclxuICAgIHJldHVybiBidG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcclxuICAgIGNvbnN0IG5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2QmFyLmlkID0gXCJuYXZcIjtcclxuXHJcbiAgICBjb25zdCBob21lQnRuID0gY3JlYXRlQnRuKCdob21lJywgJ0hvbWUnKTtcclxuICAgIGNvbnN0IG1lbnVCdG4gPSBjcmVhdGVCdG4oJ21lbnUnLCAnTWVudScpO1xyXG4gICAgY29uc3QgY29udGFjdEJ0biA9IGNyZWF0ZUJ0bignY29udGFjdCcsICdDb250YWN0IFVzJyk7XHJcblxyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGhvbWVCdG4pO1xyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKG1lbnVCdG4pO1xyXG4gICAgbmF2QmFyLmFwcGVuZENoaWxkKGNvbnRhY3RCdG4pO1xyXG4gICAgcmV0dXJuIG5hdkJhcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKGlkLCB0ZXh0KSB7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIGZvb3Rlci5pZCA9IGlkO1xyXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaDMuaW5uZXJIVE1MID0gdGV4dDtcclxuXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoaDMpO1xyXG4gICAgcmV0dXJuIGZvb3RlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XHJcbiAgICBjcmVhdGVOYXZCYXIoKTtcclxuICAgIGNyZWF0ZUhlYWRlcignWWltIEZhbSBEaW5pbmcnKTtcclxuICAgIGNyZWF0ZVJlc3RyRGVzY3JpcHRpb24oJ0ZyZXNoIGFuZCBkZWxpY2lvdXMgZm9vZCBtYWRlIGJ5IHlvdXJzIHRydWx5LCBNYW1hIFlpbScpO1xyXG4gICAgY3JlYXRlRm9vdGVyKCdmb290ZXInLCAnQ29udGFjdCB1cyBub3chJyk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRQYWdlOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGxvYWRQYWdlIGZyb20gXCIuL21vZHVsZXMvbG9hZC1wYWdlXCI7XHJcblxyXG5sb2FkUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==