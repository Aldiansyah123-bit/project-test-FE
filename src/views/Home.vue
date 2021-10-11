<template>
  <div class="home">
    <img src="../assets/image/bg.png" class="bg" width="100%" />
    <Navbar />
    <div class="container desktop beranda">
      <br /><br /><br /><br /><br /><br /><br />
      <div class="row mt-5 mb-5">
        <div class="col-sm-12 position-relative p-5">
          <h1 class="display-1 text-center tebel-banget">Temukan Vendor</h1>
          <h1 class="display-1 text-center tebel-banget">Wujudkan Acaramu</h1>
          <div class="desc mt-4">
            <p>
              Kami akan membantu anda menghadirkan pengalaman yang tak
              terlupakan dalam acara anda
            </p>
          </div>
          <div class="mt-5 text-center">
            <button class="button rounded-pill shadow tebel-sedang">
              Mulai
            </button>
          </div>
        </div>
      </div>
    </div>

  <!-- Mobile  -->
    <div class="container mobile">
      <div class="row mt-5 mb-5">
        <div class="col-lg-12 gambar">
            <img src="../assets/image/home.svg" alt="" width="100%">
        </div>
        <div class="col-sm-12 position-relative p-4">
          <div class="col-lg-12 text-center">
          <img src="../assets/image/mobilelogo.png" alt="" width="50%">
          </div>
          <div class="ContentText mt-4">
            <p>
              Kami akan membantu anda menghadirkan pengalaman yang tak
              terlupakan dalam acara anda
            </p>
          </div>
          <div class="mt-5 text-center">
            <button class="button shadow tebel-sedang">
              Mulai
            </button>
          </div>
        </div>
      </div>
    </div>
    <About/>
    <Services/>
    <Vendor/>
    <Mitra/>
    <Footer/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import About from "./About.vue";
import Services from "./Services.vue";
import Vendor from './Vendor.vue';
import Mitra from './Mitra.vue';
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    About,
    Services,
    Vendor,
    Mitra,
    Footer
  },
};
</script>
