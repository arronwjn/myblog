import React from 'react';
import {Link} from 'react-router'

class Footer extends React.Component {
  render () {
    return(
      <footer>
        <Link to='/' activeStyle={{color:'#fff'}} onlyActiveOnIndex={true}><i className="fa fa-home" aria-hidden="true"></i><br/>Home</Link>
        <Link to='/work' activeStyle={{color:'#fff'}}><i className="fa fa-male" aria-hidden="true"></i><br/>Work</Link>
        <Link to='/note' activeStyle={{color:'#fff'}}><i className="fa fa-book" aria-hidden="true"></i><br/>Note</Link>
        <Link to='/blog' activeStyle={{color:'#fff'}}><i className="fa fa-bookmark" aria-hidden="true"></i><br/>Blog</Link>
      </footer>
    )
  }
}

export default Footer;
