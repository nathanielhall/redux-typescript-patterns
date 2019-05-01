
import * as fromActions from './actions'
import { Dispatch, Middleware, MiddlewareAPI } from 'redux'

const whenToRemoveNotification: number = 5000   // milliseconds

export const notificationMiddleware: Middleware = ({dispatch}: MiddlewareAPI) =>
(next: Dispatch<fromActions.Actions>) => 
    (action: fromActions.Actions) => {

        if (action.type === fromActions.SET_NOTIFICATION) {

          const {
            notification: {message}, 
            notification: {type}
          } = action.payload
          
          const {entity} = action.meta

           next(
               fromActions.Actions.setNotification(
                   message,
                   type,
                   entity
                )
            )         

            // dispatch a clear action after a given time
            setTimeout(() => {
                next(
                    fromActions.Actions.removeNotification(
                        action.payload.notification.id, 
                        entity
                    )
                )
            }, whenToRemoveNotification)


        } else {
            next(action) 
        }
    }


export const notificationMdl = [notificationMiddleware]    