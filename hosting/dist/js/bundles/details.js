var pageComponent =
webpackJsonppageComponent([5],{

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(0);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(1);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(11);

__webpack_require__(14);

__webpack_require__(15);

var _indexSoy = __webpack_require__(189);

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

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.details = undefined;

var _metalComponent = __webpack_require__(0);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(1);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

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

  var $templateAlias1 = _metalSoy2.default.getTemplate('main.incrementaldom', 'render');

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    opt_data = opt_data || {};
    var param50 = function param50() {
      $details(null, null, opt_ijData);
    };
    $templateAlias1(soy.$$assignDefaults({ content: param50 }, opt_data), null, opt_ijData);
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
    ie_open('div', null, null, 'class', 'details');
    ie_open('div', null, null, 'class', 'container');
    ie_open('div', null, null, 'class', 'row text-center');
    ie_open('h2');
    itext(' You\'re invited!');
    ie_close('h2');
    ie_open('h2', null, null, 'class', 'detail-sub');
    itext('June 10th, 2017');
    ie_close('h2');
    ie_open('p', null, null, 'class', 'date time');
    itext('Ceremony starts at 2pm');
    ie_close('p');
    ie_open('p', null, null, 'class', 'date');
    itext('14208 Chandler Blvd');
    ie_open('br');
    ie_close('br');
    itext('Sherman Oaks, CA 91401');
    ie_close('p');
    ie_open('p', null, null, 'class', 'copy-button', 'id', 'btn', 'data-clipboard-text', '14208 Chandler Blvd, Sherman Oaks, CA 91401');
    ie_open('span', null, null, 'id', 'success');
    itext('Click here to copy address!');
    ie_close('span');
    ie_close('p');
    ie_close('div');
    ie_open('div', null, null, 'class', 'row text-center');
    ie_open('h2');
    itext('Registery');
    ie_close('h2');
    ie_open('a', null, null, 'href', 'https://secure.williams-sonoma.com/registry/jrwmbcvlnq/registry-list.html', 'target', '_blank');
    ie_open('img', null, null, 'src', '/images/williams-sonoma.png', 'alt', 'William Sonoma');
    ie_close('img');
    ie_close('a');
    ie_open('a', null, null, 'href', 'http://www.target.com/gift-registry/giftgiver?registryId=0e441ce07be94457a161504ef84d0a02#1', 'target', '_blank');
    ie_open('img', null, null, 'src', '/images/target.png', 'alt', 'Target');
    ie_close('img');
    ie_close('a');
    ie_open('a', null, null, 'href', 'https://www.anthropologie.com/registry/listing?registryId=NTQ3MTQZYMMW', 'target', '_blank');
    ie_open('img', null, null, 'src', '/images/anthropologie.png', 'alt', 'Anthropologie');
    ie_close('img');
    ie_close('a');
    ie_close('div');
    ie_close('div');
    ie_close('div');
    ie_void('footer');
    ie_void('script', null, null, 'src', '/js/index.js');
  }
  exports.details = $details;
  if (goog.DEBUG) {
    $details.soyTemplateName = 'details.details';
  }

  exports.render.params = [];
  exports.render.types = {};
  exports.details.params = [];
  exports.details.types = {};
  exports.templates = templates = exports;
  return exports;
});

var details = function (_Component) {
  _inherits(details, _Component);

  function details() {
    _classCallCheck(this, details);

    return _possibleConstructorReturn(this, (details.__proto__ || Object.getPrototypeOf(details)).apply(this, arguments));
  }

  return details;
}(_metalComponent2.default);

_metalSoy2.default.register(details, templates);
exports.details = details;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[188]);