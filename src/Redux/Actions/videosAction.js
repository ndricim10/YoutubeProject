import { HOME_Videos_Fail, HOME_Videos_Request, HOME_Videos_Success, selected_Channel_Fail, selected_Channel_Request, selected_Channel_Success, selected_Comments_Request, selected_Comments_Success, selected_Subscription_Fail, selected_Subscription_Request, selected_Subscription_Success, selected_Video_Fail, selected_Video_Request, selected_Video_Success } from "../Reducers/actionType";
import request from "../../api";

export const getPopularVideos = () => async (dispatch, getState) => {
  try {
    dispatch({
        type: HOME_Videos_Request
    });
    const {data} = await request("/videos",{
        params: {
            part: "snippet, contentDetails, statistics",
            chart: "mostPopular",
            regionCode: "US",
            maxResults: 100,
            pageToken: getState().HomeVideos.nextPageToken,
        }
    })
    dispatch({
        type: HOME_Videos_Success,
        payload: {
            videos: data.items,
            nextPageToken: data.nextPageToken,
            category: 'All'
        }
    })


  } catch (error) {
    console.log(error.message);
    dispatch({
        type: HOME_Videos_Fail,
        payload: error.message
    })
  }
};

export const getCategoryVideos = (keyword) => async (dispatch, getState) => {
    try {
      dispatch({
          type: HOME_Videos_Request
      });
      const {data} = await request("/search",{
          params: {
              part: "snippet",
              maxResults: 100,
              pageToken: getState().HomeVideos.nextPageToken,
              q: keyword,
              type: 'video'
          }
      })
      dispatch({
          type: HOME_Videos_Success,
          payload: {
              videos: data.items,
              nextPageToken: data.nextPageToken,
              category: keyword
          }
      })
  
  
    } catch (error) {
      console.log(error.message);
      dispatch({
          type: HOME_Videos_Fail,
          payload: error.message
      })
    }
  };

  export const getVideoById = (id) =>  async (dispatch) => {
    try{
        dispatch({
            type: selected_Video_Request
        })
        const {data} = await request(`videos/`,{
            params:{
                part: 'snippet, statistics',
                id: id
            }
        })

        dispatch({
            type: selected_Video_Success,
            payload: data.items[0]
        })
    }

    catch(error){
        dispatch({
            type: selected_Video_Fail,
            payload: error.message
        })
    }
  }

  export const getChannelById = (id) =>  async (dispatch) => {
    try{
        dispatch({
            type: selected_Channel_Request
        })
        const {data} = await request(`channels/`,{
            params:{
                part: 'snippet,contentDetails,statistics',
                id
            }
        })

        dispatch({
            type: selected_Channel_Success,
            payload: data.items[0]
        })
    }

    catch(error){
        dispatch({
            type: selected_Channel_Fail,
            payload: error.response.data
        })
    }
  }

  export const checkSubscriptionStatus = id => async (dispatch, getState) => {
    try {
       const { data } = await request('/subscriptions', {
          params: {
             part: 'snippet',
             forChannelId: id,
             mine: true,
          },
          headers: {
             Authorization: `Bearer ${getState().auth.accessToken}`,
          },
       })
       dispatch({
          type: selected_Subscription_Success,
          payload: data.items.length !== 0,
       })
    } catch (error) {
       console.log(error)
    }
 }

  export const getCommentsById = (id) =>  async (dispatch) => {
    try{
        dispatch({
            type: selected_Comments_Request
        })
        const {data} = await request(`commentThreads/`,{
            params:{
                part: 'snippet,replies',
                videoId: id
            }
        })

        

        dispatch({
            type: selected_Comments_Success,
            payload: data.items
        })
    }

    catch(error){
        dispatch({
            type: selected_Channel_Fail,
            payload: error.response.data
        })
    }
  }

