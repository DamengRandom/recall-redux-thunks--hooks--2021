import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { ratesReducer } from "../reducers/rates";
import { userReducer } from "../reducers/user";

export const store = createStore(
  combineReducers({
    user: userReducer,
    rates: ratesReducer,
  }),
  applyMiddleware(thunk),
);
