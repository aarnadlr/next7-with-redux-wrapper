import React from 'react'
import '../styles/style.scss'

import Counter from '../Components/Counter';
import NameTag from '../Components/NameTag';
// import { addCount } from '../redux/actions';

import Link from 'next/link'
// import {Link} from '../routes';


class Index extends React.Component {
  state={
    name:'Asher',
    age: 7
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
        {/* The 'as' props is 👇 COSMETIC "URL/ROUTE MASKING" if you wnt to hide the query params*/}
        <li><Link href='/blog' as='/blog/butter'><a>My first blog post</a></Link></li>
        <li><Link href='/blog?id=second&user=charley' as='/blog/second'><a>My second blog post</a></Link></li>
        <li><Link href='/blog?id=last&user=molly' as='/blog/last'><a>My last blog post</a></Link></li>
      </ul>


      {/* <Link prefetch href={`/about?user=${this.state.name}&age=${this.state.age}`}> */}
      <Link prefetch href={`/about`}>
      {/* <Link prefetch href={`/about/${this.state.name}`}> */}
        <a><h3>Link with Parameters</h3></a>
      </Link>

      <Link prefetch href={`/contact`}>
        <a><h3>Contact</h3></a>
      </Link>


    </>
    )
  }
}


export default Index
