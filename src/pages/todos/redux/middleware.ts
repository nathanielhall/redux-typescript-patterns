import { MODULE, fromActions as fromTodosActions } from '../index'
import { Dispatch, Middleware, MiddlewareAPI } from 'redux'
import * as fromUIactions from '../../../store/actions/ui'
import * as fromAPIactions from '../../../store/actions/api'
import { fromActions as fromNotificationActions, NotificationType } from '../../../common/notification'


const { apiRequest } = fromAPIactions.Actions


export const fetchTodoItems: Middleware = ({ dispatch }: MiddlewareAPI) =>
  (next: Dispatch<fromTodosActions.Actions>) =>
    (action: fromTodosActions.Actions) => {


      // this ensures the correct order / allows for dispatch
      next(action)  


      switch (action.type) {

        case fromTodosActions.FETCH_ITEMS: {

          debugger;

          const { method, url } = action.payload.meta

          dispatch(
            apiRequest(
              '',
              method,
              url,
              fromTodosActions.FETCH_ITEMS_ONSUCCESS,
              fromTodosActions.FETCH_ITEMS_ONERROR
            )
          )

          dispatch(fromUIactions.Actions.showSpinner())

          break
        }

        case fromTodosActions.FETCH_ITEMS_ONSUCCESS: {
          if (action.payload && action.payload.length > 0) {
            dispatch(fromTodosActions.Actions.setTodoItems(action.payload))
          }

          dispatch(fromUIactions.Actions.hideSpinner())

          dispatch(
            fromNotificationActions.Actions.setNotification(
              "Successfully fetched todo-items",
              NotificationType.SUCCESS,
              MODULE
            )
          )

          break
        }
        case fromTodosActions.FETCH_ITEMS_ONERROR: {

          dispatch(fromUIactions.Actions.hideSpinner())

          dispatch(
            fromNotificationActions.Actions.setNotification(
              "Failed to fetch todo-items",
              NotificationType.ERROR,
              MODULE
            )
          )
        }
      }
    }


export const addTodo: Middleware = ({ dispatch }: MiddlewareAPI) =>
  (next: Dispatch<fromTodosActions.Actions>) =>
    (action: fromTodosActions.Actions) => {

      next(action)

      switch (action.type) {

        case fromTodosActions.ADD_TODO: {

          dispatch(fromUIactions.Actions.showSpinner())


          const { url, method } = action.payload.meta
          dispatch(
            apiRequest(
              JSON.stringify(action.payload),
              method,
              url,
              fromTodosActions.ADD_TODO_ONSUCCESS,
              fromTodosActions.ADD_TODO_ONERROR
            )
          )

          break
        }

        case fromTodosActions.ADD_TODO_ONSUCCESS: {

          // Add Todo Item to Redux State (Mutate State)
          dispatch(
            fromTodosActions.Actions.setTodo(action.payload)
          )

          dispatch(fromUIactions.Actions.hideSpinner())

          dispatch(
            fromNotificationActions.Actions.setNotification(
              "Successfully added todo",
              NotificationType.SUCCESS,
              MODULE
            )
          )

          break
        }


        case fromTodosActions.ADD_TODO_ONERROR: {

          dispatch(fromUIactions.Actions.hideSpinner())

          dispatch(
            fromNotificationActions.Actions.setNotification(
              "Failed to add todo",
              NotificationType.ERROR,
              MODULE
            )
          )

          break
        }
        default:
          break

      }
    }


export const deleteTodo: Middleware = ({ dispatch }: MiddlewareAPI) =>
  (next: Dispatch<fromTodosActions.Actions>) =>
    (action: fromTodosActions.Actions) => {

      next(action)


      switch (action.type) {

        case fromTodosActions.DELETE_TODO: {

          dispatch(fromUIactions.Actions.showSpinner())

          const { url, method } = action.payload.meta
          dispatch(
            apiRequest(
              JSON.stringify(action.payload.id),
              method,
              `${url}/${action.payload.id}`,
              fromTodosActions.DELETE_TODO_ONSUCCESS,
              fromTodosActions.DELETE_TODO_ONERROR
            )
          )

          break
        }

        case fromTodosActions.DELETE_TODO_ONSUCCESS: {

          const { id } = action.payload
          dispatch(fromTodosActions.Actions.setDeletedTodo(id))

          dispatch(
            fromNotificationActions.Actions.setNotification(
              `Deleted todo id ${id.toString()}`,
              NotificationType.SUCCESS,
              MODULE
            )
          )

          dispatch(fromUIactions.Actions.hideSpinner())

          break
        }
        case fromTodosActions.DELETE_TODO_ONERROR: {

          dispatch(
            fromNotificationActions.Actions.setNotification(
              `Error deleting todo. ERROR: ${action.payload}`,
              NotificationType.ERROR,
              MODULE
            )
          )
          dispatch(fromUIactions.Actions.hideSpinner())

          break
        }

        default:
          break

      }
    }


export const deleteTodoItems: Middleware = ({ dispatch }: MiddlewareAPI) =>
  (next: Dispatch<fromTodosActions.Actions>) =>
    (action: fromTodosActions.Actions) => {

      next(action)


      switch (action.type) {

        case fromTodosActions.DELETE_ITEMS: {

          dispatch(fromUIactions.Actions.showSpinner())

          const { url, method } = action.payload.meta
          dispatch(
            apiRequest(
              '',
              method,
              url,
              fromTodosActions.DELETE_ITEMS_ONSUCCESS,
              fromTodosActions.DELETE_ITEMS_ONERROR
            )
          )

          break
        }

        case fromTodosActions.DELETE_ITEMS_ONSUCCESS: {

          dispatch(fromTodosActions.Actions.setDeletedItems())

          dispatch(
            fromNotificationActions.Actions.setNotification(
              "Deleted all todo-items",
              NotificationType.SUCCESS,
              MODULE
            )
          )


          dispatch(fromUIactions.Actions.hideSpinner())
          break
        }
        case fromTodosActions.DELETE_ITEMS_ONERROR: {

          dispatch(
            fromNotificationActions.Actions.setNotification(
              `Error deleting all todo-items. ERROR: ${action.payload}`,
              NotificationType.ERROR,
              MODULE
            )
          )
          dispatch(fromUIactions.Actions.hideSpinner())
          break
        }
        default:
          break

      }
    }


/** Expose Todo Middlewares here... */
export const todosMdl = [
  fetchTodoItems,
  deleteTodoItems,
  addTodo,
  deleteTodo
]