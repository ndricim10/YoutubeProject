import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer, profileToggle, darkMode, theme } from "./Reducer";

const reducer = combineReducers({
  auth: authReducer,
  profile_toggle: profileToggle,
  darkMode: darkMode, 
  Theme: theme
})
const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store