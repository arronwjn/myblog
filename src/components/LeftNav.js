import React from 'react';
import {Link} from 'react-router'


class LeftNav extends React.Component {
  render () {
    return(
      <div className='leftnav'>

          <h3>{this.props.title}</h3>
          <Link to='/' activeStyle={{color:'#fff'}} onlyActiveOnIndex={true} ><i className="fa fa-home" aria-hidden="true"></i>&nbsp;Home</Link>
          <Link to='/work' activeStyle={{color:'#fff'}} ><i className="fa fa-male" aria-hidden="true"></i>&nbsp;Work</Link>
          <Link to='/note' activeStyle={{color:'#fff'}} ><i className="fa fa-book" aria-hidden="true"></i>&nbsp;Note</Link>
          <Link to='/blog' activeStyle={{color:'#fff'}} ><i className="fa fa-bookmark" aria-hidden="true"></i>&nbsp;Blog</Link>

      </div>
    )
  }
}
export default LeftNav;
