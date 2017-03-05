import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import LeftNav from './components/LeftNav';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:"Personal Website",
      showLeftNav:false
    }
  }
  handleClick(e){
    console.log(e)
      // this.state.title=e;
      // this.setState({title:this.state.title})
  }
  setTitle(){
    this.setState({
      title:this.props.router.isActive('/',true)?'Personal Website':
      this.props.router.isActive('/blog')?'博客':
      this.props.router.isActive('/work')?'工作':
      this.props.router.isActive('/note')?'笔记':'文章'
    })
  }
  componentWillReceiveProps(){
    this.setTitle();
  }
  componentWillMount(){
    this.setLeftNav()
    window.onresize=this.setLeftNav.bind(this)
    this.setTitle();
  }
  setLeftNav(){
    if(window.innerWidth>750){
      this.setState({showLeftNav:true})
    }else{
      this.setState({showLeftNav:false})
    }
  }
  render () {
    console.log(this.props)
    return(
      <div className='root'>
        {this.state.showLeftNav?<LeftNav title={this.state.title}/>:<Header title={this.state.title}/>}
        <div className='mywrap'>
          {this.props.children}
        </div>
        {this.state.showLeftNav?null:<Footer handleClick={this.handleClick.bind(this)}/>}
      </div>
    )
  }
}

export default App;
