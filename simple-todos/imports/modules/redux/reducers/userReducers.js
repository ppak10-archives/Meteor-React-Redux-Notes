// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script to hold user reducers
// ----------------------------------------------------------------------------

let initialState = {} // Initial state

// Reducer Exports ------------------------------------------------------------
export default (state = initialState, {type, ...payload }) => {
  switch (type) {
    case 'ON_LOGIN':
      return { ...state, ...payload };
    case 'ON_LOGOUT':
      return { ...state, ...payload };
    default:
      return state;
  }
};
// ----------------------------------------------------------------------------
