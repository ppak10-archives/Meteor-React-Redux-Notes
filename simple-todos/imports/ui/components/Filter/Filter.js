// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for filter component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React from 'react';
// ----------------------------------------------------------------------------

// Container Imports ----------------------------------------------------------
import FilterLink from '../../containers/FilterLink/FilterLink.js';
// ----------------------------------------------------------------------------

// Action Imports -------------------------------------------------------------
import { VisibilityFilters } from '../../../modules/redux/actions';
// ----------------------------------------------------------------------------

// Todo List Component --------------------------------------------------------
const Filter = () => (
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
export default Filter
// ----------------------------------------------------------------------------
