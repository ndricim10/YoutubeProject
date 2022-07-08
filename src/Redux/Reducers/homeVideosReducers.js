import { HOME_Videos_Fail, HOME_Videos_Request, HOME_Videos_Success, selected_Channel_Fail, selected_Channel_Request, selected_Channel_Success, selected_Comments_Fail, selected_Comments_Request, selected_Comments_Success, selected_Subscription_Success, selected_Video_Fail, selected_Video_Request, selected_Video_Success } from "./actionType";

export const homeVideosReducers = (
  state = {
    videos: [],
    loading: false,
    nextPageToken: null,
    activeCategory: 'All'
  },
  action
) => {
  const { type, payload } = action;

  switch (type) {
    case HOME_Videos_Success:
      return {
        ...state,
        videos: 
        state.activeCategory===payload.category
        ?[...state.videos, ...payload.videos] : payload.videos,
        loading: false,
        nextPageToken: payload.nextPageToken,
        activeCategory: payload.category
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

export const selectedVideoReducer =(state={
  loading: false,
  video: null
}, action) =>{
  const {payload, type} = action
  switch(type){
    case selected_Video_Request:
    return {
      ...state,
      loading: true
    }
    case selected_Video_Success:
    return {
      ...state,
      loading: false,
      video: payload
    }
    case selected_Video_Fail:
    return {
      ...state,
      loading: false,
      video: null,
      error: payload
    }

    default:
      return state
  }
}

export const selectedChannelReducer = (state={
  loading: false,
  channel: {},
  subscriptionStatus: false
}, action) =>{
  const {payload, type} = action
  switch(type){
    case selected_Channel_Request:
    return {
      ...state,
      loading: true
    }
    case selected_Channel_Success:
    return {
      ...state,
      loading: false,
      channel: payload
    }
    case selected_Channel_Fail:
    return {
      ...state,
      loading: false,
      channel: null,
      error: payload
    }
    case selected_Subscription_Success:
      return {
        ...state,
        subscriptionStatus: payload
      }

    default:
      return state
  }
}

export const selectedCommentsReducer = (state={
  loading: false,
  comments: []
}, action) =>{
  const {payload, type} = action
  switch(type){
    case selected_Comments_Request:
    return {
      ...state,
      loading: true
    }
    case selected_Comments_Success:
    return {
      ...state,
      loading: false,
      comments: payload
    }
    case selected_Comments_Fail:
    return {
      ...state,
      loading: false,
      comments: null,
      error: payload
    }

    default:
      return state
  }
}


