// ----------------------------------------------------------------------------
// Original Creator: Meteor
// File Developer: Peter Pak
// Description: Client startup script called by client/main.js
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// ----------------------------------------------------------------------------

// File Imports ---------------------------------------------------------------
import '../accounts-config.js';
import rootReducer from '../../modules/redux/reducers';
import App from '../../ui/App.js';
// ----------------------------------------------------------------------------

// Store ----------------------------------------------------------------------
const store = createStore(
  rootReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// ----------------------------------------------------------------------------

// Meteor Start ---------------------------------------------------------------
Meteor.startup(() => {
  render((
    <Provider store={ store }>
      <App />
    </Provider>
  ), document.getElementById('render-target'));
});
// ----------------------------------------------------------------------------
