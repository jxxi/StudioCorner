import React, { Component } from 'react';
import logo from './logo.svg';
import Landing from './Landing.js'
import MyStudios from './MyStudios.js'
import './App.css';
import { Route } from "react-router-dom";


class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Studio<span id="light">Corner</span></h1>
        </header>

        <Route path="/" exact component={Landing}/>
        <Route path="/myStudios" component={MyStudios}/>
      </div>
    );
  }
}

export default App;
