import {
  load_profile,
  Login_fail,
  Login_out,
  Login_request,
  Login_success,
} from "./actionType";

const initialState = {
  accessToken: localStorage.getItem("yt-accessToken")
    ? localStorage.getItem("yt-accessToken")
    : null,
  user: localStorage.getItem("yt-user")
    ? JSON.parse(localStorage.getItem("yt-user"))
    : null,
  loading: false,
};

export const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Login_request:
      return { ...state, loading: true };
    case Login_success:
      return {
        ...state,
        accessToken: payload,
        loading: false,
      };
    case Login_fail:
      return {
        ...state,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case load_profile:
      return {
        ...state,
        user: payload,
      };
    case Login_out:
      return {
        accessToken: null,
        user: null,
        loading: false,
      };
    default:
      return state;
  }
};

export const profileToggle = (state = false, action) => {
  switch (action.type) {
    case "Toggle":
      return !state;
    case "ProfileTrue":
      return true;

    case "ProfileFalse":
      return false;

    default:
      return state;
  }
};

export const darkMode = (state = false, action) => {
  switch (action.type) {
    case "light":
      return false;
    case "dark":
      return true;

    default:
      return state;
  }
};

export const theme = (state = false, action) => {
  switch (action.type) {
    case "show":
      return true;
    case "hide":
      return false;

    default:
      return state;
  }
};
