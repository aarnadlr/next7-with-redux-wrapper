
// Provide a const handle for each action, to assign to `type`
// (Using a const handle instead of a string handle, for better error reporting)
export const actionTypes = {
  ADD: 'ADD',
  TICK: 'TICK',
  CHANGE_NAME: 'CHANGE_NAME'
}

// ACTION CREATOR FUNCTION: returns a function which takes the dispatch;
export const addCount = () => dispatch => {
  // Creates the action object; To type, we assign type constant ADD
  const action = { type: actionTypes.ADD };
  // returns the dispatch holding the action;
  return dispatch(action)

  //How the ORIGINAL EXAMPLE performs this in one line:
  // return dispatch({ type: actionTypes.ADD })
}

// ACTION CREATOR FUNCTION: returns a function which takes the dispatch;
export const changeName = () => dispatch => {
  // Creates the action object;
  const action = { type: actionTypes.CHANGE_NAME };
  // returns the dispatch holding the action;
  return dispatch(action)
}
