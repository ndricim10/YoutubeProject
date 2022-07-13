import {
  HOME_Videos_Fail,
  HOME_Videos_Request,
  HOME_Videos_Success,
  Search_Fail,
  Search_Request,
  Search_Success,
  selected_Channel_Fail,
  selected_Channel_Request,
  selected_Channel_Success,
  selected_Comments_Request,
  selected_Comments_Success,
  selected_Related_Fail,
  selected_Related_Request,
  selected_Related_Success,
  selected_Subscription_Fail,
  selected_Subscription_Request,
  selected_Subscription_Success,
  selected_VideoChannel_Fail,
  selected_VideoChannel_Request,
  selected_VideoChannel_Success,
  selected_Video_Fail,
  selected_Video_Request,
  selected_Video_Success,
  Subscribers_Request,
} from "../Reducers/actionType";
import request from "../../api";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_Videos_Request,
    });
    const { data } = await request("/videos", {
      params: {
        part: "snippet, contentDetails, statistics",
        chart: "mostPopular",
        regionCode: "US",
        maxResults: 20,
        pageToken: getState().HomeVideos.nextPageToken,
      },
    });
    dispatch({
      type: HOME_Videos_Success,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: "All",
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_Videos_Fail,
      payload: error.message,
    });
  }
};

export const getCategoryVideos = (keyword) => async (dispatch, getState) => {
  try {
    dispatch({
      type: HOME_Videos_Request,
    });
    const { data } = await request("/search", {
      params: {
        part: "snippet",
        maxResults: 100,
        pageToken: getState().HomeVideos.nextPageToken,
        q: keyword,
        type: "video",
      },
    });
    dispatch({
      type: HOME_Videos_Success,
      payload: {
        videos: data.items,
        nextPageToken: data.nextPageToken,
        category: keyword,
      },
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: HOME_Videos_Fail,
      payload: error.message,
    });
  }
};

export const getVideoById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: selected_Video_Request,
    });
    const { data } = await request(`videos/`, {
      params: {
        part: "snippet, statistics",
        id: id,
      },
    });

    dispatch({
      type: selected_Video_Success,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({
      type: selected_Video_Fail,
      payload: error.message,
    });
  }
};

export const getChannelById = (channelId) => async (dispatch) => {
  try {
    dispatch({
      type: selected_Channel_Request,
    });
    const { data } = await request(`channels/`, {
      params: {
        part: "snippet,contentDetails,statistics",
        id: channelId,
      },
    });

    dispatch({
      type: selected_Channel_Success,
      payload: data.items[0],
    });
  } catch (error) {
    dispatch({
      type: selected_Channel_Fail,
      payload: error.response.data,
    });
  }
};

// export const checkSubscriptionStatus = (id) => async (dispatch, getState) => {
//   try {
//     const { data } = await request("/subscriptions", {
//       params: {
//         part: "snippet",
//         forChannelId: id,
//         mine: true,
//       },
//       headers: {
//         Authorization: `Bearer ${getState().auth.accessToken} `,
//         Accept: "application/json",
//       },
//     });
//     console.log(data);
//     dispatch({
//       type: selected_Subscription_Success,
//       payload: data.items.length !== 0,
//     });
//   } catch (error) {
//     console.log(error.response.data);
//   }
// };

export const getCommentsById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: selected_Comments_Request,
    });
    const { data } = await request(`commentThreads/`, {
      params: {
        part: "snippet,replies",
        videoId: id,
      },
    });

    dispatch({
      type: selected_Comments_Success,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: selected_Channel_Fail,
      payload: error.response.data,
    });
  }
};

export const getRelatedVideosById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: selected_Related_Request,
    });
    const { data } = await request(`search/`, {
      params: {
        part: "snippet",
        relatedToVideoId: id,
        type: "video",
        maxResults: 100,
      },
    });

    dispatch({
      type: selected_Related_Success,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: selected_Related_Fail,
      payload: console.log(error),
    });
  }
};

