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
    value: function componentDidMount() {// console.log('From Counter CompDidMT!')
    }
  }, {
    key: "render",
    value: function render() {
      // console.log('From Counter RENDER METHOD!')
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2220005710",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, "FROM COUNTER: ", this.props ? this.props.flavor : 'no', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-2220005710" + " " + 'hello',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "The count is : ", this.props.count, " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        onClick: this.props.addCount,
        className: "jsx-2220005710",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "INCREMENT"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2220005710",
        css: ".hello.jsx-2220005710{color:white;background:blue;}.hello.jsx-2220005710:hover{color:red;background:cyan;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3AvbmV4dDctd2l0aC1yZWR1eC13cmFwcGVyL2NvbXBvbmVudHMvQ291bnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmdCLEFBRWUsQUFHQSxVQUNNLEVBSEYsY0FHRyxFQUhGIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3AvbmV4dDctd2l0aC1yZWR1eC13cmFwcGVyL2NvbXBvbmVudHMvQ291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYWRkQ291bnQgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJztcblxuY2xhc3MgQ291bnRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbi8vIHJldHVybiBhIHByb3BzIG9iamVjdCBjb250YWluaW5nIGlzU2VydmVyOmlzU2VydmVyXG5zdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgLy8gY29uc29sZS5sb2coJ0ZST00gQ09VTlRFUiBHRVRJTklUSUFMUFJPUFM6JylcbiAgLy8gc3RvcmUuZGlzcGF0Y2goc2VydmVyUmVuZGVyQ2xvY2soaXNTZXJ2ZXIpKVxuICAvLyBzdG9yZS5kaXNwYXRjaChhZGRDb3VudCgpKVxuICByZXR1cm4ge1xuICAgIGZsYXZvcjonY2hvY29sYXRlJyB9XG59XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIC8vIGNvbnNvbGUubG9nKCdGcm9tIENvdW50ZXIgQ29tcERpZE1UIScpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdGcm9tIENvdW50ZXIgUkVOREVSIE1FVEhPRCEnKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBGUk9NIENPVU5URVI6IHt0aGlzLnByb3BzP3RoaXMucHJvcHMuZmxhdm9yOidubyd9XG5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0naGVsbG8nPlRoZSBjb3VudCBpcyA6IHt0aGlzLnByb3BzLmNvdW50fSA8L2gzPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMucHJvcHMuYWRkQ291bnR9PklOQ1JFTUVOVDwvYnV0dG9uPlxuXG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAkY29sb3IxOiByZWQ7XG4gICAgICAkY29sb3IyOiBibHVlO1xuICAgICAgJGNvbG9yMzogd2hpdGU7XG4gICAgICAkY29sb3I0OiBjeWFuO1xuICAgICAgLmhlbGxvIHtcbiAgICAgICAgY29sb3I6ICRjb2xvcjM7XG4gICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjI7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkY29sb3IxO1xuICAgICAgICAgIGJhY2tncm91bmQ6ICRjb2xvcjQ7XG4gICAgICAgIH1cblxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbi8vUmV0cmlldmUgc3RhdGUgdG8gdXNlIGluIHJlbmRlcjpcbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4ge1xuICBjb25zb2xlLmxvZygnQ291bnRlcjogTWFTdFRvUHJvcHM6ICcsIHN0YXRlKVxuICByZXR1cm4ge1xuICAgIGNvdW50OiBzdGF0ZS5jb3VudFxuICB9XG59XG5cblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4ge1xuICByZXR1cm4ge1xuICAgIC8vIFJldHJpZXZlcyBhY3Rpb24gaW4gc3RvcmUsIGFuZCBtYWtlcyBhY2NyZXNzaWJsZSBhcyBcImFkZENvdW50XCJcbiAgICBhZGRDb3VudDogYmluZEFjdGlvbkNyZWF0b3JzKGFkZENvdW50LCBkaXNwYXRjaClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShDb3VudGVyKSJdfQ== */\n/*@ sourceURL=/Users/aaronadler/Desktop/next7-with-redux-wrapper/components/Counter.js */",
        __self: this
      }));
    }
  }], [{
    key: "getInitialProps",
    // return a props object containing isServer:isServer
    value: function getInitialProps() {
      // console.log('FROM COUNTER GETINITIALPROPS:')
      // store.dispatch(serverRenderClock(isServer))
      // store.dispatch(addCount())
      return {
        flavor: 'chocolate'
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
//# sourceMappingURL=index.js.9b8c9f20d5d65275372f.hot-update.js.map