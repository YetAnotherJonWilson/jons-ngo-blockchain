import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    return fetch(
      'https://composer-rest-server-jons-network.mybluemix.net/api/SampleAsset'
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log("Yay, it worked, here's the JSON: \n", responseJson);
      })
      .catch(error => {
        console.error('Error: ', error);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
