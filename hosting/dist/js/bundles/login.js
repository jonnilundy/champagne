var pageComponent =
webpackJsonppageComponent([1],{

/***/ 194:
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

var _indexSoy = __webpack_require__(195);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var login = function (_Component) {
  _inherits(login, _Component);

  function login() {
    _classCallCheck(this, login);

    return _possibleConstructorReturn(this, (login.__proto__ || Object.getPrototypeOf(login)).apply(this, arguments));
  }

  return login;
}(_metalComponent2.default);

;

_metalSoy2.default.register(login, _indexSoy2.default);

exports.default = login;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.login = undefined;

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
   * @fileoverview Templates in namespace login.
   * @public
   */

  goog.module('login.incrementaldom');

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
    var param71 = function param71() {
      $login(null, null, opt_ijData);
    };
    $templateAlias1(soy.$$assignDefaults({ content: param71 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'login.render';
  }

  /**
   * @param {Object<string, *>=} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $login(opt_data, opt_ignored, opt_ijData) {
    ie_open('div', null, null, 'class', 'login');
    ie_open('div', null, null, 'class', 'container container-fluid');
    ie_void('div', null, null, 'id', 'popup', 'class', 'popup alert-danger');
    ie_open('form', null, null, 'name', 'signIn', 'class', 'form', 'onsubmit', 'signInWithEmailAndPassword(); return false;');
    ie_open('div', null, null, 'class', 'form-group');
    ie_open('div', null, null, 'class', 'row');
    ie_open('label');
    itext('Email');
    ie_close('label');
    ie_close('div');
    ie_open('div', null, null, 'class', 'row');
    ie_open('input', null, null, 'type', 'email', 'placeholder', 'youremail@company.com', 'name', 'email', 'maxlength', '100', 'required', '');
    ie_close('input');
    ie_close('div');
    ie_close('div');
    ie_open('div', null, null, 'class', 'form-group');
    ie_open('div', null, null, 'class', 'row');
    ie_open('label');
    itext('Password');
    ie_close('label');
    ie_close('div');
    ie_open('div', null, null, 'class', 'row');
    ie_open('input', null, null, 'type', 'password', 'placeholder', 'Password (at least 6 characters)', 'name', 'password', 'maxlength', '100', 'required', '');
    ie_close('input');
    ie_close('div');
    ie_close('div');
    ie_open('div', null, null, 'class', 'btn-wrapper');
    ie_open('button', null, null, 'type', 'submit', 'class', 'btn login', 'name', 'submit');
    itext('Login');
    ie_close('button');
    ie_close('div');
    ie_close('form');
    ie_close('div');
    ie_close('div');
    ie_void('footer');
    ie_void('script', null, null, 'src', '/js/login.js');
  }
  exports.login = $login;
  if (goog.DEBUG) {
    $login.soyTemplateName = 'login.login';
  }

  exports.render.params = [];
  exports.render.types = {};
  exports.login.params = [];
  exports.login.types = {};
  exports.templates = templates = exports;
  return exports;
});

var login = function (_Component) {
  _inherits(login, _Component);

  function login() {
    _classCallCheck(this, login);

    return _possibleConstructorReturn(this, (login.__proto__ || Object.getPrototypeOf(login)).apply(this, arguments));
  }

  return login;
}(_metalComponent2.default);

_metalSoy2.default.register(login, templates);
exports.login = login;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[194]);