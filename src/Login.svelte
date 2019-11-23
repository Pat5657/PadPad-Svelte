<script>
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
  let fb = firebase.initializeApp(firebaseConfig);

  function showFormLogin() {
    let form = document.getElementById("login-form");
    form.hidden = !form.hidden;
  }

  function login() {
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;

    fb.auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode === "auth/wrong-password") {
          alert("Wrong password.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
  }

  function showFormRegister() {
    // TODO: Replace login form with register
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;
    fb.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == "auth/weak-password") {
          alert("The password is too weak.");
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
  }

  fb.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log(user);
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
    } else {
      // User is signed out.
      console.log("User is signed out.");
    }
  });
</script>

<style>
  .row {
    z-index: 999;
    width: 100%;
    position: fixed;
  }
  .form-container {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  input:first-of-type {
    border-radius: 5px 5px 0px 0px;
  }
  input:last-of-type {
    border-radius: 0px 0px 5px 5px;
  }
</style>

<div id="login-form" class="row justify-content-center mt-3 mb-3" hidden>
  <div class="col-3 col-lg-4 col-md-6 col-sm-8 form-container bg-light p-4">
    <form class="form-login">
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="inputEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus />
      <label for="inputPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="inputPassword"
        class="form-control"
        placeholder="Password"
        required />
      <br />
      <button
        class="btn btn-lg btn-primary btn-block"
        type="button"
        on:click={login}>
        Sign in
      </button>
      <button
        class="btn btn-lg btn-link btn-block"
        type="button"
        on:click={showFormRegister}>
        Register
      </button>
      <button
        class="btn btn-lg btn-light btn-block"
        type="button"
        on:click={showFormLogin}>
        Cancel
      </button>
    </form>
  </div>
</div>
