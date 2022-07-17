import axios from 'axios'



const request = axios.create({
    baseURL: `https://youtube.googleapis.com/youtube/v3/`,
    params: {
        // key: process.env.REACT_APP_YOUTUBE_API_KEY
        // key: "AIzaSyA-aBPfPQk3AAt9AlgTKJqXWd-laKW0X7Q", //Ndricim Jahaj - Build
        // key: "AIzaSyCcDITrPx0ncv0d7PDCmjauGTiI0REmoic", //Redux testing
        // key: "AIzaSyC3I_SVNKv6SHPFosR4iu2muWaT6MFiXHA", //P
        // key: "AIzaSyAooo4OL8WJaHamytkI6ooQb2B5rAapxIc", //M
        // key: "AIzaSyATpjQks2XP1oYlHB5-x7IO6otu_-oMcrk", //H
        key: "AIzaSyCH_ncNLFjntm37yTV4K0wauLz_3KQGFYs", //Sh
        // client_id: "827871983619-jer02d4v6p7unade0ibaluo7odbugkf2.apps.googleusercontent.com",
        // client_secret: "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"
    },
    headers: {
        Authorization: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImVhNWY2NDYxMjA4Y2ZmMGVlYzgwZDFkYmI1MjgyZTkyMDY0MjAyNWEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiTmRyaWNpbSBKYWhhaiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaTNLTkh3MEkxMFh5eHkxaUZlV21SU0w4VHZPb2xESjJfeFZjMmcybkU9czk2LWMiLCJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vamFoYWoteXQtcHJvamVjdCIsImF1ZCI6ImphaGFqLXl0LXByb2plY3QiLCJhdXRoX3RpbWUiOjE2NTc4NzEwNTQsInVzZXJfaWQiOiJpVDJtNEV1aUZFUjR2dDY3T3BYa3NWbzk3VlIyIiwic3ViIjoiaVQybTRFdWlGRVI0dnQ2N09wWGtzVm85N1ZSMiIsImlhdCI6MTY1Nzg3MTA1NCwiZXhwIjoxNjU3ODc0NjU0LCJlbWFpbCI6ImphaGFqbmRyaWNpbUBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJnb29nbGUuY29tIjpbIjExMzk3Mzk1NDU3NDcxMjgwNDI3OSJdLCJlbWFpbCI6WyJqYWhham5kcmljaW1AZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.BhI0LokvN0G8atNy9t_z7LSt73m0dXMd4YjgC2jU-sI84NC0NYyNn0hnqOtUG_M9bX6mvaTTyT6AfDCC7Pd9YrTUfu1G3ShiaY3j7Ch7XHVyoYj2cKCI-TAT_BkU3CjMlENxLl81zfGDc9XdDUqPm47-lcsdqz4Wx1-dPOfnkkK9u0OZbuS7Ap97nnTivGTh37bgzMoXM3olQB498TuR7eb_K717T2q2Wvc2xdefOKJdw7KtLL3Fjzs0MZ1OBIkVdjhWL-5cVOa2cGQP7nSA7apfDe7DzsWkxfav_7omkkYRKbCniebN12HPMCplmE9UjF_8b4c2ZBW1WfUSrT22mg",
        
    }
})

export default request