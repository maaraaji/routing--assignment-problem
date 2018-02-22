import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
// import Course from './containers/Course/Course';
import Users from './containers/Users/Users';

import { Route, Link, Switch, Redirect } from 'react-router-dom';
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
        <Switch>
          <Route path='/users' exact component={Users}/>
          <Route path='/courses' component={Courses} />
          <Redirect from='/all-courses' to='/courses'/>
          <Route render={() => <h1>Page not found</h1>}/>
        </Switch>
      </div>
    );
  }
}

export default App;
