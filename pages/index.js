import React from 'react'
import '../styles/style.scss'
import Counter from '../Components/Counter';
import NameTag from '../Components/NameTag';
// import { addCount } from '../redux/actions';
import Link from 'next/link'
// import {Link} from '../routes';
import Yup from 'yup';
import { withFormik, Form, Field } from 'formik'
import { networkInterfaces } from 'os';

// This INdex Component is receiving a set of PROPS from withFormik HOC!
class Index extends React.Component {

  state={
    name:'Asher'
  }
  
  render () {
    // The `values` object on props contains the current values for all inputs!
    //   We use the values in ` values` object to pass the info into the actual input elements in the Component
    // const {values, handleChange} = this.props;


    console.log('INDEX PROPS: ',this.props)

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
        <li><Link href='/blog?id=first&user=asher' ><a>My first blog post</a></Link></li>
        <li><Link href='/blog?id=second&user=charley' ><a>My second blog post</a></Link></li>
        <li><Link href='/blog?id=last&user=molly' ><a>My last blog post</a></Link></li>
      </ul>

      {/* ✨ FORM ELEMENTS: */}
      {/* // handleSubmit is provided by withFormik and defined below in the withFormik Options object */}
      {/* // handleSubmit RECEIVES the user-inpoutted data (name and password, etc) as a `values` parameter. We take the values and SEND TO FIRESTORE from inside handleSubmit! */}
      <Form>
        <Field type="email" name='email' placeholder='Email address'/>
        <br/>
        <Field type="password" name='password' placeholder='password'/>
        <button>Submit</button>
      </Form>

    </>
    )
  }
}

// withFormik is an HOC, which FIRST takes in my custom Options object, where we define our specifc values;
// THEN after that evaluates, the resulting function takes in my Index Component. This is just liek how react-redux's `connect` HOC function works.
// This whole compound assemblage we save as FormikApp, which is what we export default from this module (and import into the root application)
const FormikApp = withFormik({
  // ES6 Method Definition syntax:
  // The props passed in 👇 HERE are the props placed onto the FormikApp Component from it's parent (_app.js)!
  mapPropsToValues({ email, password }){
    return {
      // the values defined in this object will be stored in the `props.values` object,
      // to pass to the INPUT elements on the page:
      // OFTEN-USED DOUBLE PIPE TRICK: IF the first arg is false (does not exist), the second arg will be used
      email: email || '',
      password: password || ''
    }
  },
  handleSubmit(values){
    console.log('VALUES: ',values)
  }
})(Index);

export default FormikApp;
