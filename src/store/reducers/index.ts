import { combineReducers } from 'redux';

import {
  TodoState, 
  MODULE as TodoModule, 
  reducer as TodoReducer
} from '../../pages/todos';

import {
  reducer as NotificationReducer, 
  NotificationState, 
  MODULE as NotificationModule
} from '../../common/notification'; 



declare global {
  type StoreState = {
      [NotificationModule]: NotificationState
  } & {
    [TodoModule]: TodoState
  }
}

const rootReducer = combineReducers<StoreState>({
  [NotificationModule]: NotificationReducer,
  [TodoModule]: TodoReducer
})

export default rootReducer


