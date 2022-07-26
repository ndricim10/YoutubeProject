import { auth } from "../../firebase";
import {
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import {
  load_profile,
  Login_fail,
  Login_out,
  Login_request,
  Login_success,
  profile_false,
} from "../Reducers/actionType";
import { useNavigate } from "react-router-dom";


export const login = () => async (dispatch) => {
  try {
    dispatch({
      type: Login_request,
    });
    const provider = new GoogleAuthProvider();

    provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
    provider.addScope('https://www.googleapis.com/auth/youtube.readonly');

    const res = await signInWithPopup(auth, provider);
    const accessToken = res.user.accessToken;
    const profile = {
      fullName: res.user.displayName,
      email: res.user.email,
      photoUrl: res.user.photoURL,
      emailVerified: res.user.emailVerified,
      refreshToken: res.user.stsTokenManager.refreshToken,
    };
   

    dispatch({
      type: Login_success,
      payload: accessToken,
    }); 
    localStorage.setItem("yt-accessToken", accessToken);
    localStorage.setItem("yt-user", JSON.stringify(profile));
    dispatch({
      type: load_profile,
      payload: profile,
    });
  } catch (error) {
    dispatch({
      type: Login_fail,
      payload: error.message,
    });
  }
};

// export const log_out = () => async (dispatch) => {
//   await auth.signOut();
//   const navigate = useNavigate();
//   dispatch({
//     type: Login_out,
//   });
//   dispatch(profile_false());
//   navigate("../login", { replace: true });
//   localStorage.removeItem("yt-accessToken");
//   localStorage.removeItem("yt-user");
// };
