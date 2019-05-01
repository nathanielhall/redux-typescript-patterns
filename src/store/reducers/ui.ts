import * as fromActions from '../actions/ui'
import { Reducer } from 'redux'


const initialState = {
    spinner: false
}

type UIState =  Readonly<typeof initialState>

const reducer: Reducer<UIState, fromActions.Actions> = (
    state = initialState, 
    action
) => {

    switch (action.type) {
        case fromActions.SHOW_SPINNER:
            return {...state, spinner: true }

        case fromActions.HIDE_SPINNER:
            return {...state, spinner: false }

        default:
            return state
    }
}

export default reducer