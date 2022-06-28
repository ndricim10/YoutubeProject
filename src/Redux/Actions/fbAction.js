import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import {auth} from '../../firebase'

export function fbLogin(){
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then(res=>{
        console.log(res)
    })

    .catch(error=>{
        console.log(error.message);
    })
}