import React from 'react'
import { Provider } from 'react-redux'
import App, { Container } from 'next/app'
import withRedux from 'next-redux-wrapper'
import { initStore } from '../redux/store'


class MyApp extends App {

  // getInitialProps is only called ONCE, here at _app.js.
  // So DO NOT BOTHER trying to use it inside individual page modules!
  // It won't be called in the other pages!

  // IF you NEED to call different getInitialProps data fetching requests
  // from inside different pages, then REMOVE it from here at _APP.JS!!
  static async getInitialProps ({ Component, ctx }) {
    // console.log('FROM _APP.JS GETINITIALPROPS:', arguments)
    // console.log('LOG:', arguments.length)
    // return a props object containing pageProps
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}
    }
  }

  render () {
    const { Component, pageProps, store } = this.props
    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    )
  }
}

export default withRedux(initStore)(MyApp)