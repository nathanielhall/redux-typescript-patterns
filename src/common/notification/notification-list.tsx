import React, {FC} from 'react'
import { connect } from 'react-redux'
import {NotificationState} from './model'
import {getNotifications} from './redux/selector'
import Notification from './notification'

interface IProps {
    notifications: NotificationState
}

export const NotificationList: FC<IProps> = ({notifications}) => {
    const notificationList = notifications.map(notification => 
                                <li key={notification.id}>
                                    <Notification  notification={notification} />
                                </li>                                
                             )

    return(
        <div style={{position: 'absolute', bottom: 0, right: 10, alignSelf: 'flex-end'}}>
            <ul style={{listStyleType: 'none'}}>
                {notificationList}
            </ul>
        </div>
    )
}

/**  Notification List Container  */
const mapStateToProps = (
    state: StoreState
) => ({
    notifications: getNotifications(state)
})


export default connect(mapStateToProps)(NotificationList)
