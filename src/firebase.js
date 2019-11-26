import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAkqih8CUzxCkrU-wTpO14pe93K2J1lzlc",
  authDomain: "padpad-svelte.firebaseapp.com",
  databaseURL: "https://padpad-svelte.firebaseio.com",
  projectId: "padpad-svelte",
  storageBucket: "padpad-svelte.appspot.com",
  messagingSenderId: "538031802538",
  appId: "1:538031802538:web:874d5965ab1b4acfe268d3",
  measurementId: "G-057P96DG8M"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();
