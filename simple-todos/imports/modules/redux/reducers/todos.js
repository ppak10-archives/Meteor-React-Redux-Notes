// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script to hold todo reducers
// ----------------------------------------------------------------------------

// Reducer --------------------------------------------------------------------
const todos = (state = [], action) => {
  switch (action.type) {

    case 'ADD_TODO':
      return [ ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

    case 'TOGGLE_TODO':
      return state.map(todo => ( todo.id === action.id ) ?
        {
          ...todo,
          completed: !todo.completed
        } : todo
      );

    default:
      return state;
  }
}
// ----------------------------------------------------------------------------

// Export Reducer -------------------------------------------------------------
export default todos;
// ----------------------------------------------------------------------------
