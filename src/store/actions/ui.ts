import { createAction } from '../../assets/typings/redux/createAction'
import { ActionUnion } from '../../assets/typings/redux/types'

/**
 * NOTE: Showing & Hiding spinner could have been done in a 
 * single action. However, two "declarative" actions give
 * a more meaningful log.
 */
export const SHOW_SPINNER      = '[ui] show spinner'
export const HIDE_SPINNER      = '[ui] hide spinner'

export const Actions = {
    showSpinner: () => createAction(SHOW_SPINNER),
    hideSpinner: () => createAction(HIDE_SPINNER)
}

export type Actions = ActionUnion<typeof Actions>

