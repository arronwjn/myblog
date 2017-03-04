import React from 'react';

class Header extends React.Component {
  render () {
    return(
      <header>
        <button><i className="fa fa-arrow-left" aria-hidden="true"></i>Back</button>
        <h3>Personal Website</h3>
        <button><i className="fa fa-home" aria-hidden="true"></i>Home</button>
      </header>
    )
  }
}

export default Header;
