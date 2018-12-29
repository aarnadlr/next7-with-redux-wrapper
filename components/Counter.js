import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addCount } from '../redux/actions';

class Counter extends Component {


  componentDidMount(){
    // console.log('From Counter CompDidMT!')
  }
  render() {
    // console.log('From Counter RENDER METHOD!')
    return (
      <div>
        FROM COUNTER

        <h3 className='hello'>The count is : {this.props.count} </h3>
        <button onClick={this.props.addCount}>INCREMENT</button>


    <style jsx>{`
      $color1: red;
      $color2: blue;
      $color3: white;
      $color4: cyan;
      .hello {
        color: $color3;
        background: $color2;
        &:hover {
          color: $color1;
          background: $color4;
        }

      }
    `}</style>
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