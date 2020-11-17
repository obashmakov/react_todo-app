import React from 'react';

export const TodosFlter = () => (
// const activeTodos = todos.filter(todo => todo.completed === false);
// const completedTodos = todos.filter(todo => todo.completed === true);
  <ul className="filters">
    <li>
      <a href="#/" className="selected">All</a>
    </li>

    <li>
      <a href="#/active">Active</a>
    </li>

    <li>
      <a href="#/completed">Completed</a>
    </li>
  </ul>
);
