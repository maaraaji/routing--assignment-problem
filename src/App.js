import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <nav>
          <ul>
            <Link to='/users' className="firstLink">Users</Link>
            <Link to='/courses'>Courses</Link>
          </ul>
        </nav>
        <Route path='/users' exact component={Users}/>
        <Route path='/courses' exact component={Courses} />
      </div>
    );
  }
}

export default App;
