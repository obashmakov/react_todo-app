import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Form = ({ todos, setTodos, completed }) => {
  const [title, setTitle] = useState('');
  const [id, setId] = useState(0);

  const handlerSubmit = (event) => {
    event.preventDefault();

    setTodos([...todos, {
      title,
      id,
      completed,
    }]);

    setTitle('');
    setId(0);
  };

  const handlerChange = (event) => {
    const { value } = event.target;

    setTitle(value);
    setId(+new Date());
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        className="new-todo"
        placeholder="What needs to be done?"
        onChange={handlerChange}
      />
    </form>
  );
};

Form.propTypes = {
  setTodos: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};
