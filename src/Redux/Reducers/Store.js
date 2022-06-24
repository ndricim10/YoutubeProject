import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
// import allReducer from "./Reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
const initialState = {
  name: "Ndricim",
  age: 21,
};

const reducer = (initialState) => initialState;
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store