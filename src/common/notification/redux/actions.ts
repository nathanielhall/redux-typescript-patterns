import { createAction } from '../../../assets/typings/redux/createAction'
import { ActionUnion } from '../../../assets/typings/redux/types'


export const SET_NOTIFICATION = 'SET Notification'
export const REMOVE_NOTIFICATION = 'REMOVE Notification'


export const Actions = {

  setNotification: (
    message: string,
    type: string,
    entity: string
  ) => createAction(
    SET_NOTIFICATION,
    {
      notification: {
        id: new Date().getMilliseconds(),
        message: message,
        type: type
      }
    },
    { entity }
  ),

  removeNotification: (
    notificationId: number,
    entity: string
  ) => createAction(
    REMOVE_NOTIFICATION,
    {
      notificationId
    },
    { entity }
  )
}

export type Actions = ActionUnion<typeof Actions>