/** 
    TODO Module Public API
    The module index is responsible for maintaining its public API. 
    This is the exposed surface where modules can interface with each other. 

    @see {https://jaysoo.ca/2016/02/28/organizing-redux-application/}
*/

// TODO: Clean up!

// Module Name
export const MODULE = "todos";

// Redux
import reducer from "./redux/reducer";
import * as selectors from "./redux/selectors";
import * as fromActions from "./redux/actions";
import Todos from "./todos";

import {ITodo, TodoState} from "./model";
export type ITodo = ITodo;

export type TodoState = TodoState;

export {Todos as default, reducer, selectors, fromActions};

export {todosMdl} from "./redux/middleware";
