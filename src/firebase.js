// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import firebase from "firebase/app"
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBn6Gdh07bZdNN6DDb6IN325DmjG7G_T00",
    authDomain: "e-clone-9ab24.firebaseapp.com",
    projectId: "e-clone-9ab24",
    storageBucket: "e-clone-9ab24.appspot.com",
    messagingSenderId: "190237684184",
    appId: "1:190237684184:web:9724cddd9be41b959e02ad",
    measurementId: "G-8MV4PWSLYT"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db =  firebaseApp.firestore();
  const auth = firebase.auth();

export {db, auth};