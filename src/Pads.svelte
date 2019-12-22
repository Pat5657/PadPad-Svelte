<script>
  import { auth, db } from "./firebase.js";

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let pads = [];

  function getPads() {
    let userId = auth.currentUser.uid;
    db.ref("/users/" + userId + "/pads/")
      .once("value")
      .then(function(data) {
        console.log(data.val());
        pads = Object.values(data.val());
      });
  }
  function getLastUpdated(timestamp) {
    let date = new Date(timestamp);
    return [
      date.getDate(),
      monthNames[date.getMonth()],
      date.getFullYear()
    ].join(" ");
  }
</script>

<style>
  #pads-view {
    z-index: 2;
    width: 100%;
    position: fixed;
  }
  .card-deck {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  }
  .card-img {
    max-width: 300px;
  }
</style>

<div id="pads-view" class="row justify-content-center mt-3 mb-3" hidden>
  <button on:click={getPads}>Test</button>
  <div class="card-deck bg-light p-5">
    {#each pads as pad, i}
      <div class="card bg-light text-white">
        <img
          class="card-img"
          src="./assets/images/material-background.png"
          alt="Card image" />
        <div class="card-img-overlay">
          <h5 class="card-title">Pad #{i + 1}</h5>
          <p class="card-text">{pad.blocks[0].data.text}</p>
          <p class="card-text">Last updated {getLastUpdated(pad.time)}</p>
        </div>
      </div>
    {/each}
  </div>
</div>
