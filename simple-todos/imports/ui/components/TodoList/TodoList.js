// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for React Todo List Component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import Todo from '../Todo/Todo.js';
// ----------------------------------------------------------------------------

// Todo List Component --------------------------------------------------------
const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
      />
    )}
  </ul>
)
// ----------------------------------------------------------------------------

// Proptypes ------------------------------------------------------------------
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default TodoList
// ----------------------------------------------------------------------------
