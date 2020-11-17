import React, { useState } from 'react';
import { Form } from './components/Form';
import { TodoList } from './components/TodoList';
import { TodosFlter } from './components/TodosFilter';

function App() {
  const [todos, setTodos] = useState([]);
  const [completed, setCompleted] = useState(false);
  const [filteredTodos, setFilteredTodos] = useState('All');

  const completedTodos = todos.filter(todo => todo.completed === true);
  const activeTodos = todos.filter(todo => todo.completed === false);

  const updateTodo = (id, isCompleted) => {
    const todoToUpdate = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !isCompleted,
        };
      }

      setFilteredTodos('All');

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

  const removeCompleted = () => {
    const remove = todos.filter(todo => todo.completed === false);

    setTodos(remove);
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

        {
          filteredTodos === 'Completed' && (
            <TodoList
              todos={completedTodos}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
            />
          )
        }

        {
          filteredTodos === 'Active' && (
            <TodoList
              todos={activeTodos}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
            />
          )
        }

        {
          filteredTodos === 'All' && (
            <TodoList
              todos={todos}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
            />
          )
        }
      </section>

      <footer className="footer">
        <span className="todo-count">
          {todos.filter(todo => todo.completed === false).length}
          {' '}
          items left
        </span>

        <TodosFlter setFilteredTodos={setFilteredTodos} />
        <button
          type="button"
          className="clear-completed"
          onClick={removeCompleted}
        >
          {`Clear completed (${completedTodos.length})`}
        </button>
      </footer>
    </section>
  );
}

export default App;
