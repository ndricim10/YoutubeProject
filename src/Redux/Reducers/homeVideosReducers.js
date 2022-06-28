import { HOME_Videos_Fail, HOME_Videos_Request, HOME_Videos_Success } from "./actionType";

export const homeVideosReducers = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_Videos_Success:
      return {
        ...state,
        videos: payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken
      };

      case HOME_Videos_Fail:
        return {
          ...state,
          loading: false,
          error: payload
        };
        case HOME_Videos_Request:
        return {
          ...state,
          loading: true,
          error: null
        };

      default:
        return state
  }
};
