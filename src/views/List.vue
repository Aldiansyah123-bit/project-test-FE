<template>
<div class="index">
    <Listnavbar/>
    <div class="container">
        <h1>MC</h1>
    </div>
    <Footer />
</div>
  
</template>

<script>
import Listnavbar from "@/components/Listnavbar.vue";
import Footer from "@/components/Footer.vue";
export default {
    name : 'List',
    components : {
        Listnavbar,
        Footer,
    }
}
</script>

<style>

</style>