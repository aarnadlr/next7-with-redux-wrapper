webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Counter.js":
/*!*******************************!*\
  !*** ./components/Counter.js ***!
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
var _jsxFileName = "/Users/aaronadler/Desktop/next7-with-redux-wrapper/components/Counter.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // import { startClock, addCount, serverRenderClock } from '../redux/store'



var Counter =
/*#__PURE__*/
function (_Component) {
  _inherits(Counter, _Component);

  function Counter() {
    _classCallCheck(this, Counter);

    return _possibleConstructorReturn(this, _getPrototypeOf(Counter).apply(this, arguments));
  }

  _createClass(Counter, [{
    key: "componentDidMount",
    value: function componentDidMount() {// console.log(props)
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "FROM COUNTER", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "The count is : ", this.props.count, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.props.addCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "INCREMENT"));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      // store.dispatch(serverRenderClock(isServer))
      store.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["addCount"])());
      return {
        isServer: isServer
      };
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); //Retrieve state to use in render:


var mapStateToProps = function mapStateToProps(state) {
  console.log('MaStToProps: ', state);
  return {
    count: state.count
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // Retrieves action in store, and makes accressible as "addCount"
    addCount: Object(redux__WEBPACK_IMPORTED_MODULE_1__["bindActionCreators"])(_redux_actions__WEBPACK_IMPORTED_MODULE_3__["addCount"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Counter));

/***/ }),

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
  console.log('MaStToProps: ', state);
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

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
false,

/***/ "./node_modules/redux-thunk/lib/index.js":
false,

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/*! exports provided: addCount, changeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCount", function() { return addCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeName", function() { return changeName; });
// ACTION CREATOR FUNCTION: returns a function which takes the dispatch;
var addCount = function addCount() {
  return function (dispatch) {
    // Creates the action object;
    var action = {
      type: actionTypes.ADD
    }; // returns the dispatch holding the action;

    return dispatch(action); //How the ORIGINAL EXAMPLE performs this in one line:
    // return dispatch({ type: actionTypes.ADD })
  };
}; // ACTION CREATOR FUNCTION: returns a function which takes the dispatch;

var changeName = function changeName() {
  return function (dispatch) {
    // Creates the action object;
    var action = {
      type: actionTypes.CHANGE_NAME
    }; // returns the dispatch holding the action;

    return dispatch(action);
  };
};

/***/ }),

/***/ "./redux/store.js":
false

})
//# sourceMappingURL=index.js.65bff7f9e38b54be9c22.hot-update.js.map