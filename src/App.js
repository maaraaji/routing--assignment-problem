import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';

import { Route } from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Route path='/users' exact component={Users}/>
        <Route path='/courses' exact component={Courses} />
      </div>
    );
  }
}

export default App;
