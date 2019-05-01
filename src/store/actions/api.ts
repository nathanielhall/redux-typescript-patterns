import { createAction } from '../../assets/typings/redux/createAction'
import { ActionUnion } from '../../assets/typings/redux/types'


export const API_REQUEST = '[app] API Request'


export const Actions = {
  apiRequest: (
    body: string,
    method: string,
    url: string,
    onSuccessAction: string,
    onErrorAction: string
  ) => createAction(
    API_REQUEST,
    {
      data: body,      
    },
    { 
      method, 
      url, 
      onSuccessAction, 
      onErrorAction 
    }
  )
}


export type Actions = ActionUnion<typeof Actions>