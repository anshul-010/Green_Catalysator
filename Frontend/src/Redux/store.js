import { combineReducers, legacy_createStore,applyMiddleware } from "redux";
import { reducer } from "./reducer";

import {thunk} from "redux-thunk"

// const rootReducer = combineReducers({});

export const store = legacy_createStore(reducer,applyMiddleware(thunk));



