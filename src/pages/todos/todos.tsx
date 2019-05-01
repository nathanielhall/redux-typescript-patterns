/**
 * @module Todos
 */ /** */
import React, { Component } from 'react'
import TodoList from './todo-list/todo-list-container'
import TodoForm from './todo-form/index'

import NotificationList from '../../common/notification'


/**
 * The app component provides a shell of the Todo app 
 * pulling together the child components.
 * 
 */
class App extends React.Component {
  render() {
    return (
      <>
        <NotificationList />
        <TodoForm />
        <TodoList />
      </>
    )
  }
}
export default App
