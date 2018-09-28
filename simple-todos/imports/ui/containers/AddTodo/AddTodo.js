// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for add todo container
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { Meteor } from 'meteor/meteor';
import React from 'react'
import { connect } from 'react-redux';
// ----------------------------------------------------------------------------

// Action Imports -------------------------------------------------------------
import { addTodo } from '../../../modules/redux/actions';
// ----------------------------------------------------------------------------

// Add Todo Container ---------------------------------------------------------
const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        className="new-task"
        onSubmit={event => {
          event.preventDefault();
          const text = input.value.trim(); // Trims whitespace from text input
          if (!text) { return } // If no text is present, return none
          Meteor.call('tasks.insert', text) // Meteor call to database
          dispatch(addTodo(input.value)) // Redux dispatch to reducer
          input.value = ''; // Reset input value to empty string
        }} >
        <input
          type="text"
          ref={node => input = node}
          placeholder="Type to add new tasks into database"
        />
      </form>
    </div>
  )
}
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default connect()(AddTodo)
// ----------------------------------------------------------------------------
