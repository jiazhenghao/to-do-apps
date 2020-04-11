import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import thunk from "redux-thunk";

// const initialState = {
//   lists: [
//     ["learn Java", 0],
//     ["learn C++", 0],
//     ["learn how to live under shit mountain", 1],
//     ["win the war against 4 spaces", 1],
//   ],
//   show: "All",
// };

export default function configureStore(state) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools

  return createStore(
    rootReducer,
    // todoListReducer,
    // addTodoReducer,
    state,
    composeEnhancers(applyMiddleware(thunk, reduxImmutableStateInvariant()))
  );
}
