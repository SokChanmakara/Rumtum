<template>
<Banner/>
<div class="homecard">
    <HomeCard  v-for="card in cards" :title="card.title" :image="card.image" :key="card.title"/>
</div>
<div class="productlist">
    <ProductList v-for="product in products" 
        :name="product.name" 
        :price="product.price" 
        :pri_color="product.pri_color" 
        :sec_color="product.sec_color"
        :ter_color="product.ter_color"
        :images="product.images"
        :Himage="product.Himage"
        :key="product.name"
        />
</div>
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

const products = ref([
    {
        name: 'Cropped Ribbed',
        price: '$120.00',
        pri_color: '#E30B0B',
        sec_color: '#000000',
        // ter_color: '#115C1E',
        images: "../src/assets/images/Product1.png",
        Himage: "../src/assets/images/Productone.png"
    },
    {
        name: 'Women Shorts',
        price: '$100.00',
        pri_color: '#E30B0B',
        sec_color: '#000000',
        // ter_color: '#115C1E',
        images: "../src/assets/images/Product2.png",
        Himage: "../src/assets/images/Producttwo.png"
    },
    {
        name: 'Sneakers Girl',
        price: '$220.00',
        pri_color: '#E30B0B',
        sec_color: '#000000',
        ter_color: '#115C1E',
        images: "../src/assets/images/Product3.png",
        Himage: "../src/assets/images/Productthree.png"
    },
    {
        name: 'Metal Buckles Skinny Belt',
        price: '$24.00',
        pri_color: '#E30B0B',
        sec_color: '#000000',
        // ter_color: '#115C1E',
        images: "../src/assets/images/Product4.png",
        Himage: "../src/assets/images/Productfour.png"
    },
    {
        name: 'Emotion Mini Dress',
        price: '$110.00',
        pri_color: '#E30B0B',
        sec_color: '#000000',
        // ter_color: '#115C1E',
        images: "../src/assets/images/Product5.png",
        Himage: "../src/assets/images/Productfive.png"
    }, 
    {
        name: 'Cropped Ribbed',
        price: '$120.00',
        pri_color: '#E30B0B',
        sec_color: '#000000',
        // ter_color: '#115C1E',
        images: "../src/assets/images/Product6.png",
        Himage: "../src/assets/images/Productsix.png"
    },
    {
        name: 'Women Shorts',
        price: '$100.00',
        pri_color: '#E30B0B',
        sec_color: '#000000',
        // ter_color: '#115C1E',
        images: "../src/assets/images/Product7.png",
        Himage: "../src/assets/images/Productseven.png"
    },
    {
        name: 'Sneakers Girl',
        price: '$220.00',
        pri_color: '#E30B0B',
        sec_color: '#000000',
        ter_color: '#115C1E',
        images: "../src/assets/images/Product8.png",
        Himage: "../src/assets/images/Producteight.png"
    },
    {
        name: 'Metal Buckles Skinny Belt',
        price: '$24.00',
        pri_color: '#E30B0B',
        sec_color: '#000000',
        // ter_color: '#115C1E',
        images: "../src/assets/images/Product9.png",
        Himage: "../src/assets/images/Productnine.png"
    },
    {
        name: 'Emotion Mini Dress',
        price: '$110.00',
        pri_color: '#E30B0B',
        sec_color: '#000000',
        // ter_color: '#115C1E',
        images: "../src/assets/images/Product10.png",
        Himage: "../src/assets/images/Productten.png"
    },
]);
</script>


<style scoped>
    .homecard{
        display:flex;
        justify-content: space-evenly;
    }
    .productlist{
        display:flex;
        flex-wrap: wrap;
        justify-content:space-evenly;
    }
</style>
