import { createSelector } from 'reselect'

export const getNotifications = (state:StoreState) => state.Notifications

/** Return last notification in array */
export const getNotificationSelector = createSelector(
    getNotifications,
    msg => msg[msg.length-1]
)