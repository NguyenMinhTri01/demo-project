<template>
  <div class="main">
    <Topnavbar></Topnavbar>
    <router-view />
    <div class="card-footer text-muted">FOOTER</div>
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
</style>