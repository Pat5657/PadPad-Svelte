import App from "./App.svelte";
// import json from "rollup-plugin-json";

// import firebase from "firebase/app";
// // import firebaseKey from "./firebase_key.json"; //TODO: Inport firebase config from a file
// import "firebase/auth";
// import "firebase/firestore";
// import "firebase/storage";

// // Your web app's Firebase configuration
// var firebaseConfig = {
// 	apiKey: "AIzaSyAkqih8CUzxCkrU-wTpO14pe93K2J1lzlc",
// 	authDomain: "padpad-svelte.firebaseapp.com",
// 	databaseURL: "https://padpad-svelte.firebaseio.com",
// 	projectId: "padpad-svelte",
// 	storageBucket: "padpad-svelte.appspot.com",
// 	messagingSenderId: "538031802538",
// 	appId: "1:538031802538:web:874d5965ab1b4acfe268d3",
// 	measurementId: "G-057P96DG8M"
// };
// // Initialize Firebase
// let fb = firebase.initializeApp(firebaseConfig);

var app = new App({
	target: document.body,
	props: {}
});

export default app;