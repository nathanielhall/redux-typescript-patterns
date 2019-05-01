import * as fromActions from '../actions/api'
import { Dispatch, Middleware, MiddlewareAPI } from 'redux'
 

export const apiRequest: Middleware = ({dispatch}: MiddlewareAPI) =>
    (next: Dispatch<fromActions.Actions>) => 
        (action: fromActions.Actions) => {

            next(action) 

            if (action.type === fromActions.API_REQUEST) {
                const { method, url, onSuccessAction, onErrorAction} = action.meta

               
               
                // todo: fix this...
                const body = action.payload.data === '' ? undefined : action.payload.data;
 

                fetch(url,
                        {
                            body,
                            method,
                            headers: {"Content-Type": "application/json; charset=utf-8"}
                        }
                    )
                    .then(response => response.json())
                    .then(data => dispatch({ type: onSuccessAction, payload: data }))
                    .catch(error => dispatch({ type: onErrorAction, payload: error }))
            }
        }

    
 export const apiMdl = [apiRequest]