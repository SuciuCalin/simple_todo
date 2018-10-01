import React, { Component } from 'react';
import './ListItems.css';

class ListItems extends Component {

  toggleDone = (li) => {
    li.classList.toggle('done')
  }

  render() {
    const { todos } = this.props;
    return(
      <ul>
        {todos.map((todo, i) =>
          <li
            key={i}
            onClick={(event) => this.toggleDone(event.target)}>
            {todo}
          </li>)
        }
      </ul>
    );
  }
}

export default ListItems;
