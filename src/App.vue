<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { fb } from "./firebase";
export default {
  created() {
    const result = this.$store.state.auth.user;
    if (!result.loggedIn && !localStorage.email && !localStorage.password) {
      this.$router.replace({ name: "Login" });
    } else {
      fb.auth()
        .signInWithEmailAndPassword(localStorage.email, localStorage.password)
        .then(() => {
          this.$store.dispatch("fetchUser", true);
          setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 100);
        })
        .catch(() => {
           this.$router.replace({ name: "Login" });
        });
    }
  },  
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
  background: #e2f0ff !important;
}

.bg-success {
  background-color: #3ab248 !important;
}
</style>
