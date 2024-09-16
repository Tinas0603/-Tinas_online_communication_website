// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuVKmPQF5lhhGM3-rsO7i6iGof53i8EbM",
    authDomain: "tinas-website-f0c26.firebaseapp.com",
    projectId: "tinas-website-f0c26",
    storageBucket: "tinas-website-f0c26.appspot.com",
    messagingSenderId: "53054299323",
    appId: "1:53054299323:web:e84d77f9a1b0dc36f71d9e",
    measurementId: "G-2Q77BHKVNG"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);