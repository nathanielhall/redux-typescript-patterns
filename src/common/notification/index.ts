import NotificationList from './notification-list'
import reducer from './redux/reducer'
import * as fromActions from './redux/actions'
import {NotificationType} from './model'

const MODULE = 'Notifications'
const NotificationsState = ({[MODULE]: reducer})

export {
  NotificationList as default,
  fromActions,
  NotificationsState,
  NotificationType,
  MODULE
}