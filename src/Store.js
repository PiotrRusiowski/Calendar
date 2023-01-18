import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./Reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";

export const store = createStore(reducer, applyMiddleware(ReduxThunk));
