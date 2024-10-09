<template>
  <div class="home" id="home">
    <div class="header">
      <!--Content before waves-->
      <!-- <div class="inner-header flex">
        <div class="card-body">
          <h2>Your movie list is empty</h2>
          <div class="justify-content-center flex">
            <button style="width: 50%;" type="submit">Add a new movie</button>
          </div>
        </div>
      </div> -->
      <div class="inner-header">
        <div class="card-body">
            <div class="d-flex mb-5">
              <div>
                <a href="/form"><h2>My movies <b-icon icon="plus-circle" scale="0.8" variant="white"></b-icon></h2></a>
              </div>
              <div class="ml-auto">
                <a href="" v-on:click="logout()"><span>Logout <b-icon icon="power" scale="0.8" variant="white"></b-icon></span></a>
              </div>
          </div>
          <div class="row">
            <div class="col-sm-3 mb-3">
              <div class="card">
                <!-- <img src="..." class="card-img-top" alt="..."> -->
                <div class="card-body">
                  <p class="card-text">Card title</p>
                  <p class="card-text">2014</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Wave/>
    </div>
    <!--Header ends-->
  </div>
</template>
<script>
import Wave from "@/component/wave.vue";
import { LOGOUT } from "../api/login"

export default {
  name: "Home",
  components: {
    Wave,
  },
  methods: {
    logout() {
      LOGOUT()
    }
  }
};
</script>
