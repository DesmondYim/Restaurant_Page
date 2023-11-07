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

function appendContent(item) {
    const content = document.querySelector('#content');
    return content.append(item);
}

function loadPage() {
    const nav = createNavBar();
    appendContent(nav);

    const restaurantPic = new Image();
    restaurantPic.src = './img/restaurant.jpg';
    appendContent(restaurantPic);

    const header = createHeader('Yim Fam Dining');
    appendContent(header);

    const description = createRestrDescription('Fresh and delicious food made by yours truly, Mama Yim');
    appendContent(description);

    const footer = createFooter('footer', 'Contact us now!');
    appendContent(footer);
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

// import Restaurant from "./img/restaurant.jpg";
// import Ramen from "./img/food_pic.jpg";

(0,_modules_load_page__WEBPACK_IMPORTED_MODULE_0__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxRQUFROzs7Ozs7VUM5R3ZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0EsOERBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvbW9kdWxlcy9sb2FkLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBNYWluUGljIGZyb20gJy4vaW1nL3Jlc3RhdXJhbnQuanBnJztcclxuLy8gaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG4vLyBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuLy8gICAgIGNvbnN0IHJlc3RhdXJhbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4vLyAgICAgcmVzdGF1cmFudEhlYWRlci5pZCA9IFwicmVzdGF1cmFudE5hbWVcIjtcclxuXHJcbi8vICAgICByZXN0YXVyYW50SGVhZGVyLmlubmVySFRNTCA9IFwiWWltIEZhbVwiO1xyXG5cclxuLy8gICAgIHJldHVybiByZXN0YXVyYW50SGVhZGVyO1xyXG4vLyB9XHJcblxyXG4vLyBmdW5jdGlvbiBhZGRSZXN0YXVyYW50UGljKCkge1xyXG4vLyAgICAgY29uc3QgcmVzdGF1cmFudFBpYyA9IG5ldyBJbWFnZSgpO1xyXG4vLyAgICAgcmVzdGF1cmFudFBpYy5jbGFzc0xpc3QgPSBcIm1haW5fcGljXCI7XHJcbi8vICAgICByZXN0YXVyYW50UGljLnNyYyA9IE1haW5QaWM7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlc3RhdXJhbnRQaWM7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZURlc2NyaXB0KCkge1xyXG4vLyAgICAgY29uc3QgcmVzdHJEZXNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4vLyAgICAgcmVzdHJEZXNjcmlwdC5jbGFzc0xpc3QgPSBcImRlc2NyaXB0aW9uXCI7XHJcblxyXG4vLyAgICAgcmVzdHJEZXNjcmlwdC5pbm5lckhUTUwgPSBcIldlbGNvbWUgdG8gWWltIEZhbSB3aGVyZSB3ZSBzZXJ2ZSB0aGUgYmVzdCBvZiBNYW1hIFlpbSdzIGhvbWVtYWRlIGNvb2tpbmchXCJcclxuXHJcbi8vICAgICByZXR1cm4gcmVzdHJEZXNjcmlwdDtcclxuLy8gfVxyXG5cclxuLy8gZnVuY3Rpb24gbG9hZEhvbWUoKSB7XHJcbi8vICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkUmVzdGF1cmFudFBpYygpKTtcclxuLy8gICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlRGVzY3JpcHQoKSk7XHJcbi8vIH1cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGxvYWRIb21lO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKHJlc3RhdXJhbnROYW1lKSB7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgaGVhZGVyLmlkID0gXCJyZXN0YXVyYW50X25hbWVcIlxyXG4gICAgaGVhZGVyLmlubmVySFRNTCA9IHJlc3RhdXJhbnROYW1lO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVJlc3RyRGVzY3JpcHRpb24oc3VtbWFyeSkge1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdCA9IFwicmVzdGF1cmFudF9kZXNjcmlwdGlvblwiO1xyXG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gc3VtbWFyeTtcclxuXHJcbiAgICByZXR1cm4gZGVzY3JpcHRpb247XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUJ0bihpZCwgdGV4dCkge1xyXG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBidG4uaWQgPSBpZDtcclxuICAgIGJ0bi5jbGFzc0xpc3QgPSBcIm5hdlRhYlwiO1xyXG4gICAgYnRuLmlubmVySFRNTCA9IHRleHQ7XHJcbiAgICByZXR1cm4gYnRuO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXZCYXIoKSB7XHJcbiAgICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdkJhci5pZCA9IFwibmF2XCI7XHJcblxyXG4gICAgY29uc3QgaG9tZUJ0biA9IGNyZWF0ZUJ0bignaG9tZScsICdIb21lJyk7XHJcbiAgICBjb25zdCBtZW51QnRuID0gY3JlYXRlQnRuKCdtZW51JywgJ01lbnUnKTtcclxuICAgIGNvbnN0IGNvbnRhY3RCdG4gPSBjcmVhdGVCdG4oJ2NvbnRhY3QnLCAnQ29udGFjdCBVcycpO1xyXG5cclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChob21lQnRuKTtcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChtZW51QnRuKTtcclxuICAgIG5hdkJhci5hcHBlbmRDaGlsZChjb250YWN0QnRuKTtcclxuICAgIHJldHVybiBuYXZCYXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcihpZCwgdGV4dCkge1xyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICBmb290ZXIuaWQgPSBpZDtcclxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGgzLmlubmVySFRNTCA9IHRleHQ7XHJcblxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGgzKTtcclxuICAgIHJldHVybiBmb290ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFwcGVuZENvbnRlbnQoaXRlbSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XHJcbiAgICByZXR1cm4gY29udGVudC5hcHBlbmQoaXRlbSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xyXG4gICAgY29uc3QgbmF2ID0gY3JlYXRlTmF2QmFyKCk7XHJcbiAgICBhcHBlbmRDb250ZW50KG5hdik7XHJcblxyXG4gICAgY29uc3QgcmVzdGF1cmFudFBpYyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcmVzdGF1cmFudFBpYy5zcmMgPSAnLi9pbWcvcmVzdGF1cmFudC5qcGcnO1xyXG4gICAgYXBwZW5kQ29udGVudChyZXN0YXVyYW50UGljKTtcclxuXHJcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoJ1lpbSBGYW0gRGluaW5nJyk7XHJcbiAgICBhcHBlbmRDb250ZW50KGhlYWRlcik7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBjcmVhdGVSZXN0ckRlc2NyaXB0aW9uKCdGcmVzaCBhbmQgZGVsaWNpb3VzIGZvb2QgbWFkZSBieSB5b3VycyB0cnVseSwgTWFtYSBZaW0nKTtcclxuICAgIGFwcGVuZENvbnRlbnQoZGVzY3JpcHRpb24pO1xyXG5cclxuICAgIGNvbnN0IGZvb3RlciA9IGNyZWF0ZUZvb3RlcignZm9vdGVyJywgJ0NvbnRhY3QgdXMgbm93IScpO1xyXG4gICAgYXBwZW5kQ29udGVudChmb290ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9tb2R1bGVzL2xvYWQtcGFnZVwiO1xyXG4vLyBpbXBvcnQgUmVzdGF1cmFudCBmcm9tIFwiLi9pbWcvcmVzdGF1cmFudC5qcGdcIjtcclxuLy8gaW1wb3J0IFJhbWVuIGZyb20gXCIuL2ltZy9mb29kX3BpYy5qcGdcIjtcclxuXHJcbmxvYWRQYWdlKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==