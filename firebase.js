// Import the functions you need from the SDKs you need

import firebase from "@firebase/app";

import "@firebase/auth";
import "@firebase/firestore";
import "@firebase/storage";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBki9Ye9LP_SU-Tu9ephccsXxJ8OL__WbQ",
  authDomain: "snapchat2-6bfa4.firebaseapp.com",
  projectId: "snapchat2-6bfa4",
  storageBucket: "snapchat2-6bfa4.appspot.com",
  messagingSenderId: "862958980963",
  appId: "1:862958980963:web:7139153f172da9f6118d56"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let firestore = firebase.firestore();
export default firestore;
