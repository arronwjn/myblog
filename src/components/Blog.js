import React from 'react';
import axios from 'axios';
import  '../main.css'
import AutoComplete from 'material-ui/AutoComplete';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import BlogCard from './BlogCard';
import map from 'lodash/fp/map';
import CircularProgress from 'material-ui/CircularProgress';

// import { Spin, Alert } from 'antd';
// import 'antd/dist/antd.css';


class Blog extends React.Component {
  constructor(){
    super();
    this.state={
      searchText:'',
      data:[],
      dataSource:[],
      inputvalue:'',
      show:false,
      index:'',
      posts:''
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/arronwjn/myblog/master/blogs/blogs.json')
    .then(res=>this.setState({data:res.data}))
    // .then((data) => {
    //     // console.log(data)
    //     this.setState({
    //       posts:data.posts,
    //       wait:false
    //     })
    //   });
    // .then(res=>console.log(res))
  }
  handelInput(e){
    let x = e.target.value;
    this.setState({inputvalue:x})
  }
  handleUpdateInput(searchText) {
    this.setState({
      searchText: searchText
    });
  };

  handleClick(index){
    let re=new RegExp(this.state.searchText);
    let titl=this.state.data.map((item)=>item.title);
    let tr=re.exec(titl);
    if(tr==null){
      console.log('aaa')
    }else{

      this.setState({show:true});
      console.log(index)
    }
  }
  render(){
    console.log(this.state.inputvalue)
    const colors = [
    '前端发展这么快是好还是坏', '何为让孩子不输在起跑线上', '如何提高工作效率',
    '谈恋爱秘籍'
  ];
  var blogCards = [];
  if (this.state.inputvalue=='') {
      this.state.data.map((b,index) => {blogCards.push(<BlogCard title={b.title} data={b.data} index={index} desc={b.desc} key={Math.random()} url={b.url}/>)},this.state.data);
    }else {
      for (var i = 0; i < this.state.data.length; i++) {
        let thisPost = this.state.data[i];
        if (thisPost.title.indexOf(this.state.inputvalue)!= -1) {
          blogCards.push(<BlogCard title={thisPost.title} data={thisPost.data} index={i} desc={thisPost.desc} key={Math.random()} url={thisPost.url} />)
        }
      }
    }
    return(
      <div style={{width:'100%'}}>

          <div className='select'>
            <i className="fa fa-search" aria-hidden="true"></i>
            <MuiThemeProvider>
              <TextField
                hintText="搜索"
                onChange={this.handelInput.bind(this)}/>
            </MuiThemeProvider>

          </div>
        {this.state.data.length==0?<div className='material'><MuiThemeProvider><CircularProgress size={60} thickness={7}/></MuiThemeProvider></div>:''}
        {blogCards}
      </div>
    )
  }
}

export default Blog;
