<template>
<Banner/>
<div class="homecard">
    <HomeCard  v-for="card in cards" :title="card.title" :image="card.image" :key="card.title"/>
</div>
<ProductList/>
</template>
<script setup>
// import { RouterLink, RouterView } from 'vue-router'
import { ref } from "vue";
import Banner from "./components/Banner.vue";
import HomeCard from "./components/HomeCard.vue";
import ProductList from "./components/ProductList.vue";
// import Navbar from "./components/Navbar.vue";

const cards = ref([
    {
        title: 'Walk In Style',
        image: "../src/assets/images/card1.png"
    },
    {
        title: 'Dress In Style',
        image: "../src/assets/images/card2.png"
    },
    {
        title: 'Stand In Style',
        image: "../src/assets/images/card3.png"
    },
    {
        title: 'Pair In Style',
        image: "../src/assets/images/card4.png"
    }
]);
</script>


<style scoped>
    .homecard{
        display:flex;
        justify-content: space-evenly;
    }
</style>
