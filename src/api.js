import axios from 'axios'
const request = axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/`,
    params: {
        // key: process.env.REACT_APP_YOUTUBE_API_KEY
        key: "AIzaSyA-aBPfPQk3AAt9AlgTKJqXWd-laKW0X7Q"
    }
})

export default request