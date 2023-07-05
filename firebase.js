// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDphCDN2qZzDOyzb1Q9J7GVD8BW0753H2M",
  authDomain: "recall-6797c.firebaseapp.com",
  projectId: "recall-6797c",
  storageBucket: "recall-6797c.appspot.com",
  messagingSenderId: "288301728701",
  appId: "1:288301728701:web:f9af619b218e839e0bc8d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

