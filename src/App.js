import React, { useState } from 'react';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';
import { TodosFlter } from './components/TodosFilter';

function App() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(false);
  // const [activeTodos, setActiveTodos] = useState([]);

  const updateTodo = (id, isCompleted) => {
    const todoToUpdate = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !isCompleted,
        };
      }

      return { ...todo };
    });

    setTodos(todoToUpdate);
  };

  const removeTodo = (id) => {
    const remove = todos.filter(todo => id !== todo.id);

    setTodos(remove);
  };

  const isAllCompleted = () => {
    const allTodos = todos.map(todo => (
      {
        ...todo,
        completed: !completed,
      }
    ));

    setTodos(allTodos);
    setCompleted(!completed);
  };

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <Form
          todos={todos}
          completed={completed}
          setTodos={setTodos}
        />
      </header>

      <section className="main">
        <input
          type="checkbox"
          id="toggle-all"
          className="toggle-all"
          onChange={isAllCompleted}
        />
        <label htmlFor="toggle-all">Mark all as complete</label>

        <TodoList
          todos={todos}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </section>

      <footer className="footer">
        <span className="todo-count">
          {todos.filter(todo => todo.completed === false).length}
          {' '}
          items left
        </span>

        <TodosFlter todos={todos} setTodos={setTodos} />
        <button type="button" className="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
  );
}

export default App;
