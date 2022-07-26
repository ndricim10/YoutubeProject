import axios from "axios";

const request = axios.create({
  baseURL: `https://youtube.googleapis.com/youtube/v3/`,
  params: {
    // key: process.env.REACT_APP_YOUTUBE_API_KEY
    // key: "AIzaSyA-aBPfPQk3AAt9AlgTKJqXWd-laKW0X7Q", //Ndricim Jahaj - Build
    // key: "AIzaSyCcDITrPx0ncv0d7PDCmjauGTiI0REmoic", //Redux testing
    // key: "AIzaSyC3I_SVNKv6SHPFosR4iu2muWaT6MFiXHA", //P
    // key: "AIzaSyAooo4OL8WJaHamytkI6ooQb2B5rAapxIc", //M
    // key: "AIzaSyATpjQks2XP1oYlHB5-x7IO6otu_-oMcrk", //H
    // key: "AIzaSyCH_ncNLFjntm37yTV4K0wauLz_3KQGFYs", //Sh
    key: "AIzaSyCOoquLockIxYZVE5nreKPDMDbVTh6KT-U", //firebase
  }
});

export default request;
