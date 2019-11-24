<script>
  import Navbar from "./Navbar.svelte";
  import Login from "./Login.svelte";
  import Editor from "./Editor.svelte";
  import firebase from "firebase/app";
  import "firebase/auth";
  import "firebase/firestore";
  let user = undefined;
  let userStatus = undefined;
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
  let fb = firebase.initializeApp(firebaseConfig);
  firebase.auth().onAuthStateChanged(function(user) {});
  function getUser(event) {
    // user = event.detail.user;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        userStatus = true;
      } else {
        userStatus = false;
      }
    });
  }
</script>

<style>

</style>

<!-- Load Nav -->
<Navbar {userStatus} />
<Login {fb} on:userStatus={getUser} />

<div class="container">
  <Editor />
</div>
