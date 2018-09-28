// ----------------------------------------------------------------------------
// Original Creator: Redux
// File Developer: Peter Pak
// Description: Script for visible todo list container
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import { connect } from 'react-redux';
// ----------------------------------------------------------------------------

// Action Imports -------------------------------------------------------------
import { setVisibilityFilter } from '../../../modules/redux/actions';
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import Link from '../../components/Link/Link';
// ----------------------------------------------------------------------------

// Mappings -------------------------------------------------------------------
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})
// ----------------------------------------------------------------------------

// Compontainer Export --------------------------------------------------------
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)
// ----------------------------------------------------------------------------
