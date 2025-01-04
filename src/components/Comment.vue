<template>
    <div class="card">
      <img :src="avatar" :alt="name" class="pic" />
      <h3 class="title">{{ title }}</h3>
      <p class="text">{{ text }}</p>
      <div class="stars">
        <button 
          v-for="n in 5" 
          :key="n" 
          @click="updateRating(n)"
          class="star"
          :class="{ 'active': n <= rating }"
          type="button"
        >
          ★
        </button>
      </div>
      <div class="rate">{{ rating }} out of 5</div>
      <p class="name">{{ name }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const props = defineProps({
    avatar: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    initialRating: {
      type: Number,
      default: 5
    }
  })
  
  const rating = ref(props.initialRating)
  
  const updateRating = (value) => {
    rating.value = value
  }
  </script>
  
  <style scoped>
   .app {
    min-height: 60vh;
    background: #fce4ec;
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .card {
    background: white;
    padding: 2rem;
    border-radius: 1rem;
    text-align: center;
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .pic {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin: 0 auto 1rem;
  }
  
  .title {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .text {
    color: #666;
    margin-bottom: 1rem;
    line-height: 1.5;
  }
  
  .stars {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: center;
    gap: 4px;
  }
  
  .star {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    color: #ddd;
    transition: color 0.2s;
    padding: 0 2px;
  }
  
  .star:hover,
  .star.active {
    color: gold;
  }
  
  .rate {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 1rem;
  }
  
  .name {
    font-weight: bold;
    color: #333;
  }

  </style>