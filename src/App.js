import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Timer from './Timer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My Timer</h1>
        <Timer start={Date.now()}/>
      </div>
    );
  }
}

export default App;
