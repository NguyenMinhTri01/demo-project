<template>
  <div class="container h-100">
    <div class="d-flex justify-content-center h-100">
      <div class="user_card">
        <div class="d-flex justify-content-center">
          <div class="brand_logo_container">
            <img
              src="/image/kiemnghia.jpg"
              class="brand_logo"
              alt="Logo"
            />
          </div>
        </div>
        <div class="d-flex justify-content-center form_container">
          <form @submit.prevent="handleLogin" >
            <label v-if="loginError !== ''" class="text-danger">{{
              loginError
            }}</label>
            <div class="input-group mb-3">
              <input
                type="text"
                name=""
                class="form-control input_user"
                value=""
                placeholder="email"
                v-model="email"
              />
            </div>
            <div class="input-group mb-2">
              <input
                type="password"
                name=""
                class="form-control input_pass"
                value=""
                placeholder="password"
                v-model="password"
              />
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customControlInline"
                />
                <label class="custom-control-label" for="customControlInline"
                  >Remember me</label
                >
              </div>
            </div>
            <div class="d-flex justify-content-center mt-3 login_container">
              <button
                @click="handleLogin"
                type="button"
                name="button"
                class="btn login_btn"
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div class="mt-4">
          <div class="d-flex justify-content-center links">
            Don't have an account? <a href="#" class="ml-2">Sign Up</a>
          </div>
          <div class="d-flex justify-content-center links">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { fb } from "./../../firebase";
export default {
  methods: {
    handleLogin() {
      if (this.email !== "" && this.password !== "") {
        fb.auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.$store.dispatch("fetchUser", true);
            setTimeout(() => {
              localStorage.email = this.email;
              localStorage.password = this.password;
              this.$router.push({ path: "/" });
            }, 100);
          })
          .catch((error) => {
            this.loginError = error.message;
          });
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      loginError: "",
    };
  },
};
</script>

<style scoped>
/* Coded with love by Mutiullah Samim */

.container.h-100 {
  margin-top: 100px;
}
.user_card {
  height: 400px;
  width: 350px;
  margin-top: auto;
  margin-bottom: auto;
  background: #91e4ba;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
}
.brand_logo_container {
  position: absolute;
  height: 170px;
  width: 170px;
  top: -75px;
  border-radius: 50%;
  background: #3ab248;
  padding: 10px;
  text-align: center;
}
.brand_logo {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  border: 2px solid white;
}
.form_container {
  margin-top: 100px;
}
.login_btn {
  width: 100%;
  background: #3ab248 !important;
  color: white !important;
}
.login_btn:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.login_container {
  padding: 0 2rem;
}
.input-group-text {
  background: #c0392b !important;
  color: white !important;
  border: 0 !important;
  border-radius: 0.25rem 0 0 0.25rem !important;
}
.input_user,
.input_pass:focus {
  box-shadow: none !important;
  outline: 0px !important;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: #c0392b !important;
}
</style>