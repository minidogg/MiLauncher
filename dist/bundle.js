/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/_index.html":
/*!*************************!*\
  !*** ./src/_index.html ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<body>\\r\\n    <head>\\r\\n        <meta charset=\\\"UTF-8\\\">\\r\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n        <title>Launcher</title>\\r\\n        <link rel=\\\"favicon\\\" href=\\\"https://ssl.gstatic.com/classroom/ic_product_classroom_32.png\\\">\\r\\n    </head>\\r\\n    <style id=\\\"style\\\"></style>\\r\\n\\r\\n    <form id=\\\"custom-url-form\\\"> \\r\\n        <input id=\\\"custom-url\\\" type=\\\"text\\\" placeholder=\\\"Custom URL (eg. https://hexbois.com)\\\">\\r\\n    </form>\\r\\n    <input id=\\\"search\\\" type=\\\"text\\\" placeholder=\\\"Search Games/Websites\\\">\\r\\n    <div id=\\\"games\\\"></div>\\r\\n\\r\\n</body>\");\n\n//# sourceURL=webpack://milauncher/./src/_index.html?");

/***/ }),

/***/ "./src/_no_chromium.html":
/*!*******************************!*\
  !*** ./src/_no_chromium.html ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"<body>\\r\\n    <head>\\r\\n        <meta charset=\\\"UTF-8\\\">\\r\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n        <title>Launcher Error</title>\\r\\n    \\r\\n    </head>\\r\\n    <style id=\\\"style\\\"></style>\\r\\n\\r\\n    <p>This launcher is currently only functional on Chromium based browsers.</p>\\r\\n\\r\\n</body>\");\n\n//# sourceURL=webpack://milauncher/./src/_no_chromium.html?");

/***/ }),

/***/ "./src/_style.css":
/*!************************!*\
  !*** ./src/_style.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (\"*{\\r\\n    font-family: Arial, Helvetica, sans-serif;\\r\\n    color:white;\\r\\n}\\r\\nbody{\\r\\n    background: rgb(35,0,129);\\r\\n    background: linear-gradient(167deg, rgba(35,0,129,1) 0%, rgba(181,0,255,1) 71%);\\r\\n    background-size: 100vmax 100vmax;\\r\\n}\\r\\n\\r\\n#games{\\r\\n    width:80vw;\\r\\n    height:92.5vh;\\r\\n    overflow-y: scroll;\\r\\n\\r\\n    margin:auto;\\r\\n    display: flex;\\r\\n    flex-wrap:wrap;\\r\\n    gap:10px;\\r\\n\\r\\n}\\r\\n\\r\\n.game{\\r\\n    width:100px;\\r\\n    height:fit-content;\\r\\n    background-color: gray;\\r\\n    padding: 5px;\\r\\n    border-radius: 5px;\\r\\n    border:6px darkslategray solid;\\r\\n    user-select: none;\\r\\n\\r\\n\\r\\n    transition: filter 0.2s ease-in-out;\\r\\n}\\r\\n.game img{\\r\\n    width:90%;\\r\\n    display: block;\\r\\n    margin:auto;\\r\\n}\\r\\n.game p{\\r\\n    text-align: center;\\r\\n    margin:1px 1px 4px 1px;\\r\\n    font-size:16px;\\r\\n    font-weight: bold;\\r\\n    width:100%;\\r\\n    word-break:normal;\\r\\n}\\r\\n\\r\\n.game:hover{\\r\\n    filter:brightness(120%);\\r\\n}\\r\\n\\r\\ninput[type=text]{\\r\\n    all:unset;\\r\\n    background-color: rgba(0,0,0,0.5);\\r\\n    padding:10px;\\r\\n    border-radius: 100vw;\\r\\n    height:15px;\\r\\n\\r\\n}\\r\\n#search{\\r\\n    display:block;\\r\\n    margin:5px auto;\\r\\n    width:50%;\\r\\n}\\r\\n#custom-url{\\r\\n    display:block;\\r\\n    margin:5px auto;\\r\\n    width:50%;\\r\\n}\\r\\n\");\n\n//# sourceURL=webpack://milauncher/./src/_style.css?");

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   version: () => (/* binding */ version)\n/* harmony export */ });\nconst version = \"1.0.0\"\n\n//# sourceURL=webpack://milauncher/./src/constants.js?");

