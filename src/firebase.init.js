// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsl30KYSYkW84Wv-xUjutGanJBQ2CjtfU",
  authDomain: "to-do-list-eba48.firebaseapp.com",
  projectId: "to-do-list-eba48",
  storageBucket: "to-do-list-eba48.appspot.com",
  messagingSenderId: "40051916349",
  appId: "1:40051916349:web:7e932e5a3fa963bf3a3454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth