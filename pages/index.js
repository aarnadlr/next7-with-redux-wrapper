import React from 'react'

import '../styles/style.scss'
// import { bindActionCreators } from 'redux'
// import { startClock, addCount, serverRenderClock } from '../store'
// import { connect } from 'react-redux'
// import Page from '../components/Page'
import Counter from '../components/Counter';
import NameTag from '../components/NameTag';

class Index extends React.Component {

  // static getInitialProps ({ store, isServer }) {
  //   store.dispatch(serverRenderClock(isServer))
  //   store.dispatch(addCount())
  //   return { isServer }
  // }
  // componentDidMount () {
    // console.log({ store, isServer })
    // this.timer = this.props.startClock()
  // }
  // componentWillUnmount () {
    // clearInterval(this.timer)
  // }

  render () {
    return (
      <>
      {/* // <Page title='Index Page' linkTo='/other' /> */}
      <Counter/>
      <NameTag/>
    </>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addCount: bindActionCreators(addCount, dispatch),
//     startClock: bindActionCreators(startClock, dispatch)
//   }
// }
// export default connect(
//   null,
//   mapDispatchToProps
// )(Index)

export default Index
