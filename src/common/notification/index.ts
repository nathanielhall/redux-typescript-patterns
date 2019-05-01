export const MODULE = 'Notifications'

import NotificationList from './notification-list'
import reducer from './redux/reducer'
import * as fromActions from './redux/actions'


export {
  NotificationList as default,
  reducer,
  fromActions
}


// todo: fix manual export - how? Eject CRA?
import {INotification, NotificationState} from './model'
export type INotification = INotification
export type NotificationState = NotificationState

export { NotificationType } from './model'
