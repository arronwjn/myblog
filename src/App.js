import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends React.Component {
  constructor(){
    super();
    this.state={
      title:"Personal Website"
    }
  }
  handleClick(e){
    console.log(e)
      // this.state.title=e;
      // this.setState({title:this.state.title})
  }
  componentWillMount(){


  }
  render () {
    return(
      <div className='root'>
        <Header title={this.state.title}/>
        <div className='mywrap'>
          {this.props.children}
        </div>
        <Footer handleClick={this.handleClick.bind(this)}/>
      </div>
    )
  }
}

export default App;
