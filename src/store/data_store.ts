import { 
  createStore, 
  Store, 
  AnyAction 
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import {rootReducer} from './reducers'
import Middlewares from './middlewares'



export const store: Store<StoreState, AnyAction> = createStore(
  rootReducer, 
  composeWithDevTools(
    Middlewares
  )
)

export default store