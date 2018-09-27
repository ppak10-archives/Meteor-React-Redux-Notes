// ----------------------------------------------------------------------------
// File Developer: Peter Pak
// Description: Script to hold test reducers
// ----------------------------------------------------------------------------

let initialState = {} // Initial state

// Reducer Exports ------------------------------------------------------------
export default (state = initialState, {type, ...payload }) => {
  switch (type) {
    case 'ON_TEST':
      return { ...state, ...payload };
    default:
      return state;
  }
};
// ----------------------------------------------------------------------------
