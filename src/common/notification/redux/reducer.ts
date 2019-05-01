import * as fromActions from './actions'
import { Reducer } from 'redux'
import { NotificationState } from '../model'


const initialState: NotificationState = []

export const reducer: Reducer<NotificationState, fromActions.Actions> = (
  state = initialState,
  action
) => {

  switch (action.type) {
    case fromActions.SET_NOTIFICATION: {
      return [...state, action.payload.notification]
    }
    case fromActions.REMOVE_NOTIFICATION: {
      return state.filter(notification => notification.id !== action.payload.notificationId)
    }
    default:
      return state
  }
}
export default reducer