import React, { Component } from 'react'

export default class extends Component {
  static getInitialProps ({ query }) {
    return { query }
  }

  render() {
    return (
      <div>
        hi from 
        hi from {this.props.query.characterId}
      </div>
    )
  }
}
