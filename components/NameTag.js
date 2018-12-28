import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import { startClock, changeName, addCount, serverRenderClock } from '../redux/store'
import { changeName } from '../redux/actions';

class NameTag extends React.Component {

  render(){

    return (
      <div>
        FROM NAMETAG
        <h3>Name is: {this.props.name}</h3>
        <button onClick={this.props.changeName}>CHange the name</button>
      </div>
    )
  }
}


//Retrieve state to use in render:
const mapStateToProps = (state) => {
  // console.log('NAMETAG:MaStToProps: ', state)
  return {
    name: state.name
  }
}


const mapDispatchToProps = dispatch => {
  return {
    // Retrieves action in store, and makes accressible as "addCount"
    // BINDS the ACTION CREATOR FN, dispatch
    changeName: bindActionCreators(changeName, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameTag)