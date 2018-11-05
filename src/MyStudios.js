import React, { Component } from 'react';
import './App.css';

class MyStudios extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }
  render() {
    return (
      <div>
        "My Studios"
      </div>
    );
  }
}

export default MyStudios;
