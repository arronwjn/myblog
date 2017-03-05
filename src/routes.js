import React from 'react';
import {Router,Route,browserHistory,IndexRoute} from 'react-router';
import App from './App';
import Home from './components/Home';
import Blog from './components/Blog';
import Work from './components/Work';
import Note from './components/Note';
import Post from './components/Post';

class Routes extends React.Component {
  render () {
    return(
        <Router history={browserHistory}>
          <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='blog' component={Blog}/>
            <Route path='work' component={Work}/>
            <Route path='note' component={Note}/>
            <Route path='Post/:title' component={Post}/>
          </Route>
        </Router>
    )
  }
}

export default Routes;
