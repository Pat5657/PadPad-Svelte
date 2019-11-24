<script>
  import firebase from "firebase/app";
  import "firebase/auth";
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let fb;
  function showFormLogin() {
    let form = document.getElementById("login-form");
    form.hidden = !form.hidden;
  }

  function login() {
    let email = document.getElementById("inputEmail").value;
    let password = document.getElementById("inputPassword").value;

    fb.auth()
      .signInWithEmailAndPassword(email, password)
      .then(u => {
        var user = firebase.auth().currentUser;
        dispatch("userStatus", { user: true });
        showFormLogin();
      })
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        dispatch("userStatus", { user: false });
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
