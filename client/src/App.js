import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {data: []}
  componentDidMount(){
    fetch('/sensor/')
      .then(res => res.json())
      .then(data => this.setState({data}));
      this.state.foo = "hi";
  }
  render() {
    console.log(this.state.data.temperature.value);
    console.log(this.state.foo);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          
          <div>Result: {this.state.foo} 
          
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
