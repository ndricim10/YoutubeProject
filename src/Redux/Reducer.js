import {
  load_profile,
  Login_fail,
  Login_out,
  Login_request,
  Login_success,
} from "./Reducers/actionType";

const initialState = {
  accessToken: null,
  user: null,
  loading: false,
};

export const authReducer = (prevState = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Login_request:
      return { ...prevState, loading: true };
    case Login_success:
      return {
        ...prevState,
        accessToken: payload,
        loading: false,
      };

    case Login_fail:
      return {
        ...prevState,
        accessToken: null,
        loading: false,
        error: payload,
      };

    case load_profile:
      return {
        ...prevState,
        user: payload,
      };
      case Login_out:
        return initialState

    default:
      return prevState;
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
