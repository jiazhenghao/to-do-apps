import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import reduxImmutableStateInvariant from "redux-immutable-state-invariant";
import * as sagas from "./sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(state) {
  // add support for Redux dev tools
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    state,
    composeEnhancers(
      applyMiddleware(reduxImmutableStateInvariant(), sagaMiddleware)
    )
  );
  for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
  }
  return store;
  // return createStore(
  //   rootReducer,
  //   state,
  //   composeEnhancers(
  //     applyMiddleware(reduxImmutableStateInvariant(), sagaMiddleware)
  //   )
  // );
}