/***/ }),

/***/ "./src/games.js":
/*!**********************!*\
  !*** ./src/games.js ***!
  \**********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppendAllGames: () => (/* binding */ AppendAllGames),\n/* harmony export */   Init: () => (/* binding */ Init)\n/* harmony export */ });\n/* harmony import */ var _launch_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launch.js */ \"./src/launch.js\");\n/* harmony import */ var _data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\n\r\n\r\n\r\nlet data = _data_json__WEBPACK_IMPORTED_MODULE_1__\r\nlet dataRemote = await (await fetch(\"https://minidogg.github.io/MiLauncher/src/data.json\")).json()\r\nif(dataRemote.game_data.length > data.game_data.length){\r\n    for(let dataRemoteGame of dataRemote.game_data){\r\n        if(!data.game_data.some(game=>game.link == dataRemoteGame.link)){\r\n            data.game_data.push(dataRemoteGame)\r\n        }\r\n    }\r\n}\r\n\r\nfunction CreateGameEl({name, link, img, standardBlank}){\r\n    let div = document.createElement(\"div\")\r\n    div.classList.add(\"game\")\r\n\r\n    let icon = document.createElement(\"img\")\r\n    icon.src = img\r\n    div.appendChild(icon)\r\n\r\n    let title = document.createElement(\"p\")\r\n    title.textContent = name\r\n    div.appendChild(title)\r\n\r\n    div.addEventListener(\"click\", ()=>{;(0,_launch_js__WEBPACK_IMPORTED_MODULE_0__.Launch)(link, standardBlank)})\r\n\r\n    return div\r\n}\r\n\r\n/** @type {HTMLDivElement} */\r\nlet gameDivEl;\r\nfunction Init(){\r\n    gameDivEl = document.querySelector(\"#games\")\r\n    InitSearch()\r\n}\r\n\r\n/** @type {HTMLInputElement} */\r\nlet searchInput;\r\nfunction InitSearch(){\r\n    searchInput = document.querySelector(\"#search\")\r\n    searchInput.addEventListener(\"change\", ()=>{\r\n        let query = searchInput.value.toLowerCase()\r\n        Array.from(gameDivEl.children).forEach(child=>{\r\n            child.style.display = child.querySelector(\"p\").textContent.toLowerCase().includes(query)?\"block\":\"none\"\r\n        })\r\n    })\r\n}\r\n\r\nfunction AppendAllGames(){\r\n    data.game_data.forEach(game=>{\r\n        let el = CreateGameEl(game)\r\n        gameDivEl.appendChild(el)\r\n    })\r\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://milauncher/./src/games.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(__webpack_module__, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_index.html */ \"./src/_index.html\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_style.css */ \"./src/_style.css\");\n/* harmony import */ var _no_chromium_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_no_chromium.html */ \"./src/_no_chromium.html\");\n/* harmony import */ var _constants_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.js */ \"./src/constants.js\");\n/* harmony import */ var _games_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./games.js */ \"./src/games.js\");\n/* harmony import */ var _launch_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./launch.js */ \"./src/launch.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_games_js__WEBPACK_IMPORTED_MODULE_4__]);\n_games_js__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet isChromium = !!window.chrome;\r\n\r\nwindow.addEventListener(\"beforeunload\", (ev)=>{\r\n    ev.returnValue = \"a\"\r\n    ev.preventDefault()\r\n    return \"aa\"\r\n})\r\n\r\ndocument.body.innerHTML = isChromium?_index_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"]:_no_chromium_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\r\ndocument.querySelector(\"#style\").innerHTML = _style_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\r\n\r\nif(isChromium){\r\n    _launch_js__WEBPACK_IMPORTED_MODULE_5__.Init()\r\n    _games_js__WEBPACK_IMPORTED_MODULE_4__.Init()\r\n    _games_js__WEBPACK_IMPORTED_MODULE_4__.AppendAllGames()\r\n}\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });\n\n//# sourceURL=webpack://milauncher/./src/index.js?");

