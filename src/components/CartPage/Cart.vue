<template>
  <header class="header">
        <nav class="nav">
          <router-link to="/">
            <button class="nav">Home</button>
        </router-link>
        | My Cart
        </nav>
  </header>
    
  <div class="cart">
      
      
      <h1 class="title">MY CART</h1>
      
      <table class="items">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in productStore.cart" :key="item.id">
            <td class="prod">
              <img :src="item.images" :alt="item.name" class="img">
              <div class="info">
                <h3>{{ item.name }}</h3>
                <p>Color: {{ item.color }}</p>
                <p>Size: {{ item.size }}</p>
              </div>
            </td>
            <td class="price">${{ item.price.toFixed(2) }}</td>
            <td class="qty">
              <button @click="decrementQuantity(item)" class="btn">-</button>
              <input type="number" v-model="item.quantity" min="1" class="num">
              <button @click="incrementQuantity(item)" class="btn">+</button>
      
            </td>
            <td class="total">${{ (item.price * item.quantity).toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
  
      <div class="instr">
        <h2>SPECIAL INSTRUCTIONS FOR SELLER</h2>
        <textarea v-model="specialInstructions" placeholder="Add special instructions" @keyup.enter="saveInstructions"></textarea>
      </div>
  
      <div class="ship">
        <h2>GET SHIPPING ESTIMATES</h2>
        <div class="select">
          <label for="country">Country</label>
          <select id="country" v-model="selectedCountry" @change="updateProvinces">
            <option v-for="country in countries" :key="country" :value="country">{{ country }}</option>
          </select>
        </div>
        <div class="select">
          <label for="province">City / Province</label>
          <select id="province" v-model="selectedProvince">
            <option v-for="province in provinces" :key="province" :value="province">{{ province }}</option>
          </select>
        </div>
        <button @click="calculateShipping" class="calc">CALCULATE SHIPPING</button>
      </div>
  
      <div class="coupon">
        <h2>ADD A COUPON</h2>
        <input type="text" v-model="couponCode" placeholder="Coupon code will work on checkout page" @keyup.enter="applyCoupon">
      </div>
  
      <div class="summary">
        <div class="subtotal">
        <h2>SUBTOTAL</h2>
        </div>
        <div class="row">
          <span>Subtotal:</span>
          <span>${{ subtotal.toFixed(2) }} USD</span>
        </div>
        <div class="row">
        
            <span class="saving" >You're saving:</span>
            <span class="saving">${{ savings.toFixed(2) }}</span>
          
        </div>
        <div class="row">
          <span>You have got FREE SHIPPING</span>
        </div>
  
      </div>
  
      <div class="actions">
        <router-link to="/checkout">
          <button class="checkout">PROCEED TO CHECKOUT</button>
        </router-link>
        <router-link to="/">
          <button class="continue">CONTINUE SHOPPING</button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useProductStore } from '@/stores/product'
  import { ref, computed } from 'vue'
  const productStore = useProductStore(); 
  
  const cartItems = ref([
    {
      id: 1,
      name: 'Sunset Sleep Scarf Top',
      color: 'Green',
      size: 'M',
      price: 600,
      quantity: 1,
      image: '../src/assets/Green1.png'
    }
  ])
  
  const specialInstructions = ref('')
  const selectedCountry = ref('Cambodia')
  const selectedProvince = ref('Phnom Penh')
  const couponCode = ref('')
  
  const countries = [
    'United States', 'Canada', 'Cambodia', 'United Kingdom', 'France', 
    'Japan'
  ]
  
  const provincesByCountry = {
    'United States': ['California', 'New York', 'Texas'],
    'Canada': ['Ontario', 'Quebec', 'British Columbia'],
    'Cambodia': ['Phnom Penh', 'Siem Reap', 'Battambang'],
    'France': ['Paris', 'Lyon', 'Marseille'],
    'United Kingdom': ['London', 'Manchester', 'Birmingham'],
    'Japan': ['Tokyo', 'Osaka', 'Kyoto']
  }
  
  const provinces = ref(provincesByCountry['Cambodia'])
  
  const subtotal = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.quantity, 0)
  })
  
  const savings = ref(15)
  
  const incrementQuantity = (item) => {
    item.quantity++
  }
  
  const decrementQuantity = (item) => {
    if (item.quantity > 1) {
      item.quantity--
    }
  }
  
  
  const saveInstructions = () => {
    console.log('Special instructions saved:', specialInstructions.value)
  }
  
  const updateProvinces = () => {
    provinces.value = provincesByCountry[selectedCountry.value] || []
    selectedProvince.value = provinces.value[0] || ''
  }
  
  const calculateShipping = () => {
    console.log('Calculating shipping for', selectedCountry.value, selectedProvince.value)
  }
  
  const applyCoupon = () => {
    console.log('Applying coupon:', couponCode.value)
  }
  </script>
  
  <style scoped>
  .saving {
    color: #308514;
  }
  .cart {
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  .header {
    font-family: Arial, sans-serif;
  }
  
  .nav {
    padding: 10px 20px;
    color: #666;
    background: transparent;
    border:none;
    font-size:15px;
  }
  
  .title {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .items {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  .items td {
    padding: 15px;
    border-bottom: 2px solid #ddd;
    text-align: left;
  }
  .items th {
    padding: 15px;
    border-bottom: 2px solid #ddd;
    text-align: left;
  }
  
  .prod {
    display: flex;
    align-items: center;
  }
  
  .img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 10px;
  }
  
  .info h3 {
    margin: 0;
    font-size: 16px;
   
  }
  
  .info p {
    margin: 5px 0;
    font-size: 14px;
    color: #308514;
  }
  
  .qty {
    align-items: center;  
  }
  
  .num {
    width: 40px;
    text-align: center;
    margin: 0 5px;
    
  }
  
  .btn {
    width: 30px;
    height: 30px;
    background: #f0f0f0;
    border: none;
    cursor: pointer;
  }
  
  
  .instr, .ship, .coupon, .summary {
    margin-bottom: 20px;
  }
  
  .instr h2, .ship h2, .coupon h2, .summary h2 {
    font-size: 18px;
    margin-bottom: 15px;
  }
  
  textarea, input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    
  }
  
  .select {
    margin-bottom: 10px;
    
  }
  
  .select label {
    display: block;
    margin-bottom: 5px;
    
  }
  
  select {
    width: 100%;
    padding: 5px;
  }
  
  .calc {
    padding: 10px 20px;
    background: #abada6;
    border: none;
    cursor: pointer;
  }
  
  .row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .subtotal {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }
  
  .actions {
    display: flex;
    justify-content: space-between;
    padding: 3% 28% ;
  }
  
  .checkout, .continue {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .checkout {
    background-color: #000;
    color: #fff;
    border: none;
  }
  
  .continue {
    background: #ffffff;
    cursor: pointer;
    color: #000;
    border: 2px solid black;
  }
  
  @media (max-width: 768px) {
    .items, .items tbody, .items tr, .items td {
      display: block;
    }
  
    .items thead {
      display: none;
    }
  
    .items tr {
      margin-bottom: 20px;
      border: 1px solid #ddd;
    }
  
    .items td {
      border: none;
      position: relative;
      padding-left: 50%;
    }
  
    .items td:before {
      content: attr(data-label);
      position: absolute;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
      font-weight: bold;
    }
  
    .prod {
      flex-direction: column;
      align-items: flex-start;
    }
  
    .img {
      margin-bottom: 10px;
    }
  
    .actions {
      flex-direction: column;
    }
  
    .checkout, .continue {
      width: 100%;
      margin-bottom: 10px;
    }
  }
  </style>