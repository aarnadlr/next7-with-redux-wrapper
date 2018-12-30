import React from 'react'
import '../styles/style.scss'

import Counter from '../components/Counter';
import NameTag from '../components/NameTag';
// import { addCount } from '../redux/actions';

import Link from 'next/link'
// import {Link} from '../routes';


class Index extends React.Component {
  state={
    name:'Asher'
  }
  render () {
    // console.log(this.props)
    return (
      <>
      {/* // <Page title='Index Page' linkTo='/other' /> */}
      <Counter/>
      <NameTag/>
      {/* <Link route='card' params={{slug: 'hello-world'}}>
        <button >Click to create an /Asher route</button>
      </Link> */}

      <ul>
        <li><Link href='/blog?id=first' as='/blog/first'><a>My first blog post</a></Link></li>
        <li><Link href='/blog?id=second' as='/blog/second'><a>My second blog post</a></Link></li>
        <li><Link href='/blog?id=last' as='/blog/last'><a>My last blog post</a></Link></li>
      </ul>


    </>
    )
  }
}


export default Index
