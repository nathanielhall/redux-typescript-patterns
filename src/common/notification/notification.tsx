import React, {FC} from 'react'
import {INotification, NotificationType} from './model'
import styles from './style.scss'


type NotificationProps = {
  notification: INotification
}

export const Notification: FC<NotificationProps> = ({notification}) => {
    
    const renderNotification: () => JSX.Element = () => {
        if (notification)
            return showNotification(notification.message)
        else
            return (<div className={styles.fadeOut}></div>) 
    }


    const getNotificationClass = () => {
        switch(notification.type) {
            case NotificationType.ERROR: 
                return "danger"

            case NotificationType.SUCCESS:
                return "success"

            case NotificationType.WARNING:
                return "warning"

            case NotificationType.INFO:
                return "info"

            default:
                return "info"          
        }
    }


    const showNotification: (
        message: string
    ) => JSX.Element = (
        message
    ) => {
        const clsName = `alert alert-${getNotificationClass()} fadeIn`
        
        return(
            <div className={clsName} role="alert">
                {message}
            </div>             
        )
    }
    
    return renderNotification()
}
export default Notification

