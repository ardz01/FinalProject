import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAnl7Kqb9TCbx8B-mYiU60My-Lwnn4zUZo",
    authDomain: "unibuddy-945ae.firebaseapp.com",
    projectId: "unibuddy-945ae",
    storageBucket: "unibuddy-945ae.appspot.com",
    messagingSenderId: "1028049805895",
    appId: "1:1028049805895:web:512b5f2b72bce270b04762",
    measurementId: "G-8Q1LSX542W"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };