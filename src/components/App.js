import React, { Component } from 'react';
import Header from './Header';
//import logo from './logo.svg';
//<img src={logo} className="App-logo" alt="logo" />
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
