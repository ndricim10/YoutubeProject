import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
// import allReducer from "./Reducer";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer, profileToggle } from "../Reducer";

const reducer = combineReducers({
  auth: authReducer,
  profile_toggle: profileToggle
})
const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store