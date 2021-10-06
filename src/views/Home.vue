<template>
  <div class="home">
    <img src="../assets/image/wave.svg" class="bg" width="100%">
    <Navbar/>
    <div class="container">
        <br><br><br><br><br>
        <div class="row mt-5 mb-5">
            <div class="col-lg-12 gambar">
                <img src="../assets/image/vector-content.png" alt="" width="100%">
            </div>
            <div class="col-sm-12 position-relative p-4 ">
                <div class="position-absolute top-0 end-0 kiri">
                  <h1 class="display-4 text-truncate tebel-sedang">Tempat yang</h1>
                  <h1 class="display-4 text-truncate tebel-sedang">tepat untuk</h1>
                  <h1 class="display-4 text-truncate tebel-sedang">mengembangkan</h1>
                  <h1 class="display-4 text-truncate tebel-sedang">event anda</h1>
                  <div class="desc mt-4">
                      <p>Bergabung dengan lebih dari 100 vendor yang membantu para penikmat
                        event yang terhubung dengan cava
                      </p>
                  </div>
                  <div class="mt-5">
                      <button class="button rounded-pill shadow tebel-sedang">Get Started</button>
                      &nbsp;
                  </div>                    
                </div>
                <img src="../assets/image/vector-content.png" alt="" class="img">
            </div>
            <!-- button scroll bawah  -->
            <!-- <div class="wrapper">
              <div class="bouncing-arrow">
                  <i class="fas fa-chevron-down"></i>
              </div>
            </div> -->
            <!-- button scroll atas  -->
            <a href="#" class="up-icon">
              <i class="fas fa-chevron-circle-up"></i>
            </a>
        </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar
  }
}
</script>
