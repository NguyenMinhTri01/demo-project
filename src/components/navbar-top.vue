<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-success">
    <img src="/image/lqtech.jpg" alt="" width="50" />
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link text-light font-weight-bold" :to="{ name: 'Home' }"
            >Home <span class="sr-only">(current)</span></router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link text-light font-weight-bold" :to="{ name: 'History' }"
            >History</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>

</style>