webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./redux/actions.js":
/*!**************************!*\
  !*** ./redux/actions.js ***!
  \**************************/
/*! exports provided: actionTypes, addCount, changeName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCount", function() { return addCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeName", function() { return changeName; });
// Provide a const handle for each action, to assign to `type`
// (Using a const handle instead of a string handle, for better error reporting)
var actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK',
  CHANGE_NAME: 'CHANGE_NAME' // ACTION CREATOR FUNCTION: returns a function which takes the dispatch;

};
var addCount = function addCount() {
  return function (dispatch) {
    // Creates the action object; To type, we assign type constant ADD
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

/***/ })

})
//# sourceMappingURL=_app.js.aad40adec9c3b082ce31.hot-update.js.map