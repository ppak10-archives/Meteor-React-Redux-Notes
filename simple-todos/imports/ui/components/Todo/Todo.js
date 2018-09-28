// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for React Todo Component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
import PropTypes form 'prop-types';
// ----------------------------------------------------------------------------

// Todo Component -------------------------------------------------------------
const Todo = ({ onClick, completed, text }) => (
  <li
    onClick = { onClick }
    style = {
      { textDecoration: completed ? 'line-through' : 'none' }
    }
  >
    { text }
  </li>
)
// ----------------------------------------------------------------------------

// Proptypes ------------------------------------------------------------------
Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Todo
// ----------------------------------------------------------------------------
