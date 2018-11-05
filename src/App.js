import React, { Component } from 'react';
import logo from './logo.svg';
import Login from './login.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Studio<span id="light">Corner</span></h1>
        </header>
        <div className="App-intro">
          <div className="col-md-4"/>
          <div className="col-md-4">
            <Login/>
          </div>
          <div className="col-md-4"/>
        </div>
      </div>
    );
  }
}

export default App;
