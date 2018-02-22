import React, { Component } from 'react';

class Course extends Component {
  render () {
    console.log('[Course.js] In render');
    let title = null
    for ( let p of new URLSearchParams(this.props.location.search).values()){
      title = p;
    }
    return (
      <div>
        <h1>{title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
