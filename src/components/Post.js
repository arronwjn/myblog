import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import marked from 'marked';
import { Spin, Alert } from 'antd';
import '../main.css'



marked.setOptions({
highlight: function (code) {
  return require('highlight.js').highlightAuto(code).value;
}
});
class Post extends React.Component {
  constructor(){
    super()
    this.state={
      data:''
    }
  }

  componentDidMount(){
    axios.get(`https://raw.githubusercontent.com/arronwjn/myblog/master/blogs/${this.props.params.title}.md`)
    .then(res=>this.setState({data:res.data}))
    // .then(res=>console.log(res))
  }
  componentWillMount(){
    console.log(this.props)
  }

  render () {
    return(
      <div className='post-content'>
          {this.state.data.length==0 ?<div><Spin tip="Loading...">
          <Alert message="Alert message title" description="Further details about the context of this alert." type="info"/>
        </Spin></div>:<div dangerouslySetInnerHTML={{__html: marked(this.state.data)}}></div>}
      </div>
    )
  }
}
export default Post;
