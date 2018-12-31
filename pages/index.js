import React from 'react'
import '../styles/style.scss'

import Counter from '../Components/Counter';
import NameTag from '../Components/NameTag';
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
        {/* The 'as' props is 👇 COSMETIC "URL/ROUTE MASKING" if you wnt to hide the query params*/}
        <li><Link href='/blog' ><a>My first blog post</a></Link></li>
        <li><Link href='/blog?id=second&user=charley' ><a>My second blog post</a></Link></li>
        <li><Link href='/blog?id=last&user=molly' ><a>My last blog post</a></Link></li>
      </ul>


    </>
    )
  }
}


export default Index
