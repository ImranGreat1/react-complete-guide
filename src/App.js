import './App.css';
import React, { Component } from 'react';
import DemoApp from './demo/DemoApp';
import StateHook from './demo/StateHook';


class App extends Component {
  render() {
    return (
      <div className="App">
        <DemoApp />
        <StateHook />
      </div>
    )
  }
}

export default App;
