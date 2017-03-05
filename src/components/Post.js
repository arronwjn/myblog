import React from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import marked from 'marked'


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
      <div>
          {this.state.data.length==0 ?'正在加载中':<div dangerouslySetInnerHTML={{__html: marked(this.state.data)}}></div>}
      </div>
    )
  }
}
export default Post;