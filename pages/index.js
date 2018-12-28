import React from 'react'
import '../styles/style.scss'

import Counter from '../components/Counter';
import NameTag from '../components/NameTag';
// import { addCount } from '../redux/actions';
class Index extends React.Component {

  render () {
    // console.log(props)
    return (
      <>
      {/* // <Page title='Index Page' linkTo='/other' /> */}
      <Counter/>
      <NameTag/>
    </>
    )
  }
}


export default Index
