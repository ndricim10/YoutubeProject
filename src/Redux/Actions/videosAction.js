import { HOME_Videos_Fail, HOME_Videos_Request, HOME_Videos_Success } from "../Reducers/actionType";
import request from "../../api";

export const getPopularVideos = () => async (dispatch) => {
  try {
    dispatch({
        type: HOME_Videos_Request
    });
    const {data} = await request("/videos",{
        params: {
            part: "snippet, contentDetails, statistics",
            chart: "mostPopular",
            region: "US",
            maxResults: 100,
            pageToken: ''
        }
    })
    dispatch({
        type: HOME_Videos_Success,
        payload: {
            videos: data.items,
            nextPageToken: data.nextPageToken
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
