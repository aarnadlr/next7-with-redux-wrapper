import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { startClock, addCount, serverRenderClock } from '../redux/store'
import { addCount, changeName } from '../redux/actions';

class Counter extends Component {

static getInitialProps (props) {
  // store.dispatch(serverRenderClock(isServer))
  store.dispatch(addCount())
  return { isServer }
}
  componentDidMount(){
    console.log('From Counter CompDidMT!')
  }
  render() {
    console.log('From Counter RENDER METHOD!')
    return (
      <div>
        FROM COUNTER

        <h3>The count is : {this.props.count} </h3>
        <button onClick={this.props.addCount}>INCREMENT</button>
      </div>
    )
  }
}


//Retrieve state to use in render:
const mapStateToProps = (state) => {
  console.log('Counter: MaStToProps: ', state)
  return {
    count: state.count
  }
}


const mapDispatchToProps = dispatch => {
  return {
    // Retrieves action in store, and makes accressible as "addCount"
    addCount: bindActionCreators(addCount, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)