export const getSearchedVideos = (keyword) => async (dispatch) => {
  try {
    dispatch({
      type: Search_Request,
    });
    const { data } = await request(`search/`, {
      params: {
        part: "snippet",
        q: keyword,
        maxResults: 100,
      },
    });

    dispatch({
      type: Search_Success,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: Search_Fail,
      payload: console.log(error),
    });
  }
};

export const getVideoChannelsById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: selected_VideoChannel_Request,
    });
    const {
      data: { items },
    } = await request(`channels/`, {
      params: {
        part: "contentDetails",
        id: id,
      },
    });

    const uploadPlaylistId = items[0].contentDetails?.relatedPlaylists?.uploads;

    const { data } = await request(`/playlistItems`, {
      params: {
        part: "contentDetails, snippet",
        playlistId: uploadPlaylistId,
        maxResults: 100,
      },
    });
    dispatch({
      type: selected_VideoChannel_Success,
      payload: data.items,
    });
  } catch (error) {
    dispatch({
      type: selected_VideoChannel_Fail,
      payload: console.log(error),
    });
  }
};

export const getMyChannels = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: Subscribers_Request });
    // const access = `Bearer ${getState().auth.accessToken}` || `Bearer ${getState().auth.user.refreshToken}`

    const access=() =>{
        if(getState().auth.accessToken){
            return `Bearer ${getState().auth.accessToken}`
        }
        else{
            return `Bearer ${getState().auth.user.refreshToken}`
        }
    }
    console.log(access())
    
    const { data } = await request("/subscriptions", {
      params: {
        part: "snippet, contentDetails",
        mine: true,
      },
      headers: {
        Authorization:  "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6ImVhNWY2NDYxMjA4Y2ZmMGVlYzgwZDFkYmI1MjgyZTkyMDY0MjAyNWEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmRyaWNpbSBKYWhhaiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaTNLTkh3MEkxMFh5eHkxaUZlV21SU0w4VHZPb2xESjJfeFZjMmcybkU9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vamFoYWoteXQtcHJvamVjdCIsImF1ZCI6ImphaGFqLXl0LXByb2plY3QiLCJhdXRoX3RpbWUiOjE2NTc3MzIzMjAsInVzZXJfaWQiOiJpVDJtNEV1aUZFUjR2dDY3T3BYa3NWbzk3VlIyIiwic3ViIjoiaVQybTRFdWlGRVI0dnQ2N09wWGtzVm85N1ZSMiIsImlhdCI6MTY1NzczMjMyMCwiZXhwIjoxNjU3NzM1OTIwLCJlbWFpbCI6ImphaGFqbmRyaWNpbUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExMzk3Mzk1NDU3NDcxMjgwNDI3OSJdLCJlbWFpbCI6WyJqYWhham5kcmljaW1AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.UQ64Q7wBACiN8rml6OSLpTWXMat_BRaZZaSpDAx9SuhHYvdgzmqczbxqS3X3aK7QCOX-m79Hgm1xefk24EUSbnIZCkmuvutOnm-ea6bgNP8Qt3C2Vh7ZkiCva6Q2_Hs9YnWVHOA61MlCEIlD6_DlIzBmJcnmTlcOCQRI7KkeoRXh6q-A7zaRkNL4XLLeXt049QpUi8YFgM9FT7LoEwaxQd4_EkIgiF8nr5-MOu0MqygyUs4H-nGzw0GaBHq37bX5bXWz_O2xgHhdZChCxW6aq8nRk27P6wmRehlT147JGvCqqTixImR3v5l2T6aQAlXIoooespnyqGH6dij3MfZGIw",
        // Accept: "application/json",
      },
    });
    dispatch({
      type: selected_Subscription_Success,
      payload: data.items,
    });
  } catch (error) {
    console.log(error.response.data.error);
  }
};
