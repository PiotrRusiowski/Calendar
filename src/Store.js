import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);
