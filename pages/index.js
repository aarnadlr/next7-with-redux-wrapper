import React from 'react'
import '../styles/style.scss'

import Counter from '../Components/Counter';
import NameTag from '../Components/NameTag';
// import { addCount } from '../redux/actions';
import Link from 'next/link';


class Index extends React.Component {

  render () {
    // console.log(props)
    return (
      <>
      {/* // <Page title='Index Page' linkTo='/other' /> */}
      <Counter/>
      <NameTag/>
      <Link prefetch as={'/masked'} href={'/about'}>
        <a><h3>Link to About page</h3></a>
      </Link>
    </>
    )
  }
}


export default Index
