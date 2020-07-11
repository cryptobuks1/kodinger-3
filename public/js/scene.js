/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/plyr/dist/plyr.css":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/plyr/dist/plyr.css ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@keyframes plyr-progress{\n  to{\n    background-position:25px 0\n  }\n}\n\n@keyframes plyr-popup{\n  0%{\n    opacity:.5;\n    transform:translateY(10px)\n  }\n\n  to{\n    opacity:1;\n    transform:translateY(0)\n  }\n}\n\n@keyframes plyr-fade-in{\n  from{\n    opacity:0\n  }\n\n  to{\n    opacity:1\n  }\n}\n\n.plyr{\n  -moz-osx-font-smoothing:auto;\n  -webkit-font-smoothing:subpixel-antialiased;\n  align-items:center;\n  direction:ltr;\n  display:flex;\n  flex-direction:column;\n  font-family:Avenir,\"Avenir Next\",\"Helvetica Neue\",\"Segoe UI\",Helvetica,Arial,sans-serif;\n  font-variant-numeric:tabular-nums;\n  font-weight:500;\n  height:100%;\n  line-height:1.7;\n  max-width:100%;\n  min-width:200px;\n  position:relative;\n  text-shadow:none;\n  transition:box-shadow .3s ease;\n  z-index:0\n}\n\n.plyr audio,.plyr iframe,.plyr video{\n  display:block;\n  height:100%;\n  width:100%\n}\n\n.plyr button{\n  font:inherit;\n  line-height:inherit;\n  width:auto\n}\n\n.plyr:focus{\n  outline:0\n}\n\n.plyr--full-ui{\n  box-sizing:border-box\n}\n\n.plyr--full-ui *,.plyr--full-ui ::after,.plyr--full-ui ::before{\n  box-sizing:inherit\n}\n\n.plyr--full-ui a,.plyr--full-ui button,.plyr--full-ui input,.plyr--full-ui label{\n  touch-action:manipulation\n}\n\n.plyr__badge{\n  background:#4a5764;\n  border-radius:2px;\n  color:#fff;\n  font-size:9px;\n  line-height:1;\n  padding:3px 4px\n}\n\n.plyr--full-ui ::-webkit-media-text-track-container{\n  display:none\n}\n\n.plyr__captions{\n  animation:plyr-fade-in .3s ease;\n  bottom:0;\n  color:#fff;\n  display:none;\n  font-size:14px;\n  left:0;\n  padding:10px;\n  position:absolute;\n  text-align:center;\n  transition:transform .4s ease-in-out;\n  width:100%\n}\n\n.plyr__captions .plyr__caption{\n  background:rgba(0,0,0,.8);\n  border-radius:2px;\n  -webkit-box-decoration-break:clone;\n  box-decoration-break:clone;\n  line-height:185%;\n  padding:.2em .5em;\n  white-space:pre-wrap\n}\n\n.plyr__captions .plyr__caption div{\n  display:inline\n}\n\n.plyr__captions span:empty{\n  display:none\n}\n\n@media (min-width:480px){\n  .plyr__captions{\n    font-size:16px;\n    padding:20px\n  }\n}\n\n@media (min-width:768px){\n  .plyr__captions{\n    font-size:18px\n  }\n}\n\n.plyr--captions-active .plyr__captions{\n  display:block\n}\n\n.plyr:not(.plyr--hide-controls) .plyr__controls:not(:empty)~.plyr__captions{\n  transform:translateY(-40px)\n}\n\n.plyr__control{\n  background:0 0;\n  border:0;\n  border-radius:3px;\n  color:inherit;\n  cursor:pointer;\n  flex-shrink:0;\n  overflow:visible;\n  padding:7px;\n  position:relative;\n  transition:all .3s ease\n}\n\n.plyr__control svg{\n  display:block;\n  fill:currentColor;\n  height:18px;\n  pointer-events:none;\n  width:18px\n}\n\n.plyr__control:focus{\n  outline:0\n}\n\n.plyr__control.plyr__tab-focus{\n  box-shadow:0 0 0 5px rgba(0,179,255,.5);\n  outline:0\n}\n\na.plyr__control{\n  text-decoration:none\n}\n\na.plyr__control::after,a.plyr__control::before{\n  display:none\n}\n\n.plyr__control.plyr__control--pressed .icon--not-pressed,.plyr__control.plyr__control--pressed .label--not-pressed,.plyr__control:not(.plyr__control--pressed) .icon--pressed,.plyr__control:not(.plyr__control--pressed) .label--pressed{\n  display:none\n}\n\n.plyr--full-ui ::-webkit-media-controls{\n  display:none\n}\n\n.plyr__controls{\n  align-items:center;\n  display:flex;\n  justify-content:flex-end;\n  text-align:center\n}\n\n.plyr__controls .plyr__progress__container{\n  flex:1;\n  min-width:0\n}\n\n.plyr__controls .plyr__controls__item{\n  margin-left:2.5px\n}\n\n.plyr__controls .plyr__controls__item:first-child{\n  margin-left:0;\n  margin-right:auto\n}\n\n.plyr__controls .plyr__controls__item.plyr__progress__container{\n  padding-left:2.5px\n}\n\n.plyr__controls .plyr__controls__item.plyr__time{\n  padding:0 5px\n}\n\n.plyr__controls .plyr__controls__item.plyr__progress__container:first-child,.plyr__controls .plyr__controls__item.plyr__time+.plyr__time,.plyr__controls .plyr__controls__item.plyr__time:first-child{\n  padding-left:0\n}\n\n.plyr__controls:empty{\n  display:none\n}\n\n.plyr [data-plyr=airplay],.plyr [data-plyr=captions],.plyr [data-plyr=fullscreen],.plyr [data-plyr=pip]{\n  display:none\n}\n\n.plyr--airplay-supported [data-plyr=airplay],.plyr--captions-enabled [data-plyr=captions],.plyr--fullscreen-enabled [data-plyr=fullscreen],.plyr--pip-supported [data-plyr=pip]{\n  display:inline-block\n}\n\n.plyr__menu{\n  display:flex;\n  position:relative\n}\n\n.plyr__menu .plyr__control svg{\n  transition:transform .3s ease\n}\n\n.plyr__menu .plyr__control[aria-expanded=true] svg{\n  transform:rotate(90deg)\n}\n\n.plyr__menu .plyr__control[aria-expanded=true] .plyr__tooltip{\n  display:none\n}\n\n.plyr__menu__container{\n  animation:plyr-popup .2s ease;\n  background:rgba(255,255,255,.9);\n  border-radius:4px;\n  bottom:100%;\n  box-shadow:0 1px 2px rgba(0,0,0,.15);\n  color:#4a5764;\n  font-size:16px;\n  margin-bottom:10px;\n  position:absolute;\n  right:-3px;\n  text-align:left;\n  white-space:nowrap;\n  z-index:3\n}\n\n.plyr__menu__container>div{\n  overflow:hidden;\n  transition:height .35s cubic-bezier(.4,0,.2,1),width .35s cubic-bezier(.4,0,.2,1)\n}\n\n.plyr__menu__container::after{\n  border:4px solid transparent;\n  border-top-color:rgba(255,255,255,.9);\n  content:'';\n  height:0;\n  position:absolute;\n  right:15px;\n  top:100%;\n  width:0\n}\n\n.plyr__menu__container [role=menu]{\n  padding:7px\n}\n\n.plyr__menu__container [role=menuitem],.plyr__menu__container [role=menuitemradio]{\n  margin-top:2px\n}\n\n.plyr__menu__container [role=menuitem]:first-child,.plyr__menu__container [role=menuitemradio]:first-child{\n  margin-top:0\n}\n\n.plyr__menu__container .plyr__control{\n  align-items:center;\n  color:#4a5764;\n  display:flex;\n  font-size:14px;\n  padding:4px 11px;\n  -webkit-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  width:100%\n}\n\n.plyr__menu__container .plyr__control>span{\n  align-items:inherit;\n  display:flex;\n  width:100%\n}\n\n.plyr__menu__container .plyr__control::after{\n  border:4px solid transparent;\n  content:'';\n  position:absolute;\n  top:50%;\n  transform:translateY(-50%)\n}\n\n.plyr__menu__container .plyr__control--forward{\n  padding-right:28px\n}\n\n.plyr__menu__container .plyr__control--forward::after{\n  border-left-color:rgba(74,87,100,.8);\n  right:5px\n}\n\n.plyr__menu__container .plyr__control--forward.plyr__tab-focus::after,.plyr__menu__container .plyr__control--forward:hover::after{\n  border-left-color:currentColor\n}\n\n.plyr__menu__container .plyr__control--back{\n  font-weight:500;\n  margin:7px;\n  margin-bottom:3px;\n  padding-left:28px;\n  position:relative;\n  width:calc(100% - 14px)\n}\n\n.plyr__menu__container .plyr__control--back::after{\n  border-right-color:rgba(74,87,100,.8);\n  left:7px\n}\n\n.plyr__menu__container .plyr__control--back::before{\n  background:rgba(114,133,151,.2);\n  box-shadow:0 1px 0 #fff;\n  content:'';\n  height:1px;\n  left:0;\n  margin-top:4px;\n  overflow:hidden;\n  position:absolute;\n  right:0;\n  top:100%\n}\n\n.plyr__menu__container .plyr__control--back.plyr__tab-focus::after,.plyr__menu__container .plyr__control--back:hover::after{\n  border-right-color:currentColor\n}\n\n.plyr__menu__container .plyr__control[role=menuitemradio]{\n  padding-left:7px\n}\n\n.plyr__menu__container .plyr__control[role=menuitemradio]::after,.plyr__menu__container .plyr__control[role=menuitemradio]::before{\n  border-radius:100%\n}\n\n.plyr__menu__container .plyr__control[role=menuitemradio]::before{\n  background:rgba(0,0,0,.1);\n  content:'';\n  display:block;\n  flex-shrink:0;\n  height:16px;\n  margin-right:10px;\n  transition:all .3s ease;\n  width:16px\n}\n\n.plyr__menu__container .plyr__control[role=menuitemradio]::after{\n  background:#fff;\n  border:0;\n  height:6px;\n  left:12px;\n  opacity:0;\n  top:50%;\n  transform:translateY(-50%) scale(0);\n  transition:transform .3s ease,opacity .3s ease;\n  width:6px\n}\n\n.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::before{\n  background:#00b3ff\n}\n\n.plyr__menu__container .plyr__control[role=menuitemradio][aria-checked=true]::after{\n  opacity:1;\n  transform:translateY(-50%) scale(1)\n}\n\n.plyr__menu__container .plyr__control[role=menuitemradio].plyr__tab-focus::before,.plyr__menu__container .plyr__control[role=menuitemradio]:hover::before{\n  background:rgba(0,0,0,.1)\n}\n\n.plyr__menu__container .plyr__menu__value{\n  align-items:center;\n  display:flex;\n  margin-left:auto;\n  margin-right:-5px;\n  overflow:hidden;\n  padding-left:25px;\n  pointer-events:none\n}\n\n.plyr--full-ui input[type=range]{\n  -webkit-appearance:none;\n  background:0 0;\n  border:0;\n  border-radius:26px;\n  color:#00b3ff;\n  display:block;\n  height:19px;\n  margin:0;\n  padding:0;\n  transition:box-shadow .3s ease;\n  width:100%\n}\n\n.plyr--full-ui input[type=range]::-webkit-slider-runnable-track{\n  background:0 0;\n  border:0;\n  border-radius:2.5px;\n  height:5px;\n  -webkit-transition:box-shadow .3s ease;\n  transition:box-shadow .3s ease;\n  -webkit-user-select:none;\n  user-select:none;\n  background-image:linear-gradient(to right,currentColor var(--value,0),transparent var(--value,0))\n}\n\n.plyr--full-ui input[type=range]::-webkit-slider-thumb{\n  background:#fff;\n  border:0;\n  border-radius:100%;\n  box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2);\n  height:13px;\n  position:relative;\n  -webkit-transition:all .2s ease;\n  transition:all .2s ease;\n  width:13px;\n  -webkit-appearance:none;\n  margin-top:-4px\n}\n\n.plyr--full-ui input[type=range]::-moz-range-track{\n  background:0 0;\n  border:0;\n  border-radius:2.5px;\n  height:5px;\n  -moz-transition:box-shadow .3s ease;\n  transition:box-shadow .3s ease;\n  user-select:none\n}\n\n.plyr--full-ui input[type=range]::-moz-range-thumb{\n  background:#fff;\n  border:0;\n  border-radius:100%;\n  box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2);\n  height:13px;\n  position:relative;\n  -moz-transition:all .2s ease;\n  transition:all .2s ease;\n  width:13px\n}\n\n.plyr--full-ui input[type=range]::-moz-range-progress{\n  background:currentColor;\n  border-radius:2.5px;\n  height:5px\n}\n\n.plyr--full-ui input[type=range]::-ms-track{\n  background:0 0;\n  border:0;\n  border-radius:2.5px;\n  height:5px;\n  -ms-transition:box-shadow .3s ease;\n  transition:box-shadow .3s ease;\n  -ms-user-select:none;\n  user-select:none;\n  color:transparent\n}\n\n.plyr--full-ui input[type=range]::-ms-fill-upper{\n  background:0 0;\n  border:0;\n  border-radius:2.5px;\n  height:5px;\n  -ms-transition:box-shadow .3s ease;\n  transition:box-shadow .3s ease;\n  -ms-user-select:none;\n  user-select:none\n}\n\n.plyr--full-ui input[type=range]::-ms-fill-lower{\n  background:0 0;\n  border:0;\n  border-radius:2.5px;\n  height:5px;\n  -ms-transition:box-shadow .3s ease;\n  transition:box-shadow .3s ease;\n  -ms-user-select:none;\n  user-select:none;\n  background:currentColor\n}\n\n.plyr--full-ui input[type=range]::-ms-thumb{\n  background:#fff;\n  border:0;\n  border-radius:100%;\n  box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2);\n  height:13px;\n  position:relative;\n  -ms-transition:all .2s ease;\n  transition:all .2s ease;\n  width:13px;\n  margin-top:0\n}\n\n.plyr--full-ui input[type=range]::-ms-tooltip{\n  display:none\n}\n\n.plyr--full-ui input[type=range]:focus{\n  outline:0\n}\n\n.plyr--full-ui input[type=range]::-moz-focus-outer{\n  border:0\n}\n\n.plyr--full-ui input[type=range].plyr__tab-focus::-webkit-slider-runnable-track{\n  box-shadow:0 0 0 5px rgba(0,179,255,.5);\n  outline:0\n}\n\n.plyr--full-ui input[type=range].plyr__tab-focus::-moz-range-track{\n  box-shadow:0 0 0 5px rgba(0,179,255,.5);\n  outline:0\n}\n\n.plyr--full-ui input[type=range].plyr__tab-focus::-ms-track{\n  box-shadow:0 0 0 5px rgba(0,179,255,.5);\n  outline:0\n}\n\n.plyr__poster{\n  background-color:#000;\n  background-position:50% 50%;\n  background-repeat:no-repeat;\n  background-size:contain;\n  height:100%;\n  left:0;\n  opacity:0;\n  position:absolute;\n  top:0;\n  transition:opacity .2s ease;\n  width:100%;\n  z-index:1\n}\n\n.plyr--stopped.plyr__poster-enabled .plyr__poster{\n  opacity:1\n}\n\n.plyr__time{\n  font-size:14px\n}\n\n.plyr__time+.plyr__time::before{\n  content:'\\2044';\n  margin-right:10px\n}\n\n@media (max-width:767px){\n  .plyr__time+.plyr__time{\n    display:none\n  }\n}\n\n.plyr__tooltip{\n  background:rgba(255,255,255,.9);\n  border-radius:3px;\n  bottom:100%;\n  box-shadow:0 1px 2px rgba(0,0,0,.15);\n  color:#4a5764;\n  font-size:14px;\n  font-weight:500;\n  left:50%;\n  line-height:1.3;\n  margin-bottom:10px;\n  opacity:0;\n  padding:5px 7.5px;\n  pointer-events:none;\n  position:absolute;\n  transform:translate(-50%,10px) scale(.8);\n  transform-origin:50% 100%;\n  transition:transform .2s .1s ease,opacity .2s .1s ease;\n  white-space:nowrap;\n  z-index:2\n}\n\n.plyr__tooltip::before{\n  border-left:4px solid transparent;\n  border-right:4px solid transparent;\n  border-top:4px solid rgba(255,255,255,.9);\n  bottom:-4px;\n  content:'';\n  height:0;\n  left:50%;\n  position:absolute;\n  transform:translateX(-50%);\n  width:0;\n  z-index:2\n}\n\n.plyr .plyr__control.plyr__tab-focus .plyr__tooltip,.plyr .plyr__control:hover .plyr__tooltip,.plyr__tooltip--visible{\n  opacity:1;\n  transform:translate(-50%,0) scale(1)\n}\n\n.plyr .plyr__control:hover .plyr__tooltip{\n  z-index:3\n}\n\n.plyr__controls>.plyr__control:first-child .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip{\n  left:0;\n  transform:translate(0,10px) scale(.8);\n  transform-origin:0 100%\n}\n\n.plyr__controls>.plyr__control:first-child .plyr__tooltip::before,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip::before{\n  left:16px\n}\n\n.plyr__controls>.plyr__control:last-child .plyr__tooltip{\n  left:auto;\n  right:0;\n  transform:translate(0,10px) scale(.8);\n  transform-origin:100% 100%\n}\n\n.plyr__controls>.plyr__control:last-child .plyr__tooltip::before{\n  left:auto;\n  right:16px;\n  transform:translateX(50%)\n}\n\n.plyr__controls>.plyr__control:first-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control .plyr__tooltip--visible,.plyr__controls>.plyr__control:first-child+.plyr__control.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:first-child+.plyr__control:hover .plyr__tooltip,.plyr__controls>.plyr__control:first-child.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:first-child:hover .plyr__tooltip,.plyr__controls>.plyr__control:last-child .plyr__tooltip--visible,.plyr__controls>.plyr__control:last-child.plyr__tab-focus .plyr__tooltip,.plyr__controls>.plyr__control:last-child:hover .plyr__tooltip{\n  transform:translate(0,0) scale(1)\n}\n\n.plyr__progress{\n  left:6.5px;\n  margin-right:13px;\n  position:relative\n}\n\n.plyr__progress input[type=range],.plyr__progress__buffer{\n  margin-left:-6.5px;\n  margin-right:-6.5px;\n  width:calc(100% + 13px)\n}\n\n.plyr__progress input[type=range]{\n  position:relative;\n  z-index:2\n}\n\n.plyr__progress .plyr__tooltip{\n  font-size:14px;\n  left:0\n}\n\n.plyr__progress__buffer{\n  -webkit-appearance:none;\n  background:0 0;\n  border:0;\n  border-radius:100px;\n  height:5px;\n  left:0;\n  margin-top:-2.5px;\n  padding:0;\n  position:absolute;\n  top:50%\n}\n\n.plyr__progress__buffer::-webkit-progress-bar{\n  background:0 0\n}\n\n.plyr__progress__buffer::-webkit-progress-value{\n  background:currentColor;\n  border-radius:100px;\n  min-width:5px;\n  -webkit-transition:width .2s ease;\n  transition:width .2s ease\n}\n\n.plyr__progress__buffer::-moz-progress-bar{\n  background:currentColor;\n  border-radius:100px;\n  min-width:5px;\n  -moz-transition:width .2s ease;\n  transition:width .2s ease\n}\n\n.plyr__progress__buffer::-ms-fill{\n  border-radius:100px;\n  -ms-transition:width .2s ease;\n  transition:width .2s ease\n}\n\n.plyr--loading .plyr__progress__buffer{\n  animation:plyr-progress 1s linear infinite;\n  background-image:linear-gradient(-45deg,rgba(35,41,47,.6) 25%,transparent 25%,transparent 50%,rgba(35,41,47,.6) 50%,rgba(35,41,47,.6) 75%,transparent 75%,transparent);\n  background-repeat:repeat-x;\n  background-size:25px 25px;\n  color:transparent\n}\n\n.plyr--video.plyr--loading .plyr__progress__buffer{\n  background-color:rgba(255,255,255,.25)\n}\n\n.plyr--audio.plyr--loading .plyr__progress__buffer{\n  background-color:rgba(193,201,209,.66)\n}\n\n.plyr__volume{\n  align-items:center;\n  display:flex;\n  max-width:110px;\n  min-width:80px;\n  position:relative;\n  width:20%\n}\n\n.plyr__volume input[type=range]{\n  margin-left:5px;\n  margin-right:5px;\n  position:relative;\n  z-index:2\n}\n\n.plyr--is-ios .plyr__volume{\n  min-width:0;\n  width:auto\n}\n\n.plyr--audio{\n  display:block\n}\n\n.plyr--audio .plyr__controls{\n  background:#fff;\n  border-radius:inherit;\n  color:#4a5764;\n  padding:10px\n}\n\n.plyr--audio .plyr__control.plyr__tab-focus,.plyr--audio .plyr__control:hover,.plyr--audio .plyr__control[aria-expanded=true]{\n  background:#00b3ff;\n  color:#fff\n}\n\n.plyr--full-ui.plyr--audio input[type=range]::-webkit-slider-runnable-track{\n  background-color:rgba(193,201,209,.66)\n}\n\n.plyr--full-ui.plyr--audio input[type=range]::-moz-range-track{\n  background-color:rgba(193,201,209,.66)\n}\n\n.plyr--full-ui.plyr--audio input[type=range]::-ms-track{\n  background-color:rgba(193,201,209,.66)\n}\n\n.plyr--full-ui.plyr--audio input[type=range]:active::-webkit-slider-thumb{\n  box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(0,0,0,.1)\n}\n\n.plyr--full-ui.plyr--audio input[type=range]:active::-moz-range-thumb{\n  box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(0,0,0,.1)\n}\n\n.plyr--full-ui.plyr--audio input[type=range]:active::-ms-thumb{\n  box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(0,0,0,.1)\n}\n\n.plyr--audio .plyr__progress__buffer{\n  color:rgba(193,201,209,.66)\n}\n\n.plyr--video{\n  background:#000;\n  overflow:hidden\n}\n\n.plyr--video.plyr--menu-open{\n  overflow:visible\n}\n\n.plyr__video-wrapper{\n  background:#000;\n  height:100%;\n  margin:auto;\n  overflow:hidden;\n  width:100%\n}\n\n.plyr__video-embed,.plyr__video-wrapper--fixed-ratio{\n  height:0;\n  padding-bottom:56.25%\n}\n\n.plyr__video-embed iframe,.plyr__video-wrapper--fixed-ratio video{\n  border:0;\n  left:0;\n  position:absolute;\n  top:0\n}\n\n.plyr--full-ui .plyr__video-embed>.plyr__video-embed__container{\n  padding-bottom:240%;\n  position:relative;\n  transform:translateY(-38.28125%)\n}\n\n.plyr--video .plyr__controls{\n  background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,.7));\n  border-bottom-left-radius:inherit;\n  border-bottom-right-radius:inherit;\n  bottom:0;\n  color:#fff;\n  left:0;\n  padding:20px 5px 5px;\n  position:absolute;\n  right:0;\n  transition:opacity .4s ease-in-out,transform .4s ease-in-out;\n  z-index:3\n}\n\n@media (min-width:480px){\n  .plyr--video .plyr__controls{\n    padding:35px 10px 10px\n  }\n}\n\n.plyr--video.plyr--hide-controls .plyr__controls{\n  opacity:0;\n  pointer-events:none;\n  transform:translateY(100%)\n}\n\n.plyr--video .plyr__control.plyr__tab-focus,.plyr--video .plyr__control:hover,.plyr--video .plyr__control[aria-expanded=true]{\n  background:#00b3ff;\n  color:#fff\n}\n\n.plyr__control--overlaid{\n  background:rgba(0,179,255,.8);\n  border:0;\n  border-radius:100%;\n  color:#fff;\n  display:none;\n  left:50%;\n  padding:15px;\n  position:absolute;\n  top:50%;\n  transform:translate(-50%,-50%);\n  z-index:2\n}\n\n.plyr__control--overlaid svg{\n  left:2px;\n  position:relative\n}\n\n.plyr__control--overlaid:focus,.plyr__control--overlaid:hover{\n  background:#00b3ff\n}\n\n.plyr--playing .plyr__control--overlaid{\n  opacity:0;\n  visibility:hidden\n}\n\n.plyr--full-ui.plyr--video .plyr__control--overlaid{\n  display:block\n}\n\n.plyr--full-ui.plyr--video input[type=range]::-webkit-slider-runnable-track{\n  background-color:rgba(255,255,255,.25)\n}\n\n.plyr--full-ui.plyr--video input[type=range]::-moz-range-track{\n  background-color:rgba(255,255,255,.25)\n}\n\n.plyr--full-ui.plyr--video input[type=range]::-ms-track{\n  background-color:rgba(255,255,255,.25)\n}\n\n.plyr--full-ui.plyr--video input[type=range]:active::-webkit-slider-thumb{\n  box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(255,255,255,.5)\n}\n\n.plyr--full-ui.plyr--video input[type=range]:active::-moz-range-thumb{\n  box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(255,255,255,.5)\n}\n\n.plyr--full-ui.plyr--video input[type=range]:active::-ms-thumb{\n  box-shadow:0 1px 1px rgba(0,0,0,.15),0 0 0 1px rgba(35,41,47,.2),0 0 0 3px rgba(255,255,255,.5)\n}\n\n.plyr--video .plyr__progress__buffer{\n  color:rgba(255,255,255,.25)\n}\n\n.plyr:-webkit-full-screen{\n  background:#000;\n  border-radius:0!important;\n  height:100%;\n  margin:0;\n  width:100%\n}\n\n.plyr:-ms-fullscreen{\n  background:#000;\n  border-radius:0!important;\n  height:100%;\n  margin:0;\n  width:100%\n}\n\n.plyr:fullscreen{\n  background:#000;\n  border-radius:0!important;\n  height:100%;\n  margin:0;\n  width:100%\n}\n\n.plyr:-webkit-full-screen video{\n  height:100%\n}\n\n.plyr:-ms-fullscreen video{\n  height:100%\n}\n\n.plyr:fullscreen video{\n  height:100%\n}\n\n.plyr:-webkit-full-screen .plyr__video-wrapper{\n  height:100%;\n  position:static\n}\n\n.plyr:-ms-fullscreen .plyr__video-wrapper{\n  height:100%;\n  position:static\n}\n\n.plyr:fullscreen .plyr__video-wrapper{\n  height:100%;\n  position:static\n}\n\n.plyr:-webkit-full-screen.plyr--vimeo .plyr__video-wrapper{\n  height:0;\n  position:relative;\n  top:50%;\n  transform:translateY(-50%)\n}\n\n.plyr:-ms-fullscreen.plyr--vimeo .plyr__video-wrapper{\n  height:0;\n  position:relative;\n  top:50%;\n  transform:translateY(-50%)\n}\n\n.plyr:fullscreen.plyr--vimeo .plyr__video-wrapper{\n  height:0;\n  position:relative;\n  top:50%;\n  transform:translateY(-50%)\n}\n\n.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen{\n  display:block\n}\n\n.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen{\n  display:block\n}\n\n.plyr:fullscreen .plyr__control .icon--exit-fullscreen{\n  display:block\n}\n\n.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen+svg{\n  display:none\n}\n\n.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen+svg{\n  display:none\n}\n\n.plyr:fullscreen .plyr__control .icon--exit-fullscreen+svg{\n  display:none\n}\n\n.plyr:-webkit-full-screen.plyr--hide-controls{\n  cursor:none\n}\n\n.plyr:-ms-fullscreen.plyr--hide-controls{\n  cursor:none\n}\n\n.plyr:fullscreen.plyr--hide-controls{\n  cursor:none\n}\n\n@media (min-width:1024px){\n  .plyr:-webkit-full-screen .plyr__captions{\n    font-size:21px\n  }\n\n  .plyr:-ms-fullscreen .plyr__captions{\n    font-size:21px\n  }\n\n  .plyr:fullscreen .plyr__captions{\n    font-size:21px\n  }\n}\n\n.plyr:-webkit-full-screen{\n  background:#000;\n  border-radius:0!important;\n  height:100%;\n  margin:0;\n  width:100%\n}\n\n.plyr:-webkit-full-screen video{\n  height:100%\n}\n\n.plyr:-webkit-full-screen .plyr__video-wrapper{\n  height:100%;\n  position:static\n}\n\n.plyr:-webkit-full-screen.plyr--vimeo .plyr__video-wrapper{\n  height:0;\n  position:relative;\n  top:50%;\n  transform:translateY(-50%)\n}\n\n.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen{\n  display:block\n}\n\n.plyr:-webkit-full-screen .plyr__control .icon--exit-fullscreen+svg{\n  display:none\n}\n\n.plyr:-webkit-full-screen.plyr--hide-controls{\n  cursor:none\n}\n\n@media (min-width:1024px){\n  .plyr:-webkit-full-screen .plyr__captions{\n    font-size:21px\n  }\n}\n\n.plyr:-moz-full-screen{\n  background:#000;\n  border-radius:0!important;\n  height:100%;\n  margin:0;\n  width:100%\n}\n\n.plyr:-moz-full-screen video{\n  height:100%\n}\n\n.plyr:-moz-full-screen .plyr__video-wrapper{\n  height:100%;\n  position:static\n}\n\n.plyr:-moz-full-screen.plyr--vimeo .plyr__video-wrapper{\n  height:0;\n  position:relative;\n  top:50%;\n  transform:translateY(-50%)\n}\n\n.plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen{\n  display:block\n}\n\n.plyr:-moz-full-screen .plyr__control .icon--exit-fullscreen+svg{\n  display:none\n}\n\n.plyr:-moz-full-screen.plyr--hide-controls{\n  cursor:none\n}\n\n@media (min-width:1024px){\n  .plyr:-moz-full-screen .plyr__captions{\n    font-size:21px\n  }\n}\n\n.plyr:-ms-fullscreen{\n  background:#000;\n  border-radius:0!important;\n  height:100%;\n  margin:0;\n  width:100%\n}\n\n.plyr:-ms-fullscreen video{\n  height:100%\n}\n\n.plyr:-ms-fullscreen .plyr__video-wrapper{\n  height:100%;\n  position:static\n}\n\n.plyr:-ms-fullscreen.plyr--vimeo .plyr__video-wrapper{\n  height:0;\n  position:relative;\n  top:50%;\n  transform:translateY(-50%)\n}\n\n.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen{\n  display:block\n}\n\n.plyr:-ms-fullscreen .plyr__control .icon--exit-fullscreen+svg{\n  display:none\n}\n\n.plyr:-ms-fullscreen.plyr--hide-controls{\n  cursor:none\n}\n\n@media (min-width:1024px){\n  .plyr:-ms-fullscreen .plyr__captions{\n    font-size:21px\n  }\n}\n\n.plyr--fullscreen-fallback{\n  background:#000;\n  border-radius:0!important;\n  height:100%;\n  margin:0;\n  width:100%;\n  bottom:0;\n  display:block;\n  left:0;\n  position:fixed;\n  right:0;\n  top:0;\n  z-index:10000000\n}\n\n.plyr--fullscreen-fallback video{\n  height:100%\n}\n\n.plyr--fullscreen-fallback .plyr__video-wrapper{\n  height:100%;\n  position:static\n}\n\n.plyr--fullscreen-fallback.plyr--vimeo .plyr__video-wrapper{\n  height:0;\n  position:relative;\n  top:50%;\n  transform:translateY(-50%)\n}\n\n.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen{\n  display:block\n}\n\n.plyr--fullscreen-fallback .plyr__control .icon--exit-fullscreen+svg{\n  display:none\n}\n\n.plyr--fullscreen-fallback.plyr--hide-controls{\n  cursor:none\n}\n\n@media (min-width:1024px){\n  .plyr--fullscreen-fallback .plyr__captions{\n    font-size:21px\n  }\n}\n\n.plyr__ads{\n  border-radius:inherit;\n  bottom:0;\n  cursor:pointer;\n  left:0;\n  overflow:hidden;\n  position:absolute;\n  right:0;\n  top:0;\n  z-index:-1\n}\n\n.plyr__ads>div,.plyr__ads>div iframe{\n  height:100%;\n  position:absolute;\n  width:100%\n}\n\n.plyr__ads::after{\n  background:rgba(35,41,47,.8);\n  border-radius:2px;\n  bottom:10px;\n  color:#fff;\n  content:attr(data-badge-text);\n  font-size:11px;\n  padding:2px 6px;\n  pointer-events:none;\n  position:absolute;\n  right:10px;\n  z-index:3\n}\n\n.plyr__ads::after:empty{\n  display:none\n}\n\n.plyr__cues{\n  background:currentColor;\n  display:block;\n  height:5px;\n  left:0;\n  margin:-2.5px 0 0;\n  opacity:.8;\n  position:absolute;\n  top:50%;\n  width:3px;\n  z-index:3\n}\n\n.plyr__preview-thumb{\n  background-color:rgba(255,255,255,.9);\n  border-radius:3px;\n  bottom:100%;\n  box-shadow:0 1px 2px rgba(0,0,0,.15);\n  margin-bottom:10px;\n  opacity:0;\n  padding:3px;\n  pointer-events:none;\n  position:absolute;\n  transform:translate(0,10px) scale(.8);\n  transform-origin:50% 100%;\n  transition:transform .2s .1s ease,opacity .2s .1s ease;\n  z-index:2\n}\n\n.plyr__preview-thumb--is-shown{\n  opacity:1;\n  transform:translate(0,0) scale(1)\n}\n\n.plyr__preview-thumb::before{\n  border-left:4px solid transparent;\n  border-right:4px solid transparent;\n  border-top:4px solid rgba(255,255,255,.9);\n  bottom:-4px;\n  content:'';\n  height:0;\n  left:50%;\n  position:absolute;\n  transform:translateX(-50%);\n  width:0;\n  z-index:2\n}\n\n.plyr__preview-thumb__image-container{\n  background:#c1c9d1;\n  border-radius:2px;\n  overflow:hidden;\n  position:relative;\n  z-index:0\n}\n\n.plyr__preview-thumb__image-container img{\n  height:100%;\n  left:0;\n  max-height:none;\n  max-width:none;\n  position:absolute;\n  top:0;\n  width:100%\n}\n\n.plyr__preview-thumb__time-container{\n  bottom:6px;\n  left:0;\n  position:absolute;\n  right:0;\n  white-space:nowrap;\n  z-index:3\n}\n\n.plyr__preview-thumb__time-container span{\n  background-color:rgba(0,0,0,.55);\n  border-radius:2px;\n  color:#fff;\n  font-size:14px;\n  padding:3px 6px\n}\n\n.plyr__preview-scrubbing{\n  bottom:0;\n  filter:blur(1px);\n  height:100%;\n  left:0;\n  margin:auto;\n  opacity:0;\n  overflow:hidden;\n  position:absolute;\n  right:0;\n  top:0;\n  transition:opacity .3s ease;\n  width:100%;\n  z-index:1\n}\n\n.plyr__preview-scrubbing--is-shown{\n  opacity:1\n}\n\n.plyr__preview-scrubbing img{\n  height:100%;\n  left:0;\n  max-height:none;\n  max-width:none;\n  -o-object-fit:contain;\n  object-fit:contain;\n  position:absolute;\n  top:0;\n  width:100%\n}\n\n.plyr--no-transition{\n  transition:none!important\n}\n\n.plyr__sr-only{\n  clip:rect(1px,1px,1px,1px);\n  overflow:hidden;\n  border:0!important;\n  height:1px!important;\n  padding:0!important;\n  position:absolute!important;\n  width:1px!important\n}\n\n.plyr [hidden]{\n  display:none!important\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media " + item[2] + "{" + content + "}";
      } else {
        return content;
      }
    }).join("");
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === "string") modules = [[null, modules, ""]];
    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];
      if (typeof id === "number") alreadyImportedModules[id] = true;
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      //  when a module is imported multiple times with different media queries.
      //  I hope this will never occur (Hey this way we have smaller bundles)

      if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/plyr/dist/plyr.css":
