// import moduleName from 'module'
import '../styles/style.scss'
import {Link} from '../routes';

class Demo extends React.Component{
  static getInitialProps ({ query }) {
    return { query }
  }

  componentDidMount(){

  }
  
  render(){
    console.log('sss',this.props)
    // console.log(id)
    return(

    <div>
    <h3>
    Hello from 
    <br/>
    <br/>
    ID from query: <span className="green">{this.props.query.id}</span>
    <br/>
    <br/>
    CARD from query: {this.props.query.card}
{/* 'user id is ' + ' and name is ' + req.params.name); */}

    </h3>

    {/* <Link route='b' params={{slug: ''}}>
      <button>Click</button>
    </Link> */}
{/* 
<style jsx>{`
.red{
  color:red;
}
`}</style> */}
  </div>
    )
  }
  }

  export default Demo;


