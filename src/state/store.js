import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { customerProductReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { thunk } from "redux-thunk";

// Combine reducers
const rootReducer = combineReducers({
  products: customerProductReducer,
  cart: cartReducer,
  order: orderReducer,
});

// Create store with middleware
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
