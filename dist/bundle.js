/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_index.html":
/*!*************************!*\
  !*** ./src/_index.html ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<body>\\r\\n    <head>\\r\\n        <meta charset=\\\"UTF-8\\\">\\r\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n        <title>MiLauncher</title>\\r\\n    \\r\\n    </head>\\r\\n    <style id=\\\"style\\\"></style>\\r\\n    <h1 style=\\\"text-align: center;\\\">MiLauncher</h1>\\r\\n\\r\\n    <div id=\\\"games\\\">\\r\\n        <!-- <div class=\\\"game\\\"><img class=\\\"game-cover\\\" src=\\\"https://hexbois.com/img/logo-curved-large.png\\\"><p class=\\\"game-title\\\">Hexbois</p></div>\\r\\n        <div class=\\\"game\\\"><img class=\\\"game-cover\\\" src=\\\"https://voxorp.com/images/icon.png\\\"><p class=\\\"game-title\\\">Voxorp</p></div> -->\\r\\n\\r\\n    </div>\\r\\n</body>\");\n\n//# sourceURL=webpack://milauncher/./src/_index.html?");

/***/ }),

/***/ "./src/_style.css":
/*!************************!*\
  !*** ./src/_style.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"*{\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n    color:white;\\r\\n}\\r\\nbody{\\r\\n    background: rgb(35,0,129);\\r\\n    background: linear-gradient(167deg, rgba(35,0,129,1) 0%, rgba(181,0,255,1) 71%);\\r\\n    background-size: 100vmax 100vmax;\\r\\n}\\r\\n\\r\\n#games{\\r\\n    width:80vw;\\r\\n    height:92.5vh;\\r\\n    overflow-y: scroll;\\r\\n\\r\\n    margin:auto;\\r\\n    display: flex;\\r\\n    flex-wrap:wrap;\\r\\n    gap:10px;\\r\\n\\r\\n}\\r\\n\\r\\n.game{\\r\\n    width:100px;\\r\\n    height:fit-content;\\r\\n    background-color: gray;\\r\\n    padding: 5px;\\r\\n    border-radius: 5px;\\r\\n    border:6px darkslategray solid;\\r\\n    user-select: none;\\r\\n\\r\\n\\r\\n    transition: filter 0.2s ease-in-out;\\r\\n}\\r\\n.game img{\\r\\n    width:90%;\\r\\n    display: block;\\r\\n    margin:auto;\\r\\n}\\r\\n.game p{\\r\\n    text-align: center;\\r\\n    margin:1px 1px 4px 1px;\\r\\n    font-size:16px;\\r\\n    font-weight: bold;\\r\\n    width:100%;\\r\\n    word-break:normal;\\r\\n}\\r\\n\\r\\n.game:hover{\\r\\n    filter:brightness(120%);\\r\\n}\");\n\n//# sourceURL=webpack://milauncher/./src/_style.css?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   version: () => (/* binding */ version)\n/* harmony export */ });\nconst version = \"0.0.1\"\n\n//# sourceURL=webpack://milauncher/./src/constants.js?");

/***/ }),

