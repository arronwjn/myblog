import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import {Link} from 'react-router';

class BlogCard extends React.Component {
  constructor(){
    super();
    this.state={
      data:[],
      posts:''
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/arronwjn/myblog/master/blogs/blogs.json')
    .then(res=>this.setState({data:res.data}))
    // .then(res=>console.log(res))
  }
  render () {
    return(
      <div className='blog'>
            <div key={Math.random()} className='blog-card'>
              <div className='blog-index'><span>{this.props.index+1}</span></div>
              <div className='blog-desc'>
                <h3>{this.props.title}</h3>
                <p>{this.props.desc}</p>
                <Link to={`post/${this.props.url}`}>点击阅读</Link>
                <span>{this.props.data}</span>
              </div>
            </div>
      </div>
    )
  }
}
export default BlogCard;