/***/ }),

/***/ "./src/launch.js":
/*!***********************!*\
  !*** ./src/launch.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Init: () => (/* binding */ Init),\n/* harmony export */   Launch: () => (/* binding */ Launch)\n/* harmony export */ });\nfunction Launch(url, standardBlank=false){\r\n    let win = window.open(standardBlank?\"about:blank\":\"https://classroom.google.com\")\r\n    win.document.write(/*html*/`\r\n        <body style=\"margin:0;\">\r\n            <title>Home</title>\r\n\r\n            <embed src=\"https://hexbois.com\" style=\"width:100vw;height:100vh;\">\r\n\r\n            <script>\r\n            window.addEventListener(\"beforeunload\", (ev)=>{\r\n                ev.returnValue = \"a\"\r\n                ev.preventDefault()\r\n                return \"aa\"\r\n            })\r\n            </script>\r\n        </body>\r\n    `)\r\n    let icon = win.document.createElement(\"link\")\r\n    icon.rel = \"icon\"\r\n    icon.href = \"https://www.gstatic.com/classroom/ic_product_classroom_144.png\"\r\n    win.document.head.appendChild(icon);\r\n\r\n    win.document.querySelector(\"embed\").src = url\r\n}\r\n\r\n/** @type {HTMLFormElement} */\r\nlet customUrlForm;\r\n/** @type {HTMLInputElement} */\r\nlet customUrl;\r\nfunction Init(){\r\n    customUrlForm = document.querySelector(\"#custom-url-form\")\r\n    customUrl = document.querySelector(\"#custom-url\")\r\n    customUrlForm.addEventListener(\"submit\", LaunchCustomURL)\r\n}\r\nfunction LaunchCustomURL(ev){\r\n    ev.preventDefault()\r\n    Launch(customUrl.value)\r\n}\n\n//# sourceURL=webpack://milauncher/./src/launch.js?");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Cannot parse JSON: Bad control character in string literal in JSON at position 2889 (line 18 column 36) while parsing '{\\r\\n    \\\"game_data\\\":[\\r\\n        {\\\"name\\\": \\\"'\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\nError: Cannot parse JSON: Bad control character in string literal in JSON at position 2889 (line 18 column 36) while parsing '{\\r\\n    \\\"game_data\\\":[\\r\\n        {\\\"name\\\": \\\"'\\n    at JsonParser.parse (C:\\\\projects\\\\github\\\\MiLauncher\\\\node_modules\\\\webpack\\\\lib\\\\json\\\\JsonParser.js:54:10)\\n    at C:\\\\projects\\\\github\\\\MiLauncher\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:1310:19\\n    at processResult (C:\\\\projects\\\\github\\\\MiLauncher\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:939:11)\\n    at C:\\\\projects\\\\github\\\\MiLauncher\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:1037:5\\n    at C:\\\\projects\\\\github\\\\MiLauncher\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:407:3\\n    at iterateNormalLoaders (C:\\\\projects\\\\github\\\\MiLauncher\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:10)\\n    at C:\\\\projects\\\\github\\\\MiLauncher\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:224:4\\n    at C:\\\\projects\\\\github\\\\MiLauncher\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:991:15\\n    at Array.eval (eval at create (C:\\\\projects\\\\github\\\\MiLauncher\\\\node_modules\\\\tapable\\\\lib\\\\HookCodeFactory.js:33:10), <anonymous>:12:1)\\n    at runCallbacks (C:\\\\projects\\\\github\\\\MiLauncher\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:45:15)\");\n\n//# sourceURL=webpack://milauncher/./src/data.json?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
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