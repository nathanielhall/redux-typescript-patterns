/**
 * @module Todos
 */ /** */
import {TodoState, initialState} from "../model";
import * as fromActions from "./actions";
import {Reducer} from "redux";

const reducer: Reducer<TodoState, fromActions.Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case fromActions.SET_ADDED_TODO: {
      const todo = action.payload.data;

      // Add todo item at the TOP of the list
      return {
        ...state,
        items: [todo, ...state.items]
      };
    }

    case fromActions.SET_FETCHED_ITEMS: {
      const todos = action.payload.data;

      return {
        ...state,
        items: todos
      };
    }

    case fromActions.SET_DELETED_TODO: {
      const items = [...state.items];
      const indexToDelete = state.items
        .map(i => i._id)
        .indexOf(action.payload.id);
      items.splice(indexToDelete, 1);

      return {
        ...state,
        items: items
      };
    }
    case fromActions.SET_DELETED_ITEMS: {
      const items = [...state.items];
      items.splice(0, items.length);
      return {
        ...state,
        items: items
      };
    }

    default:
      return state;
  }
};
export default reducer;
