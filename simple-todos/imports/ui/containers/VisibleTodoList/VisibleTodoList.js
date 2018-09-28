// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for visible todo list container
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { connect } from 'react-redux';
// ----------------------------------------------------------------------------

// Action Imports -------------------------------------------------------------
import { toggleTodo } from '../../../modules/redux/actions';
import { VisibilityFilters } from '../../../modules/redux/actions';
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import TodoList from '../../components/TodoList/TodoList';
// ----------------------------------------------------------------------------

// Visible Todo List Container ------------------------------------------------
const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed)
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
// ----------------------------------------------------------------------------

// Mappings -------------------------------------------------------------------
const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
// ----------------------------------------------------------------------------
