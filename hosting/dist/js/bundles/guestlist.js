var pageComponent =
webpackJsonppageComponent([3],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(0);

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

var guestlist = function (_Component) {
  _inherits(guestlist, _Component);

  function guestlist() {
    _classCallCheck(this, guestlist);

    return _possibleConstructorReturn(this, (guestlist.__proto__ || Object.getPrototypeOf(guestlist)).apply(this, arguments));
  }

  return guestlist;
}(_metalComponent2.default);

;

_metalSoy2.default.register(guestlist, _indexSoy2.default);

exports.default = guestlist;

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guestlist", function() { return guestlist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templates", function() { return templates; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_metal_component___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_metal_component__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_metal_soy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_metal_soy__);
/* jshint ignore:start */


var templates;
goog.loadModule(function(exports) {

// This file was automatically generated from index.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace guestlist.
 * @public
 */

goog.module('guestlist.incrementaldom');

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
  var param35 = function() {
    $guestlist(null, null, opt_ijData);
  };
  $templateAlias1(soy.$$assignDefaults({content: param35}, opt_data), null, opt_ijData);
}
exports.render = $render;
if (goog.DEBUG) {
  $render.soyTemplateName = 'guestlist.render';
}


/**
 * @param {Object<string, *>=} opt_data
 * @param {(null|undefined)=} opt_ignored
 * @param {Object<string, *>=} opt_ijData
 * @return {void}
 * @suppress {checkTypes}
 */
function $guestlist(opt_data, opt_ignored, opt_ijData) {
  ie_open('div', null, null,
      'class', 'guestlist');
    ie_open('div', null, null,
        'class', 'container container-fluid');
      ie_open('form', null, null,
          'id', 'section-container');
        ie_open('h2');
          itext('GUEST LIST');
        ie_close('h2');
        ie_open('div', null, null,
            'class', 'table-container');
          ie_open('table', null, null,
              'class', 'table');
            ie_open('thead');
              ie_open('th', null, null,
                  'class', 'th-lg');
                itext('Guest');
              ie_close('th');
              ie_open('th', null, null,
                  'class', 'th-sm');
                itext('RSVP');
              ie_close('th');
              ie_open('th', null, null,
                  'class', 'th-sm');
                itext('Group');
              ie_close('th');
              ie_open('th', null, null,
                  'class', 'th-sm');
                itext('Gluten');
              ie_close('th');
              ie_open('th', null, null,
                  'class', 'th-sm');
                itext('Dairy');
              ie_close('th');
            ie_close('thead');
            ie_void('tbody', null, null,
                'class', 'rsvpList');
            ie_void('td');
            ie_void('td');
            ie_void('td', null, null,
                'id', 'guestListTotal');
            ie_void('td', null, null,
                'id', 'glutonListTotal');
            ie_void('td', null, null,
                'id', 'dairyListTotal');
          ie_close('table');
        ie_close('div');
        ie_open('h2');
          itext('NOTES');
        ie_close('h2');
        ie_void('div', null, null,
            'class', 'rsvpNotes');
      ie_close('form');
      ie_open('div', null, null,
          'class', 'btn-wrapper');
        ie_open('button', null, null,
            'class', 'btn login',
            'onclick', 'signOut();');
          itext('Sign Out');
        ie_close('button');
      ie_close('div');
    ie_close('div');
  ie_close('div');
  ie_void('footer');
  ie_void('script', null, null,
      'src', '/js/guestlist.js');
}
exports.guestlist = $guestlist;
if (goog.DEBUG) {
  $guestlist.soyTemplateName = 'guestlist.guestlist';
}

exports.render.params = [];
exports.render.types = {};
exports.guestlist.params = [];
exports.guestlist.types = {};
templates = exports;
return exports;

});

class guestlist extends __WEBPACK_IMPORTED_MODULE_0_metal_component___default.a {}
__WEBPACK_IMPORTED_MODULE_1_metal_soy___default.a.register(guestlist, templates);

/* harmony default export */ __webpack_exports__["default"] = (templates);
/* jshint ignore:end */


/***/ })

},[122]);