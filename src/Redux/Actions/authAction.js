import app from '../../firebase'
import { GoogleAuthProvider } from 'firebase/auth'
import { getAuth, signInWithPopup } from 'firebase/auth'

export const login=()=>async dispatch=>{
    try{
        const provider = new GoogleAuthProvider()
        const auth = getAuth()
        const res = await signInWithPopup(auth, provider)
        console.log(res);
    }

    
    catch(error){
        console.log(error);
    }
}