// import React from 'react';
// import {Link} from 'react-router'
//
//
// class LeftNav extends React.Component {
//   render () {
//     return(
//       <div className='leftnav'>
//
//           <h3>{this.props.title}</h3>
//           <Link to='/' activeStyle={{color:'#fff'}} onlyActiveOnIndex={true} ><i className="fa fa-home" aria-hidden="true"></i>&nbsp;Home</Link>
//           <Link to='/work' activeStyle={{color:'#fff'}} ><i className="fa fa-male" aria-hidden="true"></i>&nbsp;Work</Link>
//           <Link to='/note' activeStyle={{color:'#fff'}} ><i className="fa fa-book" aria-hidden="true"></i>&nbsp;About</Link>
//           <Link to='/blog' activeStyle={{color:'#fff'}} ><i className="fa fa-bookmark" aria-hidden="true"></i>&nbsp;Blog</Link>
//
//       </div>
//     )
//   }
// }
// export default LeftNav;


import React from 'react'
import { Link } from 'react-router';

import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import Menu from 'material-ui/svg-icons/navigation/menu';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
class LeftNav extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  handleToggle(){this.setState({open: !this.state.open})};
  handleClose(){this.setState({open: false})};
  render() {
    let styles={
      smallIcon:{
        width:'40px',
        height:'40px'
      },
      small:{
        position:'absolute',
        top:'10px',
        left:'10px',
        width:'52px',
        height:'52px',
        padding:'10px'
      }
    }
    return (
      <div>
        <MuiThemeProvider>
          <IconButton tooltip="menu"
            onClick={this.handleToggle.bind(this)}
            iconStyle={styles.smallIcon}
            style={styles.small}>
            <Menu/>
          </IconButton>

        </MuiThemeProvider>
        <MuiThemeProvider>
          <Drawer
            docked={false}
            width={260}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})} containerStyle={{backgroundColor:'rgba(0,0,0,0.3)'}}>
            <div style={styles.menu} className='leftnav'>
              <p  onClick={this.handleClose.bind(this)}>{this.props.title}</p>
              <MenuItem onTouchTap={this.handleClose.bind(this)}>
                 <Link to='/' activeStyle={{color:'#fff'}} onlyActiveOnIndex={true} ><i className="fa fa-home" aria-hidden="true"></i>&nbsp;Home</Link>
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}>
                <Link to='/work' activeStyle={{color:'#fff'}} ><i className="fa fa-male" aria-hidden="true"></i>&nbsp;Work</Link>
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}>
                <Link to='/note' activeStyle={{color:'#fff'}} ><i className="fa fa-book" aria-hidden="true"></i>&nbsp;About</Link>
              </MenuItem>
              <MenuItem onTouchTap={this.handleClose.bind(this)}>
                <Link to='/blog' activeStyle={{color:'#fff'}} ><i className="fa fa-bookmark" aria-hidden="true"></i>&nbsp;Blog</Link>
              </MenuItem>
            </div>
          </Drawer>
        </MuiThemeProvider>

      </div>
    );
  }
}
export default LeftNav;

/* <MuiThemeProvider>
  <IconButton tooltip="menu"
    onClick={this.handleToggle.bind(this)}
    iconStyle={styles.smallIcon}
    style={styles.small}>
    <Menu/>
  </IconButton>
  <Drawer
    docked={false}
    width={260}
    open={this.state.open}
    onRequestChange={(open) => this.setState({open})} >
    <div style={styles.menu}>
      <p style={styles.navTitle} onClick={this.handleClose.bind(this)}>{this.props.title}</p>
      <MenuItem onTouchTap={this.handleClose.bind(this)}>
         <Link to='/' activeStyle={{color:'#fff'}} onlyActiveOnIndex={true} ><i className="fa fa-home" aria-hidden="true"></i>&nbsp;Home</Link>
      </MenuItem>
      <MenuItem onTouchTap={this.handleClose.bind(this)}>
        <Link to='/work' activeStyle={{color:'#fff'}} ><i className="fa fa-male" aria-hidden="true"></i>&nbsp;Work</Link>
      </MenuItem>
      <MenuItem onTouchTap={this.handleClose.bind(this)}>
        <Link to='/note' activeStyle={{color:'#fff'}} ><i className="fa fa-book" aria-hidden="true"></i>&nbsp;About</Link>
      </MenuItem>
      <MenuItem onTouchTap={this.handleClose.bind(this)}>
        <Link to='/blog' activeStyle={{color:'#fff'}} ><i className="fa fa-bookmark" aria-hidden="true"></i>&nbsp;Blog</Link>
      </MenuItem>
    </div>
  </Drawer>
</MuiThemeProvider> */
