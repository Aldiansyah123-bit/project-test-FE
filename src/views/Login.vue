<template>
  <div class="login" id="login">
    <div class="header">
      <!--Content before waves-->
      <div class="inner-header">
        <div class="form-box">
          <div class="header-text">
            Sign In
          </div>
          <form @submit.prevent="login()">
            <div class="mb-3">
              <input type="email" v-model="body.email" name="email" v-validate="'required'" class="form-control" placeholder="Email">
              <span class="text-sm text-danger" v-show="errors.has('email')" >{{ errors.first("email") }}</span>
            </div>
            <div class="mb-3">
              <input type="password" v-model="body.password" name="password" v-validate="'required'" class="form-control" placeholder="Password">
              <span class="text-sm text-danger" v-show="errors.has('password')" >{{ errors.first("password") }}</span>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Remember me</label>
            </div>
            <button type="submit">Sign In</button>
          </form>

        </div>
      </div>
    <Wave/>
    </div>
    <!--Header ends-->
  </div>
</template>

<script>
import Wave from "@/component/wave.vue";
import { LOGIN } from "../api/login"
export default {
  name: "Home",
  components: {
    Wave,
  },
  data() {
    return {
      body: {
        email: '',
        password: ''
      }
    }
  },

  mounted() {
    const token = localStorage.getItem('accessToken');
    if (token === null) {
      return this.$router.push({name: 'Login'})
    } else {
      return this.$router.push({name: 'Home'})
    }
  },

  methods: {
    login() {
      this.$validator.validateAll().then(async (res) => {
        if (!res) return false;
        try {
          LOGIN(this.body)
            .then((resp) => {
              const res = resp.data
              if (res.status) {
                this.$swal("Login", "Login Success", "success").then(
                  () => {
                    localStorage.setItem('accessToken', res.token)
                    localStorage.setItem('userData', JSON.stringify(res.data))
                    window.location.href = '/home'
                  }
                );
              } else {
                this.$swal("Error", res.message, "error");
              }
            });
        } catch (error) {
          this.$swal("Error", "Error while add data", "error");
        }
      });
    }
  }
};
</script>
