import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

  render(){
    return(
      <header className="App-header">
        <h1 className="App-title">Simple TODO List</h1>
        <p className="App-intro">
          Get things done!
        </p>
      </header>
    );
  }
}

export default Header;
