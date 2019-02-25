import React, { Component } from 'react';
import './App.css';

import TestData from './TestData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
React Testing
        </header>
        <div className="content">
          <TestData />
        </div>
      </div>
    );
  }
}

export default App;
