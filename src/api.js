import axios from 'axios'
import { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { login } from './Redux/Actions/authAction'



const request = axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/`,
    params: {
        // key: process.env.REACT_APP_YOUTUBE_API_KEY
        // key: "AIzaSyA-aBPfPQk3AAt9AlgTKJqXWd-laKW0X7Q" //Ndricim Jahaj
        // key: "AIzaSyCcDITrPx0ncv0d7PDCmjauGTiI0REmoic" //Redux testing
        // key: "AIzaSyC3I_SVNKv6SHPFosR4iu2muWaT6MFiXHA" //Petref Jahaj
        // key: "AIzaSyAooo4OL8WJaHamytkI6ooQb2B5rAapxIc" //M
        // key: "AIzaSyATpjQks2XP1oYlHB5-x7IO6otu_-oMcrk" //Halim
        key: "AIzaSyCH_ncNLFjntm37yTV4K0wauLz_3KQGFYs" //Sh

    }
})

export default request