import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import { Spin, Alert } from 'antd';
import 'antd/dist/antd.css';


class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/arronwjn/myblog/master/blogs/blogs.json')
    .then(res=>this.setState({data:res.data}))
    // .then(res=>console.log(res))
  }

  render(){
    return(

      <div style={{width:'100%'}}>

          {this.state.data.length==0?<div><Spin tip="Loading...">
          <Alert message="Alert message title" description="Further details about the context of this alert." type="info"/>
        </Spin></div>:
            this.state.data.map((item,index)=>(
              <div key={index} className='blog-card'>
                <div className='blog-index'><span>{index+1}</span></div>
                <div className='blog-desc'>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                  <Link to={`post/${item.url}`}>点击阅读</Link>
                  <span>{item.data}</span>
                </div>
              </div>
            ))
          }
      </div>
    )
  }
}

export default Blog;
