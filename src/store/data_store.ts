import { createStore, Store, AnyAction } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import Reducers from './reducers'
import Middlewares from './middlewares'

export const store: Store<StoreState, AnyAction> = createStore(
  Reducers, 
  composeWithDevTools(
    Middlewares
  )
)



export default store