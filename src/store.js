import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers/rootReducer";

import { saveState, loadState } from "./helpers/localStorage";

const logger = (store) => (next) => (action) => {
  console.log("dispatching", action);
  const result = next(action);
  console.log("next state", store.getState());
  return result;
};

const persistedState = loadState();
console.log("persistedState", persistedState);
const store = createStore(rootReducer, persistedState, applyMiddleware(logger));

store.subscribe(() => {
  saveState({ investment: store.getState().investment });
});

export default store;
