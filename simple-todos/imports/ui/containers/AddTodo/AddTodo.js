// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for add todo container
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
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
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input ref={node => input = node} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default connect()(AddTodo)
// ----------------------------------------------------------------------------
