<script>
  import { afterUpdate, onMount } from "svelte";
  import firebase from "firebase/app";

  export let userStatus;

  let welcomeMessage = "";
  let btnLoginText = "Login";

  function showFormLogin() {
    if (userStatus === true) {
      firebase.auth().signOut();
    } else {
      let form = document.getElementById("login-form");
      form.hidden = !form.hidden;
    }
  }

  function toggelUserStatus() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        userStatus = true;
        btnLoginText = "Sign out";
        welcomeMessage = "Welcome, " + user.email.split("@")[0];
      } else {
        userStatus = false;
        btnLoginText = "Login";
        welcomeMessage = "";
      }
    });
  }

  onMount(() => {
    toggelUserStatus();
  });

  afterUpdate(() => {
    toggelUserStatus();
  });
</script>

<style>
  .nav-item {
    cursor: pointer;
  }
</style>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="">PadPad</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="false"
    aria-label="Toggle navigation">
    <span class="navbar-toggler-icon" />
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <span id="login" class="nav-link" on:click={showFormLogin}>
          {btnLoginText}
        </span>
      </li>
    </ul>
  </div>
  <span class="navbar-text font-italic">{welcomeMessage}</span>
</nav>
