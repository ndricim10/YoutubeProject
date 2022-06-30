import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { homeVideosReducers } from "./homeVideosReducers";
import { authReducer, profileToggle, darkMode, theme, login_email  } from "./Reducer";

const reducer = combineReducers({
  auth: authReducer,
  profile_toggle: profileToggle,
  darkMode: darkMode, 
  Theme: theme,
  HomeVideos: homeVideosReducers,
  loginEmail: login_email
})
const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store