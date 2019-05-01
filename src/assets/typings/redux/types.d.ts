import { ActionCreatorsMapObject } from 'redux'


/**
 * Redux Action
 * @template T Action Type
 * @template P Payload
 * @template M Meta
 */
export type Action<T extends string = string, P = void, M = void>
  = P extends void
    ? M extends void
      ? Readonly<{ type: T }>
      : Readonly<{ type: T; meta: M }>
    : M extends void
      ? Readonly<{ type: T; payload: P; }>
      : Readonly<{ type: T; payload: P; meta: M }>




/**
 *  Returns a union of all action creator function types
*/
export type ActionUnion<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>



/**
 * Get the Type from this action union
 * @example
 * const action: ActionOfType<ActionTypes.DELETE_TODO, TodoAction> = TodoActions.deleteTodo(2)
 */
export type ActionOfType<
  ActionType extends string,
  ActionUnion
  > = ActionUnion extends Action<ActionType> ? ActionUnion : never


export interface Dispatch<D = Action> {
  <A extends D>(action: A): A
}

export interface MiddlewareAPI<S = any, D = Action> {
  dispatch: Dispatch<D>
  getState(): S
}

export interface Middleware {
  <S = any, D = Action>(api: MiddlewareAPI<S, D>): (next: Dispatch<D>) => (action: D) => D
} 
