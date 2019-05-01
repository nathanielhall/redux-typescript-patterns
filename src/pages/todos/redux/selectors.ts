import { createSelector } from 'reselect'


export const MAX_NUMBER_OF_TODO_ITEMS: number = 7


// todo: add ability to have multiple components!!!
// state.todoList[id].items



export const getTodos = (state: StoreState) => state.todos.items

export const todoMaximumSelector = createSelector(
  getTodos,
  item => item.length >= MAX_NUMBER_OF_TODO_ITEMS
)

export const todoPlaceholder = createSelector(
  getTodos,
  (item) => {
    if (item.length === 0)
      return 'enter todo item'

    if (item.length === MAX_NUMBER_OF_TODO_ITEMS)
      return 'maximum number of items added'

    return `${item.length} of ${MAX_NUMBER_OF_TODO_ITEMS} items added`
  }
)