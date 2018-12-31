import React from 'react'
import '../styles/style.scss';
import Link from 'next/link';
import { withRouter } from 'next/router'

 const About = (props) => {
  return (
    <div>
      This is the About page!

      <Link prefetch href={'/'}>
        <a><h3>Back to home</h3></a>
      </Link>

      <h2>The person is named: {props.router.query.user}</h2>
      <h2>The age is: {props.router.query.age}</h2>
    </div>
  )
}

export default withRouter(About);
