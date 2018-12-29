import React from 'react'
import '../styles/style.scss'

import Counter from '../components/Counter';
import NameTag from '../components/NameTag';
// import { addCount } from '../redux/actions';

// import Link from 'next/link'
import {Link} from '../routes';


class Index extends React.Component {
  state={
    name:'Asher'
  }
  render () {
    // console.log(props)
    return (
      <>
      {/* // <Page title='Index Page' linkTo='/other' /> */}
      <Counter/>
      <NameTag/>
      <Link route='card' params={{slug: 'hello-world'}}>
        <button >Click to create an /Asher route</button>
      </Link>
    </>
    )
  }
}


export default Index
