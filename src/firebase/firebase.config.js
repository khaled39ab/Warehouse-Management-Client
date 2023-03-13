// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,

  // apiKey: "AIzaSyDIi2ReCWOQY7MFspm2dITH13MqBqWm36c",
  // authDomain: "warehouse-management-4dcd6.firebaseapp.com",
  // projectId: "warehouse-management-4dcd6",
  // storageBucket: "warehouse-management-4dcd6.appspot.com",
  // messagingSenderId: "926613010639",
  // appId: "1:926613010639:web:40ab895ef4338a27b31fba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;