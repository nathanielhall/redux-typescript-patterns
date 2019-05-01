import { createAction } from '../../../assets/typings/redux/createAction'
import { ActionUnion } from '../../../assets/typings/redux/types'
import { ITodo } from '../model'
import { RequestMethod } from '../../../assets/typings/api/types'




const url: string = 'http://localhost:5000/api/todo'


/** 
 * Action Types
 * The prefix is split to show where the action is taking place.
 * The app fetches, and deletes all todo items. [todo-items]
 * The app adds and deletes a todo. [todo]
 */

// todo: splitting could be confusing... get opionions..

/**  Action Types: TodoItems  */
export const FETCH_ITEMS = '[todo-items] Fetch'
export const FETCH_ITEMS_ONSUCCESS = '[todo-items] Fetch Success '
export const FETCH_ITEMS_ONERROR = '[todo-items] Fetch ERROR'
export const SET_FETCHED_ITEMS = '[todo-items] SET Fetch'

export const DELETE_ITEMS = '[todo-items] Delete'
export const DELETE_ITEMS_ONSUCCESS = '[todo-items] Delete Success'
export const DELETE_ITEMS_ONERROR = '[todo-items] Delete ERROR'
export const SET_DELETED_ITEMS = '[todo-items] SET Delete'

/** Action Types: Todo */
export const ADD_TODO = '[todo] Add'
export const ADD_TODO_ONSUCCESS = '[todo] Add Success'
export const ADD_TODO_ONERROR = '[todo] Add ERROR'
export const SET_ADDED_TODO = '[todo] SET Add'

export const DELETE_TODO = '[todo] Delete'
export const DELETE_TODO_ONSUCCESS = '[todo] Delete Success'
export const DELETE_TODO_ONERROR = '[todo] Delete ERROR'
export const SET_DELETED_TODO = '[todo] SET Delete'

export const DO_NOTHING = '[todo] DO_NOTHING'




/** Action Creators */
export const Actions = {

  /**  FETCH TODO ITEMS  */
  fetchTodoItems: (
  ) => createAction(
    FETCH_ITEMS,
    {
      meta: {
        url: url,
        method: RequestMethod.GET
      }
    }
  ),
  fetchTodoItemsOnSuccess: (
    response: ITodo[]
  ) => createAction(
    FETCH_ITEMS_ONSUCCESS,
    response
  ),
  fetchTodoItemsOnError: (
    error: string
  ) => createAction(
    FETCH_ITEMS_ONERROR,
    error
  ),


  /** DELETE TODO ITEMS  */
  deleteTodoItems: () => createAction(
    DELETE_ITEMS,
    {
      meta: {
        url: url,
        method: RequestMethod.DELETE
      }
    }
  ),
  deleteTodoItemsOnSuccess: (
    response: ITodo[]
  ) => createAction(
    DELETE_ITEMS_ONSUCCESS,
    response
  ),
  deleteTodoItemsOnError: (
    error: string
  ) => createAction(
    DELETE_ITEMS_ONERROR,
    error
  ),


  /**  ADD TODO  */
  addTodo: (
    name: string
  ) => createAction(
    ADD_TODO,
    {
      value: name,
      meta: {
        url: url,
        method: RequestMethod.POST
      }
    }
  ),
  addTodoOnSuccess: (
    response: ITodo
  ) => createAction(
    ADD_TODO_ONSUCCESS,
    response
  ),
  addTodoOnError: (
    error: string
  ) => createAction(
    ADD_TODO_ONERROR,
    error
  ),


  /**  DELETE TODO  */
  deleteTodo: (
    id: number
  ) => createAction(
    DELETE_TODO,
    {
      id,
      meta: {
        url: url,
        method: RequestMethod.DELETE
      }
    }
  ),
  deleteTodoOnSuccess: (
    response: ITodo
  ) => createAction(
    DELETE_TODO_ONSUCCESS,
    response
  ),
  deleteTodoOnError: (
    error: string
  ) => createAction(
    DELETE_TODO_ONERROR,
    error
  ),


  /**  SET  */
  setTodo: (todo: ITodo) => createAction(
    SET_ADDED_TODO,
    { data: todo }
  ),
  setTodoItems: (
    todoItems: ITodo[]
  ) => createAction(
    SET_FETCHED_ITEMS,
    { data: todoItems }
  ),
  setDeletedTodo: (
    removedId: number
  ) => createAction(
    SET_DELETED_TODO,
    { id: removedId }
  ),
  setDeletedItems: () => createAction(SET_DELETED_ITEMS),


  doNothing: () => createAction(DO_NOTHING)
}


/**  UNION of all Acion Creators above  */
export type Actions = ActionUnion<typeof Actions>


