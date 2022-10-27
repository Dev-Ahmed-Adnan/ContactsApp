// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLjA1zw0eZCyz8aA2zIzOGpuI8-PWvGsU",
  authDomain: "contactsapp-fc680.firebaseapp.com",
  projectId: "contactsapp-fc680",
  storageBucket: "contactsapp-fc680.appspot.com",
  messagingSenderId: "297446403778",
  appId: "1:297446403778:web:65619dcd689c06992a155b",
  measurementId: "G-02PNNKKSQ0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
