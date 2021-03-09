<template>
  <div class="main">
    <Topnavbar></Topnavbar>
    <div class="container">
      <LineItem></LineItem>
      <LineItem></LineItem>
      <LineItem></LineItem>
    </div>
    <div class="card-footer text-muted">FOOTER</div>
  </div>
</template>

<script>
import Topnavbar from "./../components/navbar-top";
import LineItem from "./../components/line-item";
export default {
  components: {
    Topnavbar,
    LineItem,
  },
};
</script>

<style scope>
</style>