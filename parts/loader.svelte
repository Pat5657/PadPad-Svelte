<script>

</script>

<style>
  .loading {
    display: flex;
    justify-content: center;
    z-index: 999;
    position: absolute;
    left: 50%;
    bottom: 6rem;
    transform: translate(-50%);
  }
  .loading div {
    width: 1rem;
    height: 1rem;
    margin: 2rem 0.3rem;
    background: #007bff;
    border-radius: 50%;
    -webkit-animation: 0.9s bounce infinite alternate;
    animation: 0.9s bounce infinite alternate;
  }
  .loading div:nth-child(2) {
    -webkit-animation-delay: 0.3s;
    animation-delay: 0.3s;
  }
  .loading div:nth-child(3) {
    -webkit-animation-delay: 0.6s;
    animation-delay: 0.6s;
  }

  @-webkit-keyframes bounce {
    to {
      opacity: 0.3;
      -webkit-transform: translate3d(0, -1rem, 0);
      transform: translate3d(0, -1rem, 0);
    }
  }

  @keyframes bounce {
    to {
      opacity: 0.3;
      -webkit-transform: translate3d(0, -1rem, 0);
      transform: translate3d(0, -1rem, 0);
    }
  }
</style>

<div class="loading">
  <div />
  <div />
  <div />
</div>
