<template>
  <div class="main">
    <Topnavbar></Topnavbar>
    <router-view />
    <div class="card-footer text-muted">
      <p>lorem ipsum lorem</p>
    </div>
  </div>
</template>

<script>
import Topnavbar from "./../components/navbar-top";
export default {
  components: {
    Topnavbar,
  },
};
</script>

<style scoped>
@media only screen and (max-width: 576px) {
  h3 {
    font-size: 1.2rem !important;
  }
  h4 {
    font-size: 0.8rem !important;
  }
  .container {
    margin: 0px !important;
    padding: 0 5px 0 5px !important;
  }
}
</style>