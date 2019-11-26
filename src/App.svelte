<script>
  import Navbar from "./Navbar.svelte";
  import Login from "./Login.svelte";
  import Editor from "./Editor.svelte";
  import { auth } from "./firebase.js";
</script>

<style>

</style>

<!-- Load Nav -->
<Navbar />
<Login />

<div class="container">
  <Editor />
</div>
