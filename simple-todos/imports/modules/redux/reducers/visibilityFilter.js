// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script to hold visibility filter reducers
// ----------------------------------------------------------------------------

// Action Imports -------------------------------------------------------------
import { VisibilityFilters } from '../actions';
// ----------------------------------------------------------------------------

// Reducer --------------------------------------------------------------------
const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
}
// ----------------------------------------------------------------------------

// Export Reducer -------------------------------------------------------------
export default visibilityFilter;
// ----------------------------------------------------------------------------
