import { combineReducers } from 'redux';
import {
  MODULE as TodoModule, 
  reducer as TodoReducer
} from '../../pages/todos';
import {
  reducer as NotificationReducer, 
  MODULE as NotificationModule
} from '../../common/notification'; 



export const rootReducer = combineReducers({
  [NotificationModule]: NotificationReducer,
  [TodoModule]: TodoReducer
})


declare global {
  type StoreState  = ReturnType<typeof rootReducer>
}

