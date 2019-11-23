<script>
  function showFormLogin() {
    let form = document.getElementById("login-form");
    form.hidden = !form.hidden;
  }
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
        <a class="nav-link" on:click={showFormLogin}>Login</a>
      </li>
    </ul>
  </div>
</nav>
