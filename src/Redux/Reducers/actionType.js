export  const Login_success = "login_success"
export  const Login_fail = "login_fail"
export  const Login_request = "login_request"
export  const Login_out = "login_out"
export  const load_profile = "load_profile"

export  const email_success = "email_success"
export  const email_fail = "email_fail"
export  const email_request = "email_request"
export  const email_out = "email_out"
export  const load_email_profile = "load_email_profile"

export  const sign_success = "sign_success"
export  const sign_fail = "sign_fail"
export  const sign_request = "sign_request"
export  const sign_out = "sign_out"
export  const load_sign_profile = "load_sign_profile"

export function profile_toggle(){
    return {
        type: "Toggle"
    }
}
export function profile_true(){
    return {
        type: "ProfileTrue"
    }
}
export function profile_false(){
    return {
        type: "ProfileFalse"
    }
}
export function dark_false(){
    return {
        type: "dark"
    }
}
export function dark_true(){
    return {
        type: "light"
    }
}
export function dark_toggle(){
    return{
        type: "toggleMode"
    }
}

export function theme_true(){
    return {
        type: "show"
    }
}
export function theme_false(){
    return {
        type: "hide"
    }
}

export function Like_True(){
    return {
        type: "Like"
    }
}
export function Like_False(){
    return {
        type: "LikeFalse"
    }
}

export function DisLike_True(){
    return {
        type: "DisLike"
    }
}
export function DisLike_False(){
    return {
        type: "DisLikeFalse"
    }
}

export const HOME_Videos_Success="HOME_Videos_Success"
export const HOME_Videos_Fail="HOME_Videos_Fail"
export const HOME_Videos_Request="HOME_Videos_Request"
  
export function login_email(){
    return {
        type: "login"
    }
}

export function logout_email(){
    return {
        type: "logout"
    }
}

export const selected_Video_Request = "selected_Video_Request"
export const selected_Video_Success = "selected_Video_Success"
export const selected_Video_Fail = "selected_Video_Fail"

export const Subscribe_handle="subscribe_handle"
export const Subscribe_false="subscribe_false"