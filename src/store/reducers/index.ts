import {combineReducers} from 'redux';
import {TodosState} from '../../pages/todos';
import {NotificationsState} from '../../common/notification'; 



export const rootReducer = combineReducers({
  ...TodosState,
  ...NotificationsState
})


declare global {
  type StoreState  = ReturnType<typeof rootReducer>
}

