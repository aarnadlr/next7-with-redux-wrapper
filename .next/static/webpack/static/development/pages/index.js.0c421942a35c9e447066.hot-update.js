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
      }, "FROM COUNTER: ", this.props.flavor, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
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
        css: ".hello.jsx-2220005710{color:white;background:blue;}.hello.jsx-2220005710:hover{color:red;background:cyan;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3AvbmV4dDctd2l0aC1yZWR1eC13cmFwcGVyL2NvbXBvbmVudHMvQ291bnRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmdCLEFBRWUsQUFHQSxVQUNNLEVBSEYsY0FHRyxFQUhGIiwiZmlsZSI6Ii9Vc2Vycy9hYXJvbmFkbGVyL0Rlc2t0b3AvbmV4dDctd2l0aC1yZWR1eC13cmFwcGVyL2NvbXBvbmVudHMvQ291bnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGJpbmRBY3Rpb25DcmVhdG9ycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgYWRkQ291bnQgfSBmcm9tICcuLi9yZWR1eC9hY3Rpb25zJztcblxuY2xhc3MgQ291bnRlciBleHRlbmRzIENvbXBvbmVudCB7XG5cbi8vIHJldHVybiBhIHByb3BzIG9iamVjdCBjb250YWluaW5nIGlzU2VydmVyOmlzU2VydmVyXG5zdGF0aWMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgLy8gY29uc29sZS5sb2coJ0ZST00gQ09VTlRFUiBHRVRJTklUSUFMUFJPUFM6JylcbiAgLy8gc3RvcmUuZGlzcGF0Y2goc2VydmVyUmVuZGVyQ2xvY2soaXNTZXJ2ZXIpKVxuICAvLyBzdG9yZS5kaXNwYXRjaChhZGRDb3VudCgpKVxuICByZXR1cm4ge1xuICAgIGZsYXZvcjonY2hvY29sYXRlJyB9XG59XG5cblxuICBjb21wb25lbnREaWRNb3VudCgpe1xuICAgIC8vIGNvbnNvbGUubG9nKCdGcm9tIENvdW50ZXIgQ29tcERpZE1UIScpXG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdGcm9tIENvdW50ZXIgUkVOREVSIE1FVEhPRCEnKVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICBGUk9NIENPVU5URVI6IHt0aGlzLnByb3BzLmZsYXZvcn1cblxuICAgICAgICA8aDMgY2xhc3NOYW1lPSdoZWxsbyc+VGhlIGNvdW50IGlzIDoge3RoaXMucHJvcHMuY291bnR9IDwvaDM+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5wcm9wcy5hZGRDb3VudH0+SU5DUkVNRU5UPC9idXR0b24+XG5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICRjb2xvcjE6IHJlZDtcbiAgICAgICRjb2xvcjI6IGJsdWU7XG4gICAgICAkY29sb3IzOiB3aGl0ZTtcbiAgICAgICRjb2xvcjQ6IGN5YW47XG4gICAgICAuaGVsbG8ge1xuICAgICAgICBjb2xvcjogJGNvbG9yMztcbiAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yMjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICRjb2xvcjE7XG4gICAgICAgICAgYmFja2dyb3VuZDogJGNvbG9yNDtcbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cblxuLy9SZXRyaWV2ZSBzdGF0ZSB0byB1c2UgaW4gcmVuZGVyOlxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdDb3VudGVyOiBNYVN0VG9Qcm9wczogJywgc3RhdGUpXG4gIHJldHVybiB7XG4gICAgY291bnQ6IHN0YXRlLmNvdW50XG4gIH1cbn1cblxuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiB7XG4gIHJldHVybiB7XG4gICAgLy8gUmV0cmlldmVzIGFjdGlvbiBpbiBzdG9yZSwgYW5kIG1ha2VzIGFjY3Jlc3NpYmxlIGFzIFwiYWRkQ291bnRcIlxuICAgIGFkZENvdW50OiBiaW5kQWN0aW9uQ3JlYXRvcnMoYWRkQ291bnQsIGRpc3BhdGNoKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKENvdW50ZXIpIl19 */\n/*@ sourceURL=/Users/aaronadler/Desktop/next7-with-redux-wrapper/components/Counter.js */",
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
//# sourceMappingURL=index.js.0c421942a35c9e447066.hot-update.js.map