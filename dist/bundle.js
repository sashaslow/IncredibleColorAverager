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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getAverageColour = exports.getAverageColour = function getAverageColour(img, type, inv) {
  var canvas = document.createElement('canvas'),
      context = canvas.getContext && canvas.getContext('2d'),
      rgb = { r: 102, g: 102, b: 102 },
      pixelInterval = 5,
      count = 0,
      i = -4,
      data = void 0,
      length = void 0;

  var height = canvas.height = img.naturalHeight || img.offsetHeight || img.height,
      width = canvas.width = img.naturalWidth || img.offsetWidth || img.width;
  context.drawImage(img, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    console.log(e);
    return rgb;
  }

  data = data.data;
  length = data.length;

  var createRGB = function createRGB() {
    while ((i += pixelInterval * 4) < length) {
      count++;
      rgb.r += data[i];
      rgb.g += data[i + 1];
      rgb.b += data[i + 2];
    }
    rgb.r = Math.floor(rgb.r / count);
    rgb.g = Math.floor(rgb.g / count);
    rgb.b = Math.floor(rgb.b / count);
    return rgb;
  };

  var invertHEX = function invertHEX(hexnum) {
    if (hexnum.length != 6) {
      console.log('Hex color must be six hex numbers in length');
      return false;
    }

    hexnum = hexnum.toUpperCase();
    var splitnum = hexnum.split("");
    var resultnum = "";
    var simplenum = "FEDCBA9876".split("");
    var complexnum = new Array();
    complexnum.A = "5";
    complexnum.B = "4";
    complexnum.C = "3";
    complexnum.D = "2";
    complexnum.E = "1";
    complexnum.F = "0";

    for (i = 0; i < 6; i++) {
      if (!isNaN(splitnum[i])) {
        resultnum += simplenum[splitnum[i]];
      } else if (complexnum[splitnum[i]]) {
        resultnum += complexnum[splitnum[i]];
      } else {
        console.log("Hex colors must only include hex numbers 0-9, and A-F");
        return false;
      }
    }
    return resultnum;
  };

  var invertRGB = function invertRGB(rgb) {
    var invertedRGB = Object.keys(rgb).reduce(function (previous, current) {
      previous[current] = 255 - rgb[current];
      return previous;
    }, {});
    return invertedRGB;
  };

  var RGBToString = function RGBToString(rgb) {
    return 'rgb(' + Object.values(rgb).join(', ') + ')';
  };

  var RGBToHEX = function RGBToHEX(r, g, b) {
    return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  };

  switch (type) {
    case 'RGB':
      rgb = createRGB();
      if (inv) {
        return RGBToString(invertRGB(rgb));
      } else {
        return RGBToString(rgb);
      }
      break;
    case 'HEX':
      rgb = createRGB();
      if (inv) {
        return "#" + invertHEX(RGBToHEX(rgb.r, rgb.g, rgb.b));
      } else {
        return "#" + RGBToHEX(rgb.r, rgb.g, rgb.b);
      }
      break;
  }
};

/***/ })
/******/ ]);