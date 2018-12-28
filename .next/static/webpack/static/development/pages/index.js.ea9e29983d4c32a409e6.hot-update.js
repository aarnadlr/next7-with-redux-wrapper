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


 // import { startClock, changeName, addCount, serverRenderClock } from '../redux/store'



var NameTag = function NameTag(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "FROM NAMETAG", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Name is: ", props.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.changeName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "CHange the name"));
}; //Retrieve state to use in render:


var mapStateToProps = function mapStateToProps(state) {
  // console.log('MaStToProps: ', state)
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
//# sourceMappingURL=index.js.ea9e29983d4c32a409e6.hot-update.js.map