import React from 'react'
import '../styles/style.scss'

import Counter from '../Components/Counter';
import NameTag from '../Components/NameTag';
// import { addCount } from '../redux/actions';
import Link from 'next/link';


class Index extends React.Component {
  state = {
    person: 'Aaron Adler',
    age:  41
  }
  render () {
    // const username = "AaronAdler"
    // console.log(props)
    return (
      <>
      {/* // <Page title='Index Page' linkTo='/other' /> */}
      <Counter/>
      <NameTag/>
      <Link prefetch as={'/masked'} href={'/about'}>
        <a><h3>Link to About page</h3></a>
      </Link>

      {/* <Link as={props.as} href={`/post?title=${props.title}`} >
              <a>{props.title}</a>
          </Link> */}


      <Link prefetch href={`/about?user=${this.state.person}&age=${this.state.age}`}>
        <a><h3>Link with Parameters</h3></a>
      </Link>
    </>
    )
  }
}


export default Index
