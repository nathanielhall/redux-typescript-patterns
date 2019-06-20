
import reducer from './redux/reducer'

import * as fromActions from './redux/actions'
import Todos from './todos'

const MODULE = 'todos'
const TodosState = ({[MODULE]: reducer})

export { 
  Todos as default, 
  fromActions,
  TodosState,
  MODULE
}