<script>
  import { fly } from "svelte/transition";
  import { afterUpdate } from "svelte";

  export let message = "";
  export let type = "";

  // TODO: Fix!

  let msg;
  let t;
  $: msg = message;
  $: t = "alert-" + type;

  afterUpdate(() => {});
</script>

<style>
  .alert {
    width: fit-content;
    bottom: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
</style>

<div
  class="alert {t} alert-dismissible fade show"
  role="alert"
  transition:fly={{ y: 50 }}>
  {@html msg}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
