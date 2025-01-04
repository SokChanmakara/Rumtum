<template>
    <section class="rec">
      <h2 class="title">RECOMMENDED PRODUCTS</h2>
      <div class="grid">
        <div v-for="product in products" :key="product.id" class="item">
          <div class="img-wrap">
            <img :src="product.image" :alt="product.name" class="img" />
            <div v-if="product.comingSoon" class="overlay">
            </div>
          </div>
          <h3 class="name">{{ product.name }}</h3>
          <p class="price">${{ product.price.toFixed(2) }}</p>
          <div class="colors">
            <span 
              v-for="color in product.colors" 
              :key="color"
              class="color"
              :style="{ backgroundColor: color }"
            ></span>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const products = ref([
    {
      id: 1,
      name: 'Bella Turtleneck Sweater',
      price: 320.00,
      image: '../src/assets/Pink.png',
      colors: ['#A52A2A', '#000000', '#808080'],
      comingSoon: false
    },
    {
      id: 2,
      name: 'Luna Cardigan',
      price: 280.00,
      image: '../src/assets/ComingSoon.png',
      colors: ['#A52A2A', '#000000', '#808080'],
      comingSoon: true
    },
    {
      id: 3,
      name: 'Stella Knit Top',
      price: 260.00,
      image: '../src/assets/ComingSoon.png',
      colors: ['#A52A2A', '#000000', '#808080'],
      comingSoon: true
    },
    {
      id: 4,
      name: 'Mia Sweater Dress',
      price: 340.00,
      image: '../src/assets/ComingSoon.png',
      colors: ['#A52A2A', '#000000', '#808080'],
      comingSoon: true
    }
  ])
  </script>
  
  <style scoped>
  .rec {
    max-width: 1300px;
    margin: 40px auto;
    padding: 0 20px;
  }
  
  .title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  
  .item {
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
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
  }
  
  .soon {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .tuned {
    font-size: 14px;
  }
  
  .name {
    font-size: 16px;
    margin-bottom: 5px;
  }
  
  .price {
    font-size: 14px;
    color: #666;
    margin-bottom: 5px;
  }
  
  .colors {
    display: flex;
    justify-content: center;
    gap: 5px;
  }
  
  .color {
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }
  
  @media (max-width: 1024px) {
    .grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  
  @media (max-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (max-width: 480px) {
    .grid {
      grid-template-columns: 1fr;
    }
  }
  </style>