/***/ "./src/games.js":
/*!**********************!*\
  !*** ./src/games.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppendAllGames: () => (/* binding */ AppendAllGames)\n/* harmony export */ });\n/* harmony import */ var _launch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launch.js */ \"./src/launch.js\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\n\r\n\r\n\r\n\r\nfunction CreateGameEl({name, link, img}){\r\n    let div = document.createElement(\"div\")\r\n    div.classList.add(\"game\")\r\n\r\n    let icon = document.createElement(\"img\")\r\n    icon.src = img\r\n    div.appendChild(icon)\r\n\r\n    let title = document.createElement(\"p\")\r\n    title.textContent = name\r\n    div.appendChild(title)\r\n\r\n    div.addEventListener(\"click\", ()=>{;(0,_launch_js__WEBPACK_IMPORTED_MODULE_0__.Launch)(link)})\r\n\r\n    return div\r\n}\r\n\r\nfunction AppendAllGames(){\r\n    const gameDivEl = document.querySelector(\"#games\")\r\n\r\n    console.log(_data_json__WEBPACK_IMPORTED_MODULE_1__.game_data)\r\n\r\n    _data_json__WEBPACK_IMPORTED_MODULE_1__.game_data.forEach(game=>{\r\n        console.log(game)\r\n        let el = CreateGameEl(game)\r\n        gameDivEl.appendChild(el)\r\n    })\r\n}\n\n//# sourceURL=webpack://milauncher/./src/games.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_index.html */ \"./src/_index.html\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_style.css */ \"./src/_style.css\");\n/* harmony import */ var _games_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games.js */ \"./src/games.js\");\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"%cMiLauncher \"+_constants_js__WEBPACK_IMPORTED_MODULE_0__.version, \"color:#ff00ff;font-size:25px;\")\r\n\r\ndocument.body.innerHTML = _index_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\ndocument.querySelector(\"#style\").innerHTML = _style_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\n\r\n_games_js__WEBPACK_IMPORTED_MODULE_3__.AppendAllGames()\n\n//# sourceURL=webpack://milauncher/./src/index.js?");

/***/ }),

