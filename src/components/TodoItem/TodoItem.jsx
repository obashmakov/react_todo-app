import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

export const TodoItem = ({ title, completed, setCompleted }) => {
  const handleChange = () => {
    setCompleted(!completed);
  };

  return (
    <li>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          onChange={handleChange}
        />
        <label className={completed ? 'completed' : null}>{title}</label>
        <button type="button" className="destroy" />
      </div>
      <input type="text" className="edit" />
    </li>
  );
};

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  setCompleted: PropTypes.func.isRequired,
};
