// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0XO89D43OLImDNDPTu4c5dY06gwVnUME",
    authDomain: "instagram-clone-87d97.firebaseapp.com",
    databaseURL: "https://instagram-clone-87d97.firebaseio.com",
    projectId: "instagram-clone-87d97",
    storageBucket: "instagram-clone-87d97.appspot.com",
    messagingSenderId: "216858396349",
    appId: "1:216858396349:web:a281895d13c83cefaed9d4",
    measurementId: "G-CEWHW81MHL"
  });
  const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }