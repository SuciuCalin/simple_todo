import React, { Component } from 'react';
import './ListItems.css';

class ListItems extends Component {
  render() {
    const { todos } = this.props;
    return(
      <ul>
        {todos.map((todo) =>
          <li key={todos.indexOf(todo)}>
            {todo}
          </li>)
        }
      </ul>
    );
  }
}

export default ListItems;
