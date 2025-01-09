<template>
    <nav class="nav">
        <div class="links">
          <router-link to="/">
            <a href="#" class="link">Home</a>
          </router-link>
          <span class="sep">|</span>
          <a href="#" class="link">Wishlist</a>
        </div>
      </nav>
    <div class="page">
      <h1 class="title">WishList</h1>
      
      <div class="list">
        <div v-for="item in wishlistItems" :key="item.id" class="item">
          <div class="img-wrap">
            <img :src="item.image" :alt="item.name" class="img">
            <button @click="removeItem(item.id)" class="del">×</button>
          </div>
          
          <div class="info">
            <h2 class="name">{{ item.name }}</h2>
            <p class="price">${{ item.price.toFixed(2) }}</p>
            
            <div class="colors">
              <button 
                v-for="(color, index) in item.colors" 
                :key="index"
                class="color"
                :style="{ backgroundColor: color }"
                :aria-label="`Select ${color} color`"
              ></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useWishlistStore } from '@/stores/wishlist';
  export default {
    setup(){
      const wishlistStore = useWishlistStore();
      const removeItem = (id) => {
        wishlistStore.removeFromWishlist(id);
      };
      return{
        wishlistItems:wishlistStore.wishlist,
        removeItem,
      }
    }
  }
  // import { ref } from 'vue'

  // const wishlistItems = ref([
  //   {
  //     id: 1,
  //     name: 'Bella Turtleneck Sweater',
  //     price: 320.00,
  //     image: '../src/assets/Black.png',
  //     colors: ['#8B0000', '#000000', '#808080']
  //   },
  //   {
  //     id: 2,
  //     name: 'Bella Turtleneck Sweater',
  //     price: 320.00,
  //     image: '../src/assets/Pink.png',
  //     colors: ['#8B0000', '#000000', '#808080']
  //   }
  // ])
  
  // const removeItem = (id) => {
  //   const index = wishlistItems.value.findIndex(item => item.id === id)
  //   if (index !== -1) {
  //     wishlistItems.value.splice(index, 1)
  //   }
  // }
  </script>
  
  <style scoped>
  .page {
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .title {
    text-align: center;
    font-size: 24px;
    margin-bottom: 30px;
  }
  
  .list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
  
  .nav {
    margin-bottom: 30px;
  }
  .links {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .link {
    color: #666;
    text-decoration: none;
    font-size: 17px;
  }
  .link:hover {
    color: #000;
  }
  .sep {
    color: #666;
  }
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .img-wrap {
    width: 300px;
    height: 400px;
    position: relative;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    margin-bottom: 10px;
  }
  
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .del {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    border: none;
    background: white;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  
  .info {
    width: 100%;
    max-width: 400px;
  }
  
  .name {
    font-size: 18px;
    margin: 0 0 10px 0;
    font-weight: normal;
  }
  
  .price {
    color: #666;
    margin: 0 0 15px 0;
  }
  
  .colors {
    display: flex;
    gap: 10px;
    justify-content: center;
  }
  
  .color {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .color:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 1024px) {
    .list {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .list {
      grid-template-columns: 1fr;
    }
  }
  </style>