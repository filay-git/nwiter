import * as firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDQDjV4cvfuEkvAJi8YBMvRY9fa6dbeDpQ",
    authDomain: "nwiter.firebaseapp.com",
    databaseURL: "https://nwiter.firebaseio.com",
    projectId: "nwiter",
    storageBucket: "nwiter.appspot.com",
    messagingSenderId: "275030374802",
    appId: "1:275030374802:web:bb7eeaf0fd9397e8c8694b",
    measurementId: "G-1J4MN9KTG8"
  };

  firebase.initializeApp(firebaseConfig);

  export const firebaseInstance = firebase;
  export const authService = firebase.auth();
  export const dbService = firebase.firestore();