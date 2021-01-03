/** Domain Object: Represents the State
 * anemic domain model is perfectly acceptable when working with immutable data.
 * Note: could be type rather than interface here...
 */
export interface ITodo {
  _id: number;
  action: string;
}

/**
 * Todo State in Redux
 * Items are Readonly to keep safe from mutation operations
 */
export interface ITodoState {
  items: ReadonlyArray<ITodo>;
}

export const initialState: ITodoState = {
  items: []
};
