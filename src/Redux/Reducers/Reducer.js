import {
  load_profile,
  Login_fail,
  Login_out,
  Login_request,
  Login_success,
  email_fail,
  email_out,
  email_request,
  email_success,
  load_email_profile,
  sign_success,
  sign_request,
  sign_fail,
  load_sign_profile,
  sign_out,
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

const initial_Email_State = {
  accessToken: localStorage.getItem("email-accessToken")
    ? localStorage.getItem("email-accessToken")
    : null,
  user: localStorage.getItem("email-user")
    ? JSON.parse(localStorage.getItem("email-user"))
    : null,
  loading: false,
};

export const login_email = (state = initial_Email_State, action) => {
  const { type, payload } = action;
  switch (type) {
    case email_request:
      return { ...state, loading: true };
    case email_success:
      return {
        ...state,
        accessToken: payload,
        loading: false,
      };
    case email_fail:
      return {
        ...state,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case load_email_profile:
      return {
        ...state,
        user: payload,
      };
    case email_out:
      return {
        accessToken: null,
        user: null,
        loading: false,
      };
    default:
      return state;
  }
};

const initial_sign_State = {
  accessToken: null,
  user: null,
  loading: false,
};

export const _sign_Up_email = (state = initial_sign_State, action) => {
  const { type, payload } = action;
  switch (type) {
    case sign_request:
      return { ...state, loading: true };
    case sign_success:
      return {
        ...state,
        accessToken: payload,
        loading: false,
      };
    case sign_fail:
      return {
        ...state,
        accessToken: null,
        loading: false,
        error: payload,
      };
    case load_sign_profile:
      return {
        ...state,
        user: payload,
      };
    case sign_out:
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

export const darkMode = (state = true, action) => {
  switch (action.type) {
    case "toggleMode":
      state
        ? localStorage.setItem("dark", state)
        : localStorage.removeItem("dark");
      return !state;
    case "light":
      localStorage.setItem("dark", state);
      return false;
    case "dark":
      localStorage.removeItem("dark");
      return true;

    default:
      if (localStorage.getItem("dark")) {
        return false;
      } else {
        return true;
      }
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

const initialLikes = {
  Like: false,
  LikeCounter: 100,
};
const initialDisLikes = {
  DisLike: false,
  DisLikeCounter: 100,
};

export const LikeVideo = (state = initialLikes, action) => {
  const { type} = action;
  switch (type) {
    case "Like":
      return {
        Like: !state.Like,
        LikeCounter: !state.Like ? state.LikeCounter + 1 : state.LikeCounter - 1,
      };
    case "LikeFalse":
      return {
        LikeCounter: state.Like ? state.LikeCounter - 1 : state.LikeCounter ,
        Like: false,
      };

    default:
      return state;
  }
};

export const DisLikeVideo = (state = initialDisLikes, action) => {
  const { type} = action;
  switch (type) {
    case "DisLike":
      return {
        DisLike: !state.DisLike,
        DisLikeCounter: !state.DisLike ? state.DisLikeCounter + 1 : state.DisLikeCounter - 1,
      };
      case "DisLikeFalse":
        return {
          DisLikeCounter: state.DisLike ? state.DisLikeCounter - 1 : state.DisLikeCounter,
          Like: false
        }
    default:
      return state;
  }
};
