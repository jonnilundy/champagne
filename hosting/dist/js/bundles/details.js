var pageComponent =
webpackJsonppageComponent([2],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(5);

__webpack_require__(4);

var _indexSoy = __webpack_require__(40);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var details = function (_Component) {
  _inherits(details, _Component);

  function details() {
    _classCallCheck(this, details);

    return _possibleConstructorReturn(this, (details.__proto__ || Object.getPrototypeOf(details)).apply(this, arguments));
  }

  return details;
}(_metalComponent2.default);

;

_metalSoy2.default.register(details, _indexSoy2.default);

exports.default = details;

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "details", function() { return details; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_soy__);
/* jshint ignore:start */


var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace details.
 * @public
 */

goog.module('details.incrementaldom');

/** @suppress {extraRequire} */
var soy = goog.require('soy');
/** @suppress {extraRequire} */
var soydata = goog.require('soydata');
/** @suppress {extraRequire} */
goog.require('goog.i18n.bidi');
/** @suppress {extraRequire} */
goog.require('goog.asserts');
/** @suppress {extraRequire} */
goog.require('goog.string');
var IncrementalDom = goog.require('incrementaldom');
var ie_open = IncrementalDom.elementOpen;
var ie_close = IncrementalDom.elementClose;
var ie_void = IncrementalDom.elementVoid;
var ie_open_start = IncrementalDom.elementOpenStart;
var ie_open_end = IncrementalDom.elementOpenEnd;
var itext = IncrementalDom.text;
var iattr = IncrementalDom.attr;

var $templateAlias1 = __WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.getTemplate('main.incrementaldom', 'render');


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ignored, opt_ijData) {
  opt_data = opt_data || {};
  var param18 = function() {
    $details(null, null, opt_ijData);
  };
  $templateAlias1(soy.$$assignDefaults({content: param18}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'details.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $details(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'details');
    ie_open('div', null, null,
        'class', 'container');
      ie_open('div', null, null,
          'class', 'row text-center');
        ie_open('h2');
          itext('You\'re invited!');
        ie_close('h2');
        ie_open('h2');
          itext('Open House Reception');
        ie_close('h2');
        ie_open('h2', null, null,
            'class', 'detail-sub');
          itext('July 22nd, 2017');
        ie_close('h2');
        ie_open('p', null, null,
            'class', 'date time');
          itext('3pm-7pm');
        ie_close('p');
        ie_open('p', null, null,
            'class', 'date');
          itext('15005 SW Chardonnay Ave.');
          ie_open('br');
          ie_close('br');
          itext('Tigard, OR 97224');
        ie_close('p');
        ie_open('p', null, null,
            'class', 'copy-button',
            'id', 'btn',
            'data-clipboard-text', '15005 SW Chardonnay Ave. Tigard, OR 97224');
          ie_open('span', null, null,
              'id', 'success');
            itext('Click here to copy address!');
          ie_close('span');
        ie_close('p');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'row text-center');
        ie_open('h2');
          itext('Registery');
        ie_close('h2');
        ie_open('p', null, null,
            'class', 'registry-info');
          itext('Your presence is what we desire the most, but if you would like to help us furnish our new home, our registries are below.');
        ie_close('p');
        ie_open('p', null, null,
            'class', 'registry-info');
          itext('We will have a way to transport gifts from Portland to our home in L.A.');
        ie_close('p');
        ie_open('a', null, null,
            'href', 'https://secure.williams-sonoma.com/registry/jrwmbcvlnq/registry-list.html',
            'target', '_blank');
          ie_open('img', null, null,
              'src', '/images/williams-sonoma.png',
              'alt', 'William Sonoma');
          ie_close('img');
        ie_close('a');
        ie_open('a', null, null,
            'href', 'http://www.target.com/gift-registry/giftgiver?registryId=0e441ce07be94457a161504ef84d0a02#1',
            'target', '_blank');
          ie_open('img', null, null,
              'src', '/images/target.png',
              'alt', 'Target');
          ie_close('img');
        ie_close('a');
        ie_open('a', null, null,
            'href', 'https://www.anthropologie.com/registry/listing?registryId=NTQ3MTQZYMMW',
            'target', '_blank');
          ie_open('img', null, null,
              'src', '/images/anthropologie.png',
              'alt', 'Anthropologie');
          ie_close('img');
        ie_close('a');
      ie_close('div');
      ie_open('div', null, null,
          'class', 'row text-center');
        ie_open('p', null, null,
            'class', 'registry-info');
          itext('Please ');
          ie_open('a', null, null,
              'href', '/rsvp');
            itext('RSVP');
          ie_close('a');
          itext(' by July 21st.');
        ie_close('p');
      ie_close('div');
    ie_close('div');
  ie_close('div');
  ie_void('footer');
  ie_void('script', null, null,
      'src', '/js/index.js');
}
exports.details = $details;
if (goog.DEBUG) {
  $details.soyTemplateName = 'details.details';
}

exports.render.params = [];
exports.render.types = {};
exports.details.params = [];
exports.details.types = {};
templates = exports;
return exports;

});

class details extends __WEBPACK_IMPORTED_MODULE_0_metal_component___default.a {}
__WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.register(details, templates);

/* harmony default export */ __webpack_exports__["default"] = (templates);
/* jshint ignore:end */


/***/ })

},[119]);