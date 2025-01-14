<template>
    <div class="modal">
      <div class="lilcart">
        <div class="urcart">
          <h2 class="title">YOUR CART ({{ totalItems }})</h2>
          <div id="close" @click="closePop">
            <i class="pi pi-times-circle"></i>
          </div>
        </div>
        <div>
        </div>
        <div class="ship">
          You have got FREE SHIPPING
        </div>
        <div class="items">
          <div v-for="item in productStore.cart" :key="item.id" class="item">
            <img :src="item.images" :alt="item.name" class="img">
            <div class="info">
              <h3 class="name">{{ item.name }}</h3>
              <p class="var">{{ item.color }} / {{ item.size }}</p>
              <button @click="removeItem(item.id)" class="remove">✕</button>
            </div>
            <div class="qty">
              <button @click="decrementQuantity(item)" class="btn">-</button>
              <input type="number" v-model="item.quantity" min="1" class="num">
              <button @click="incrementQuantity(item)" class="btn">+</button>
            </div>  
            <p class="price">${{ item.price * item.quantity }}</p>
          </div>
        </div>
        <div class="total">
          <span>SUBTOTAL</span>
          <span>${{ subtotal.toFixed(2) }} USD</span>
        </div>
        <p class="tax">Tax included</p>
        <div class="actions">
          <router-link to="/checkout">
            <button class="checkout">PROCEED TO CHECKOUT</button>
          </router-link>
          <router-link to="/cart">
            <button class="view">VIEW CART</button>
          </router-link>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useProductStore } from '@/stores/product'
import { ref, computed, defineEmits, watch } from 'vue'

  const productStore = useProductStore();

  
  const lilcartItems = ref([
    {
      id: 1,
      name: 'Sunset Sleep Scarf Top',
      color: 'Blue',
      size: 'M',
      price: 600,
      quantity: 1,
      image: '../src/assets/Green1.png',
    },
    {
      id: 2,
      name: 'Sunset Sleep Scarf Top',
      color: 'Pink',
      size: 'S',
      price: 560,
      quantity: 1,
      image: '../src/assets/Pink.png',
    }
  ])
  
  const totalItems = computed(() => {
    return productStore.cart.reduce((total, item) => total + item.quantity, 0)
  })
  
  const subtotal = computed(() => {
    return productStore.cart.reduce((total, item) => total + item.price * item.quantity, 0)
  })
  
  const incrementQuantity = (item) => {
    item.quantity++
  }
  
  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      item.quantity--
    }
  }
  
  const removeItem = (id) => {
    const index = productStore.cart.findIndex(item => item.id === id)
    if (index !== -1) {
      productStore.cart.splice(index, 1)
    }
  }
  const emit = defineEmits(['close'])
  const closePop = () => {
    emit('close')
  }

  </script>
  
  <style scoped>
  #close{
    cursor: pointer;
  }
  .urcart{
    display:flex;
    justify-content: space-between;
  }
  .modal {
    font-family: Arial, sans-serif;
    max-width: 400px;
    margin: 0 auto;
    
  }
  
  .lilcart {
    border: 2px solid rgb(0, 0, 0);
    padding: 20px;
    background: white;
  }
  
  .title {
    font-size: 20px;
    margin-bottom: 40px;
  }
  
  .ship {
    background-color: #f0f0f0;
    color: green;
    padding: 10px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
  }
  
  .items {
    margin-bottom: 20px;
  }
  
  .item {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
  }
  
  .img {
    width: 70px;
    height: 90px;
    object-fit: cover;
    margin-right: 10px;
  }
  
  .info {
    flex-grow: 1;
  }
  
  .name {
    font-size: 16px;
    margin: 0;
  }
  
  .var {
    font-size: 14px;
    color: #666;
    margin: 5px 0;
  }
  
  .remove {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: red;
  }
  
  .qty {
    display: flex;
    align-items: center;
    margin: 0 10px;
  }
  
  .btn {
    width: 25px;
    height: 25px;
    background: #f0f0f0;
    border: none;
    cursor: pointer;
  }
  
  .num {
    width: 30px;
    text-align: center;
    margin: 0 5px;
  }
  
  .price {
    font-weight: bold;
  }
  
  .total {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .tax {
    text-align: right;
    color: #666;
    font-size: 14px;
    margin-bottom: 20px;
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
  }
  
  .checkout, .view {
    padding: 10px 15px;
    font-size: 14px;
    cursor: pointer;
  }
  
  .checkout {
    background-color: black;
    color: white;
    border: none;
  }
  
  .view {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  input[type = 'number']{
    width:50px
  }
  </style>