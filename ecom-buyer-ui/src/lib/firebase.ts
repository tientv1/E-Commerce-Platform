// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDoHIzgB6ZvE7EmiVuVrOjUe-a6FQMCSYQ",
    authDomain: "gateway-auth-dbf3a.firebaseapp.com",
    projectId: "gateway-auth-dbf3a",
    storageBucket: "gateway-auth-dbf3a.firebasestorage.app",
    messagingSenderId: "237785811230",
    appId: "1:237785811230:web:6a03a3f9f0f0e6b69d610f",
    measurementId: "G-FMMQW9KD6Y",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
