// Import the functions you need from the SDKs you need
import firebase from './firebase'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAjVBsBFmSC4WmHJZ9I11dSvq38SGEhNUw",
  authDomain: "jahaj-yt-project.firebaseapp.com",
  projectId: "jahaj-yt-project",
  storageBucket: "jahaj-yt-project.appspot.com",
  messagingSenderId: "1087427615033",
  appId: "1:1087427615033:web:0f8ff9f7aec0bffe77b0e8",
  measurementId: "G-N4TKHWZF29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)