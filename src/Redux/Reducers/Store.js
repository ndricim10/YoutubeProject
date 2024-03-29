import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getSubscriptionStatus } from "../Actions/videosAction";
import { channelVideosReducer, homeVideosReducers, RelatedVideosReducer, SearchVideosReducer, selectedChannelReducer, selectedCommentsReducer, selectedVideoReducer, SubscribersReducer } from "./homeVideosReducers";
import { authReducer, profileToggle, darkMode, theme, login_email, _sign_Up_email, LikeVideo, DisLikeVideo  } from "./Reducer";

const reducer = combineReducers({
  auth: authReducer,
  profile_toggle: profileToggle,
  darkMode: darkMode, 
  Theme: theme,
  HomeVideos: homeVideosReducers,
  loginEmail: login_email,
  _sign_up: _sign_Up_email,
  Like: LikeVideo,
  DisLike: DisLikeVideo,
  videoById: selectedVideoReducer,
  channelById: selectedChannelReducer,
  commentsById: selectedCommentsReducer,
  relatedVideos: RelatedVideosReducer,
  searchVideo: SearchVideosReducer,
  videosByChannel: channelVideosReducer,
  myChannels: SubscribersReducer
})
const store = createStore(
  reducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store