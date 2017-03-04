import React from 'react';
import {browserHistory} from 'react-router'

class Header extends React.Component {
  render () {
    return(
      <header>
        <button onClick={()=>browserHistory.go(-1)}><i className="fa fa-arrow-left" aria-hidden="true"></i>Back</button>
        <h3>Personal Website</h3>
        <button onClick={()=>browserHistory.push('/')}><i className="fa fa-home" aria-hidden="true"></i>Home</button>
      </header>
    )
  }
}

export default Header;
