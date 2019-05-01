import { Action } from './types'


/**
 *   Helper function for action creators
 */
export function createAction<T extends string>(type: T): Action<T>
export function createAction<T extends string, P>(type: T, payload: P): Action<T, P> 
export function createAction<T extends string, P, M>(type: T, payload: P, meta: M): Action<T, P, M>
export function createAction<T extends string, P, M>(type: T, payload?: P, meta?: M) {
  return payload !== undefined 
    ? meta !== undefined ? {type, payload, meta} : { type, payload } 
    : meta !== undefined ? {type, meta} : { type } 
}
