// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Container to retrieve visible todos from current state filter
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
const getVisibleTodos = (todos, filter) => { // Prop values derived from state
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos // Return all todos
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed) // Return completed todos
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed) // Return uncompleted todos
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}
// ----------------------------------------------------------------------------

// Mappings -------------------------------------------------------------------
const mapStateToProps = state => ({ // Maps state to props for getVisibleTodos
  todos: getVisibleTodos( // Retrieves array of visible todos
    state.todos, // Retrieves current todos from state
    state.visibilityFilter // Retrieves current visibility filter from state
  )
})

const mapDispatchToProps = dispatch => ({ // Maps dispatch to props
  toggleTodo: id => dispatch(toggleTodo(id))
})
// ----------------------------------------------------------------------------

// Container Export -----------------------------------------------------------
export default connect( // Connects state and dispatch to props
  mapStateToProps, // Sends mapStateToProps state to TodoList component
  mapDispatchToProps // Sends mapDispatchToProps dispatch to TodoList component
)(TodoList) // Export TodoList component
// ----------------------------------------------------------------------------
