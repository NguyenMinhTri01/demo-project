
import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
import 'firebase/database'
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8cuwF2_T8ZaSNEXomjQw_apHADVv2rBI",
    authDomain: "vbgapi.firebaseapp.com",
    databaseURL: "https://vbgapi-default-rtdb.firebaseio.com",
    projectId: "vbgapi",
    storageBucket: "vbgapi.appspot.com",
    messagingSenderId: "805312275949",
    appId: "1:805312275949:web:b6f6ffd55da0b7db0ef3e4",
    measurementId: "G-DPMN1PTS8L"
  };
  
const fb = firebase.initializeApp(config);

const db = fb.database();

export {fb,db}