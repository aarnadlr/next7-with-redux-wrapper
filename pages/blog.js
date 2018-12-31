import React from 'react'
import '../styles/style.scss';

export default class extends React.Component {
  static getInitialProps ({ query }) {
    return { query }
  }

  render () {
    console.log('From /blog: this.PROPS:', this.props)
    return <div>
      <h1>THIS.props.query.ID: <span className="blue">{this.props.query.id}</span> </h1>
      <h1>THIS.props.query.USER: <span className="blue">{this.props.query.user}</span> </h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <style jsx>{`
*{
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
`}</style>
    </div>
  }
}