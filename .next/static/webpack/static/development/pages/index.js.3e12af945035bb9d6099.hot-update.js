webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/NameTag.js":
/*!*******************************!*\
  !*** ./components/NameTag.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
var _jsxFileName = "/Users/aaronadler/Desktop/next7-with-redux-wrapper/components/NameTag.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // import { startClock, changeName, addCount, serverRenderClock } from '../redux/store'



var NameTag =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NameTag, _React$Component);

  function NameTag() {
    _classCallCheck(this, NameTag);

    return _possibleConstructorReturn(this, _getPrototypeOf(NameTag).apply(this, arguments));
  }

  _createClass(NameTag, [{
    key: "render",
    // return a props object containing isServer:isServer
    // static getInitialProps ({ store, isServer }) {
    //   // store.dispatch(serverRenderClock(isServer))
    //   // store.dispatch(changeName())
    //   // return { isServer }
    // }
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "FROM NAMETAG", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, "Name is: ", this.props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.props.changeName,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "CHange the name"));
    }
  }]);

  return NameTag;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component); //Retrieve state to use in render:


var mapStateToProps = function mapStateToProps(state) {
  // console.log('NAMETAG:MaStToProps: ', state)
  return {
    name: state.name
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // Retrieves action in store, and makes accressible as "addCount"
    // BINDS the ACTION CREATOR FN, dispatch
    changeName: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["changeName"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(NameTag));

/***/ })

})
//# sourceMappingURL=index.js.3e12af945035bb9d6099.hot-update.js.map