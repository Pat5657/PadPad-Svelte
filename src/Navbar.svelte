<script>
  import { afterUpdate, onMount } from "svelte";
  import { auth } from "./firebase.js";
  import { fly } from "svelte/transition";

  let userStatus;
  let welcomeMessage = "";

  function togglePads() {
    let pads = document.getElementById("pads-view");
    pads.hidden = !pads.hidden;
  }

  function toggleSignIn() {
    if (userStatus === true) {
      auth.signOut();
    } else {
      let form = document.getElementById("login-form");
      form.hidden = !form.hidden;
    }
  }

  function showFormRegister() {
    let form = document.getElementById("register-form");
    form.hidden = !form.hidden;
  }

  auth.onAuthStateChanged(function(user) {
    if (user) {
      userStatus = true;
      welcomeMessage = "Welcome, " + user.email.split("@")[0];
    } else {
      userStatus = false;
    }
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
    class="navbar-toggler border-0"
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
      {#if !userStatus}
        <li
          class="nav-item"
          in:fly={{ x: 30 }}
          out:fly={{ x: -30, duration: 100 }}>
          <span id="login" class="nav-link" on:click={toggleSignIn}>Login</span>
        </li>
        <li
          class="nav-item"
          in:fly={{ x: 30 }}
          out:fly={{ x: -30, duration: 100 }}>
          <span id="register" class="nav-link" on:click={showFormRegister}>
            Register
          </span>
        </li>
      {:else}
        <li
          class="nav-text mr-2"
          in:fly={{ x: 30 }}
          out:fly={{ x: -30, duration: 100 }}>
          <span class="navbar-text font-italic">{welcomeMessage}</span>
        </li>
        <li
          class="nav-item"
          in:fly={{ x: 30 }}
          out:fly={{ x: -30, duration: 100 }}>
          <span id="login" class="nav-link" on:click={toggleSignIn}>
            Sign out
          </span>
        </li>
        <li
          class="nav-item"
          in:fly={{ x: 30 }}
          out:fly={{ x: -30, duration: 100 }}
          data-toggle="modal"
          data-target="#gridSystemModal"
          on:click={togglePads}>
          <span id="pads" class="nav-link">Pads</span>
        </li>
      {/if}
    </ul>
  </div>
</nav>
