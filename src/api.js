import axios from 'axios'
const request = axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/`,
    params: {
        // key: process.env.REACT_APP_YOUTUBE_API_KEY
        // key: "AIzaSyA-aBPfPQk3AAt9AlgTKJqXWd-laKW0X7Q" //Ndricim Jahaj
        // key: "AIzaSyCcDITrPx0ncv0d7PDCmjauGTiI0REmoic" //Redux testing
        key: "AIzaSyC3I_SVNKv6SHPFosR4iu2muWaT6MFiXHA" //Petref Jahaj
    }
})

export default request