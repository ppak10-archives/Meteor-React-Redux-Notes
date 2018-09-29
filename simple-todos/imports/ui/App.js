// ----------------------------------------------------------------------------
// Original Creator: Meteor
// File Developer: Peter Pak
// Description: Script for main React App component
// ----------------------------------------------------------------------------

// Package Imports ------------------------------------------------------------
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
// ----------------------------------------------------------------------------

// Component Imports ----------------------------------------------------------
import Filter from './components/Filter/Filter.js';

import Task from './components/Task/Task.js';
import AccountsUIWrapper from './components/AccountsUIWrapper/AccountsUIWrapper.js';
// ----------------------------------------------------------------------------

// Container Imports ----------------------------------------------------------
import AddTodo from './containers/AddTodo/AddTodo.js';
import VisibleTodoList from './containers/VisibleTodoList/VisibleTodoList.js';
// ----------------------------------------------------------------------------

// Api Imports ----------------------------------------------------------------
import { Tasks } from '../api/tasks.js';
// ----------------------------------------------------------------------------

// React App ------------------------------------------------------------------
// Represents the whole app
class App extends Component {

  // Constructor --------------------------------------------------------------
  constructor(props) {
    super(props);

    this.state = {
      hideCompleted: false,
    };
  }

  // Hide Completed Method ----------------------------------------------------
  // State filter to hide completed tasks
  toggleHideCompleted() {
    this.setState({
      hideCompleted: !this.state.hideCompleted, // sets state to to toggle filter
    });
  }

  // Render Tasks Method ------------------------------------------------------
  // Renders Todo Tasks with their attributes
  renderTasks() {
    let filteredTasks = this.props.tasks;

    // Task filter for completion
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);
    }

    return filteredTasks.map((task) => {
      const currentUserId = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = task.owner === currentUserId;

      return (
        <Task
          key={task._id}
          task={task}
          showPrivateButton={showPrivateButton}
        />
      );
    });
  }

  // Render Method ------------------------------------------------------------
  // Renders React components
  render() {
    return (
      <div className="container">

        { /* Meteor Todo Component */ }
        <header>
          <h1>Todo List ({this.props.incompleteCount})</h1>

          { /* Filter for Todo List Component */ }
          <Filter />

          <label className="hide-completed">
            <input
              type="checkbox"

              readOnly
              checked={this.state.hideCompleted}

              onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
          </label>

          { /* AccountsUI React wrapper component */ }
          <AccountsUIWrapper />

          { /* Conditional AddTodo Component render if user is logged in */ }
          { this.props.currentUser ? <AddTodo /> : '' }
        </header>
        <ul>

          { /* Todo Tasks */ }
          {this.renderTasks()} { /* Calls render Tasks Method */ }
        </ul>

        { /* Visible Todo List Container */ }
        <VisibleTodoList />

      </div>
    );
  }
}
// ----------------------------------------------------------------------------

// Component Export -----------------------------------------------------------
// Fetches collection data with component wrapped with withTracker and supplies
// them the underlying App component as a prop
export default withTracker(() => {  // Wraps container with higher order component
  Meteor.subscribe('tasks'); // Subscribes to the tasks publication from tasks.js
  console.log(Tasks.find({}, { sort: { createdAt: -1 } }).fetch()) // needs further async
  return {

    // Calls database to find Tasks sorted by newest at the top
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),

    // Calls database to count uncompleted tasks
    incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),

    // Calls Meteor to determine current user
    currentUser: Meteor.user(),
  };
})(App);
// ----------------------------------------------------------------------------
