<script>
  import Navbar from "./Navbar.svelte";
  import Login from "./Login.svelte";
  import Register from "./Register.svelte";
  import Editor from "./Editor.svelte";
  import Pads from "./Pads.svelte";
</script>

<style>

</style>

<!-- Load Nav -->
<Navbar />
<Login />
<Register />
<Pads />

<div class="container">
  <Editor />
</div>
