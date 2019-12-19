<script>
  import { auth } from "./firebase.js";
  import { createEventDispatcher } from "svelte";
  import Loader from "../parts/loader.svelte";
  // import ErrorHandler from "../parts/errorHandler.svelte";

  let loader = false;
  // let alert;

  const dispatch = createEventDispatcher();

  function showFormRegister() {
    let form = document.getElementById("register-form");
    form.hidden = !form.hidden;
  }

  function register() {
    let email = document.getElementById("registerEmail").value;
    let password = document.getElementById("registerPassword").value;

    //show loader
    loader = true;

    auth
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
        // [END_EXCLUDE]
      })
      .finally(function() {
        //hide loader
        loader = false;
      });
  }
</script>

<style>
  .row {
    z-index: 2;
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

<div id="register-form" class="row justify-content-center mt-3 mb-3" hidden>
  <div class="col-3 col-lg-4 col-md-6 col-sm-8 form-container bg-light p-4">
    <form class="form-register">
      <h1 class="h3 mb-3 font-weight-normal">Register here</h1>
      <label for="registerEmail" class="sr-only">Email address</label>
      <input
        type="email"
        id="registerEmail"
        class="form-control"
        placeholder="Email address"
        required
        autofocus />
      <label for="registerPassword" class="sr-only">Password</label>
      <input
        type="password"
        id="registerPassword"
        class="form-control"
        placeholder="Password"
        required />
      <br />
      <button
        class="btn btn-lg btn-primary btn-block"
        type="button"
        on:click={register}>
        Register
      </button>
      <button
        class="btn btn-lg btn-light btn-block"
        type="button"
        on:click={showFormRegister}>
        Cancel
      </button>
    </form>
  </div>
</div>

{#if loader}
  <Loader />
{/if}
