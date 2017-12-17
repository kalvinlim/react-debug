import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        temperature: {
          value: 0
        }
      }
    };
  }

  componentDidMount() {
    fetch('/sensor/')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }
  render() {
    const temperatureValue = this.state.data.temperature.value;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>

          <div>
            Result: {temperatureValue}
          </div>

        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
