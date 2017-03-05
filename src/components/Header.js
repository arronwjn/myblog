import React from 'react';
import {hashHistory} from 'react-router'

class Header extends React.Component {

  render () {
    return(
      <header>
        <button onClick={()=>hashHistory.go(-1)}><i className="fa fa-arrow-left" aria-hidden="true"></i>Back</button>
        <h3>{this.props.title}</h3>
        <button onClick={()=>hashHistory.push('/')}><i className="fa fa-home" aria-hidden="true"></i>Home</button>
      </header>
    )
  }
}

export default Header;
//Personal Website
