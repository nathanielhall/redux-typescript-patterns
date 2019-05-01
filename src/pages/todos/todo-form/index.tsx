/**
 * @module Todos
 */ /** */
import React, { Component } from 'react'
import styles from './todo-form-style.scss'
import { connect } from 'react-redux'
import * as fromActions from '../redux/actions'
import {
  todoMaximumSelector,
  getTodos,
  todoPlaceholder
} from '../redux/selectors'



type TodoFormProps = {
  onAdd: (inputValue: string) => void,
  canAdd: boolean,
  onDeleteAll: () => void,
  canRemoveAll: boolean,
  placeholder: string,
}
type TodoFormState = {
  currentItem: string
}

export class TodoForm extends Component<TodoFormProps, TodoFormState> {
  state = {
    currentItem: ''
  } as TodoFormState


  onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const item = this.state.currentItem
    this.props.onAdd(item)
    this.setState({ currentItem: '' });
  }


  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    this.setState({ currentItem: val });
  }


  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className={styles.todoform}>
          <input
            type="text"
            placeholder={this.props.placeholder}
            maxLength={255}
            onChange={this.onInputChange}
            value={this.state.currentItem}
          />

          <button
            className="btn btn-primary btn-sm"
            type="submit"
            disabled={this.state.currentItem === '' || this.props.canAdd === false}>
            Add
                </button>
          <button className="btn btn-primary btn-sm"
            type="button"
            disabled={this.props.canRemoveAll}
            onClick={this.props.onDeleteAll}>
            Remove All
                </button>
          <button
            className="btn btn-danger btn-sm"
            type="button"
            onClick={() => { throw new Error("ERROR"); }}>
            Error!
                </button>
        </div>
      </form>
    )
  }
}



/**  Todo Form Container  */

const mapStateToProps = (
  state: StoreState
) => ({
  canAdd: todoMaximumSelector(state) === false,
  canRemoveAll: getTodos(state).length === 0,
  placeholder: todoPlaceholder(state)
})


const TodoFormContainer = connect(
  mapStateToProps,
  {
    onAdd: fromActions.Actions.addTodo,
    onDeleteAll: fromActions.Actions.deleteTodoItems
  }
)
  (TodoForm)

export default TodoFormContainer

