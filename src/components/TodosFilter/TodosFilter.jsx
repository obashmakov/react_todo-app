import React from 'react';
import PropTypes from 'prop-types';

export const TodosFlter = ({ setFilteredTodos }) => {
  const handlerChange = (event) => {
    const { name } = event.target;

    if (name === 'All') {
      setFilteredTodos(name);
    } else if (name === 'Active') {
      setFilteredTodos(name);
    } else if (name === 'Completed') {
      setFilteredTodos(name);
    }
  };

  return (
    <ul className="filters">
      <li>
        <a
          href="#/"
          className="selected"
          onClick={handlerChange}
          name="All"
        >
          All
        </a>
      </li>

      <li>
        <a
          href="#/active"
          onClick={handlerChange}
          name="Active"
        >
          Active
        </a>
      </li>

      <li>
        <a
          href="#/completed"
          onClick={handlerChange}
          name="Completed"
        >
          Completed
        </a>
      </li>
    </ul>
  );
};

TodosFlter.propTypes = {
  setFilteredTodos: PropTypes.func.isRequired,
};
