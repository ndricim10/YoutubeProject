export  const Login_success = "login_success"
export  const Login_fail = "login_fail"
export  const Login_request = "login_request"
export  const Login_out = "login_out"
export  const load_profile = "load_profile"

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
  
