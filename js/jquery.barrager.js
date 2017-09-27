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
/******/ 	return __webpack_require__(__webpack_require__.s = 50);
/******/ })
/************************************************************************/
/******/ ({

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

/*!
 *@name     jquery.barrager.js
 *@version  1.1
 *@author   yaseng@uauc.net
 *@url      https://github.com/yaseng/jquery.barrager.js
 */
(function ($) {

	$.fn.barrager = function (barrage) {
		barrage = $.extend({
			close: true,
			bottom: 0,
			max: 10,
			speed: 8,
			color: '#fff',
			old_ie_color: '#000000'
		}, barrage || {});

		var time = new Date().getTime();
		var barrager_id = 'barrage_' + time;
		var id = '#' + barrager_id;
		var div_barrager = $("<div class='barrage' id='" + barrager_id + "'></div>").appendTo($(this));
		var window_height = $(window).height() - 100;
		var this_height = window_height > this.height() ? this.height() : window_height;
		var window_width = $(window).width() + 500;
		var this_width = window_width > this.width() ? this.width() : window_width;
		var bottom = barrage.bottom == 0 ? Math.floor(Math.random() * this_height + 40) : barrage.bottom;
		div_barrager.css("bottom", bottom + "px");
		div_barrager_box = $("<div class='barrage_box cl'></div>").appendTo(div_barrager);
		if (barrage.img) {

			div_barrager_box.append("<a class='portrait z' href='javascript:;'></a>");
			var img = $("<img src='' >").appendTo(id + " .barrage_box .portrait");
			img.attr('src', barrage.img);
		}
		div_barrager_box.append(" <div class='z p'></div>");
		if (barrage.close) {

			div_barrager_box.append(" <div class='close z'></div>");
		}

		var content = $("<a title='' href='' target='_blank'></a>").appendTo(id + " .barrage_box .p");
		content.attr({
			'href': barrage.href,
			'id': barrage.id
		}).empty().append(barrage.info);
		if (navigator.userAgent.indexOf("MSIE 6.0") > 0 || navigator.userAgent.indexOf("MSIE 7.0") > 0 || navigator.userAgent.indexOf("MSIE 8.0") > 0) {

			content.css('color', barrage.old_ie_color);
		} else {

			content.css('color', barrage.color);
		}

		var i = 0;
		div_barrager.css('margin-right', 0);

		$(id).animate({ right: this_width }, barrage.speed * 1000, function () {

			$(id).remove();
		});

		div_barrager_box.mouseover(function () {
			$(id).stop(true);
		});

		div_barrager_box.mouseout(function () {

			$(id).animate({ right: this_width }, barrage.speed * 1000, function () {

				$(id).remove();
			});
		});

		$(id + '.barrage .barrage_box .close').click(function () {

			$(id).remove();
		});
	};

	$.fn.barrager.removeAll = function () {

		$('.barrage').remove();
	};
})(jQuery);

/***/ })

/******/ });