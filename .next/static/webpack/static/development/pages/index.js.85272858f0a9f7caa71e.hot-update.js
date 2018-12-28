webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Counter.js":
/*!*******************************!*\
  !*** ./components/Counter.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../redux/actions */ "./redux/actions.js");
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
    value: function componentDidMount() {
      console.log('From Counter CompDidMT!');
    }
  }, {
    key: "render",
    value: function render() {
      console.log('From Counter RENDER METHOD!');
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1864563329",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "FROM COUNTER", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-1864563329" + " " + 'hello',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, "The count is : ", this.props.count, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.props.addCount,
        className: "jsx-1864563329",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "INCREMENT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1864563329",
        css: ".hello.jsx-1864563329{color:white;background:blue;}.hello.jsx-1864563329:hover{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3AvbmV4dDctd2l0aC1yZWR1eC13cmFwcGVyL2NvbXBvbmVudHMvQ291bnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5QmdCLEFBRWUsQUFHQSxVQUFDLEVBRkcsZ0JBQUMiLCJmaWxlIjoiL1VzZXJzL2Fhcm9uYWRsZXIvRGVza3RvcC9uZXh0Ny13aXRoLXJlZHV4LXdyYXBwZXIvY29tcG9uZW50cy9Db3VudGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgYmluZEFjdGlvbkNyZWF0b3JzIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgeyBhZGRDb3VudCB9IGZyb20gJy4uL3JlZHV4L2FjdGlvbnMnO1xuXG5jbGFzcyBDb3VudGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuc3RhdGljIGdldEluaXRpYWxQcm9wcyAocHJvcHMpIHtcbiAgLy8gc3RvcmUuZGlzcGF0Y2goc2VydmVyUmVuZGVyQ2xvY2soaXNTZXJ2ZXIpKVxuICBzdG9yZS5kaXNwYXRjaChhZGRDb3VudCgpKVxuICByZXR1cm4geyBpc1NlcnZlciB9XG59XG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgY29uc29sZS5sb2coJ0Zyb20gQ291bnRlciBDb21wRGlkTVQhJylcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc29sZS5sb2coJ0Zyb20gQ291bnRlciBSRU5ERVIgTUVUSE9EIScpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIEZST00gQ09VTlRFUlxuXG4gICAgICAgIDxoMyBjbGFzc05hbWU9J2hlbGxvJz5UaGUgY291bnQgaXMgOiB7dGhpcy5wcm9wcy5jb3VudH0gPC9oMz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnByb3BzLmFkZENvdW50fT5JTkNSRU1FTlQ8L2J1dHRvbj5cblxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgJGNvbG9yMTogcmVkO1xuICAgICAgJGNvbG9yMjogYmx1ZTtcbiAgICAgICRjb2xvcjM6IHdoaXRlO1xuICAgICAgLmhlbGxvIHtcbiAgICAgICAgY29sb3I6ICRjb2xvcjM7XG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjI7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkY29sb3IxO1xuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG4vL1JldHJpZXZlIHN0YXRlIHRvIHVzZSBpbiByZW5kZXI6XG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+IHtcbiAgY29uc29sZS5sb2coJ0NvdW50ZXI6IE1hU3RUb1Byb3BzOiAnLCBzdGF0ZSlcbiAgcmV0dXJuIHtcbiAgICBjb3VudDogc3RhdGUuY291bnRcbiAgfVxufVxuXG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+IHtcbiAgcmV0dXJuIHtcbiAgICAvLyBSZXRyaWV2ZXMgYWN0aW9uIGluIHN0b3JlLCBhbmQgbWFrZXMgYWNjcmVzc2libGUgYXMgXCJhZGRDb3VudFwiXG4gICAgYWRkQ291bnQ6IGJpbmRBY3Rpb25DcmVhdG9ycyhhZGRDb3VudCwgZGlzcGF0Y2gpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoQ291bnRlcikiXX0= */\n/*@ sourceURL=/Users/aaronadler/Desktop/next7-with-redux-wrapper/components/Counter.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(props) {
      // store.dispatch(serverRenderClock(isServer))
      store.dispatch(Object(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["addCount"])());
      return {
        isServer: isServer
      };
    }
  }]);

  return Counter;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]); //Retrieve state to use in render:


var mapStateToProps = function mapStateToProps(state) {
  console.log('Counter: MaStToProps: ', state);
  return {
    count: state.count
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    // Retrieves action in store, and makes accressible as "addCount"
    addCount: Object(redux__WEBPACK_IMPORTED_MODULE_2__["bindActionCreators"])(_redux_actions__WEBPACK_IMPORTED_MODULE_4__["addCount"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Counter));

/***/ })

})
//# sourceMappingURL=index.js.85272858f0a9f7caa71e.hot-update.js.map