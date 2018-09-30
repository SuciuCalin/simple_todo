import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import ListItems from './components/ListItems/ListItems.js';

class App extends Component {
  state = {
    todos: []
  }

  handleKeyPress = (event) => {
    const input = document.querySelector('input');
    const output = event.target.value.replace(/^\s+|\s+$/gm,'');

    if (event.key === 'Enter' && output.length > 0) {
      const todoItems = this.state.todos;

      todoItems.push(output);

      this.setState({
        todos: todoItems
      });

      input.value = '';

    } else if (!(output.length > 0)){
      input.value = '';
    }
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <Header />

        <input
          placeholder="New todo"
          onKeyPress={(event) => this.handleKeyPress(event)}
        />

        <ListItems
          todos={todos}
        />

      </div>
    );
  }
}

export default App;
