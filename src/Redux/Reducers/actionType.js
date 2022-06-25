import React from 'react'

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
        type: "profileTrue"
    }
}
export function profile_false(){
    return {
        type: "profileFalse"
    }
}

export function log_out(){
    return Login_out
}
  
