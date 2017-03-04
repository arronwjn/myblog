import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends React.Component {
  render () {
    return(
      <div className='root'>
        <Header/>
        <div className='mywrap'>
          {this.props.children}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;
