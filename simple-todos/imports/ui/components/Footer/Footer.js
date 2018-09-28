// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for React Todo List Component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
// ----------------------------------------------------------------------------

// Container Imports ----------------------------------------------------------
import FilterLink from '../../containers/FilterLink/FilterLink.js';
// ----------------------------------------------------------------------------

// Action Imports -------------------------------------------------------------
import { VisibilityFilters } from '../../../modules/redux/actions'
// ----------------------------------------------------------------------------

// Todo List Component --------------------------------------------------------
const Footer = () => (
  <div>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>
      All
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
      Active
    </FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </div>
)
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
export default Footer
// ----------------------------------------------------------------------------
