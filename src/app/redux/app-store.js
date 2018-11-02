import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import appReducer from "./app-reducer";
import thunk from "redux-thunk";

const reducers = combineReducers(appReducer);

const enhancers = compose(
  applyMiddleware(thunk),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(reducers, enhancers);

export default store;
