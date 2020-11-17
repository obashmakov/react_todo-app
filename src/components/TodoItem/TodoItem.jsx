import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({ title, completed, id, removeTodo, updateTodo }) => {
  const handleChange = () => {
    updateTodo(id, completed);
  };

  const handleRemove = () => {
    removeTodo(id);
  };

  return (
    <li>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={completed}
          onChange={handleChange}
        />
        <label className={completed ? 'completed' : null}>{title}</label>
        <button
          type="button"
          className="destroy"
          onClick={handleRemove}
        />
      </div>
      <input type="text" className="edit" />
    </li>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
};
