import app from '../../firebase'
import { GoogleAuthProvider } from 'firebase/auth'
import { getAuth, signInWithPopup } from 'firebase/auth'
import { load_profile, Login_fail, Login_request, Login_success } from '../Reducers/actionType'

export const login=()=>async dispatch=>{
    try{
        dispatch({
            type: Login_request,
        })
        const provider = new GoogleAuthProvider()
        const auth = getAuth()
        const res = await signInWithPopup(auth, provider)
        
        const accessToken = res.user.accessToken
        const profile = {
            name: res.user.displayName,
            email: res.user.email,
            photoUrl: res.user.photoURL,
            emailVerified: res.user.emailVerified
        }

        localStorage.setItem("yt-accessToken", accessToken)
        localStorage.setItem("yt-user", JSON.stringify(profile))

        dispatch({
            type: Login_success,
            payload: accessToken
        })
        dispatch({
            type: load_profile,
            payload: profile
        })
    }

    
    catch(error){
        console.log(error);
        dispatch({
            type: Login_fail,
            payload: error.message
        })
    }
}