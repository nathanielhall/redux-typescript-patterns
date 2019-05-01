export enum NotificationType {
  SUCCESS = 'Success',
  ERROR = 'Error',
  WARNING = 'Warning',
  INFO = 'Info'
}


export interface INotification {
  id:  number,
  message: string,
  type: string
}


export type NotificationState = ReadonlyArray<INotification>

