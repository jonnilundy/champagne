var pageComponent =
webpackJsonppageComponent([4],{

/***/ 190:
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

var _indexSoy = __webpack_require__(191);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var gallery = function (_Component) {
  _inherits(gallery, _Component);

  function gallery() {
    _classCallCheck(this, gallery);

    return _possibleConstructorReturn(this, (gallery.__proto__ || Object.getPrototypeOf(gallery)).apply(this, arguments));
  }

  return gallery;
}(_metalComponent2.default);

;

_metalSoy2.default.register(gallery, _indexSoy2.default);

exports.default = gallery;

/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.templates = exports.gallery = undefined;

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
     * @fileoverview Templates in namespace gallery.
     * @public
     */

    goog.module('gallery.incrementaldom');

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
        var param57 = function param57() {
            $gallery(null, null, opt_ijData);
        };
        $templateAlias1(soy.$$assignDefaults({ content: param57 }, opt_data), null, opt_ijData);
    }
    exports.render = $render;
    if (goog.DEBUG) {
        $render.soyTemplateName = 'gallery.render';
    }

    /**
     * @param {Object<string, *>=} opt_data
     * @param {(null|undefined)=} opt_ignored
     * @param {Object<string, *>=} opt_ijData
     * @return {void}
     * @suppress {checkTypes}
     */
    function $gallery(opt_data, opt_ignored, opt_ijData) {
        ie_open('div', null, null, 'class', 'gallery');
        ie_open('div', null, null, 'class', 'container');
        ie_open('div', null, null, 'class', 'row text-center');
        ie_open('h2');
        itext('Gallery');
        ie_close('h2');
        ie_open('p', null, null, 'class', 'hashtag');
        itext('#lundyloveisbrewing');
        ie_close('p');
        ie_close('div');
        ie_open('div', null, null, 'class', 'profile');
        ie_open('img', null, null, 'src', '/images/gallery/portraits/marissa.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/portraits/jonni.jpg');
        ie_close('img');
        ie_close('div');
        ie_open('div', null, null, 'class', 'album');
        ie_open('img', null, null, 'src', '/images/gallery/couple/1.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/2.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/3.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/4.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/5.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/6.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/7.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/8.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/9.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/10.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/11.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/12.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/13.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/14.jpg');
        ie_close('img');
        ie_open('img', null, null, 'src', '/images/gallery/couple/15.jpg');
        ie_close('img');
        ie_close('div');
        ie_open('p', null, null, 'class', 'photo-credit');
        itext('Pictures by the incredible ');
        ie_open('a', null, null, 'href', 'http://emilymagers.com/', 'target', '_blank');
        itext('Emily Magers');
        ie_close('a');
        itext('!');
        ie_close('p');
        ie_close('div');
        ie_close('div');
        ie_void('footer');
        ie_void('script', null, null, 'src', '/js/index.js');
    }
    exports.gallery = $gallery;
    if (goog.DEBUG) {
        $gallery.soyTemplateName = 'gallery.gallery';
    }

    exports.render.params = [];
    exports.render.types = {};
    exports.gallery.params = [];
    exports.gallery.types = {};
    exports.templates = templates = exports;
    return exports;
});

var gallery = function (_Component) {
    _inherits(gallery, _Component);

    function gallery() {
        _classCallCheck(this, gallery);

        return _possibleConstructorReturn(this, (gallery.__proto__ || Object.getPrototypeOf(gallery)).apply(this, arguments));
    }

    return gallery;
}(_metalComponent2.default);

_metalSoy2.default.register(gallery, templates);
exports.gallery = gallery;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[190]);