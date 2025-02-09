<template>
    <div class="page">
      <nav class="nav">
        <router-link to="/">
            <button class="nav">Home</button>
        </router-link>
        | Checkout
      </nav>
  
      <div class="wrap">
        <div class="form">
          <section class="sec">
            <h2>Account</h2>
            <input 
              type="email" 
              v-model="form.email" 
              placeholder="Email"
              class="input"
            >
            <p v-if="errors.email" class="error">{{ errors.email }}</p>
          </section>
  
          <section class="sec">
            <h2>Delivery</h2>
            <div class="opts">
              <label class="opt">
                <input 
                  type="radio" 
                  v-model="form.delivery" 
                  value="ship"
                > Ship
              </label>
              <label class="opt">
                <input 
                  type="radio" 
                  v-model="form.delivery" 
                  value="pickup"
                > Pick up in store
              </label>
            </div>
          </section>
  
          <section class="sec">
            <select v-model="form.country" class="input">
              <option value="Cambodia">Cambodia</option>
              <option value="Japan">Japan</option>
              <option value="United State">The United State</option>
            </select>
  
            <div class="row">
              <input 
                type="text" 
                v-model="form.firstName" 
                placeholder="First Name"
                class="input"
              >
              <p v-if="errors.firstName" class="error">{{ errors.firstName }}</p>
              <input 
                type="text" 
                v-model="form.lastName" 
                placeholder="Last Name"
                class="input"
              >
              <p v-if="errors.lastName" class="error">{{ errors.lastName }}</p>
            </div>
  
            <input 
              type="text" 
              v-model="form.address" 
              placeholder="Address"
              class="input"
            >
            <p v-if="errors.address" class="error">{{ errors.address }}</p>
            <input 
              type="text" 
              v-model="form.apartment" 
              placeholder="Apartment, suite, etc. (optional)"
              class="input"
            >
  
            <div class="row">
              <input 
                type="text" 
                v-model="form.city" 
                placeholder="City"
                class="input"
              >
              <p v-if="errors.city" class="error">{{ errors.city }}</p>
              <input 
                type="text" 
                v-model="form.postal" 
                placeholder="Postal code (optional)"
                class="input"
              >
            </div>
          </section>
  
          <section class="sec">
            <h2>Shipping method</h2>
            <div class="ship">
              <span>Standard</span>
              <span>$1.50</span>
            </div>
          </section>
  
          <section class="sec">
            <h2>Payment</h2>
            <p class="note">All transactions are secure and encrypted.</p>
            
            <div class="card">
              <h3>Credit card</h3>
              <input 
                type="text" 
                v-model="form.cardNumber" 
                placeholder="Card number"
                class="input"
              >
              <p v-if="errors.cardNumber" class="error">{{ errors.cardNumber }}</p>
              <div class="row">
                <input 
                  type="text" 
                  v-model="form.expiry" 
                  placeholder="Expiration date (MM/YY)"
                  class="input"
                >
                <p v-if="errors.expiry" class="error">{{ errors.expiry }}</p>
                <input 
                  type="text" 
                  v-model="form.security" 
                  placeholder="Security code"
                  class="input"
                >
                <p v-if="errors.security" class="error">{{ errors.security }}</p>
              </div>
              <input 
                type="text" 
                v-model="form.nameCard" 
                placeholder="Name on card"
                class="input"
              >
            </div>
  
            <label class="check">
              <input 
                type="checkbox" 
                v-model="form.sameAddress"
              > Use shipping address as billing address
            </label>
          </section>
  
          <button @click="submitOrder" class="pay">Pay Now</button>
        </div>
  
        <div class="sum">
          <div class="items">
            <div v-for="item in productStore.cart" :key="item.id" class="item">
              <img :src="item.images" :alt="item.name" class="img">
              <div class="info">
                <h3>{{ item.name }}</h3>
                <p>Color: {{ item.color }}</p>
                <p>Size: {{ item.size }}</p>
              </div>
              <span class="price">${{ item.price }}</span>
            </div>
          </div>
  
          <div class="disc">
            <input 
              type="text" 
              v-model="discountCode" 
              placeholder="Discount code"
              class="input"
            >
            <button @click="applyDiscount" class="apply">Apply</button>
          </div>
  
          <div class="total">
            <div class="row">
              <span>Subtotal • {{ productStore.cart.length }} items</span>
              <span>${{ subtotal }}</span>
            </div>
            <div class="row">
              <span>Shipping</span>
              <span>${{ shipping }}</span>
            </div>
            <div class="row final">
              <span>Total</span>
              <span>USD ${{ total }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import { useProductStore} from '@/stores/product'
  const productStore = useProductStore();
  const errors = ref({})
  const form = ref({
    email: '',
    delivery: 'ship',
    country: 'Japan',
    country: 'United State',
    country: 'Cambodia', 
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    postal: '',
    cardNumber: '',
    expiry: '',
    security: '',
    nameCard: '',
    sameAddress: false
  })
  const validateForm = () =>{
    const errorMessages = {}
    if (!form.value.email) errorMessages.email = "Email is required.";
    
    if (!form.value.firstName) {
    errorMessages.firstName = "First Name is required.";
    } else if (/\d/.test(form.value.firstName)) {
    errorMessages.firstName = "First Name cannot contain numbers.";
    }
    if (!form.value.lastName) {
    errorMessages.lastName = "Last Name is required.";
    } else if (/\d/.test(form.value.lastName)) {
    errorMessages.lastName = "Last Name cannot contain numbers.";
    }

    if (!form.value.address) errorMessages.address = "Address is required.";
    if (!form.value.city) errorMessages.city = "City is required.";

    if (!form.value.cardNumber) {
    errorMessages.cardNumber = "Card number is required.";
  } else if (!/^\d{16}$/.test(form.value.cardNumber)) {
    errorMessages.cardNumber = "Card number must be 16 digits.";
  }

  if (!form.value.security) {
    errorMessages.security = "Security code is required.";
  } else if (!/^\d{3}$/.test(form.value.security)) {
    errorMessages.security = "Security code must be 3 digits.";
  }

  if (!form.value.expiry) {
    errorMessages.expiry = "Expiration date is required.";
  } else {
    const [month, year] = form.value.expiry.split("/").map(Number);
    const currentYear = new Date().getFullYear() % 100; // Last two digits
    const currentMonth = new Date().getMonth() + 1;

    if (month < 1 || month > 12) {
      errorMessages.expiry = "Invalid month in expiration date.";
    } else if (year < currentYear || (year === currentYear && month < currentMonth)) {
      errorMessages.expiry = "Expiration date is in the past.";
    }
  }

  errors.value = errorMessages;
  return Object.keys(errorMessages).length === 0;

  }
  const cart = ref([
    {
      id: 1,
      name: 'Sunset Sleep Scarf Top',
      color: 'Green',
      size: 'M',
      price: 120,
      image: '../src/assets/Green5.png'
    },
    {
      id: 2,
      name: 'Sunset Sleep Scarf Top',
      color: 'Black',
      size: 'M',
      price: 150,
      image: '../src/assets/Black.png'
    }
  ])
  
  const discountCode = ref('')
  
  const subtotal = computed(() => {
    return productStore.cart.reduce((sum, item) => sum + item.price, 0)
  })
  
  const shipping = ref(1.50)
  
  const total = computed(() => {
    return subtotal.value + shipping.value
  })
  
  const applyDiscount = () => {
    console.log('Applying discount:', discountCode.value)
  }
  
  const submitOrder = () => {
    if(!validateForm()){
      console.log("Form validation failed:",errors.value)
    }
    console.log('Submitting order:', form.value)
  }
  </script>
  
  <style scoped>
  .error {
  color: red;
  font-size: 12px;
  margin-top: -8px;
  margin-bottom: 10px;
  }
  .page {
    font-family: Arial, sans-serif;
  }
  .nav {
    padding: 10px 20px;
    color: #666;
    background: transparent;
    border:none;
    font-size:15px;
  }
  .wrap {
    max-width: 1300px;
    margin: 0 auto;
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 40px;
  }
  .sec {
    margin-bottom: 30px;
  }
  .sec h2 {
    margin-bottom: 15px;
  }
  .input {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;

  }
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  
  }
  .opts {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .opt {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .ship {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border: 1px solid #ddd;
  }
  .card {
    background: #f5f5f5;
    padding: 40px;
    margin: 10px 0;
  }
  .note {
    color: #666;
    font-size: 14px;
  }
  .check {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .pay {
    width: 100%;
    padding: 15px;
    background: #000;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  .sum {
    background: #f9f9f9;
    padding: 20px;
    height: 420px;
  }
  .items {
    margin-bottom: 20px;
  }
  .item {
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    margin-bottom: 15px;
  } 
  .img {
    width: 60px;
    height: 80px;
    object-fit: cover;
  }
  .info {
    font-size: 14px;
  }
  .info h3 {
    margin: 0;
  } 
  .disc {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
    margin-bottom: 20px;
  } 
  .apply {
    margin-left: 20px;
    height: 37px;
    padding: 5px 15px;
    background: #65bd5b;
    color: #0f0f0f;
    border: none;
    cursor: pointer;
  }
  .total .row {
    margin-bottom: 15px;
  }
  .final {
    font-weight: bold;
    font-size: 18px;
  }
  @media (max-width: 768px) {
    .wrap {
      grid-template-columns: 1fr;
    }
    .row {
      grid-template-columns: 1fr;
    }
  }
  </style>