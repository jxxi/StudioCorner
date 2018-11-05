import React, { Component } from 'react';
import Login from './login.js';
import './App.css';

class Landing extends Component {
  render() {
    return (

      <div className="App-intro">
        <div className="col-md-4"/>
        <div className="col-md-4">
          <Login/>
        </div>
        <div className="col-md-4"/>
      </div>
    );
  }
}

export default Landing;