/*!*****************************************!*\
  !*** ./node_modules/plyr/dist/plyr.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader??ref--6-1!../../postcss-loader/src??ref--6-2!./plyr.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/plyr/dist/plyr.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/plyr/dist/plyr.min.js":
/*!********************************************!*\
  !*** ./node_modules/plyr/dist/plyr.min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

"object" == (typeof navigator === "undefined" ? "undefined" : _typeof(navigator)) && function (e, t) {
  "object" == ( false ? undefined : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() :  true ? !(__WEBPACK_AMD_DEFINE_FACTORY__ = (t),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}(this, function () {
  "use strict";

  function e(e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
  }

  function t(e, t) {
    for (var i = 0; i < t.length; i++) {
      var n = t[i];
      n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
    }
  }

  function i(e, i, n) {
    return i && t(e.prototype, i), n && t(e, n), e;
  }

  function n(e, t, i) {
    return t in e ? Object.defineProperty(e, t, {
      value: i,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = i, e;
  }

  function a(e, t) {
    var i = Object.keys(e);

    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      t && (n = n.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), i.push.apply(i, n);
    }

    return i;
  }

  function s(e) {
    for (var t = 1; t < arguments.length; t++) {
      var i = null != arguments[t] ? arguments[t] : {};
      t % 2 ? a(Object(i), !0).forEach(function (t) {
        n(e, t, i[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : a(Object(i)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
      });
    }

    return e;
  }

  function r(e, t) {
    return function (e) {
      if (Array.isArray(e)) return e;
    }(e) || function (e, t) {
      if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
      var i = [],
          n = !0,
          a = !1,
          s = void 0;

      try {
        for (var r, o = e[Symbol.iterator](); !(n = (r = o.next()).done) && (i.push(r.value), !t || i.length !== t); n = !0) {
          ;
        }
      } catch (e) {
        a = !0, s = e;
      } finally {
        try {
          n || null == o["return"] || o["return"]();
        } finally {
          if (a) throw s;
        }
      }

      return i;
    }(e, t) || function () {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }();
  }

  function o(e) {
    return function (e) {
      if (Array.isArray(e)) {
        for (var t = 0, i = new Array(e.length); t < e.length; t++) {
          i[t] = e[t];
        }

        return i;
      }
    }(e) || function (e) {
      if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e);
    }(e) || function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance");
    }();
  }

  var l = {
    addCSS: !0,
    thumbWidth: 15,
    watch: !0
  };

  function c(e, t) {
    return function () {
      return Array.from(document.querySelectorAll(t)).includes(this);
    }.call(e, t);
  }

  var u = function u(e) {
    return null != e ? e.constructor : null;
  },
      d = function d(e, t) {
    return Boolean(e && t && e instanceof t);
  },
      h = function h(e) {
    return null == e;
  },
      p = function p(e) {
    return u(e) === Object;
  },
      m = function m(e) {
    return u(e) === String;
  },
      f = function f(e) {
    return Array.isArray(e);
  },
      g = function g(e) {
    return d(e, NodeList);
  },
      y = m,
      v = f,
      b = g,
      w = function w(e) {
    return d(e, Element);
  },
      k = function k(e) {
    return d(e, Event);
  },
      T = function T(e) {
    return h(e) || (m(e) || f(e) || g(e)) && !e.length || p(e) && !Object.keys(e).length;
  };

  function C(e, t) {
    if (t < 1) {
      var i = (n = "".concat(t).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)) ? Math.max(0, (n[1] ? n[1].length : 0) - (n[2] ? +n[2] : 0)) : 0;
      return parseFloat(e.toFixed(i));
    }

    var n;
    return Math.round(e / t) * t;
  }

  var A,
      E,
      S,
      P = function () {
    function t(i, n) {
      e(this, t), w(i) ? this.element = i : y(i) && (this.element = document.querySelector(i)), w(this.element) && T(this.element.rangeTouch) && (this.config = Object.assign({}, l, n), this.init());
    }

    return i(t, [{
      key: "init",
      value: function value() {
        t.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this);
      }
    }, {
      key: "destroy",
      value: function value() {
        t.enabled && (this.listeners(!1), this.element.rangeTouch = null);
      }
    }, {
      key: "listeners",
      value: function value(e) {
        var t = this,
            i = e ? "addEventListener" : "removeEventListener";
        ["touchstart", "touchmove", "touchend"].forEach(function (e) {
          t.element[i](e, function (e) {
            return t.set(e);
          }, !1);
        });
      }
    }, {
      key: "get",
      value: function value(e) {
        if (!t.enabled || !k(e)) return null;
        var i,
            n = e.target,
            a = e.changedTouches[0],
            s = parseFloat(n.getAttribute("min")) || 0,
            r = parseFloat(n.getAttribute("max")) || 100,
            o = parseFloat(n.getAttribute("step")) || 1,
            l = r - s,
            c = n.getBoundingClientRect(),
            u = 100 / c.width * (this.config.thumbWidth / 2) / 100;
        return (i = 100 / c.width * (a.clientX - c.left)) < 0 ? i = 0 : i > 100 && (i = 100), i < 50 ? i -= (100 - 2 * i) * u : i > 50 && (i += 2 * (i - 50) * u), s + C(l * (i / 100), o);
      }
    }, {
      key: "set",
      value: function value(e) {
        t.enabled && k(e) && !e.target.disabled && (e.preventDefault(), e.target.value = this.get(e), function (e, t) {
          if (e && t) {
            var i = new Event(t);
            e.dispatchEvent(i);
          }
        }(e.target, "touchend" === e.type ? "change" : "input"));
      }
    }], [{
      key: "setup",
      value: function value(e) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = null;
        if (T(e) || y(e) ? n = Array.from(document.querySelectorAll(y(e) ? e : 'input[type="range"]')) : w(e) ? n = [e] : b(e) ? n = Array.from(e) : v(e) && (n = e.filter(w)), T(n)) return null;
        var a = Object.assign({}, l, i);

        if (y(e) && a.watch) {
          var s = new MutationObserver(function (i) {
            Array.from(i).forEach(function (i) {
              Array.from(i.addedNodes).forEach(function (i) {
                if (w(i) && c(i, e)) new t(i, a);
              });
            });
          });
          s.observe(document.body, {
            childList: !0,
            subtree: !0
          });
        }

        return n.map(function (e) {
          return new t(e, i);
        });
      }
    }, {
      key: "enabled",
      get: function get() {
        return "ontouchstart" in document.documentElement;
      }
    }]), t;
  }(),
      M = function M(e) {
    return null != e ? e.constructor : null;
  },
      N = function N(e, t) {
    return Boolean(e && t && e instanceof t);
  },
      x = function x(e) {
    return null == e;
  },
      I = function I(e) {
    return M(e) === Object;
  },
      L = function L(e) {
    return M(e) === String;
  },
      _ = function _(e) {
    return Array.isArray(e);
  },
      O = function O(e) {
    return N(e, NodeList);
  },
      j = function j(e) {
    return x(e) || (L(e) || _(e) || O(e)) && !e.length || I(e) && !Object.keys(e).length;
  },
      q = x,
      H = I,
      D = function D(e) {
    return M(e) === Number && !Number.isNaN(e);
  },
      F = L,
      R = function R(e) {
    return M(e) === Boolean;
  },
      V = function V(e) {
    return M(e) === Function;
  },
      B = _,
      U = O,
      W = function W(e) {
    return N(e, Element);
  },
      z = function z(e) {
    return N(e, Event);
  },
      K = function K(e) {
    return N(e, KeyboardEvent);
  },
      Y = function Y(e) {
    return N(e, TextTrack) || !x(e) && L(e.kind);
  },
      Q = function Q(e) {
    if (N(e, window.URL)) return !0;
    if (!L(e)) return !1;
    var t = e;
    e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));

    try {
      return !j(new URL(t).hostname);
    } catch (e) {
      return !1;
    }
  },
      X = j,
      J = (A = document.createElement("span"), E = {
    WebkitTransition: "webkitTransitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd otransitionend",
    transition: "transitionend"
  }, S = Object.keys(E).find(function (e) {
    return void 0 !== A.style[e];
  }), !!F(S) && E[S]);

  function $(e, t) {
    setTimeout(function () {
      try {
        e.hidden = !0, e.offsetHeight, e.hidden = !1;
      } catch (e) {}
    }, t);
  }

  var G = {
    isIE:
    /* @cc_on!@ */
    !!document.documentMode,
    isEdge: window.navigator.userAgent.includes("Edge"),
    isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
    isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
    isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
  };

  function Z(e, t) {
    return t.split(".").reduce(function (e, t) {
      return e && e[t];
    }, e);
  }

  function ee() {
    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) {
      i[a - 1] = arguments[a];
    }

    if (!i.length) return e;
    var s = i.shift();
    return H(s) ? (Object.keys(s).forEach(function (t) {
      H(s[t]) ? (Object.keys(e).includes(t) || Object.assign(e, n({}, t, {})), ee(e[t], s[t])) : Object.assign(e, n({}, t, s[t]));
    }), ee.apply(void 0, [e].concat(i))) : e;
  }

  function te(e, t) {
    var i = e.length ? e : [e];
    Array.from(i).reverse().forEach(function (e, i) {
      var n = i > 0 ? t.cloneNode(!0) : t,
          a = e.parentNode,
          s = e.nextSibling;
      n.appendChild(e), s ? a.insertBefore(n, s) : a.appendChild(n);
    });
  }

  function ie(e, t) {
    W(e) && !X(t) && Object.entries(t).filter(function (e) {
      var t = r(e, 2)[1];
      return !q(t);
    }).forEach(function (t) {
      var i = r(t, 2),
          n = i[0],
          a = i[1];
      return e.setAttribute(n, a);
    });
  }

  function ne(e, t, i) {
    var n = document.createElement(e);
    return H(t) && ie(n, t), F(i) && (n.innerText = i), n;
  }

  function ae(e, t, i, n) {
    W(t) && t.appendChild(ne(e, i, n));
  }

  function se(e) {
    U(e) || B(e) ? Array.from(e).forEach(se) : W(e) && W(e.parentNode) && e.parentNode.removeChild(e);
  }

  function re(e) {
    if (W(e)) for (var t = e.childNodes.length; t > 0;) {
      e.removeChild(e.lastChild), t -= 1;
    }
  }

  function oe(e, t) {
    return W(t) && W(t.parentNode) && W(e) ? (t.parentNode.replaceChild(e, t), e) : null;
  }

  function le(e, t) {
    if (!F(e) || X(e)) return {};
    var i = {},
        n = ee({}, t);
    return e.split(",").forEach(function (e) {
      var t = e.trim(),
          a = t.replace(".", ""),
          s = t.replace(/[[\]]/g, "").split("="),
          o = r(s, 1)[0],
          l = s.length > 1 ? s[1].replace(/["']/g, "") : "";

      switch (t.charAt(0)) {
        case ".":
          F(n["class"]) ? i["class"] = "".concat(n["class"], " ").concat(a) : i["class"] = a;
          break;

        case "#":
          i.id = t.replace("#", "");
          break;

        case "[":
          i[o] = l;
      }
    }), ee(n, i);
  }

  function ce(e, t) {
    if (W(e)) {
      var i = t;
      R(i) || (i = !e.hidden), e.hidden = i;
    }
  }

  function ue(e, t, i) {
    if (U(e)) return Array.from(e).map(function (e) {
      return ue(e, t, i);
    });

    if (W(e)) {
      var n = "toggle";
      return void 0 !== i && (n = i ? "add" : "remove"), e.classList[n](t), e.classList.contains(t);
    }

    return !1;
  }

  function de(e, t) {
    return W(e) && e.classList.contains(t);
  }

  function he(e, t) {
    return function () {
      return Array.from(document.querySelectorAll(t)).includes(this);
    }.call(e, t);
  }

  function pe(e) {
    return this.elements.container.querySelectorAll(e);
  }

  function me(e) {
    return this.elements.container.querySelector(e);
  }

  function fe() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    W(e) && (e.focus({
      preventScroll: !0
    }), t && ue(e, this.config.classNames.tabFocus));
  }

  var ge,
      ye = {
    "audio/ogg": "vorbis",
    "audio/wav": "1",
    "video/webm": "vp8, vorbis",
    "video/mp4": "avc1.42E01E, mp4a.40.2",
    "video/ogg": "theora"
  },
      ve = {
    audio: "canPlayType" in document.createElement("audio"),
    video: "canPlayType" in document.createElement("video"),
    check: function check(e, t, i) {
      var n = G.isIPhone && i && ve.playsinline,
          a = ve[e] || "html5" !== t;
      return {
        api: a,
        ui: a && ve.rangeInput && ("video" !== e || !G.isIPhone || n)
      };
    },
    pip: !(G.isIPhone || !V(ne("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || ne("video").disablePictureInPicture)),
    airplay: V(window.WebKitPlaybackTargetAvailabilityEvent),
    playsinline: "playsInline" in document.createElement("video"),
    mime: function mime(e) {
      if (X(e)) return !1;
      var t = r(e.split("/"), 1)[0],
          i = e;
      if (!this.isHTML5 || t !== this.type) return !1;
      Object.keys(ye).includes(i) && (i += '; codecs="'.concat(ye[e], '"'));

      try {
        return Boolean(i && this.media.canPlayType(i).replace(/no/, ""));
      } catch (e) {
        return !1;
      }
    },
    textTracks: "textTracks" in document.createElement("video"),
    rangeInput: (ge = document.createElement("input"), ge.type = "range", "range" === ge.type),
    touch: "ontouchstart" in document.documentElement,
    transitions: !1 !== J,
    reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
  },
      be = function () {
    var e = !1;

    try {
      var t = Object.defineProperty({}, "passive", {
        get: function get() {
          return e = !0, null;
        }
      });
      window.addEventListener("test", null, t), window.removeEventListener("test", null, t);
    } catch (e) {}

    return e;
  }();

  function we(e, t, i) {
    var n = this,
        a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
        r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];

    if (e && "addEventListener" in e && !X(t) && V(i)) {
      var o = t.split(" "),
          l = r;
      be && (l = {
        passive: s,
        capture: r
      }), o.forEach(function (t) {
        n && n.eventListeners && a && n.eventListeners.push({
          element: e,
          type: t,
          callback: i,
          options: l
        }), e[a ? "addEventListener" : "removeEventListener"](t, i, l);
      });
    }
  }

  function ke(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 ? arguments[2] : void 0,
        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    we.call(this, e, t, i, !0, n, a);
  }

  function Te(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 ? arguments[2] : void 0,
        n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
    we.call(this, e, t, i, !1, n, a);
  }

  function Ce(e) {
    var t = this,
        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        n = arguments.length > 2 ? arguments[2] : void 0,
        a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
        s = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
        r = function r() {
      Te(e, i, r, a, s);

      for (var o = arguments.length, l = new Array(o), c = 0; c < o; c++) {
        l[c] = arguments[c];
      }

      n.apply(t, l);
    };

    we.call(this, e, i, r, !0, a, s);
  }

  function Ae(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};

    if (W(e) && !X(t)) {
      var a = new CustomEvent(t, {
        bubbles: i,
        detail: s({}, n, {
          plyr: this
        })
      });
      e.dispatchEvent(a);
    }
  }

  function Ee() {
    this && this.eventListeners && (this.eventListeners.forEach(function (e) {
      var t = e.element,
          i = e.type,
          n = e.callback,
          a = e.options;
      t.removeEventListener(i, n, a);
    }), this.eventListeners = []);
  }

  function Se() {
    var e = this;
    return new Promise(function (t) {
      return e.ready ? setTimeout(t, 0) : ke.call(e, e.elements.container, "ready", t);
    }).then(function () {});
  }

  function Pe(e) {
    return !!(B(e) || F(e) && e.includes(":")) && (B(e) ? e : e.split(":")).map(Number).every(D);
  }

  function Me(e) {
    if (!B(e) || !e.every(D)) return null;

    var t = r(e, 2),
        i = t[0],
        n = t[1],
        a = function e(t, i) {
      return 0 === i ? t : e(i, t % i);
    }(i, n);

    return [i / a, n / a];
  }

  function Ne(e) {
    var t = function t(e) {
      return Pe(e) ? e.split(":").map(Number) : null;
    },
        i = t(e);

    if (null === i && (i = t(this.config.ratio)), null === i && !X(this.embed) && B(this.embed.ratio) && (i = this.embed.ratio), null === i && this.isHTML5) {
      var n = this.media;
      i = Me([n.videoWidth, n.videoHeight]);
    }

    return i;
  }

  function xe(e) {
    if (!this.isVideo) return {};
    var t = this.elements.wrapper,
        i = Ne.call(this, e),
        n = r(B(i) ? i : [0, 0], 2),
        a = 100 / n[0] * n[1];

    if (t.style.paddingBottom = "".concat(a, "%"), this.isVimeo && this.supported.ui) {
      var s = (240 - a) / 4.8;
      this.media.style.transform = "translateY(-".concat(s, "%)");
    } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== i);

    return {
      padding: a,
      ratio: i
    };
  }

  var Ie = {
    getSources: function getSources() {
      var e = this;
      return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function (t) {
        var i = t.getAttribute("type");
        return !!X(i) || ve.mime.call(e, i);
      }) : [];
    },
    getQualityOptions: function getQualityOptions() {
      return this.config.quality.forced ? this.config.quality.options : Ie.getSources.call(this).map(function (e) {
        return Number(e.getAttribute("size"));
      }).filter(Boolean);
    },
    setup: function setup() {
      if (this.isHTML5) {
        var e = this;
        e.options.speed = e.config.speed.options, X(this.config.ratio) || xe.call(e), Object.defineProperty(e.media, "quality", {
          get: function get() {
            var t = Ie.getSources.call(e).find(function (t) {
              return t.getAttribute("src") === e.source;
            });
            return t && Number(t.getAttribute("size"));
          },
          set: function set(t) {
            if (e.quality !== t) {
              if (e.config.quality.forced && V(e.config.quality.onChange)) e.config.quality.onChange(t);else {
                var i = Ie.getSources.call(e).find(function (e) {
                  return Number(e.getAttribute("size")) === t;
                });
                if (!i) return;
                var n = e.media,
                    a = n.currentTime,
                    s = n.paused,
                    r = n.preload,
                    o = n.readyState,
                    l = n.playbackRate;
                e.media.src = i.getAttribute("src"), ("none" !== r || o) && (e.once("loadedmetadata", function () {
                  e.speed = l, e.currentTime = a, s || e.play();
                }), e.media.load());
              }
              Ae.call(e, e.media, "qualitychange", !1, {
                quality: t
              });
            }
          }
        });
      }
    },
    cancelRequests: function cancelRequests() {
      this.isHTML5 && (se(Ie.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"));
    }
  };

  function Le(e) {
    return B(e) ? e.filter(function (t, i) {
      return e.indexOf(t) === i;
    }) : e;
  }

  function _e(e) {
    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) {
      i[n - 1] = arguments[n];
    }

    return X(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
      return i[t].toString();
    });
  }

  function Oe() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
    return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString());
  }

  function je() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
    return e.toString().replace(/\w\S*/g, function (e) {
      return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
    });
  }

  function qe() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = e.toString();
    return t = Oe(t, "-", " "), t = Oe(t, "_", " "), Oe(t = je(t), " ", "");
  }

  function He(e) {
    var t = document.createElement("div");
    return t.appendChild(e), t.innerHTML;
  }

  var De = {
    pip: "PIP",
    airplay: "AirPlay",
    html5: "HTML5",
    vimeo: "Vimeo",
    youtube: "YouTube"
  },
      Fe = function Fe() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    if (X(e) || X(t)) return "";
    var i = Z(t.i18n, e);
    if (X(i)) return Object.keys(De).includes(e) ? De[e] : "";
    var n = {
      "{seektime}": t.seekTime,
      "{title}": t.title
    };
    return Object.entries(n).forEach(function (e) {
      var t = r(e, 2),
          n = t[0],
          a = t[1];
      i = Oe(i, n, a);
    }), i;
  },
      Re = function () {
    function t(i) {
      e(this, t), this.enabled = i.config.storage.enabled, this.key = i.config.storage.key;
    }

    return i(t, [{
      key: "get",
      value: function value(e) {
        if (!t.supported || !this.enabled) return null;
        var i = window.localStorage.getItem(this.key);
        if (X(i)) return null;
        var n = JSON.parse(i);
        return F(e) && e.length ? n[e] : n;
      }
    }, {
      key: "set",
      value: function value(e) {
        if (t.supported && this.enabled && H(e)) {
          var i = this.get();
          X(i) && (i = {}), ee(i, e), window.localStorage.setItem(this.key, JSON.stringify(i));
        }
      }
    }], [{
      key: "supported",
      get: function get() {
        try {
          if (!("localStorage" in window)) return !1;
          return window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0;
        } catch (e) {
          return !1;
        }
      }
    }]), t;
  }();

  function Ve(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
    return new Promise(function (i, n) {
      try {
        var a = new XMLHttpRequest();
        if (!("withCredentials" in a)) return;
        a.addEventListener("load", function () {
          if ("text" === t) try {
            i(JSON.parse(a.responseText));
          } catch (e) {
            i(a.responseText);
          } else i(a.response);
        }), a.addEventListener("error", function () {
          throw new Error(a.status);
        }), a.open("GET", e, !0), a.responseType = t, a.send();
      } catch (e) {
        n(e);
      }
    });
  }

  function Be(e, t) {
    if (F(e)) {
      var i = F(t),
          n = function n() {
        return null !== document.getElementById(t);
      },
          a = function a(e, t) {
        e.innerHTML = t, i && n() || document.body.insertAdjacentElement("afterbegin", e);
      };

      if (!i || !n()) {
        var s = Re.supported,
            r = document.createElement("div");

        if (r.setAttribute("hidden", ""), i && r.setAttribute("id", t), s) {
          var o = window.localStorage.getItem("".concat("cache", "-").concat(t));

          if (null !== o) {
            var l = JSON.parse(o);
            a(r, l.content);
          }
        }

        Ve(e).then(function (e) {
          X(e) || (s && window.localStorage.setItem("".concat("cache", "-").concat(t), JSON.stringify({
            content: e
          })), a(r, e));
        })["catch"](function () {});
      }
    }
  }

  var Ue = function Ue(e) {
    return Math.trunc(e / 60 / 60 % 60, 10);
  },
      We = function We(e) {
    return Math.trunc(e / 60 % 60, 10);
  },
      ze = function ze(e) {
    return Math.trunc(e % 60, 10);
  };

  function Ke() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    if (!D(e)) return Ke(void 0, t, i);

    var n = function n(e) {
      return "0".concat(e).slice(-2);
    },
        a = Ue(e),
        s = We(e),
        r = ze(e);

    return a = t || a > 0 ? "".concat(a, ":") : "", "".concat(i && e > 0 ? "-" : "").concat(a).concat(n(s), ":").concat(n(r));
  }

  var Ye = {
    getIconUrl: function getIconUrl() {
      var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || G.isIE && !window.svg4everybody;
      return {
        url: this.config.iconUrl,
        cors: e
      };
    },
    findElements: function findElements() {
      try {
        return this.elements.controls = me.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
          play: pe.call(this, this.config.selectors.buttons.play),
          pause: me.call(this, this.config.selectors.buttons.pause),
          restart: me.call(this, this.config.selectors.buttons.restart),
          rewind: me.call(this, this.config.selectors.buttons.rewind),
          fastForward: me.call(this, this.config.selectors.buttons.fastForward),
          mute: me.call(this, this.config.selectors.buttons.mute),
          pip: me.call(this, this.config.selectors.buttons.pip),
          airplay: me.call(this, this.config.selectors.buttons.airplay),
          settings: me.call(this, this.config.selectors.buttons.settings),
          captions: me.call(this, this.config.selectors.buttons.captions),
          fullscreen: me.call(this, this.config.selectors.buttons.fullscreen)
        }, this.elements.progress = me.call(this, this.config.selectors.progress), this.elements.inputs = {
          seek: me.call(this, this.config.selectors.inputs.seek),
          volume: me.call(this, this.config.selectors.inputs.volume)
        }, this.elements.display = {
          buffer: me.call(this, this.config.selectors.display.buffer),
          currentTime: me.call(this, this.config.selectors.display.currentTime),
          duration: me.call(this, this.config.selectors.display.duration)
        }, W(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0;
      } catch (e) {
        return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1;
      }
    },
    createIcon: function createIcon(e, t) {
      var i = Ye.getIconUrl.call(this),
          n = "".concat(i.cors ? "" : i.url, "#").concat(this.config.iconPrefix),
          a = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      ie(a, ee(t, {
        role: "presentation",
        focusable: "false"
      }));
      var s = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          r = "".concat(n, "-").concat(e);
      return "href" in s && s.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), s.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", r), a.appendChild(s), a;
    },
    createLabel: function createLabel(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = Fe(e, this.config),
          n = s({}, t, {
        "class": [t["class"], this.config.classNames.hidden].filter(Boolean).join(" ")
      });
      return ne("span", n, i);
    },
    createBadge: function createBadge(e) {
      if (X(e)) return null;
      var t = ne("span", {
        "class": this.config.classNames.menu.value
      });
      return t.appendChild(ne("span", {
        "class": this.config.classNames.menu.badge
      }, e)), t;
    },
    createButton: function createButton(e, t) {
      var i = this,
          n = ee({}, t),
          a = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = e.toString();
        return (t = qe(t)).charAt(0).toLowerCase() + t.slice(1);
      }(e),
          s = {
        element: "button",
        toggle: !1,
        label: null,
        icon: null,
        labelPressed: null,
        iconPressed: null
      };

      switch (["element", "icon", "label"].forEach(function (e) {
        Object.keys(n).includes(e) && (s[e] = n[e], delete n[e]);
      }), "button" !== s.element || Object.keys(n).includes("type") || (n.type = "button"), Object.keys(n).includes("class") ? n["class"].split(" ").some(function (e) {
        return e === i.config.classNames.control;
      }) || ee(n, {
        "class": "".concat(n["class"], " ").concat(this.config.classNames.control)
      }) : n["class"] = this.config.classNames.control, e) {
        case "play":
          s.toggle = !0, s.label = "play", s.labelPressed = "pause", s.icon = "play", s.iconPressed = "pause";
          break;

        case "mute":
          s.toggle = !0, s.label = "mute", s.labelPressed = "unmute", s.icon = "volume", s.iconPressed = "muted";
          break;

        case "captions":
          s.toggle = !0, s.label = "enableCaptions", s.labelPressed = "disableCaptions", s.icon = "captions-off", s.iconPressed = "captions-on";
          break;

        case "fullscreen":
          s.toggle = !0, s.label = "enterFullscreen", s.labelPressed = "exitFullscreen", s.icon = "enter-fullscreen", s.iconPressed = "exit-fullscreen";
          break;

        case "play-large":
          n["class"] += " ".concat(this.config.classNames.control, "--overlaid"), a = "play", s.label = "play", s.icon = "play";
          break;

        default:
          X(s.label) && (s.label = a), X(s.icon) && (s.icon = e);
      }

      var r = ne(s.element);
      return s.toggle ? (r.appendChild(Ye.createIcon.call(this, s.iconPressed, {
        "class": "icon--pressed"
      })), r.appendChild(Ye.createIcon.call(this, s.icon, {
        "class": "icon--not-pressed"
      })), r.appendChild(Ye.createLabel.call(this, s.labelPressed, {
        "class": "label--pressed"
      })), r.appendChild(Ye.createLabel.call(this, s.label, {
        "class": "label--not-pressed"
      }))) : (r.appendChild(Ye.createIcon.call(this, s.icon)), r.appendChild(Ye.createLabel.call(this, s.label))), ee(n, le(this.config.selectors.buttons[a], n)), ie(r, n), "play" === a ? (B(this.elements.buttons[a]) || (this.elements.buttons[a] = []), this.elements.buttons[a].push(r)) : this.elements.buttons[a] = r, r;
    },
    createRange: function createRange(e, t) {
      var i = ne("input", ee(le(this.config.selectors.inputs[e]), {
        type: "range",
        min: 0,
        max: 100,
        step: .01,
        value: 0,
        autocomplete: "off",
        role: "slider",
        "aria-label": Fe(e, this.config),
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": 0
      }, t));
      return this.elements.inputs[e] = i, Ye.updateRangeFill.call(this, i), P.setup(i), i;
    },
    createProgress: function createProgress(e, t) {
      var i = ne("progress", ee(le(this.config.selectors.display[e]), {
        min: 0,
        max: 100,
        value: 0,
        role: "progressbar",
        "aria-hidden": !0
      }, t));

      if ("volume" !== e) {
        i.appendChild(ne("span", null, "0"));
        var n = {
          played: "played",
          buffer: "buffered"
        }[e],
            a = n ? Fe(n, this.config) : "";
        i.innerText = "% ".concat(a.toLowerCase());
      }

      return this.elements.display[e] = i, i;
    },
    createTime: function createTime(e, t) {
      var i = le(this.config.selectors.display[e], t),
          n = ne("div", ee(i, {
        "class": "".concat(i["class"] ? i["class"] : "", " ").concat(this.config.classNames.display.time, " ").trim(),
        "aria-label": Fe(e, this.config)
      }), "00:00");
      return this.elements.display[e] = n, n;
    },
    bindMenuItemShortcuts: function bindMenuItemShortcuts(e, t) {
      var i = this;
      ke.call(this, e, "keydown keyup", function (n) {
        if ([32, 38, 39, 40].includes(n.which) && (n.preventDefault(), n.stopPropagation(), "keydown" !== n.type)) {
          var a,
              s = he(e, '[role="menuitemradio"]');
          if (!s && [32, 39].includes(n.which)) Ye.showMenuPanel.call(i, t, !0);else 32 !== n.which && (40 === n.which || s && 39 === n.which ? (a = e.nextElementSibling, W(a) || (a = e.parentNode.firstElementChild)) : (a = e.previousElementSibling, W(a) || (a = e.parentNode.lastElementChild)), fe.call(i, a, !0));
        }
      }, !1), ke.call(this, e, "keyup", function (e) {
        13 === e.which && Ye.focusFirstMenuItem.call(i, null, !0);
      });
    },
    createMenuItem: function createMenuItem(e) {
      var t = this,
          i = e.value,
          n = e.list,
          a = e.type,
          s = e.title,
          r = e.badge,
          o = void 0 === r ? null : r,
          l = e.checked,
          c = void 0 !== l && l,
          u = le(this.config.selectors.inputs[a]),
          d = ne("button", ee(u, {
        type: "button",
        role: "menuitemradio",
        "class": "".concat(this.config.classNames.control, " ").concat(u["class"] ? u["class"] : "").trim(),
        "aria-checked": c,
        value: i
      })),
          h = ne("span");
      h.innerHTML = s, W(o) && h.appendChild(o), d.appendChild(h), Object.defineProperty(d, "checked", {
        enumerable: !0,
        get: function get() {
          return "true" === d.getAttribute("aria-checked");
        },
        set: function set(e) {
          e && Array.from(d.parentNode.children).filter(function (e) {
            return he(e, '[role="menuitemradio"]');
          }).forEach(function (e) {
            return e.setAttribute("aria-checked", "false");
          }), d.setAttribute("aria-checked", e ? "true" : "false");
        }
      }), this.listeners.bind(d, "click keyup", function (e) {
        if (!K(e) || 32 === e.which) {
          switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, a) {
            case "language":
              t.currentTrack = Number(i);
              break;

            case "quality":
              t.quality = i;
              break;

            case "speed":
              t.speed = parseFloat(i);
          }

          Ye.showMenuPanel.call(t, "home", K(e));
        }
      }, a, !1), Ye.bindMenuItemShortcuts.call(this, d, a), n.appendChild(d);
    },
    formatTime: function formatTime() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
      if (!D(e)) return e;
      var i = Ue(this.duration) > 0;
      return Ke(e, i, t);
    },
    updateTimeDisplay: function updateTimeDisplay() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      W(e) && D(t) && (e.innerText = Ye.formatTime(t, i));
    },
    updateVolume: function updateVolume() {
      this.supported.ui && (W(this.elements.inputs.volume) && Ye.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), W(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume));
    },
    setRange: function setRange(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
      W(e) && (e.value = t, Ye.updateRangeFill.call(this, e));
    },
    updateProgress: function updateProgress(e) {
      var t = this;

      if (this.supported.ui && z(e)) {
        var i,
            n,
            a = 0;
        if (e) switch (e.type) {
          case "timeupdate":
          case "seeking":
          case "seeked":
            i = this.currentTime, n = this.duration, a = 0 === i || 0 === n || Number.isNaN(i) || Number.isNaN(n) ? 0 : (i / n * 100).toFixed(2), "timeupdate" === e.type && Ye.setRange.call(this, this.elements.inputs.seek, a);
            break;

          case "playing":
          case "progress":
            !function (e, i) {
              var n = D(i) ? i : 0,
                  a = W(e) ? e : t.elements.display.buffer;

              if (W(a)) {
                a.value = n;
                var s = a.getElementsByTagName("span")[0];
                W(s) && (s.childNodes[0].nodeValue = n);
              }
            }(this.elements.display.buffer, 100 * this.buffered);
        }
      }
    },
    updateRangeFill: function updateRangeFill(e) {
      var t = z(e) ? e.target : e;

      if (W(t) && "range" === t.getAttribute("type")) {
        if (he(t, this.config.selectors.inputs.seek)) {
          t.setAttribute("aria-valuenow", this.currentTime);
          var i = Ye.formatTime(this.currentTime),
              n = Ye.formatTime(this.duration),
              a = Fe("seekLabel", this.config);
          t.setAttribute("aria-valuetext", a.replace("{currentTime}", i).replace("{duration}", n));
        } else if (he(t, this.config.selectors.inputs.volume)) {
          var s = 100 * t.value;
          t.setAttribute("aria-valuenow", s), t.setAttribute("aria-valuetext", "".concat(s.toFixed(1), "%"));
        } else t.setAttribute("aria-valuenow", t.value);

        G.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"));
      }
    },
    updateSeekTooltip: function updateSeekTooltip(e) {
      var t = this;

      if (this.config.tooltips.seek && W(this.elements.inputs.seek) && W(this.elements.display.seekTooltip) && 0 !== this.duration) {
        var i = "".concat(this.config.classNames.tooltip, "--visible"),
            n = function n(e) {
          return ue(t.elements.display.seekTooltip, i, e);
        };

        if (this.touch) n(!1);else {
          var a = 0,
              s = this.elements.progress.getBoundingClientRect();
          if (z(e)) a = 100 / s.width * (e.pageX - s.left);else {
            if (!de(this.elements.display.seekTooltip, i)) return;
            a = parseFloat(this.elements.display.seekTooltip.style.left, 10);
          }
          a < 0 ? a = 0 : a > 100 && (a = 100), Ye.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * a), this.elements.display.seekTooltip.style.left = "".concat(a, "%"), z(e) && ["mouseenter", "mouseleave"].includes(e.type) && n("mouseenter" === e.type);
        }
      }
    },
    timeUpdate: function timeUpdate(e) {
      var t = !W(this.elements.display.duration) && this.config.invertTime;
      Ye.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || Ye.updateProgress.call(this, e);
    },
    durationUpdate: function durationUpdate() {
      if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
        if (this.duration >= Math.pow(2, 32)) return ce(this.elements.display.currentTime, !0), void ce(this.elements.progress, !0);
        W(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
        var e = W(this.elements.display.duration);
        !e && this.config.displayDuration && this.paused && Ye.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && Ye.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), Ye.updateSeekTooltip.call(this);
      }
    },
    toggleMenuButton: function toggleMenuButton(e, t) {
      ce(this.elements.settings.buttons[e], !t);
    },
    updateSetting: function updateSetting(e, t, i) {
      var n = this.elements.settings.panels[e],
          a = null,
          s = t;
      if ("captions" === e) a = this.currentTrack;else {
        if (a = X(i) ? this[e] : i, X(a) && (a = this.config[e]["default"]), !X(this.options[e]) && !this.options[e].includes(a)) return void this.debug.warn("Unsupported value of '".concat(a, "' for ").concat(e));
        if (!this.config[e].options.includes(a)) return void this.debug.warn("Disabled value of '".concat(a, "' for ").concat(e));
      }

      if (W(s) || (s = n && n.querySelector('[role="menu"]')), W(s)) {
        this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = Ye.getLabel.call(this, e, a);
        var r = s && s.querySelector('[value="'.concat(a, '"]'));
        W(r) && (r.checked = !0);
      }
    },
    getLabel: function getLabel(e, t) {
      switch (e) {
        case "speed":
          return 1 === t ? Fe("normal", this.config) : "".concat(t, "&times;");

        case "quality":
          if (D(t)) {
            var i = Fe("qualityLabel.".concat(t), this.config);
            return i.length ? i : "".concat(t, "p");
          }

          return je(t);

        case "captions":
          return Je.getLabel.call(this);

        default:
          return null;
      }
    },
    setQualityMenu: function setQualityMenu(e) {
      var t = this;

      if (W(this.elements.settings.panels.quality)) {
        var i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
        B(e) && (this.options.quality = Le(e).filter(function (e) {
          return t.config.quality.options.includes(e);
        }));
        var n = !X(this.options.quality) && this.options.quality.length > 1;

        if (Ye.toggleMenuButton.call(this, "quality", n), re(i), Ye.checkMenu.call(this), n) {
          var a = function a(e) {
            var i = Fe("qualityBadge.".concat(e), t.config);
            return i.length ? Ye.createBadge.call(t, i) : null;
          };

          this.options.quality.sort(function (e, i) {
            var n = t.config.quality.options;
            return n.indexOf(e) > n.indexOf(i) ? 1 : -1;
          }).forEach(function (e) {
            Ye.createMenuItem.call(t, {
              value: e,
              list: i,
              type: "quality",
              title: Ye.getLabel.call(t, "quality", e),
              badge: a(e)
            });
          }), Ye.updateSetting.call(this, "quality", i);
        }
      }
    },
    setCaptionsMenu: function setCaptionsMenu() {
      var e = this;

      if (W(this.elements.settings.panels.captions)) {
        var t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
            i = Je.getTracks.call(this),
            n = Boolean(i.length);

        if (Ye.toggleMenuButton.call(this, "captions", n), re(t), Ye.checkMenu.call(this), n) {
          var a = i.map(function (i, n) {
            return {
              value: n,
              checked: e.captions.toggled && e.currentTrack === n,
              title: Je.getLabel.call(e, i),
              badge: i.language && Ye.createBadge.call(e, i.language.toUpperCase()),
              list: t,
              type: "language"
            };
          });
          a.unshift({
            value: -1,
            checked: !this.captions.toggled,
            title: Fe("disabled", this.config),
            list: t,
            type: "language"
          }), a.forEach(Ye.createMenuItem.bind(this)), Ye.updateSetting.call(this, "captions", t);
        }
      }
    },
    setSpeedMenu: function setSpeedMenu() {
      var e = this;

      if (W(this.elements.settings.panels.speed)) {
        var t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
        this.options.speed = this.options.speed.filter(function (t) {
          return t >= e.minimumSpeed && t <= e.maximumSpeed;
        });
        var i = !X(this.options.speed) && this.options.speed.length > 1;
        Ye.toggleMenuButton.call(this, "speed", i), re(t), Ye.checkMenu.call(this), i && (this.options.speed.forEach(function (i) {
          Ye.createMenuItem.call(e, {
            value: i,
            list: t,
            type: "speed",
            title: Ye.getLabel.call(e, "speed", i)
          });
        }), Ye.updateSetting.call(this, "speed", t));
      }
    },
    checkMenu: function checkMenu() {
      var e = this.elements.settings.buttons,
          t = !X(e) && Object.values(e).some(function (e) {
        return !e.hidden;
      });
      ce(this.elements.settings.menu, !t);
    },
    focusFirstMenuItem: function focusFirstMenuItem(e) {
      var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

      if (!this.elements.settings.popup.hidden) {
        var i = e;
        W(i) || (i = Object.values(this.elements.settings.panels).find(function (e) {
          return !e.hidden;
        }));
        var n = i.querySelector('[role^="menuitem"]');
        fe.call(this, n, t);
      }
    },
    toggleMenu: function toggleMenu(e) {
      var t = this.elements.settings.popup,
          i = this.elements.buttons.settings;

      if (W(t) && W(i)) {
        var n = t.hidden,
            a = n;
        if (R(e)) a = e;else if (K(e) && 27 === e.which) a = !1;else if (z(e)) {
          var s = V(e.composedPath) ? e.composedPath()[0] : e.target,
              r = t.contains(s);
          if (r || !r && e.target !== i && a) return;
        }
        i.setAttribute("aria-expanded", a), ce(t, !a), ue(this.elements.container, this.config.classNames.menu.open, a), a && K(e) ? Ye.focusFirstMenuItem.call(this, null, !0) : a || n || fe.call(this, i, K(e));
      }
    },
    getMenuSize: function getMenuSize(e) {
      var t = e.cloneNode(!0);
      t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
      var i = t.scrollWidth,
          n = t.scrollHeight;
      return se(t), {
        width: i,
        height: n
      };
    },
    showMenuPanel: function showMenuPanel() {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          n = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));

      if (W(n)) {
        var a = n.parentNode,
            s = Array.from(a.children).find(function (e) {
          return !e.hidden;
        });

        if (ve.transitions && !ve.reducedMotion) {
          a.style.width = "".concat(s.scrollWidth, "px"), a.style.height = "".concat(s.scrollHeight, "px");

          var r = Ye.getMenuSize.call(this, n),
              o = function t(i) {
            i.target === a && ["width", "height"].includes(i.propertyName) && (a.style.width = "", a.style.height = "", Te.call(e, a, J, t));
          };

          ke.call(this, a, J, o), a.style.width = "".concat(r.width, "px"), a.style.height = "".concat(r.height, "px");
        }

        ce(s, !0), ce(n, !1), Ye.focusFirstMenuItem.call(this, n, i);
      }
    },
    setDownloadUrl: function setDownloadUrl() {
      var e = this.elements.buttons.download;
      W(e) && e.setAttribute("href", this.download);
    },
    create: function create(e) {
      var t = this,
          i = Ye.bindMenuItemShortcuts,
          n = Ye.createButton,
          a = Ye.createProgress,
          s = Ye.createRange,
          r = Ye.createTime,
          o = Ye.setQualityMenu,
          l = Ye.setSpeedMenu,
          c = Ye.showMenuPanel;
      this.elements.controls = null, this.config.controls.includes("play-large") && this.elements.container.appendChild(n.call(this, "play-large"));
      var u = ne("div", le(this.config.selectors.controls.wrapper));
      this.elements.controls = u;
      var d = {
        "class": "plyr__controls__item"
      };
      return Le(this.config.controls).forEach(function (o) {
        if ("restart" === o && u.appendChild(n.call(t, "restart", d)), "rewind" === o && u.appendChild(n.call(t, "rewind", d)), "play" === o && u.appendChild(n.call(t, "play", d)), "fast-forward" === o && u.appendChild(n.call(t, "fast-forward", d)), "progress" === o) {
          var l = ne("div", {
            "class": "".concat(d["class"], " plyr__progress__container")
          }),
              h = ne("div", le(t.config.selectors.progress));

          if (h.appendChild(s.call(t, "seek", {
            id: "plyr-seek-".concat(e.id)
          })), h.appendChild(a.call(t, "buffer")), t.config.tooltips.seek) {
            var p = ne("span", {
              "class": t.config.classNames.tooltip
            }, "00:00");
            h.appendChild(p), t.elements.display.seekTooltip = p;
          }

          t.elements.progress = h, l.appendChild(t.elements.progress), u.appendChild(l);
        }

        if ("current-time" === o && u.appendChild(r.call(t, "currentTime", d)), "duration" === o && u.appendChild(r.call(t, "duration", d)), "mute" === o || "volume" === o) {
          var m = t.elements.volume;

          if (W(m) && u.contains(m) || (m = ne("div", ee({}, d, {
            "class": "".concat(d["class"], " plyr__volume").trim()
          })), t.elements.volume = m, u.appendChild(m)), "mute" === o && m.appendChild(n.call(t, "mute")), "volume" === o && !G.isIos) {
            var f = {
              max: 1,
              step: .05,
              value: t.config.volume
            };
            m.appendChild(s.call(t, "volume", ee(f, {
              id: "plyr-volume-".concat(e.id)
            })));
          }
        }

        if ("captions" === o && u.appendChild(n.call(t, "captions", d)), "settings" === o && !X(t.config.settings)) {
          var g = ne("div", ee({}, d, {
            "class": "".concat(d["class"], " plyr__menu").trim(),
            hidden: ""
          }));
          g.appendChild(n.call(t, "settings", {
            "aria-haspopup": !0,
            "aria-controls": "plyr-settings-".concat(e.id),
            "aria-expanded": !1
          }));
          var y = ne("div", {
            "class": "plyr__menu__container",
            id: "plyr-settings-".concat(e.id),
            hidden: ""
          }),
              v = ne("div"),
              b = ne("div", {
            id: "plyr-settings-".concat(e.id, "-home")
          }),
              w = ne("div", {
            role: "menu"
          });
          b.appendChild(w), v.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach(function (n) {
            var a = ne("button", ee(le(t.config.selectors.buttons.settings), {
              type: "button",
              "class": "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
              role: "menuitem",
              "aria-haspopup": !0,
              hidden: ""
            }));
            i.call(t, a, n), ke.call(t, a, "click", function () {
              c.call(t, n, !1);
            });
            var s = ne("span", null, Fe(n, t.config)),
                r = ne("span", {
              "class": t.config.classNames.menu.value
            });
            r.innerHTML = e[n], s.appendChild(r), a.appendChild(s), w.appendChild(a);
            var o = ne("div", {
              id: "plyr-settings-".concat(e.id, "-").concat(n),
              hidden: ""
            }),
                l = ne("button", {
              type: "button",
              "class": "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
            });
            l.appendChild(ne("span", {
              "aria-hidden": !0
            }, Fe(n, t.config))), l.appendChild(ne("span", {
              "class": t.config.classNames.hidden
            }, Fe("menuBack", t.config))), ke.call(t, o, "keydown", function (e) {
              37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0));
            }, !1), ke.call(t, l, "click", function () {
              c.call(t, "home", !1);
            }), o.appendChild(l), o.appendChild(ne("div", {
              role: "menu"
            })), v.appendChild(o), t.elements.settings.buttons[n] = a, t.elements.settings.panels[n] = o;
          }), y.appendChild(v), g.appendChild(y), u.appendChild(g), t.elements.settings.popup = y, t.elements.settings.menu = g;
        }

        if ("pip" === o && ve.pip && u.appendChild(n.call(t, "pip", d)), "airplay" === o && ve.airplay && u.appendChild(n.call(t, "airplay", d)), "download" === o) {
          var k = ee({}, d, {
            element: "a",
            href: t.download,
            target: "_blank"
          });
          t.isHTML5 && (k.download = "");
          var T = t.config.urls.download;
          !Q(T) && t.isEmbed && ee(k, {
            icon: "logo-".concat(t.provider),
            label: t.provider
          }), u.appendChild(n.call(t, "download", k));
        }

        "fullscreen" === o && u.appendChild(n.call(t, "fullscreen", d));
      }), this.isHTML5 && o.call(this, Ie.getQualityOptions.call(this)), l.call(this), u;
    },
    inject: function inject() {
      var e = this;

      if (this.config.loadSprite) {
        var t = Ye.getIconUrl.call(this);
        t.cors && Be(t.url, "sprite-plyr");
      }

      this.id = Math.floor(1e4 * Math.random());
      var i = null;
      this.elements.controls = null;
      var n = {
        id: this.id,
        seektime: this.config.seekTime,
        title: this.config.title
      },
          a = !0;
      V(this.config.controls) && (this.config.controls = this.config.controls.call(this, n)), this.config.controls || (this.config.controls = []), W(this.config.controls) || F(this.config.controls) ? i = this.config.controls : (i = Ye.create.call(this, {
        id: this.id,
        seektime: this.config.seekTime,
        speed: this.speed,
        quality: this.quality,
        captions: Je.getLabel.call(this)
      }), a = !1);

      var s,
          o = function o(e) {
        var t = e;
        return Object.entries(n).forEach(function (e) {
          var i = r(e, 2),
              n = i[0],
              a = i[1];
          t = Oe(t, "{".concat(n, "}"), a);
        }), t;
      };

      if (a && (F(this.config.controls) ? i = o(i) : W(i) && (i.innerHTML = o(i.innerHTML))), F(this.config.selectors.controls.container) && (s = document.querySelector(this.config.selectors.controls.container)), W(s) || (s = this.elements.container), s[W(i) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", i), W(this.elements.controls) || Ye.findElements.call(this), !X(this.elements.buttons)) {
        var l = function l(t) {
          var i = e.config.classNames.controlPressed;
          Object.defineProperty(t, "pressed", {
            enumerable: !0,
            get: function get() {
              return de(t, i);
            },
            set: function set() {
              var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
              ue(t, i, e);
            }
          });
        };

        Object.values(this.elements.buttons).filter(Boolean).forEach(function (e) {
          B(e) || U(e) ? Array.from(e).filter(Boolean).forEach(l) : l(e);
        });
      }

      if (G.isEdge && $(s), this.config.tooltips.controls) {
        var c = this.config,
            u = c.classNames,
            d = c.selectors,
            h = "".concat(d.controls.wrapper, " ").concat(d.labels, " .").concat(u.hidden),
            p = pe.call(this, h);
        Array.from(p).forEach(function (t) {
          ue(t, e.config.classNames.hidden, !1), ue(t, e.config.classNames.tooltip, !0);
        });
      }
    }
  };

  function Qe(e) {
    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
        i = e;

    if (t) {
      var n = document.createElement("a");
      n.href = i, i = n.href;
    }

    try {
      return new URL(i);
    } catch (e) {
      return null;
    }
  }

  function Xe(e) {
    var t = new URLSearchParams();
    return H(e) && Object.entries(e).forEach(function (e) {
      var i = r(e, 2),
          n = i[0],
          a = i[1];
      t.set(n, a);
    }), t;
  }

  var Je = {
    setup: function setup() {
      if (this.supported.ui) if (!this.isVideo || this.isYouTube || this.isHTML5 && !ve.textTracks) B(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && Ye.setCaptionsMenu.call(this);else {
        if (W(this.elements.captions) || (this.elements.captions = ne("div", le(this.config.selectors.captions)), function (e, t) {
          W(e) && W(t) && t.parentNode.insertBefore(e, t.nextSibling);
        }(this.elements.captions, this.elements.wrapper)), G.isIE && window.URL) {
          var e = this.media.querySelectorAll("track");
          Array.from(e).forEach(function (e) {
            var t = e.getAttribute("src"),
                i = Qe(t);
            null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && Ve(t, "blob").then(function (t) {
              e.setAttribute("src", window.URL.createObjectURL(t));
            })["catch"](function () {
              se(e);
            });
          });
        }

        var t = Le((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
          return e.split("-")[0];
        })),
            i = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
        if ("auto" === i) i = r(t, 1)[0];
        var n = this.storage.get("captions");

        if (R(n) || (n = this.config.captions.active), Object.assign(this.captions, {
          toggled: !1,
          active: n,
          language: i,
          languages: t
        }), this.isHTML5) {
          var a = this.config.captions.update ? "addtrack removetrack" : "removetrack";
          ke.call(this, this.media.textTracks, a, Je.update.bind(this));
        }

        setTimeout(Je.update.bind(this), 0);
      }
    },
    update: function update() {
      var e = this,
          t = Je.getTracks.call(this, !0),
          i = this.captions,
          n = i.active,
          a = i.language,
          s = i.meta,
          r = i.currentTrackNode,
          o = Boolean(t.find(function (e) {
        return e.language === a;
      }));
      this.isHTML5 && this.isVideo && t.filter(function (e) {
        return !s.get(e);
      }).forEach(function (t) {
        e.debug.log("Track added", t), s.set(t, {
          "default": "showing" === t.mode
        }), t.mode = "hidden", ke.call(e, t, "cuechange", function () {
          return Je.updateCues.call(e);
        });
      }), (o && this.language !== a || !t.includes(r)) && (Je.setLanguage.call(this, a), Je.toggle.call(this, n && o)), ue(this.elements.container, this.config.classNames.captions.enabled, !X(t)), (this.config.controls || []).includes("settings") && this.config.settings.includes("captions") && Ye.setCaptionsMenu.call(this);
    },
    toggle: function toggle(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

      if (this.supported.ui) {
        var i = this.captions.toggled,
            n = this.config.classNames.captions.active,
            a = q(e) ? !i : e;

        if (a !== i) {
          if (t || (this.captions.active = a, this.storage.set({
            captions: a
          })), !this.language && a && !t) {
            var s = Je.getTracks.call(this),
                r = Je.findTrack.call(this, [this.captions.language].concat(o(this.captions.languages)), !0);
            return this.captions.language = r.language, void Je.set.call(this, s.indexOf(r));
          }

          this.elements.buttons.captions && (this.elements.buttons.captions.pressed = a), ue(this.elements.container, n, a), this.captions.toggled = a, Ye.updateSetting.call(this, "captions"), Ae.call(this, this.media, a ? "captionsenabled" : "captionsdisabled");
        }
      }
    },
    set: function set(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
          i = Je.getTracks.call(this);
      if (-1 !== e) {
        if (D(e)) {
          if (e in i) {
            if (this.captions.currentTrack !== e) {
              this.captions.currentTrack = e;
              var n = i[e],
                  a = n || {},
                  s = a.language;
              this.captions.currentTrackNode = n, Ye.updateSetting.call(this, "captions"), t || (this.captions.language = s, this.storage.set({
                language: s
              })), this.isVimeo && this.embed.enableTextTrack(s), Ae.call(this, this.media, "languagechange");
            }

            Je.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && Je.updateCues.call(this);
          } else this.debug.warn("Track not found", e);
        } else this.debug.warn("Invalid caption argument", e);
      } else Je.toggle.call(this, !1, t);
    },
    setLanguage: function setLanguage(e) {
      var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];

      if (F(e)) {
        var i = e.toLowerCase();
        this.captions.language = i;
        var n = Je.getTracks.call(this),
            a = Je.findTrack.call(this, [i]);
        Je.set.call(this, n.indexOf(a), t);
      } else this.debug.warn("Invalid language argument", e);
    },
    getTracks: function getTracks() {
      var e = this,
          t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
          i = Array.from((this.media || {}).textTracks || []);
      return i.filter(function (i) {
        return !e.isHTML5 || t || e.captions.meta.has(i);
      }).filter(function (e) {
        return ["captions", "subtitles"].includes(e.kind);
      });
    },
    findTrack: function findTrack(e) {
      var t,
          i = this,
          n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          a = Je.getTracks.call(this),
          s = function s(e) {
        return Number((i.captions.meta.get(e) || {})["default"]);
      },
          r = Array.from(a).sort(function (e, t) {
        return s(t) - s(e);
      });

      return e.every(function (e) {
        return !(t = r.find(function (t) {
          return t.language === e;
        }));
      }), t || (n ? r[0] : void 0);
    },
    getCurrentTrack: function getCurrentTrack() {
      return Je.getTracks.call(this)[this.currentTrack];
    },
    getLabel: function getLabel(e) {
      var t = e;
      return !Y(t) && ve.textTracks && this.captions.toggled && (t = Je.getCurrentTrack.call(this)), Y(t) ? X(t.label) ? X(t.language) ? Fe("enabled", this.config) : e.language.toUpperCase() : t.label : Fe("disabled", this.config);
    },
    updateCues: function updateCues(e) {
      if (this.supported.ui) if (W(this.elements.captions)) {
        if (q(e) || Array.isArray(e)) {
          var t = e;

          if (!t) {
            var i = Je.getCurrentTrack.call(this);
            t = Array.from((i || {}).activeCues || []).map(function (e) {
              return e.getCueAsHTML();
            }).map(He);
          }

          var n = t.map(function (e) {
            return e.trim();
          }).join("\n");

          if (n !== this.elements.captions.innerHTML) {
            re(this.elements.captions);
            var a = ne("span", le(this.config.selectors.caption));
            a.innerHTML = n, this.elements.captions.appendChild(a), Ae.call(this, this.media, "cuechange");
          }
        } else this.debug.warn("updateCues: Invalid input", e);
      } else this.debug.warn("No captions element to render to");
    }
  },
      $e = {
    enabled: !0,
    title: "",
    debug: !1,
    autoplay: !1,
    autopause: !0,
    playsinline: !0,
    seekTime: 10,
    volume: 1,
    muted: !1,
    duration: null,
    displayDuration: !0,
    invertTime: !0,
    toggleInvert: !0,
    ratio: null,
    clickToPlay: !0,
    hideControls: !0,
    resetOnEnd: !1,
    disableContextMenu: !0,
    loadSprite: !0,
    iconPrefix: "plyr",
    iconUrl: "https://cdn.plyr.io/3.5.10/plyr.svg",
    blankVideo: "https://cdn.plyr.io/static/blank.mp4",
    quality: {
      "default": 576,
      options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
      forced: !1,
      onChange: null
    },
    loop: {
      active: !1
    },
    speed: {
      selected: 1,
      options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
    },
    keyboard: {
      focused: !0,
      global: !1
    },
    tooltips: {
      controls: !1,
      seek: !0
    },
    captions: {
      active: !1,
      language: "auto",
      update: !1
    },
    fullscreen: {
      enabled: !0,
      fallback: !0,
      iosNative: !1
    },
    storage: {
      enabled: !0,
      key: "plyr"
    },
    controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
    settings: ["captions", "quality", "speed"],
    i18n: {
      restart: "Restart",
      rewind: "Rewind {seektime}s",
      play: "Play",
      pause: "Pause",
      fastForward: "Forward {seektime}s",
      seek: "Seek",
      seekLabel: "{currentTime} of {duration}",
      played: "Played",
      buffered: "Buffered",
      currentTime: "Current time",
      duration: "Duration",
      volume: "Volume",
      mute: "Mute",
      unmute: "Unmute",
      enableCaptions: "Enable captions",
      disableCaptions: "Disable captions",
      download: "Download",
      enterFullscreen: "Enter fullscreen",
      exitFullscreen: "Exit fullscreen",
      frameTitle: "Player for {title}",
      captions: "Captions",
      settings: "Settings",
      pip: "PIP",
      menuBack: "Go back to previous menu",
      speed: "Speed",
      normal: "Normal",
      quality: "Quality",
      loop: "Loop",
      start: "Start",
      end: "End",
      all: "All",
      reset: "Reset",
      disabled: "Disabled",
      enabled: "Enabled",
      advertisement: "Ad",
      qualityBadge: {
        2160: "4K",
        1440: "HD",
        1080: "HD",
        720: "HD",
        576: "SD",
        480: "SD"
      }
    },
    urls: {
      download: null,
      vimeo: {
        sdk: "https://player.vimeo.com/api/player.js",
        iframe: "https://player.vimeo.com/video/{0}?{1}",
        api: "https://vimeo.com/api/v2/video/{0}.json"
      },
      youtube: {
        sdk: "https://www.youtube.com/iframe_api",
        api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
      },
      googleIMA: {
        sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
      }
    },
    listeners: {
      seek: null,
      play: null,
      pause: null,
      restart: null,
      rewind: null,
      fastForward: null,
      mute: null,
      volume: null,
      captions: null,
      download: null,
      fullscreen: null,
      pip: null,
      airplay: null,
      speed: null,
      quality: null,
      loop: null,
      language: null
    },
    events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
    selectors: {
      editable: "input, textarea, select, [contenteditable]",
      container: ".plyr",
      controls: {
        container: null,
        wrapper: ".plyr__controls"
      },
      labels: "[data-plyr]",
      buttons: {
        play: '[data-plyr="play"]',
        pause: '[data-plyr="pause"]',
        restart: '[data-plyr="restart"]',
        rewind: '[data-plyr="rewind"]',
        fastForward: '[data-plyr="fast-forward"]',
        mute: '[data-plyr="mute"]',
        captions: '[data-plyr="captions"]',
        download: '[data-plyr="download"]',
        fullscreen: '[data-plyr="fullscreen"]',
        pip: '[data-plyr="pip"]',
        airplay: '[data-plyr="airplay"]',
        settings: '[data-plyr="settings"]',
        loop: '[data-plyr="loop"]'
      },
      inputs: {
        seek: '[data-plyr="seek"]',
        volume: '[data-plyr="volume"]',
        speed: '[data-plyr="speed"]',
        language: '[data-plyr="language"]',
        quality: '[data-plyr="quality"]'
      },
      display: {
        currentTime: ".plyr__time--current",
        duration: ".plyr__time--duration",
        buffer: ".plyr__progress__buffer",
        loop: ".plyr__progress__loop",
        volume: ".plyr__volume--display"
      },
      progress: ".plyr__progress",
      captions: ".plyr__captions",
      caption: ".plyr__caption"
    },
    classNames: {
      type: "plyr--{0}",
      provider: "plyr--{0}",
      video: "plyr__video-wrapper",
      embed: "plyr__video-embed",
      videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
      embedContainer: "plyr__video-embed__container",
      poster: "plyr__poster",
      posterEnabled: "plyr__poster-enabled",
      ads: "plyr__ads",
      control: "plyr__control",
      controlPressed: "plyr__control--pressed",
      playing: "plyr--playing",
      paused: "plyr--paused",
      stopped: "plyr--stopped",
      loading: "plyr--loading",
      hover: "plyr--hover",
      tooltip: "plyr__tooltip",
      cues: "plyr__cues",
      hidden: "plyr__sr-only",
      hideControls: "plyr--hide-controls",
      isIos: "plyr--is-ios",
      isTouch: "plyr--is-touch",
      uiSupported: "plyr--full-ui",
      noTransition: "plyr--no-transition",
      display: {
        time: "plyr__time"
      },
      menu: {
        value: "plyr__menu__value",
        badge: "plyr__badge",
        open: "plyr--menu-open"
      },
      captions: {
        enabled: "plyr--captions-enabled",
        active: "plyr--captions-active"
      },
      fullscreen: {
        enabled: "plyr--fullscreen-enabled",
        fallback: "plyr--fullscreen-fallback"
      },
      pip: {
        supported: "plyr--pip-supported",
        active: "plyr--pip-active"
      },
      airplay: {
        supported: "plyr--airplay-supported",
        active: "plyr--airplay-active"
      },
      tabFocus: "plyr__tab-focus",
      previewThumbnails: {
        thumbContainer: "plyr__preview-thumb",
        thumbContainerShown: "plyr__preview-thumb--is-shown",
        imageContainer: "plyr__preview-thumb__image-container",
        timeContainer: "plyr__preview-thumb__time-container",
        scrubbingContainer: "plyr__preview-scrubbing",
        scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
      }
    },
    attributes: {
      embed: {
        provider: "data-plyr-provider",
        id: "data-plyr-embed-id"
      }
    },
    ads: {
      enabled: !1,
      publisherId: "",
      tagUrl: ""
    },
    previewThumbnails: {
      enabled: !1,
      src: ""
    },
    vimeo: {
      byline: !1,
      portrait: !1,
      title: !1,
      speed: !0,
      transparent: !1,
      sidedock: !1,
      controls: !1,
      referrerPolicy: null
    },
    youtube: {
      noCookie: !1,
      rel: 0,
      showinfo: 0,
      iv_load_policy: 3,
      modestbranding: 1
    }
  },
      Ge = "picture-in-picture",
      Ze = "inline",
      et = {
    html5: "html5",
    youtube: "youtube",
    vimeo: "vimeo"
  },
      tt = "audio",
      it = "video";

  var nt = function nt() {},
      at = function () {
    function t() {
      var i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      e(this, t), this.enabled = window.console && i, this.enabled && this.log("Debugging enabled");
    }

    return i(t, [{
      key: "log",
      get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.log, console) : nt;
      }
    }, {
      key: "warn",
      get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.warn, console) : nt;
      }
    }, {
      key: "error",
      get: function get() {
        return this.enabled ? Function.prototype.bind.call(console.error, console) : nt;
      }
    }]), t;
  }(),
      st = function () {
    function t(i) {
      var n = this;
      e(this, t), this.player = i, this.prefix = t.prefix, this.property = t.property, this.scrollPosition = {
        x: 0,
        y: 0
      }, this.forceFallback = "force" === i.config.fullscreen.fallback, ke.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function () {
        n.onChange();
      }), ke.call(this.player, this.player.elements.container, "dblclick", function (e) {
        W(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.toggle();
      }), ke.call(this, this.player.elements.container, "keydown", function (e) {
        return n.trapFocus(e);
      }), this.update();
    }

    return i(t, [{
      key: "onChange",
      value: function value() {
        if (this.enabled) {
          var e = this.player.elements.buttons.fullscreen;
          W(e) && (e.pressed = this.active), Ae.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0);
        }
      }
    }, {
      key: "toggleFallback",
      value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];

        if (e ? this.scrollPosition = {
          x: window.scrollX || 0,
          y: window.scrollY || 0
        } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", ue(this.target, this.player.config.classNames.fullscreen.fallback, e), G.isIos) {
          var t = document.head.querySelector('meta[name="viewport"]'),
              i = "viewport-fit=cover";
          t || (t = document.createElement("meta")).setAttribute("name", "viewport");
          var n = F(t.content) && t.content.includes(i);
          e ? (this.cleanupViewport = !n, n || (t.content += ",".concat(i))) : this.cleanupViewport && (t.content = t.content.split(",").filter(function (e) {
            return e.trim() !== i;
          }).join(","));
        }

        this.onChange();
      }
    }, {
      key: "trapFocus",
      value: function value(e) {
        if (!G.isIos && this.active && "Tab" === e.key && 9 === e.keyCode) {
          var t = document.activeElement,
              i = pe.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
              n = r(i, 1)[0],
              a = i[i.length - 1];
          t !== a || e.shiftKey ? t === n && e.shiftKey && (a.focus(), e.preventDefault()) : (n.focus(), e.preventDefault());
        }
      }
    }, {
      key: "update",
      value: function value() {
        var e;
        this.enabled ? (e = this.forceFallback ? "Fallback (forced)" : t["native"] ? "Native" : "Fallback", this.player.debug.log("".concat(e, " fullscreen enabled"))) : this.player.debug.log("Fullscreen not supported and fallback disabled");
        ue(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled);
      }
    }, {
      key: "enter",
      value: function value() {
        this.enabled && (G.isIos && this.player.config.fullscreen.iosNative ? this.target.webkitEnterFullscreen() : !t["native"] || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? X(this.prefix) || this.target["".concat(this.prefix, "Request").concat(this.property)]() : this.target.requestFullscreen({
          navigationUI: "hide"
        }));
      }
    }, {
      key: "exit",
      value: function value() {
        if (this.enabled) if (G.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();else if (!t["native"] || this.forceFallback) this.toggleFallback(!1);else if (this.prefix) {
          if (!X(this.prefix)) {
            var e = "moz" === this.prefix ? "Cancel" : "Exit";
            document["".concat(this.prefix).concat(e).concat(this.property)]();
          }
        } else (document.cancelFullScreen || document.exitFullscreen).call(document);
      }
    }, {
      key: "toggle",
      value: function value() {
        this.active ? this.exit() : this.enter();
      }
    }, {
      key: "usingNative",
      get: function get() {
        return t["native"] && !this.forceFallback;
      }
    }, {
      key: "enabled",
      get: function get() {
        return (t["native"] || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo;
      }
    }, {
      key: "active",
      get: function get() {
        return !!this.enabled && (!t["native"] || this.forceFallback ? de(this.target, this.player.config.classNames.fullscreen.fallback) : (this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement) === this.target);
      }
    }, {
      key: "target",
      get: function get() {
        return G.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container;
      }
    }], [{
      key: "native",
      get: function get() {
        return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled);
      }
    }, {
      key: "prefix",
      get: function get() {
        if (V(document.exitFullscreen)) return "";
        var e = "";
        return ["webkit", "moz", "ms"].some(function (t) {
          return !(!V(document["".concat(t, "ExitFullscreen")]) && !V(document["".concat(t, "CancelFullScreen")])) && (e = t, !0);
        }), e;
      }
    }, {
      key: "property",
      get: function get() {
        return "moz" === this.prefix ? "FullScreen" : "Fullscreen";
      }
    }]), t;
  }();

  function rt(e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    return new Promise(function (i, n) {
      var a = new Image(),
          s = function s() {
        delete a.onload, delete a.onerror, (a.naturalWidth >= t ? i : n)(a);
      };

      Object.assign(a, {
        onload: s,
        onerror: s,
        src: e
      });
    });
  }

  var ot = {
    addStyleHook: function addStyleHook() {
      ue(this.elements.container, this.config.selectors.container.replace(".", ""), !0), ue(this.elements.container, this.config.classNames.uiSupported, this.supported.ui);
    },
    toggleNativeControls: function toggleNativeControls() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls");
    },
    build: function build() {
      var e = this;
      if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void ot.toggleNativeControls.call(this, !0);
      W(this.elements.controls) || (Ye.inject.call(this), this.listeners.controls()), ot.toggleNativeControls.call(this), this.isHTML5 && Je.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, Ye.updateVolume.call(this), Ye.timeUpdate.call(this), ot.checkPlaying.call(this), ue(this.elements.container, this.config.classNames.pip.supported, ve.pip && this.isHTML5 && this.isVideo), ue(this.elements.container, this.config.classNames.airplay.supported, ve.airplay && this.isHTML5), ue(this.elements.container, this.config.classNames.isIos, G.isIos), ue(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
        Ae.call(e, e.media, "ready");
      }, 0), ot.setTitle.call(this), this.poster && ot.setPoster.call(this, this.poster, !1)["catch"](function () {}), this.config.duration && Ye.durationUpdate.call(this);
    },
    setTitle: function setTitle() {
      var e = Fe("play", this.config);

      if (F(this.config.title) && !X(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function (t) {
        t.setAttribute("aria-label", e);
      }), this.isEmbed) {
        var t = me.call(this, "iframe");
        if (!W(t)) return;
        var i = X(this.config.title) ? "video" : this.config.title,
            n = Fe("frameTitle", this.config);
        t.setAttribute("title", n.replace("{title}", i));
      }
    },
    togglePoster: function togglePoster(e) {
      ue(this.elements.container, this.config.classNames.posterEnabled, e);
    },
    setPoster: function setPoster(e) {
      var t = this,
          i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
      return i && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("poster", e), this.isHTML5 ? Promise.resolve(e) : Se.call(this).then(function () {
        return rt(e);
      })["catch"](function (i) {
        throw e === t.poster && ot.togglePoster.call(t, !1), i;
      }).then(function () {
        if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster");
      }).then(function () {
        return Object.assign(t.elements.poster.style, {
          backgroundImage: "url('".concat(e, "')"),
          backgroundSize: ""
        }), ot.togglePoster.call(t, !0), e;
      }));
    },
    checkPlaying: function checkPlaying(e) {
      var t = this;
      ue(this.elements.container, this.config.classNames.playing, this.playing), ue(this.elements.container, this.config.classNames.paused, this.paused), ue(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
        Object.assign(e, {
          pressed: t.playing
        }), e.setAttribute("aria-label", Fe(t.playing ? "pause" : "play", t.config));
      }), z(e) && "timeupdate" === e.type || ot.toggleControls.call(this);
    },
    checkLoading: function checkLoading(e) {
      var t = this;
      this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
        ue(t.elements.container, t.config.classNames.loading, t.loading), ot.toggleControls.call(t);
      }, this.loading ? 250 : 0);
    },
    toggleControls: function toggleControls(e) {
      var t = this.elements.controls;

      if (t && this.config.hideControls) {
        var i = this.touch && this.lastSeekTime + 2e3 > Date.now();
        this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i));
      }
    }
  },
      lt = function () {
    function t(i) {
      e(this, t), this.player = i, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this);
    }

    return i(t, [{
      key: "handleKey",
      value: function value(e) {
        var t = this.player,
            i = t.elements,
            n = e.keyCode ? e.keyCode : e.which,
            a = "keydown" === e.type,
            s = a && n === this.lastKey;

        if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && D(n)) {
          if (a) {
            var r = document.activeElement;

            if (W(r)) {
              var o = t.config.selectors.editable;
              if (r !== i.inputs.seek && he(r, o)) return;
              if (32 === e.which && he(r, 'button, [role^="menuitem"]')) return;
            }

            switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
              case 48:
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                s || (t.currentTime = t.duration / 10 * (n - 48));
                break;

              case 32:
              case 75:
                s || t.togglePlay();
                break;

              case 38:
                t.increaseVolume(.1);
                break;

              case 40:
                t.decreaseVolume(.1);
                break;

              case 77:
                s || (t.muted = !t.muted);
                break;

              case 39:
                t.forward();
                break;

              case 37:
                t.rewind();
                break;

              case 70:
                t.fullscreen.toggle();
                break;

              case 67:
                s || t.toggleCaptions();
                break;

              case 76:
                t.loop = !t.loop;
            }

            27 === n && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = n;
          } else this.lastKey = null;
        }
      }
    }, {
      key: "toggleMenu",
      value: function value(e) {
        Ye.toggleMenu.call(this.player, e);
      }
    }, {
      key: "firstTouch",
      value: function value() {
        var e = this.player,
            t = e.elements;
        e.touch = !0, ue(t.container, e.config.classNames.isTouch, !0);
      }
    }, {
      key: "setTabFocus",
      value: function value(e) {
        var t = this.player,
            i = t.elements;

        if (clearTimeout(this.focusTimer), "keydown" !== e.type || 9 === e.which) {
          "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
          var n,
              a = e.timeStamp - this.lastKeyDown <= 20;
          if ("focus" !== e.type || a) n = t.config.classNames.tabFocus, ue(pe.call(t, ".".concat(n)), n, !1), this.focusTimer = setTimeout(function () {
            var e = document.activeElement;
            i.container.contains(e) && ue(document.activeElement, t.config.classNames.tabFocus, !0);
          }, 10);
        }
      }
    }, {
      key: "global",
      value: function value() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = this.player;
        t.config.keyboard.global && we.call(t, window, "keydown keyup", this.handleKey, e, !1), we.call(t, document.body, "click", this.toggleMenu, e), Ce.call(t, document.body, "touchstart", this.firstTouch), we.call(t, document.body, "keydown focus blur", this.setTabFocus, e, !1, !0);
      }
    }, {
      key: "container",
      value: function value() {
        var e = this.player,
            t = e.config,
            i = e.elements,
            n = e.timers;
        !t.keyboard.global && t.keyboard.focused && ke.call(e, i.container, "keydown keyup", this.handleKey, !1), ke.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (t) {
          var a = i.controls;
          a && "enterfullscreen" === t.type && (a.pressed = !1, a.hover = !1);
          var s = 0;
          ["touchstart", "touchmove", "mousemove"].includes(t.type) && (ot.toggleControls.call(e, !0), s = e.touch ? 3e3 : 2e3), clearTimeout(n.controls), n.controls = setTimeout(function () {
            return ot.toggleControls.call(e, !1);
          }, s);
        });

        var a = function a(t) {
          if (!t) return xe.call(e);
          var n = i.container.getBoundingClientRect(),
              a = n.width,
              s = n.height;
          return xe.call(e, "".concat(a, ":").concat(s));
        },
            s = function s() {
          clearTimeout(n.resized), n.resized = setTimeout(a, 50);
        };

        ke.call(e, i.container, "enterfullscreen exitfullscreen", function (t) {
          var n = e.fullscreen,
              o = n.target,
              l = n.usingNative;

          if (o === i.container && (e.isEmbed || !X(e.config.ratio))) {
            var c = "enterfullscreen" === t.type,
                u = a(c);
            u.padding;
            !function (t, i, n) {
              if (e.isVimeo) {
                var a = e.elements.wrapper.firstChild,
                    s = r(t, 2)[1],
                    o = r(Ne.call(e), 2),
                    l = o[0],
                    c = o[1];
                a.style.maxWidth = n ? "".concat(s / c * l, "px") : null, a.style.margin = n ? "0 auto" : null;
              }
            }(u.ratio, 0, c), l || (c ? ke.call(e, window, "resize", s) : Te.call(e, window, "resize", s));
          }
        });
      }
    }, {
      key: "media",
      value: function value() {
        var e = this,
            t = this.player,
            i = t.elements;

        if (ke.call(t, t.media, "timeupdate seeking seeked", function (e) {
          return Ye.timeUpdate.call(t, e);
        }), ke.call(t, t.media, "durationchange loadeddata loadedmetadata", function (e) {
          return Ye.durationUpdate.call(t, e);
        }), ke.call(t, t.media, "ended", function () {
          t.isHTML5 && t.isVideo && t.config.resetOnEnd && (t.restart(), t.pause());
        }), ke.call(t, t.media, "progress playing seeking seeked", function (e) {
          return Ye.updateProgress.call(t, e);
        }), ke.call(t, t.media, "volumechange", function (e) {
          return Ye.updateVolume.call(t, e);
        }), ke.call(t, t.media, "playing play pause ended emptied timeupdate", function (e) {
          return ot.checkPlaying.call(t, e);
        }), ke.call(t, t.media, "waiting canplay seeked playing", function (e) {
          return ot.checkLoading.call(t, e);
        }), t.supported.ui && t.config.clickToPlay && !t.isAudio) {
          var n = me.call(t, ".".concat(t.config.classNames.video));
          if (!W(n)) return;
          ke.call(t, i.container, "click", function (a) {
            ([i.container, n].includes(a.target) || n.contains(a.target)) && (t.touch && t.config.hideControls || (t.ended ? (e.proxy(a, t.restart, "restart"), e.proxy(a, t.play, "play")) : e.proxy(a, t.togglePlay, "play")));
          });
        }

        t.supported.ui && t.config.disableContextMenu && ke.call(t, i.wrapper, "contextmenu", function (e) {
          e.preventDefault();
        }, !1), ke.call(t, t.media, "volumechange", function () {
          t.storage.set({
            volume: t.volume,
            muted: t.muted
          });
        }), ke.call(t, t.media, "ratechange", function () {
          Ye.updateSetting.call(t, "speed"), t.storage.set({
            speed: t.speed
          });
        }), ke.call(t, t.media, "qualitychange", function (e) {
          Ye.updateSetting.call(t, "quality", null, e.detail.quality);
        }), ke.call(t, t.media, "ready qualitychange", function () {
          Ye.setDownloadUrl.call(t);
        });
        var a = t.config.events.concat(["keyup", "keydown"]).join(" ");
        ke.call(t, t.media, a, function (e) {
          var n = e.detail,
              a = void 0 === n ? {} : n;
          "error" === e.type && (a = t.media.error), Ae.call(t, i.container, e.type, !0, a);
        });
      }
    }, {
      key: "proxy",
      value: function value(e, t, i) {
        var n = this.player,
            a = n.config.listeners[i],
            s = !0;
        V(a) && (s = a.call(n, e)), !1 !== s && V(t) && t.call(n, e);
      }
    }, {
      key: "bind",
      value: function value(e, t, i, n) {
        var a = this,
            s = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            r = this.player,
            o = r.config.listeners[n],
            l = V(o);
        ke.call(r, e, t, function (e) {
          return a.proxy(e, i, n);
        }, s && !l);
      }
    }, {
      key: "controls",
      value: function value() {
        var e = this,
            t = this.player,
            i = t.elements,
            n = G.isIE ? "change" : "input";

        if (i.buttons.play && Array.from(i.buttons.play).forEach(function (i) {
          e.bind(i, "click", t.togglePlay, "play");
        }), this.bind(i.buttons.restart, "click", t.restart, "restart"), this.bind(i.buttons.rewind, "click", t.rewind, "rewind"), this.bind(i.buttons.fastForward, "click", t.forward, "fastForward"), this.bind(i.buttons.mute, "click", function () {
          t.muted = !t.muted;
        }, "mute"), this.bind(i.buttons.captions, "click", function () {
          return t.toggleCaptions();
        }), this.bind(i.buttons.download, "click", function () {
          Ae.call(t, t.media, "download");
        }, "download"), this.bind(i.buttons.fullscreen, "click", function () {
          t.fullscreen.toggle();
        }, "fullscreen"), this.bind(i.buttons.pip, "click", function () {
          t.pip = "toggle";
        }, "pip"), this.bind(i.buttons.airplay, "click", t.airplay, "airplay"), this.bind(i.buttons.settings, "click", function (e) {
          e.stopPropagation(), e.preventDefault(), Ye.toggleMenu.call(t, e);
        }, null, !1), this.bind(i.buttons.settings, "keyup", function (e) {
          var i = e.which;
          [13, 32].includes(i) && (13 !== i ? (e.preventDefault(), e.stopPropagation(), Ye.toggleMenu.call(t, e)) : Ye.focusFirstMenuItem.call(t, null, !0));
        }, null, !1), this.bind(i.settings.menu, "keydown", function (e) {
          27 === e.which && Ye.toggleMenu.call(t, e);
        }), this.bind(i.inputs.seek, "mousedown mousemove", function (e) {
          var t = i.progress.getBoundingClientRect(),
              n = 100 / t.width * (e.pageX - t.left);
          e.currentTarget.setAttribute("seek-value", n);
        }), this.bind(i.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (e) {
          var i = e.currentTarget,
              n = e.keyCode ? e.keyCode : e.which;

          if (!K(e) || 39 === n || 37 === n) {
            t.lastSeekTime = Date.now();
            var a = i.hasAttribute("play-on-seeked"),
                s = ["mouseup", "touchend", "keyup"].includes(e.type);
            a && s ? (i.removeAttribute("play-on-seeked"), t.play()) : !s && t.playing && (i.setAttribute("play-on-seeked", ""), t.pause());
          }
        }), G.isIos) {
          var a = pe.call(t, 'input[type="range"]');
          Array.from(a).forEach(function (t) {
            return e.bind(t, n, function (e) {
              return $(e.target);
            });
          });
        }

        this.bind(i.inputs.seek, n, function (e) {
          var i = e.currentTarget,
              n = i.getAttribute("seek-value");
          X(n) && (n = i.value), i.removeAttribute("seek-value"), t.currentTime = n / i.max * t.duration;
        }, "seek"), this.bind(i.progress, "mouseenter mouseleave mousemove", function (e) {
          return Ye.updateSeekTooltip.call(t, e);
        }), this.bind(i.progress, "mousemove touchmove", function (e) {
          var i = t.previewThumbnails;
          i && i.loaded && i.startMove(e);
        }), this.bind(i.progress, "mouseleave touchend click", function () {
          var e = t.previewThumbnails;
          e && e.loaded && e.endMove(!1, !0);
        }), this.bind(i.progress, "mousedown touchstart", function (e) {
          var i = t.previewThumbnails;
          i && i.loaded && i.startScrubbing(e);
        }), this.bind(i.progress, "mouseup touchend", function (e) {
          var i = t.previewThumbnails;
          i && i.loaded && i.endScrubbing(e);
        }), G.isWebkit && Array.from(pe.call(t, 'input[type="range"]')).forEach(function (i) {
          e.bind(i, "input", function (e) {
            return Ye.updateRangeFill.call(t, e.target);
          });
        }), t.config.toggleInvert && !W(i.display.duration) && this.bind(i.display.currentTime, "click", function () {
          0 !== t.currentTime && (t.config.invertTime = !t.config.invertTime, Ye.timeUpdate.call(t));
        }), this.bind(i.inputs.volume, n, function (e) {
          t.volume = e.target.value;
        }, "volume"), this.bind(i.controls, "mouseenter mouseleave", function (e) {
          i.controls.hover = !t.touch && "mouseenter" === e.type;
        }), this.bind(i.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
          i.controls.pressed = ["mousedown", "touchstart"].includes(e.type);
        }), this.bind(i.controls, "focusin", function () {
          var n = t.config,
              a = t.timers;
          ue(i.controls, n.classNames.noTransition, !0), ot.toggleControls.call(t, !0), setTimeout(function () {
            ue(i.controls, n.classNames.noTransition, !1);
          }, 0);
          var s = e.touch ? 3e3 : 4e3;
          clearTimeout(a.controls), a.controls = setTimeout(function () {
            return ot.toggleControls.call(t, !1);
          }, s);
        }), this.bind(i.inputs.volume, "wheel", function (e) {
          var i = e.webkitDirectionInvertedFromDevice,
              n = r([e.deltaX, -e.deltaY].map(function (e) {
            return i ? -e : e;
          }), 2),
              a = n[0],
              s = n[1],
              o = Math.sign(Math.abs(a) > Math.abs(s) ? a : s);
          t.increaseVolume(o / 50);
          var l = t.media.volume;
          (1 === o && l < 1 || -1 === o && l > 0) && e.preventDefault();
        }, "volume", !1);
      }
    }]), t;
  }();

  "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;

  var ct = function (e, t) {
    return e(t = {
      exports: {}
    }, t.exports), t.exports;
  }(function (e, t) {
    e.exports = function () {
      var e = function e() {},
          t = {},
          i = {},
          n = {};

      function a(e, t) {
        if (e) {
          var a = n[e];
          if (i[e] = t, a) for (; a.length;) {
            a[0](e, t), a.splice(0, 1);
          }
        }
      }

      function s(t, i) {
        t.call && (t = {
          success: t
        }), i.length ? (t.error || e)(i) : (t.success || e)(t);
      }

      function r(t, i, n, a) {
        var s,
            o,
            l = document,
            c = n.async,
            u = (n.numRetries || 0) + 1,
            d = n.before || e,
            h = t.replace(/[\?|#].*$/, ""),
            p = t.replace(/^(css|img)!/, "");
        a = a || 0, /(^css!|\.css$)/.test(h) ? ((o = l.createElement("link")).rel = "stylesheet", o.href = p, (s = "hideFocus" in o) && o.relList && (s = 0, o.rel = "preload", o.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (o = l.createElement("img")).src = p : ((o = l.createElement("script")).src = t, o.async = void 0 === c || c), o.onload = o.onerror = o.onbeforeload = function (e) {
          var l = e.type[0];
          if (s) try {
            o.sheet.cssText.length || (l = "e");
          } catch (e) {
            18 != e.code && (l = "e");
          }

          if ("e" == l) {
            if ((a += 1) < u) return r(t, i, n, a);
          } else if ("preload" == o.rel && "style" == o.as) return o.rel = "stylesheet";

          i(t, l, e.defaultPrevented);
        }, !1 !== d(t, o) && l.head.appendChild(o);
      }

      function o(e, i, n) {
        var o, l;

        if (i && i.trim && (o = i), l = (o ? n : i) || {}, o) {
          if (o in t) throw "LoadJS";
          t[o] = !0;
        }

        function c(t, i) {
          !function (e, t, i) {
            var n,
                a,
                s = (e = e.push ? e : [e]).length,
                o = s,
                l = [];

            for (n = function n(e, i, _n) {
              if ("e" == i && l.push(e), "b" == i) {
                if (!_n) return;
                l.push(e);
              }

              --s || t(l);
            }, a = 0; a < o; a++) {
              r(e[a], n, i);
            }
          }(e, function (e) {
            s(l, e), t && s({
              success: t,
              error: i
            }, e), a(o, e);
          }, l);
        }

        if (l.returnPromise) return new Promise(c);
        c();
      }

      return o.ready = function (e, t) {
        return function (e, t) {
          e = e.push ? e : [e];
          var a,
              s,
              r,
              o = [],
              l = e.length,
              c = l;

          for (a = function a(e, i) {
            i.length && o.push(e), --c || t(o);
          }; l--;) {
            s = e[l], (r = i[s]) ? a(s, r) : (n[s] = n[s] || []).push(a);
          }
        }(e, function (e) {
          s(t, e);
        }), o;
      }, o.done = function (e) {
        a(e, []);
      }, o.reset = function () {
        t = {}, i = {}, n = {};
      }, o.isDefined = function (e) {
        return e in t;
      }, o;
    }();
  });

  function ut(e) {
    return new Promise(function (t, i) {
      ct(e, {
        success: t,
        error: i
      });
    });
  }

  function dt(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Ae.call(this, this.media, e ? "play" : "pause"));
  }

  var ht = {
    setup: function setup() {
      var e = this;
      ue(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, xe.call(e), H(window.Vimeo) ? ht.ready.call(e) : ut(e.config.urls.vimeo.sdk).then(function () {
        ht.ready.call(e);
      })["catch"](function (t) {
        e.debug.warn("Vimeo SDK (player.js) failed to load", t);
      });
    },
    ready: function ready() {
      var e = this,
          t = this,
          i = t.config.vimeo,
          n = Xe(ee({}, {
        loop: t.config.loop.active,
        autoplay: t.autoplay,
        muted: t.muted,
        gesture: "media",
        playsinline: !this.config.fullscreen.iosNative
      }, i)),
          a = t.media.getAttribute("src");
      X(a) && (a = t.media.getAttribute(t.config.attributes.embed.id));

      var s,
          o = X(s = a) ? null : D(Number(s)) ? s : s.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : s,
          l = ne("iframe"),
          c = _e(t.config.urls.vimeo.iframe, o, n);

      l.setAttribute("src", c), l.setAttribute("allowfullscreen", ""), l.setAttribute("allowtransparency", ""), l.setAttribute("allow", "autoplay"), X(i.referrerPolicy) || l.setAttribute("referrerPolicy", i.referrerPolicy);
      var u = ne("div", {
        poster: t.poster,
        "class": t.config.classNames.embedContainer
      });
      u.appendChild(l), t.media = oe(u, t.media), Ve(_e(t.config.urls.vimeo.api, o), "json").then(function (e) {
        if (!X(e)) {
          var i = new URL(e[0].thumbnail_large);
          i.pathname = "".concat(i.pathname.split("_")[0], ".jpg"), ot.setPoster.call(t, i.href)["catch"](function () {});
        }
      }), t.embed = new window.Vimeo.Player(l, {
        autopause: t.config.autopause,
        muted: t.muted
      }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
        return dt.call(t, !0), t.embed.play();
      }, t.media.pause = function () {
        return dt.call(t, !1), t.embed.pause();
      }, t.media.stop = function () {
        t.pause(), t.currentTime = 0;
      };
      var d = t.media.currentTime;
      Object.defineProperty(t.media, "currentTime", {
        get: function get() {
          return d;
        },
        set: function set(e) {
          var i = t.embed,
              n = t.media,
              a = t.paused,
              s = t.volume,
              r = a && !i.hasPlayed;
          n.seeking = !0, Ae.call(t, n, "seeking"), Promise.resolve(r && i.setVolume(0)).then(function () {
            return i.setCurrentTime(e);
          }).then(function () {
            return r && i.pause();
          }).then(function () {
            return r && i.setVolume(s);
          })["catch"](function () {});
        }
      });
      var h = t.config.speed.selected;
      Object.defineProperty(t.media, "playbackRate", {
        get: function get() {
          return h;
        },
        set: function set(e) {
          t.embed.setPlaybackRate(e).then(function () {
            h = e, Ae.call(t, t.media, "ratechange");
          });
        }
      });
      var p = t.config.volume;
      Object.defineProperty(t.media, "volume", {
        get: function get() {
          return p;
        },
        set: function set(e) {
          t.embed.setVolume(e).then(function () {
            p = e, Ae.call(t, t.media, "volumechange");
          });
        }
      });
      var m = t.config.muted;
      Object.defineProperty(t.media, "muted", {
        get: function get() {
          return m;
        },
        set: function set(e) {
          var i = !!R(e) && e;
          t.embed.setVolume(i ? 0 : t.config.volume).then(function () {
            m = i, Ae.call(t, t.media, "volumechange");
          });
        }
      });
      var f,
          g = t.config.loop;
      Object.defineProperty(t.media, "loop", {
        get: function get() {
          return g;
        },
        set: function set(e) {
          var i = R(e) ? e : t.config.loop.active;
          t.embed.setLoop(i).then(function () {
            g = i;
          });
        }
      }), t.embed.getVideoUrl().then(function (e) {
        f = e, Ye.setDownloadUrl.call(t);
      })["catch"](function (t) {
        e.debug.warn(t);
      }), Object.defineProperty(t.media, "currentSrc", {
        get: function get() {
          return f;
        }
      }), Object.defineProperty(t.media, "ended", {
        get: function get() {
          return t.currentTime === t.duration;
        }
      }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function (i) {
        var n = r(i, 2),
            a = n[0],
            s = n[1];
        t.embed.ratio = [a, s], xe.call(e);
      }), t.embed.setAutopause(t.config.autopause).then(function (e) {
        t.config.autopause = e;
      }), t.embed.getVideoTitle().then(function (i) {
        t.config.title = i, ot.setTitle.call(e);
      }), t.embed.getCurrentTime().then(function (e) {
        d = e, Ae.call(t, t.media, "timeupdate");
      }), t.embed.getDuration().then(function (e) {
        t.media.duration = e, Ae.call(t, t.media, "durationchange");
      }), t.embed.getTextTracks().then(function (e) {
        t.media.textTracks = e, Je.setup.call(t);
      }), t.embed.on("cuechange", function (e) {
        var i = e.cues,
            n = (void 0 === i ? [] : i).map(function (e) {
          return function (e) {
            var t = document.createDocumentFragment(),
                i = document.createElement("div");
            return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText;
          }(e.text);
        });
        Je.updateCues.call(t, n);
      }), t.embed.on("loaded", function () {
        (t.embed.getPaused().then(function (e) {
          dt.call(t, !e), e || Ae.call(t, t.media, "playing");
        }), W(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1);
      }), t.embed.on("bufferstart", function () {
        Ae.call(t, t.media, "waiting");
      }), t.embed.on("bufferend", function () {
        Ae.call(t, t.media, "playing");
      }), t.embed.on("play", function () {
        dt.call(t, !0), Ae.call(t, t.media, "playing");
      }), t.embed.on("pause", function () {
        dt.call(t, !1);
      }), t.embed.on("timeupdate", function (e) {
        t.media.seeking = !1, d = e.seconds, Ae.call(t, t.media, "timeupdate");
      }), t.embed.on("progress", function (e) {
        t.media.buffered = e.percent, Ae.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && Ae.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function (e) {
          e !== t.media.duration && (t.media.duration = e, Ae.call(t, t.media, "durationchange"));
        });
      }), t.embed.on("seeked", function () {
        t.media.seeking = !1, Ae.call(t, t.media, "seeked");
      }), t.embed.on("ended", function () {
        t.media.paused = !0, Ae.call(t, t.media, "ended");
      }), t.embed.on("error", function (e) {
        t.media.error = e, Ae.call(t, t.media, "error");
      }), setTimeout(function () {
        return ot.build.call(t);
      }, 0);
    }
  };

  function pt(e) {
    e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Ae.call(this, this.media, e ? "play" : "pause"));
  }

  function mt(e) {
    return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0;
  }

  var ft = {
    setup: function setup() {
      var e = this;
      if (ue(this.elements.wrapper, this.config.classNames.embed, !0), H(window.YT) && V(window.YT.Player)) ft.ready.call(this);else {
        var t = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = function () {
          V(t) && t(), ft.ready.call(e);
        }, ut(this.config.urls.youtube.sdk)["catch"](function (t) {
          e.debug.warn("YouTube API failed to load", t);
        });
      }
    },
    getTitle: function getTitle(e) {
      var t = this;
      Ve(_e(this.config.urls.youtube.api, e)).then(function (e) {
        if (H(e)) {
          var i = e.title,
              n = e.height,
              a = e.width;
          t.config.title = i, ot.setTitle.call(t), t.embed.ratio = [a, n];
        }

        xe.call(t);
      })["catch"](function () {
        xe.call(t);
      });
    },
    ready: function ready() {
      var e = this,
          t = e.media && e.media.getAttribute("id");

      if (X(t) || !t.startsWith("youtube-")) {
        var i = e.media.getAttribute("src");
        X(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
        var n,
            a,
            s = X(n = i) ? null : n.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : n,
            r = (a = e.provider, "".concat(a, "-").concat(Math.floor(1e4 * Math.random()))),
            o = ne("div", {
          id: r,
          poster: e.poster
        });
        e.media = oe(o, e.media);

        var l = function l(e) {
          return "https://i.ytimg.com/vi/".concat(s, "/").concat(e, "default.jpg");
        };

        rt(l("maxres"), 121)["catch"](function () {
          return rt(l("sd"), 121);
        })["catch"](function () {
          return rt(l("hq"));
        }).then(function (t) {
          return ot.setPoster.call(e, t.src);
        }).then(function (t) {
          t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover");
        })["catch"](function () {});
        var c = e.config.youtube;
        e.embed = new window.YT.Player(r, {
          videoId: s,
          host: mt(c),
          playerVars: ee({}, {
            autoplay: e.config.autoplay ? 1 : 0,
            hl: e.config.hl,
            controls: e.supported.ui ? 0 : 1,
            disablekb: 1,
            playsinline: e.config.fullscreen.iosNative ? 0 : 1,
            cc_load_policy: e.captions.active ? 1 : 0,
            cc_lang_pref: e.config.captions.language,
            widget_referrer: window ? window.location.href : null
          }, c),
          events: {
            onError: function onError(t) {
              if (!e.media.error) {
                var i = t.data,
                    n = {
                  2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                  5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                  100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                  101: "The owner of the requested video does not allow it to be played in embedded players.",
                  150: "The owner of the requested video does not allow it to be played in embedded players."
                }[i] || "An unknown error occured";
                e.media.error = {
                  code: i,
                  message: n
                }, Ae.call(e, e.media, "error");
              }
            },
            onPlaybackRateChange: function onPlaybackRateChange(t) {
              var i = t.target;
              e.media.playbackRate = i.getPlaybackRate(), Ae.call(e, e.media, "ratechange");
            },
            onReady: function onReady(t) {
              if (!V(e.media.play)) {
                var i = t.target;
                ft.getTitle.call(e, s), e.media.play = function () {
                  pt.call(e, !0), i.playVideo();
                }, e.media.pause = function () {
                  pt.call(e, !1), i.pauseVideo();
                }, e.media.stop = function () {
                  i.stopVideo();
                }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                  get: function get() {
                    return Number(i.getCurrentTime());
                  },
                  set: function set(t) {
                    e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Ae.call(e, e.media, "seeking"), i.seekTo(t);
                  }
                }), Object.defineProperty(e.media, "playbackRate", {
                  get: function get() {
                    return i.getPlaybackRate();
                  },
                  set: function set(e) {
                    i.setPlaybackRate(e);
                  }
                });
                var n = e.config.volume;
                Object.defineProperty(e.media, "volume", {
                  get: function get() {
                    return n;
                  },
                  set: function set(t) {
                    n = t, i.setVolume(100 * n), Ae.call(e, e.media, "volumechange");
                  }
                });
                var a = e.config.muted;
                Object.defineProperty(e.media, "muted", {
                  get: function get() {
                    return a;
                  },
                  set: function set(t) {
                    var n = R(t) ? t : a;
                    a = n, i[n ? "mute" : "unMute"](), Ae.call(e, e.media, "volumechange");
                  }
                }), Object.defineProperty(e.media, "currentSrc", {
                  get: function get() {
                    return i.getVideoUrl();
                  }
                }), Object.defineProperty(e.media, "ended", {
                  get: function get() {
                    return e.currentTime === e.duration;
                  }
                });
                var r = i.getAvailablePlaybackRates();
                e.options.speed = r.filter(function (t) {
                  return e.config.speed.options.includes(t);
                }), e.supported.ui && e.media.setAttribute("tabindex", -1), Ae.call(e, e.media, "timeupdate"), Ae.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                  e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Ae.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Ae.call(e, e.media, "canplaythrough"));
                }, 200), setTimeout(function () {
                  return ot.build.call(e);
                }, 50);
              }
            },
            onStateChange: function onStateChange(t) {
              var i = t.target;

              switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(t.data) && (e.media.seeking = !1, Ae.call(e, e.media, "seeked")), t.data) {
                case -1:
                  Ae.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), Ae.call(e, e.media, "progress");
                  break;

                case 0:
                  pt.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : Ae.call(e, e.media, "ended");
                  break;

                case 1:
                  e.config.autoplay || !e.media.paused || e.embed.hasPlayed ? (pt.call(e, !0), Ae.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                    Ae.call(e, e.media, "timeupdate");
                  }, 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), Ae.call(e, e.media, "durationchange"))) : e.media.pause();
                  break;

                case 2:
                  e.muted || e.embed.unMute(), pt.call(e, !1);
                  break;

                case 3:
                  Ae.call(e, e.media, "waiting");
              }

              Ae.call(e, e.elements.container, "statechange", !1, {
                code: t.data
              });
            }
          }
        });
      }
    }
  },
      gt = {
    setup: function setup() {
      this.media ? (ue(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), ue(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && ue(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = ne("div", {
        "class": this.config.classNames.video
      }), te(this.media, this.elements.wrapper), this.isEmbed && (this.elements.poster = ne("div", {
        "class": this.config.classNames.poster
      }), this.elements.wrapper.appendChild(this.elements.poster))), this.isHTML5 ? Ie.setup.call(this) : this.isYouTube ? ft.setup.call(this) : this.isVimeo && ht.setup.call(this)) : this.debug.warn("No media element found!");
    }
  },
      yt = function () {
    function t(i) {
      var n = this;
      e(this, t), this.player = i, this.config = i.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
        container: null,
        displayContainer: null
      }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
        n.on("loaded", e), n.on("error", t);
      }), this.load();
    }

    return i(t, [{
      key: "load",
      value: function value() {
        var e = this;
        this.enabled && (H(window.google) && H(window.google.ima) ? this.ready() : ut(this.player.config.urls.googleIMA.sdk).then(function () {
          e.ready();
        })["catch"](function () {
          e.trigger("error", new Error("Google IMA SDK failed to load"));
        }));
      }
    }, {
      key: "ready",
      value: function value() {
        var e,
            t = this;
        this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function () {
          t.clearSafetyTimer("onAdsManagerLoaded()");
        }), this.listeners(), this.setupIMA();
      }
    }, {
      key: "setupIMA",
      value: function value() {
        this.elements.container = ne("div", {
          "class": this.player.config.classNames.ads
        }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.requestAds();
      }
    }, {
      key: "requestAds",
      value: function value() {
        var e = this,
            t = this.player.elements.container;

        try {
          this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (t) {
            return e.onAdsManagerLoaded(t);
          }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (t) {
            return e.onAdError(t);
          }, !1);
          var i = new google.ima.AdsRequest();
          i.adTagUrl = this.tagUrl, i.linearAdSlotWidth = t.offsetWidth, i.linearAdSlotHeight = t.offsetHeight, i.nonLinearAdSlotWidth = t.offsetWidth, i.nonLinearAdSlotHeight = t.offsetHeight, i.forceNonLinearFullSlot = !1, i.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(i);
        } catch (e) {
          this.onAdError(e);
        }
      }
    }, {
      key: "pollCountdown",
      value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!t) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");

        var i = function i() {
          var t = Ke(Math.max(e.manager.getRemainingTime(), 0)),
              i = "".concat(Fe("advertisement", e.player.config), " - ").concat(t);
          e.elements.container.setAttribute("data-badge-text", i);
        };

        this.countdownTimer = setInterval(i, 100);
      }
    }, {
      key: "onAdsManagerLoaded",
      value: function value(e) {
        var t = this;

        if (this.enabled) {
          var i = new google.ima.AdsRenderingSettings();
          i.restoreCustomPlaybackStateOnAdBreakComplete = !0, i.enablePreloading = !0, this.manager = e.getAdsManager(this.player, i), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
            return t.onAdError(e);
          }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
            t.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
              return t.onAdEvent(e);
            });
          }), this.trigger("loaded");
        }
      }
    }, {
      key: "addCuePoints",
      value: function value() {
        var e = this;
        X(this.cuePoints) || this.cuePoints.forEach(function (t) {
          if (0 !== t && -1 !== t && t < e.player.duration) {
            var i = e.player.elements.progress;

            if (W(i)) {
              var n = 100 / e.player.duration * t,
                  a = ne("span", {
                "class": e.player.config.classNames.cues
              });
              a.style.left = "".concat(n.toString(), "%"), i.appendChild(a);
            }
          }
        });
      }
    }, {
      key: "onAdEvent",
      value: function value(e) {
        var t = this,
            i = this.player.elements.container,
            n = e.getAd(),
            a = e.getAdData();

        switch (function (e) {
          Ae.call(t.player, t.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()));
        }(e.type), e.type) {
          case google.ima.AdEvent.Type.LOADED:
            this.trigger("loaded"), this.pollCountdown(!0), n.isLinear() || (n.width = i.offsetWidth, n.height = i.offsetHeight);
            break;

          case google.ima.AdEvent.Type.STARTED:
            this.manager.setVolume(this.player.volume);
            break;

          case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
            this.loadAds();
            break;

          case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
            this.pauseContent();
            break;

          case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
            this.pollCountdown(), this.resumeContent();
            break;

          case google.ima.AdEvent.Type.LOG:
            a.adError && this.player.debug.warn("Non-fatal ad error: ".concat(a.adError.getMessage()));
        }
      }
    }, {
      key: "onAdError",
      value: function value(e) {
        this.cancel(), this.player.debug.warn("Ads error", e);
      }
    }, {
      key: "listeners",
      value: function value() {
        var e,
            t = this,
            i = this.player.elements.container;
        this.player.on("canplay", function () {
          t.addCuePoints();
        }), this.player.on("ended", function () {
          t.loader.contentComplete();
        }), this.player.on("timeupdate", function () {
          e = t.player.currentTime;
        }), this.player.on("seeked", function () {
          var i = t.player.currentTime;
          X(t.cuePoints) || t.cuePoints.forEach(function (n, a) {
            e < n && n < i && (t.manager.discardAdBreak(), t.cuePoints.splice(a, 1));
          });
        }), window.addEventListener("resize", function () {
          t.manager && t.manager.resize(i.offsetWidth, i.offsetHeight, google.ima.ViewMode.NORMAL);
        });
      }
    }, {
      key: "play",
      value: function value() {
        var e = this,
            t = this.player.elements.container;
        this.managerPromise || this.resumeContent(), this.managerPromise.then(function () {
          e.manager.setVolume(e.player.volume), e.elements.displayContainer.initialize();

          try {
            e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0;
          } catch (t) {
            e.onAdError(t);
          }
        })["catch"](function () {});
      }
    }, {
      key: "resumeContent",
      value: function value() {
        this.elements.container.style.zIndex = "", this.playing = !1, this.player.media.play();
      }
    }, {
      key: "pauseContent",
      value: function value() {
        this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause();
      }
    }, {
      key: "cancel",
      value: function value() {
        this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds();
      }
    }, {
      key: "loadAds",
      value: function value() {
        var e = this;
        this.managerPromise.then(function () {
          e.manager && e.manager.destroy(), e.managerPromise = new Promise(function (t) {
            e.on("loaded", t), e.player.debug.log(e.manager);
          }), e.requestAds();
        })["catch"](function () {});
      }
    }, {
      key: "trigger",
      value: function value(e) {
        for (var t = this, i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) {
          n[a - 1] = arguments[a];
        }

        var s = this.events[e];
        B(s) && s.forEach(function (e) {
          V(e) && e.apply(t, n);
        });
      }
    }, {
      key: "on",
      value: function value(e, t) {
        return B(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this;
      }
    }, {
      key: "startSafetyTimer",
      value: function value(e, t) {
        var i = this;
        this.player.debug.log("Safety timer invoked from: ".concat(t)), this.safetyTimer = setTimeout(function () {
          i.cancel(), i.clearSafetyTimer("startSafetyTimer()");
        }, e);
      }
    }, {
      key: "clearSafetyTimer",
      value: function value(e) {
        q(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(this.safetyTimer), this.safetyTimer = null);
      }
    }, {
      key: "enabled",
      get: function get() {
        var e = this.config;
        return this.player.isHTML5 && this.player.isVideo && e.enabled && (!X(e.publisherId) || Q(e.tagUrl));
      }
    }, {
      key: "tagUrl",
      get: function get() {
        var e = this.config;
        if (Q(e.tagUrl)) return e.tagUrl;
        var t = {
          AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
          AV_CHANNELID: "5a0458dc28a06145e4519d21",
          AV_URL: window.location.hostname,
          cb: Date.now(),
          AV_WIDTH: 640,
          AV_HEIGHT: 480,
          AV_CDIM2: e.publisherId
        };
        return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(Xe(t));
      }
    }]), t;
  }(),
      vt = function vt(e, t) {
    var i = {};
    return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i;
  },
      bt = function () {
    function t(i) {
      e(this, t), this.player = i, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
        thumb: {},
        scrubbing: {}
      }, this.load();
    }

    return i(t, [{
      key: "load",
      value: function value() {
        var e = this;
        this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(function () {
          e.enabled && (e.render(), e.determineContainerAutoSizing(), e.loaded = !0);
        });
      }
    }, {
      key: "getThumbnails",
      value: function value() {
        var e = this;
        return new Promise(function (t) {
          var i = e.player.config.previewThumbnails.src;
          if (X(i)) throw new Error("Missing previewThumbnails.src config attribute");
          var n = (F(i) ? [i] : i).map(function (t) {
            return e.getThumbnail(t);
          });
          Promise.all(n).then(function () {
            e.thumbnails.sort(function (e, t) {
              return e.height - t.height;
            }), e.player.debug.log("Preview thumbnails", e.thumbnails), t();
          });
        });
      }
    }, {
      key: "getThumbnail",
      value: function value(e) {
        var t = this;
        return new Promise(function (i) {
          Ve(e).then(function (n) {
            var a,
                s,
                o = {
              frames: (a = n, s = [], a.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e) {
                var t = {};
                e.split(/\r\n|\n|\r/).forEach(function (e) {
                  if (D(t.startTime)) {
                    if (!X(e.trim()) && X(t.text)) {
                      var i = e.trim().split("#xywh="),
                          n = r(i, 1);

                      if (t.text = n[0], i[1]) {
                        var a = r(i[1].split(","), 4);
                        t.x = a[0], t.y = a[1], t.w = a[2], t.h = a[3];
                      }
                    }
                  } else {
                    var s = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                    s && (t.startTime = 60 * Number(s[1] || 0) * 60 + 60 * Number(s[2]) + Number(s[3]) + Number("0.".concat(s[4])), t.endTime = 60 * Number(s[6] || 0) * 60 + 60 * Number(s[7]) + Number(s[8]) + Number("0.".concat(s[9])));
                  }
                }), t.text && s.push(t);
              }), s),
              height: null,
              urlPrefix: ""
            };
            o.frames[0].text.startsWith("/") || o.frames[0].text.startsWith("http://") || o.frames[0].text.startsWith("https://") || (o.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
            var l = new Image();
            l.onload = function () {
              o.height = l.naturalHeight, o.width = l.naturalWidth, t.thumbnails.push(o), i();
            }, l.src = o.urlPrefix + o.frames[0].text;
          });
        });
      }
    }, {
      key: "startMove",
      value: function value(e) {
        if (this.loaded && z(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
          if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);else {
            var t = this.player.elements.progress.getBoundingClientRect(),
                i = 100 / t.width * (e.pageX - t.left);
            this.seekTime = this.player.media.duration * (i / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = Ke(this.seekTime);
          }
          this.showImageAtCurrentTime();
        }
      }
    }, {
      key: "endMove",
      value: function value() {
        this.toggleThumbContainer(!1, !0);
      }
    }, {
      key: "startScrubbing",
      value: function value(e) {
        (q(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()));
      }
    }, {
      key: "endScrubbing",
      value: function value() {
        var e = this;
        this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : Ce.call(this.player, this.player.media, "timeupdate", function () {
          e.mouseDown || e.toggleScrubbingContainer(!1);
        });
      }
    }, {
      key: "listeners",
      value: function value() {
        var e = this;
        this.player.on("play", function () {
          e.toggleThumbContainer(!1, !0);
        }), this.player.on("seeked", function () {
          e.toggleThumbContainer(!1);
        }), this.player.on("timeupdate", function () {
          e.lastTime = e.player.media.currentTime;
        });
      }
    }, {
      key: "render",
      value: function value() {
        this.elements.thumb.container = ne("div", {
          "class": this.player.config.classNames.previewThumbnails.thumbContainer
        }), this.elements.thumb.imageContainer = ne("div", {
          "class": this.player.config.classNames.previewThumbnails.imageContainer
        }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
        var e = ne("div", {
          "class": this.player.config.classNames.previewThumbnails.timeContainer
        });
        this.elements.thumb.time = ne("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), W(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = ne("div", {
          "class": this.player.config.classNames.previewThumbnails.scrubbingContainer
        }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container);
      }
    }, {
      key: "destroy",
      value: function value() {
        this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove();
      }
    }, {
      key: "showImageAtCurrentTime",
      value: function value() {
        var e = this;
        this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
        var t = this.thumbnails[0].frames.findIndex(function (t) {
          return e.seekTime >= t.startTime && e.seekTime <= t.endTime;
        }),
            i = t >= 0,
            n = 0;
        this.mouseDown || this.toggleThumbContainer(i), i && (this.thumbnails.forEach(function (i, a) {
          e.loadedImages.includes(i.frames[t].text) && (n = a);
        }), t !== this.showingThumb && (this.showingThumb = t, this.loadImage(n)));
      }
    }, {
      key: "loadImage",
      value: function value() {
        var e = this,
            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            i = this.showingThumb,
            n = this.thumbnails[t],
            a = n.urlPrefix,
            s = n.frames[i],
            r = n.frames[i].text,
            o = a + r;
        if (this.currentImageElement && this.currentImageElement.dataset.filename === r) this.showImage(this.currentImageElement, s, t, i, r, !1), this.currentImageElement.dataset.index = i, this.removeOldImages(this.currentImageElement);else {
          this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
          var l = new Image();
          l.src = o, l.dataset.index = i, l.dataset.filename = r, this.showingThumbFilename = r, this.player.debug.log("Loading image: ".concat(o)), l.onload = function () {
            return e.showImage(l, s, t, i, r, !0);
          }, this.loadingImage = l, this.removeOldImages(l);
        }
      }
    }, {
      key: "showImage",
      value: function value(e, t, i, n, a) {
        var s = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
        this.player.debug.log("Showing thumb: ".concat(a, ". num: ").concat(n, ". qual: ").concat(i, ". newimg: ").concat(s)), this.setImageSizeAndOffset(e, t), s && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(a) || this.loadedImages.push(a)), this.preloadNearby(n, !0).then(this.preloadNearby(n, !1)).then(this.getHigherQuality(i, e, t, a));
      }
    }, {
      key: "removeOldImages",
      value: function value(e) {
        var t = this;
        Array.from(this.currentImageContainer.children).forEach(function (i) {
          if ("img" === i.tagName.toLowerCase()) {
            var n = t.usingSprites ? 500 : 1e3;

            if (i.dataset.index !== e.dataset.index && !i.dataset.deleting) {
              i.dataset.deleting = !0;
              var a = t.currentImageContainer;
              setTimeout(function () {
                a.removeChild(i), t.player.debug.log("Removing thumb: ".concat(i.dataset.filename));
              }, n);
            }
          }
        });
      }
    }, {
      key: "preloadNearby",
      value: function value(e) {
        var t = this,
            i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
        return new Promise(function (n) {
          setTimeout(function () {
            var a = t.thumbnails[0].frames[e].text;

            if (t.showingThumbFilename === a) {
              var s;
              s = i ? t.thumbnails[0].frames.slice(e) : t.thumbnails[0].frames.slice(0, e).reverse();
              var r = !1;
              s.forEach(function (e) {
                var i = e.text;

                if (i !== a && !t.loadedImages.includes(i)) {
                  r = !0, t.player.debug.log("Preloading thumb filename: ".concat(i));
                  var s = t.thumbnails[0].urlPrefix + i,
                      o = new Image();
                  o.src = s, o.onload = function () {
                    t.player.debug.log("Preloaded thumb filename: ".concat(i)), t.loadedImages.includes(i) || t.loadedImages.push(i), n();
                  };
                }
              }), r || n();
            }
          }, 300);
        });
      }
    }, {
      key: "getHigherQuality",
      value: function value(e, t, i, n) {
        var a = this;

        if (e < this.thumbnails.length - 1) {
          var s = t.naturalHeight;
          this.usingSprites && (s = i.h), s < this.thumbContainerHeight && setTimeout(function () {
            a.showingThumbFilename === n && (a.player.debug.log("Showing higher quality thumb for: ".concat(n)), a.loadImage(e + 1));
          }, 300);
        }
      }
    }, {
      key: "toggleThumbContainer",
      value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
        this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null);
      }
    }, {
      key: "toggleScrubbingContainer",
      value: function value() {
        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
            t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
        this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null);
      }
    }, {
      key: "determineContainerAutoSizing",
      value: function value() {
        (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0);
      }
    }, {
      key: "setThumbContainerSizeAndPos",
      value: function value() {
        if (this.sizeSpecifiedInCSS) {
          if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
            var e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
            this.elements.thumb.imageContainer.style.width = "".concat(e, "px");
          } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
            var t = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
            this.elements.thumb.imageContainer.style.height = "".concat(t, "px");
          }
        } else {
          var i = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
          this.elements.thumb.imageContainer.style.height = "".concat(this.thumbContainerHeight, "px"), this.elements.thumb.imageContainer.style.width = "".concat(i, "px");
        }

        this.setThumbContainerPos();
      }
    }, {
      key: "setThumbContainerPos",
      value: function value() {
        var e = this.player.elements.progress.getBoundingClientRect(),
            t = this.player.elements.container.getBoundingClientRect(),
            i = this.elements.thumb.container,
            n = t.left - e.left + 10,
            a = t.right - e.left - i.clientWidth - 10,
            s = this.mousePosX - e.left - i.clientWidth / 2;
        s < n && (s = n), s > a && (s = a), i.style.left = "".concat(s, "px");
      }
    }, {
      key: "setScrubbingContainerSize",
      value: function value() {
        var e = vt(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        }),
            t = e.width,
            i = e.height;
        this.elements.scrubbing.container.style.width = "".concat(t, "px"), this.elements.scrubbing.container.style.height = "".concat(i, "px");
      }
    }, {
      key: "setImageSizeAndOffset",
      value: function value(e, t) {
        if (this.usingSprites) {
          var i = this.thumbContainerHeight / t.h;
          e.style.height = "".concat(e.naturalHeight * i, "px"), e.style.width = "".concat(e.naturalWidth * i, "px"), e.style.left = "-".concat(t.x * i, "px"), e.style.top = "-".concat(t.y * i, "px");
        }
      }
    }, {
      key: "enabled",
      get: function get() {
        return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled;
      }
    }, {
      key: "currentImageContainer",
      get: function get() {
        return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer;
      }
    }, {
      key: "usingSprites",
      get: function get() {
        return Object.keys(this.thumbnails[0].frames[0]).includes("w");
      }
    }, {
      key: "thumbAspectRatio",
      get: function get() {
        return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height;
      }
    }, {
      key: "thumbContainerHeight",
      get: function get() {
        return this.mouseDown ? vt(this.thumbAspectRatio, {
          width: this.player.media.clientWidth,
          height: this.player.media.clientHeight
        }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4);
      }
    }, {
      key: "currentImageElement",
      get: function get() {
        return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement;
      },
      set: function set(e) {
        this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e;
      }
    }]), t;
  }(),
      wt = {
    insertElements: function insertElements(e, t) {
      var i = this;
      F(t) ? ae(e, this.media, {
        src: t
      }) : B(t) && t.forEach(function (t) {
        ae(e, i.media, t);
      });
    },
    change: function change(e) {
      var t = this;
      Z(e, "sources.length") ? (Ie.cancelRequests.call(this), this.destroy.call(this, function () {
        t.options.quality = [], se(t.media), t.media = null, W(t.elements.container) && t.elements.container.removeAttribute("class");
        var i = e.sources,
            n = e.type,
            a = r(i, 1)[0],
            s = a.provider,
            o = void 0 === s ? et.html5 : s,
            l = a.src,
            c = "html5" === o ? n : "div",
            u = "html5" === o ? {} : {
          src: l
        };
        Object.assign(t, {
          provider: o,
          type: n,
          supported: ve.check(n, o, t.config.playsinline),
          media: ne(c, u)
        }), t.elements.container.appendChild(t.media), R(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), X(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), ot.addStyleHook.call(t), t.isHTML5 && wt.insertElements.call(t, "source", i), t.config.title = e.title, gt.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && wt.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && ot.build.call(t), t.isHTML5 && t.media.load(), X(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new bt(t))), t.fullscreen.update();
      }, !0)) : this.debug.warn("Invalid source format");
    }
  };

  var kt,
      Tt = function () {
    function t(i, n) {
      var a = this;
      if (e(this, t), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = ve.touch, this.media = i, F(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || U(this.media) || B(this.media)) && (this.media = this.media[0]), this.config = ee({}, $e, t.defaults, n || {}, function () {
        try {
          return JSON.parse(a.media.getAttribute("data-plyr-config"));
        } catch (e) {
          return {};
        }
      }()), this.elements = {
        container: null,
        captions: null,
        buttons: {},
        display: {},
        progress: {},
        inputs: {},
        settings: {
          popup: null,
          menu: null,
          panels: {},
          buttons: {}
        }
      }, this.captions = {
        active: null,
        currentTrack: -1,
        meta: new WeakMap()
      }, this.fullscreen = {
        active: !1
      }, this.options = {
        speed: [],
        quality: []
      }, this.debug = new at(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", ve), !q(this.media) && W(this.media)) {
        if (this.media.plyr) this.debug.warn("Target already setup");else if (this.config.enabled) {
          if (ve.check().api) {
            var s = this.media.cloneNode(!0);
            s.autoplay = !1, this.elements.original = s;
            var r = this.media.tagName.toLowerCase(),
                o = null,
                l = null;

            switch (r) {
              case "div":
                if (o = this.media.querySelector("iframe"), W(o)) {
                  if (l = Qe(o.getAttribute("src")), this.provider = function (e) {
                    return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? et.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? et.vimeo : null;
                  }(l.toString()), this.elements.container = this.media, this.media = o, this.elements.container.className = "", l.search.length) {
                    var c = ["1", "true"];
                    c.includes(l.searchParams.get("autoplay")) && (this.config.autoplay = !0), c.includes(l.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = c.includes(l.searchParams.get("playsinline")), this.config.youtube.hl = l.searchParams.get("hl")) : this.config.playsinline = !0;
                  }
                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);

                if (X(this.provider) || !Object.keys(et).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                this.type = it;
                break;

              case "video":
              case "audio":
                this.type = r, this.provider = et.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                break;

              default:
                return void this.debug.error("Setup failed: unsupported type");
            }

            this.supported = ve.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new lt(this), this.storage = new Re(this), this.media.plyr = this, W(this.elements.container) || (this.elements.container = ne("div", {
              tabindex: 0
            }), te(this.media, this.elements.container)), ot.addStyleHook.call(this), gt.setup.call(this), this.config.debug && ke.call(this, this.elements.container, this.config.events.join(" "), function (e) {
              a.debug.log("event: ".concat(e.type));
            }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && ot.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new st(this), this.config.ads.enabled && (this.ads = new yt(this)), this.isHTML5 && this.config.autoplay && setTimeout(function () {
              return a.play();
            }, 10), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new bt(this))) : this.debug.error("Setup failed: no support");
          } else this.debug.error("Setup failed: no support");
        } else this.debug.error("Setup failed: disabled by config");
      } else this.debug.error("Setup failed: no suitable element passed");
    }

    return i(t, [{
      key: "play",
      value: function value() {
        var e = this;
        return V(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(function () {
          return e.ads.play();
        })["catch"](function () {
          return e.media.play();
        }), this.media.play()) : null;
      }
    }, {
      key: "pause",
      value: function value() {
        return this.playing && V(this.media.pause) ? this.media.pause() : null;
      }
    }, {
      key: "togglePlay",
      value: function value(e) {
        return (R(e) ? e : !this.playing) ? this.play() : this.pause();
      }
    }, {
      key: "stop",
      value: function value() {
        this.isHTML5 ? (this.pause(), this.restart()) : V(this.media.stop) && this.media.stop();
      }
    }, {
      key: "restart",
      value: function value() {
        this.currentTime = 0;
      }
    }, {
      key: "rewind",
      value: function value(e) {
        this.currentTime -= D(e) ? e : this.config.seekTime;
      }
    }, {
      key: "forward",
      value: function value(e) {
        this.currentTime += D(e) ? e : this.config.seekTime;
      }
    }, {
      key: "increaseVolume",
      value: function value(e) {
        var t = this.media.muted ? 0 : this.volume;
        this.volume = t + (D(e) ? e : 0);
      }
    }, {
      key: "decreaseVolume",
      value: function value(e) {
        this.increaseVolume(-e);
      }
    }, {
      key: "toggleCaptions",
      value: function value(e) {
        Je.toggle.call(this, e, !1);
      }
    }, {
      key: "airplay",
      value: function value() {
        ve.airplay && this.media.webkitShowPlaybackTargetPicker();
      }
    }, {
      key: "toggleControls",
      value: function value(e) {
        if (this.supported.ui && !this.isAudio) {
          var t = de(this.elements.container, this.config.classNames.hideControls),
              i = void 0 === e ? void 0 : !e,
              n = ue(this.elements.container, this.config.classNames.hideControls, i);

          if (n && this.config.controls.includes("settings") && !X(this.config.settings) && Ye.toggleMenu.call(this, !1), n !== t) {
            var a = n ? "controlshidden" : "controlsshown";
            Ae.call(this, this.media, a);
          }

          return !n;
        }

        return !1;
      }
    }, {
      key: "on",
      value: function value(e, t) {
        ke.call(this, this.elements.container, e, t);
      }
    }, {
      key: "once",
      value: function value(e, t) {
        Ce.call(this, this.elements.container, e, t);
      }
    }, {
      key: "off",
      value: function value(e, t) {
        Te(this.elements.container, e, t);
      }
    }, {
      key: "destroy",
      value: function value(e) {
        var t = this,
            i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];

        if (this.ready) {
          var n = function n() {
            document.body.style.overflow = "", t.embed = null, i ? (Object.keys(t.elements).length && (se(t.elements.buttons.play), se(t.elements.captions), se(t.elements.controls), se(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), V(e) && e()) : (Ee.call(t), oe(t.elements.original, t.elements.container), Ae.call(t, t.elements.original, "destroyed", !0), V(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function () {
              t.elements = null, t.media = null;
            }, 200));
          };

          this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (ot.toggleNativeControls.call(this, !0), n()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && V(this.embed.destroy) && this.embed.destroy(), n()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(n), setTimeout(n, 200));
        }
      }
    }, {
      key: "supports",
      value: function value(e) {
        return ve.mime.call(this, e);
      }
    }, {
      key: "isHTML5",
      get: function get() {
        return this.provider === et.html5;
      }
    }, {
      key: "isEmbed",
      get: function get() {
        return this.isYouTube || this.isVimeo;
      }
    }, {
      key: "isYouTube",
      get: function get() {
        return this.provider === et.youtube;
      }
    }, {
      key: "isVimeo",
      get: function get() {
        return this.provider === et.vimeo;
      }
    }, {
      key: "isVideo",
      get: function get() {
        return this.type === it;
      }
    }, {
      key: "isAudio",
      get: function get() {
        return this.type === tt;
      }
    }, {
      key: "playing",
      get: function get() {
        return Boolean(this.ready && !this.paused && !this.ended);
      }
    }, {
      key: "paused",
      get: function get() {
        return Boolean(this.media.paused);
      }
    }, {
      key: "stopped",
      get: function get() {
        return Boolean(this.paused && 0 === this.currentTime);
      }
    }, {
      key: "ended",
      get: function get() {
        return Boolean(this.media.ended);
      }
    }, {
      key: "currentTime",
      set: function set(e) {
        if (this.duration) {
          var t = D(e) && e > 0;
          this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"));
        }
      },
      get: function get() {
        return Number(this.media.currentTime);
      }
    }, {
      key: "buffered",
      get: function get() {
        var e = this.media.buffered;
        return D(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0;
      }
    }, {
      key: "seeking",
      get: function get() {
        return Boolean(this.media.seeking);
      }
    }, {
      key: "duration",
      get: function get() {
        var e = parseFloat(this.config.duration),
            t = (this.media || {}).duration,
            i = D(t) && t !== 1 / 0 ? t : 0;
        return e || i;
      }
    }, {
      key: "volume",
      set: function set(e) {
        var t = e;
        F(t) && (t = Number(t)), D(t) || (t = this.storage.get("volume")), D(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !X(e) && this.muted && t > 0 && (this.muted = !1);
      },
      get: function get() {
        return Number(this.media.volume);
      }
    }, {
      key: "muted",
      set: function set(e) {
        var t = e;
        R(t) || (t = this.storage.get("muted")), R(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t;
      },
      get: function get() {
        return Boolean(this.media.muted);
      }
    }, {
      key: "hasAudio",
      get: function get() {
        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length);
      }
    }, {
      key: "speed",
      set: function set(e) {
        var t = this,
            i = null;
        D(e) && (i = e), D(i) || (i = this.storage.get("speed")), D(i) || (i = this.config.speed.selected);
        var n = this.minimumSpeed,
            a = this.maximumSpeed;
        i = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
              t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
              i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
          return Math.min(Math.max(e, t), i);
        }(i, n, a), this.config.speed.selected = i, setTimeout(function () {
          t.media.playbackRate = i;
        }, 0);
      },
      get: function get() {
        return Number(this.media.playbackRate);
      }
    }, {
      key: "minimumSpeed",
      get: function get() {
        return this.isYouTube ? Math.min.apply(Math, o(this.options.speed)) : this.isVimeo ? .5 : .0625;
      }
    }, {
      key: "maximumSpeed",
      get: function get() {
        return this.isYouTube ? Math.max.apply(Math, o(this.options.speed)) : this.isVimeo ? 2 : 16;
      }
    }, {
      key: "quality",
      set: function set(e) {
        var t = this.config.quality,
            i = this.options.quality;

        if (i.length) {
          var n = [!X(e) && Number(e), this.storage.get("quality"), t.selected, t["default"]].find(D),
              a = !0;

          if (!i.includes(n)) {
            var s = function (e, t) {
              return B(e) && e.length ? e.reduce(function (e, i) {
                return Math.abs(i - t) < Math.abs(e - t) ? i : e;
              }) : null;
            }(i, n);

            this.debug.warn("Unsupported quality option: ".concat(n, ", using ").concat(s, " instead")), n = s, a = !1;
          }

          t.selected = n, this.media.quality = n, a && this.storage.set({
            quality: n
          });
        }
      },
      get: function get() {
        return this.media.quality;
      }
    }, {
      key: "loop",
      set: function set(e) {
        var t = R(e) ? e : this.config.loop.active;
        this.config.loop.active = t, this.media.loop = t;
      },
      get: function get() {
        return Boolean(this.media.loop);
      }
    }, {
      key: "source",
      set: function set(e) {
        wt.change.call(this, e);
      },
      get: function get() {
        return this.media.currentSrc;
      }
    }, {
      key: "download",
      get: function get() {
        var e = this.config.urls.download;
        return Q(e) ? e : this.source;
      },
      set: function set(e) {
        Q(e) && (this.config.urls.download = e, Ye.setDownloadUrl.call(this));
      }
    }, {
      key: "poster",
      set: function set(e) {
        this.isVideo ? ot.setPoster.call(this, e, !1)["catch"](function () {}) : this.debug.warn("Poster can only be set for video");
      },
      get: function get() {
        return this.isVideo ? this.media.getAttribute("poster") : null;
      }
    }, {
      key: "ratio",
      get: function get() {
        if (!this.isVideo) return null;
        var e = Me(Ne.call(this));
        return B(e) ? e.join(":") : e;
      },
      set: function set(e) {
        this.isVideo ? F(e) && Pe(e) ? (this.config.ratio = e, xe.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video");
      }
    }, {
      key: "autoplay",
      set: function set(e) {
        var t = R(e) ? e : this.config.autoplay;
        this.config.autoplay = t;
      },
      get: function get() {
        return Boolean(this.config.autoplay);
      }
    }, {
      key: "currentTrack",
      set: function set(e) {
        Je.set.call(this, e, !1);
      },
      get: function get() {
        var e = this.captions,
            t = e.toggled,
            i = e.currentTrack;
        return t ? i : -1;
      }
    }, {
      key: "language",
      set: function set(e) {
        Je.setLanguage.call(this, e, !1);
      },
      get: function get() {
        return (Je.getCurrentTrack.call(this) || {}).language;
      }
    }, {
      key: "pip",
      set: function set(e) {
        if (ve.pip) {
          var t = R(e) ? e : !this.pip;
          V(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? Ge : Ze), V(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture());
        }
      },
      get: function get() {
        return ve.pip ? X(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === Ge : null;
      }
    }], [{
      key: "supported",
      value: function value(e, t, i) {
        return ve.check(e, t, i);
      }
    }, {
      key: "loadSprite",
      value: function value(e, t) {
        return Be(e, t);
      }
    }, {
      key: "setup",
      value: function value(e) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = null;
        return F(e) ? n = Array.from(document.querySelectorAll(e)) : U(e) ? n = Array.from(e) : B(e) && (n = e.filter(W)), X(n) ? null : n.map(function (e) {
          return new t(e, i);
        });
      }
    }]), t;
  }();

  return Tt.defaults = (kt = $e, JSON.parse(JSON.stringify(kt))), Tt;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */
module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  } // blank or null?


  if (!css || typeof css !== "string") {
    return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/"); // convert each url(...)

  /*
  This regular expression is just a way to recursively match brackets within
  a string.
  	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
     (  = Start a capturing group
       (?:  = Start a non-capturing group
           [^)(]  = Match anything that isn't a parentheses
           |  = OR
           \(  = Match a start parentheses
               (?:  = Start another non-capturing groups
                   [^)(]+  = Match anything that isn't a parentheses
                   |  = OR
                   \(  = Match a start parentheses
                       [^)(]*  = Match anything that isn't a parentheses
                   \)  = Match a end parentheses
               )  = End Group
               *\) = Match anything and then a close parens
           )  = Close non-capturing group
           *  = Match anything
        )  = Close capturing group
   \)  = Match a close parens
  	 /gi  = Get all matches, not the first.  Be case insensitive.
   */

  var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (fullMatch, origUrl) {
    // strip quotes (if they exist)
    var unquotedOrigUrl = origUrl.trim().replace(/^"(.*)"$/, function (o, $1) {
      return $1;
    }).replace(/^'(.*)'$/, function (o, $1) {
      return $1;
    }); // already a full url? no change

    if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
      return fullMatch;
    } // convert the url to a full url


    var newUrl;

    if (unquotedOrigUrl.indexOf("//") === 0) {
      //TODO: should we add protocol?
      newUrl = unquotedOrigUrl;
    } else if (unquotedOrigUrl.indexOf("/") === 0) {
      // path should be relative to the base url
      newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
    } else {
      // path should be relative to current directory
      newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
    } // send back the fixed url(...)


    return "url(" + JSON.stringify(newUrl) + ")";
  }); // send back the fixed css

  return fixedCss;
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./resources/js/scene.js":
/*!*******************************!*\
  !*** ./resources/js/scene.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! plyr/dist/plyr.css */ "./node_modules/plyr/dist/plyr.css");
/* harmony import */ var plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(plyr_dist_plyr_css__WEBPACK_IMPORTED_MODULE_1__);


var player = new plyr__WEBPACK_IMPORTED_MODULE_0___default.a('#player');

/***/ }),

/***/ 10:
/*!*************************************!*\
  !*** multi ./resources/js/scene.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\server\www\kdgr\resources\js\scene.js */"./resources/js/scene.js");


/***/ })

/******/ });