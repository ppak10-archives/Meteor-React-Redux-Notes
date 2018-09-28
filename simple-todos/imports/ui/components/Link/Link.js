// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for React Link Component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
import PropTypes from 'prop-types';
// ----------------------------------------------------------------------------

// Todo Component -------------------------------------------------------------
const Link = ({ active, children, onClick }) => (
  <button
     onClick={onClick}
     disabled={active}
     style={{
         marginLeft: '4px',
     }}
  >
    {children}
  </button>
)
// ----------------------------------------------------------------------------

// Proptypes ------------------------------------------------------------------
Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Link
// ----------------------------------------------------------------------------