/***/ "./src/launch.js":
/*!***********************!*\
  !*** ./src/launch.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Launch: () => (/* binding */ Launch)\n/* harmony export */ });\nfunction Launch(url){\r\n    let win = window.open(\"https://classroom.google.com\")\r\n    win.document.write(/*html*/`\r\n        <body style=\"margin:0;\">\r\n            <title>Home</title>\r\n\r\n            <embed src=\"https://hexbois.com\" style=\"width:100vw;height:100vh;\">\r\n\r\n            <script>\r\n            window.addEventListener(\"beforeunload\", (ev)=>{\r\n                ev.returnValue = \"a\"\r\n                ev.preventDefault()\r\n                return \"aa\"\r\n            })\r\n            </script>\r\n        </body>\r\n    `)\r\n    let icon = win.document.createElement(\"link\")\r\n    icon.rel = \"icon\"\r\n    icon.href = \"https://www.gstatic.com/classroom/ic_product_classroom_144.png\"\r\n    win.document.head.appendChild(icon);\r\n\r\n    win.document.querySelector(\"embed\").src = url\r\n}\n\n//# sourceURL=webpack://milauncher/./src/launch.js?");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"game_data\":[{\"name\":\"Hexbois\",\"link\":\"https://hexbois.com\",\"img\":\"https://hexbois.com/img/logo-curved-large.png\"},{\"name\":\"Voxorp\",\"link\":\"https://voxorp.com\",\"img\":\"https://voxorp.com/images/icon.png\"},{\"name\":\"Mindustry Classic\",\"link\":\"https://mindustry-classic-mirror.vercel.app/\",\"img\":\"https://mindustry-classic-mirror.vercel.app/assets/sprites/icon.png\"},{\"name\":\"Nettleweb\",\"link\":\"https://whitespider-dev.github.io/games\",\"img\":\"https://whitespider-dev.github.io/favicon.ico\"},{\"name\":\"Moto Road Rash 3D\",\"link\":\"https://webglmath.github.io/motoroadrash3d/\",\"img\":\"https://eggy-car.github.io/images/logo/motoroadrash3d.png\"},{\"name\":\"Eggy car\",\"link\":\"https://webglmath.github.io/eggy-car/\",\"img\":\"https://eggy-car.github.io/images/logo/eggy-car.png\"},{\"name\":\"Endless truck\",\"link\":\"https://webglmath.github.io/endless-truck/\",\"img\":\"https://eggy-car.github.io/images/logo/endless-truck.png\"},{\"name\":\"Drift Boss\",\"link\":\"https://webglmath.github.io/drift-boss/\",\"img\":\"https://eggy-car.github.io/images/logo/drift-boss.png\"},{\"name\":\"Drift Hunters\",\"link\":\"https://webglmath.github.io/drift-hunters/\",\"img\":\"https://eggy-car.github.io/images/logo/drift-hunters.png\"},{\"name\":\"Smash Karts\",\"link\":\"https://webglmath.github.io/smash-karts/\",\"img\":\"https://eggy-car.github.io/images/logo/smash-karts.png\"},{\"name\":\"Burnin Rubber 5 XS\",\"link\":\"https://webglmath.github.io/burnin-rubber-5-xs/\",\"img\":\"https://eggy-car.github.io/images/logo/burnin-rubber-5-xs.png\"},{\"name\":\"Jelly truck\",\"link\":\"https://webglmath.github.io/jelly-truck/\",\"img\":\"https://eggy-car.github.io/images/logo/jelly-truck.png\"},{\"name\":\"Madalin stunt cars 2\",\"link\":\"https://webglmath.github.io/madalin-stunt-cars-2/\",\"img\":\"https://eggy-car.github.io/images/logo/madalin-stunt-cars-2.png\"},{\"name\":\"Madalin stunt cars 3\",\"link\":\"https://webglmath.github.io/madalin-stunt-cars-3/\",\"img\":\"https://eggy-car.github.io/images/logo/madalin-stunt-cars-3.png\"},{\"name\":\"Car Rush\",\"link\":\"https://webglmath.github.io/car-rush/\",\"img\":\"https://eggy-car.github.io/images/logo/car-rush.png\"},{\"name\":\"Mad Truck Challenge Special\",\"link\":\"https://ubg77.github.io/edit/mad-truck-challenge-special/\",\"img\":\"https://eggy-car.github.io/images/logo/mad-truck-challenge-special.png\"},{\"name\":\"Extreme Car Parking!\",\"link\":\"https://ubg77.github.io/fix/extreme-car-parking/\",\"img\":\"https://eggy-car.github.io/images/logo/extreme-car-parking.png\"},{\"name\":\"Highway racer 3D\",\"link\":\"https://ubg77.github.io/edit/highway-racer-3d/\",\"img\":\"https://eggy-car.github.io/images/logo/highway-racer-3d.png\"},{\"name\":\"Soccar\",\"link\":\"https://ubg77.github.io/edit/soccar/\",\"img\":\"https://eggy-car.github.io/images/logo/soccar.png\"},{\"name\":\"Parking Fury 3D: Beach City\",\"link\":\"https://ubg77.github.io/fix/parking-fury-3d-beach-city/\",\"img\":\"https://eggy-car.github.io/images/logo/parking-fury-3d-beach-city.png\"},{\"name\":\"Sling Drift\",\"link\":\"https://ubg77.github.io/edit/sling-drift/\",\"img\":\"https://eggy-car.github.io/images/logo/sling-drift.png\"},{\"name\":\"Super Bike the Champion\",\"link\":\"https://ubg77.github.io/edit/super-bike-the-champion/\",\"img\":\"https://eggy-car.github.io/images/logo/super-bike-the-champion.png\"},{\"name\":\"Burnout Drift: Hilltop\",\"link\":\"https://ubg77.github.io/edit/burnout-drift-hilltop/\",\"img\":\"https://eggy-car.github.io/images/logo/burnout-drift-hilltop.png\"},{\"name\":\"City Rider\",\"link\":\"https://ubg77.github.io/edit/city-rider/\",\"img\":\"https://eggy-car.github.io/images/logo/city-rider.png\"},{\"name\":\"City Car Driving: Stunt Master\",\"link\":\"https://ubg77.github.io/edit/city-car-driving-stunt-master/\",\"img\":\"https://eggy-car.github.io/images/logo/city-car-driving-stunt-master.png\"},{\"name\":\"Demolition Derby Crash Racing\",\"link\":\"https://ubg77.github.io/edit/demolition-derby-crash-racing/\",\"img\":\"https://eggy-car.github.io/images/logo/demolition-derby-crash-racing.png\"},{\"name\":\"Flying Car Simulator\",\"link\":\"https://ubg77.github.io/edit/flying-car-simulator/\",\"img\":\"https://eggy-car.github.io/images/logo/flying-car-simulator.png\"},{\"name\":\"Fortride: Open World\",\"link\":\"https://ubg77.github.io/edit/fortride-open-world/\",\"img\":\"https://eggy-car.github.io/images/logo/fortride-open-world.png\"},{\"name\":\"Car Rocket\",\"link\":\"https://ubg77.github.io/edit/game13/\",\"img\":\"https://eggy-car.github.io/images/logo/rocket-soccer-derby.png\"},{\"name\":\"Stunt Car Challenge 3\",\"link\":\"https://ubg77.github.io/edit/stunt-car-challenge-3/\",\"img\":\"https://eggy-car.github.io/images/logo/stunt-car-challenge-3.png\"},{\"name\":\"Top Speed 3D\",\"link\":\"https://ubg77.github.io/edit/top-speed-3d/\",\"img\":\"https://eggy-car.github.io/images/logo/top-speed-3d.png\"},{\"name\":\"3D Car Simulator\",\"link\":\"https://ubg77.github.io/edit/3d-car-simulator/\",\"img\":\"https://eggy-car.github.io/images/logo/3d-car-simulator.png\"},{\"name\":\"3D Moto Simulator 2\",\"link\":\"https://ubg77.github.io/edit/3d-moto-simulator-2/\",\"img\":\"https://eggy-car.github.io/images/logo/3d-moto-simulator-2.png\"},{\"name\":\"Bike Trials Winter 2\",\"link\":\"https://ubg77.github.io/edit/bike-trials-winter-2/\",\"img\":\"https://eggy-car.github.io/images/logo/bike-trials-winter-2.png\"},{\"name\":\"Cars Thief\",\"link\":\"https://ubg77.github.io/edit/cars-thief/\",\"img\":\"https://eggy-car.github.io/images/logo/cars-thief.png\"},{\"name\":\"Car Drift Racers 2\",\"link\":\"https://ubg77.github.io/edit/car-drift-racers-2/\",\"img\":\"https://eggy-car.github.io/images/logo/car-drift-racers-2.png\"},{\"name\":\"Cartoon Mini Racing\",\"link\":\"https://ubg77.github.io/edit/cartoon-mini-racing/\",\"img\":\"https://eggy-car.github.io/images/logo/cartoon-mini-racing.png\"},{\"name\":\"Car Simulator Arena\",\"link\":\"https://ubg77.github.io/edit/car-simulator-arena/\",\"img\":\"https://eggy-car.github.io/images/logo/car-simulator-arena.png\"},{\"name\":\"Go Kart Go! Ultra!\",\"link\":\"https://ubg77.github.io/edit/go-kart-go-ultra/\",\"img\":\"https://eggy-car.github.io/images/logo/go-kart-go-ultra.png\"},{\"name\":\"Merge Cyber Racers\",\"link\":\"https://ubg77.github.io/edit/merge-cyber-racers/\",\"img\":\"https://eggy-car.github.io/images/logo/merge-cyber-racers.png\"},{\"name\":\"Merge Round Racers\",\"link\":\"https://ubg77.github.io/edit/merge-round-racers/\",\"img\":\"https://eggy-car.github.io/images/logo/merge-round-racers.png\"},{\"name\":\"Adventure Drivers\",\"link\":\"https://ubg77.github.io/game131022/adventure-drivers/\",\"img\":\"https://eggy-car.github.io/images/logo/adventure-drivers.png\"},{\"name\":\"Drive Game 1\",\"link\":\"https://ubg77.github.io/game131022/game1/\",\"img\":\"https://eggy-car.github.io/images/logo/drive-mad.png\"},{\"name\":\"Monster Car\",\"link\":\"https://webglmath.github.io/game3/\",\"img\":\"https://eggy-car.github.io/images/logo/monster-tracks.png\"}]}');\n\n//# sourceURL=webpack://milauncher/./src/data.json?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;