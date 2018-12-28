import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import { actionTypes } from './actions';

const defaultState = {
  lastUpdate: 0,
  light: false,
  count: 8,
  name: 'Aaron'
}



// REDUCERS
export const reducer = (state = defaultState, action) => {
  console.log('REDUCER FIRED!')
  
  switch (action.type) {
    // case actionTypes.TICK:
    //   return Object.assign({}, state, {
    //     lastUpdate: action.ts,
    //     light: !!action.light
    //   })
    case actionTypes.ADD:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.CHANGE_NAME:
      return Object.assign({}, state, {
        name: "Rudy"
      })
    default:
      return state
  }

}


// ACTIONS
// export const serverRenderClock = isServer => dispatch => {
//   return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
// }

// export const startClock = () => dispatch => {
//   return setInterval(
//     () => dispatch({ type: actionTypes.TICK, light: true, ts: Date.now() }),
//     1000
//   )
// }

//Used by / imported into _app.js 
export const initStore = (initialState = defaultState) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
}
