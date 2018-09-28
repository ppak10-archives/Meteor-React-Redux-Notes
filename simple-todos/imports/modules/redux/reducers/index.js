// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Root reducer to hold Redux reducers references
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { combineReducers } from 'redux';
// ----------------------------------------------------------------------------

// Reducer Imports ------------------------------------------------------------
import testReducers from './testReducers';
import userReducers from './userReducers';
import todos from './todos.js';
import visibilityFilter from './visibilityFilter.js';
// ----------------------------------------------------------------------------

// Reducer Exports ------------------------------------------------------------
export default combineReducers({
  todos,
  visibilityFilter
})
// ----------------------------------------------------------------------------
