import { Action } from './types'

export function isAction<A extends Action>(action: Action, type: string): action is A {
  return action.type === type
}