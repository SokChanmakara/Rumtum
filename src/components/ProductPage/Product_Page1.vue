<template>
  <div class="product">
    <div class="breadcrumb">
      <router-link to="/">Home</router-link> | Martha Knit Top
    </div>

    <div class="product-container">
      <div class="thumbnails">
        <img 
          v-for="(image, index) in productImages" 
          :key="index"
          :src="image"
          :class="['thumb', { active: selectedImage === index }]"
          @click="selectedImage = index"
          :alt="`Product view ${index + 1}`"
        />
      </div>

      <div class="main-image">
        <img :src="product.images" alt="blah" />
      </div>

      <div class="info">
        <h1 class="title">{{product.name}}</h1>
        
        <div class="meta">
          <span class="availability">Availability: 
            <span class="in-stock">In Stock</span>
          </span>
          <span class="sku">SCT: MK01</span>
        </div>

        <div class="price">
          <span>${{ product.price }}</span>
          <small>Tax Included.</small>
        </div>

        <div class="color-select">
          <label>Color: {{ color[selectedColor] }}</label>
          <div class="color-options">
            <img 
              v-for="(variant, index) in colorVariants" 
              :key="index"
              :src="variant"
              :class="['variant', { selected: selectedColor === index }]"
              @click="selectedColor = index"
              :alt="`Color variant ${index + 1}`"
             
            />
          </div>
        </div>

        <div class="size-select">
          <div class="size-header">
            <label>Size: {{ sizes[selectedSize] }}</label>
            <button class="size-chart">Size Chart</button>
          </div>
          <div class="size-options">
            <button 
              v-for="(size, index) in sizes" 
              :key="size"
              :class="['size-btn', { active: selectedSize === index }]"
              @click="selectedSize = index"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <button class="wishlist" @click="toggleWishlist">
          <span v-if="!inWishlist">Add To Wishlist</span>
          <span v-else>Remove From Wishlist</span>
        </button>

        <div class="purchase">
          <div class="quantity">
            <button @click="decrementQuantity">-</button>
            <input type="number" v-model="quantity" min="1" />
            <button @click="incrementQuantity">+</button>
          </div>
          <router-link to="/cart">
            <button class="cart" @click="addtoCart">ADD TO CART</button>
          </router-link>
        </div>
        <router-link to="/checkout">
          <button class="buy">BUY IT NOW</button>
        </router-link>

        <div class="payment">
          <h3>GUARANTEED SAFE CHECKOUT</h3>
          <div class="payment-icons">
            <img v-for="(icon, index) in paymentIcons" 
                  :key="index" 
                  :src="icon" 
                  :alt="paymentMethods[index]" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/product'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const selectedImage = ref(0)
const selectedColor = ref(0)
const selectedSize = ref(0)
const quantity = ref(1)
const inWishlist = ref(false)

const productImages = [
  '../src/assets/Green1.png',
  '../src/assets/Green2.png',
  '../src/assets/Green3.png',
  '../src/assets/Green4.png',
  '../src/assets/Green5.png',
  '../src/assets/Green6.png'
  
]

const colorVariants = [
  '../src/assets/Green5.png',
  '../src/assets/Black.png',
  '../src/assets/Pink.png'
]

const color = ['Green', 'Black', 'Pink']

const sizes = ['S', 'M', 'L']

const paymentIcons = [
  '../src/assets/visa.png',
  '../src/assets/mastercard.png',
  '../src/assets/aba.png',
  '../src/assets/acleda.png'
]

const paymentMethods = [
  'Visa',
  'Mastercard',
  'ABA Bank',
  'Acleda Bank'
]
const incrementQuantity = () => {
  quantity.value++
}

const decrementQuantity = () => {
  if (quantity.value > 1) {
    quantity.value--
  }
}

const toggleWishlist = () => {
  inWishlist.value = !inWishlist.value
}

const route = useRoute()
const productStore = useProductStore()
const addtoCart = () => {
  productStore.addCart(product.value)
}
const product = computed(() => productStore.products.find(p => p.id === route.params.productId))

</script>

<style scoped>
.product {
  max-width: 1300px;
  margin: 0 auto;
  padding: 20px;
}

.breadcrumb {
  margin-bottom: 20px;
  color: #666;
}

.product-container {
  display: grid;
  grid-template-columns: 100px 1fr 400px;
  gap: 20px;
}

.thumbnails {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.thumb {
  width: 100px;
  height: 120px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
}

.thumb.active {
  border-color: #000;
}

.main-image img {
  width: 100%;
  height: 790px;
}

.info {
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 15px;
}

.meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  margin-bottom: 30px;
}

.in-stock {
  color: green;
}

.price {
  font-size: 24px;
  margin-bottom: 40px;
}

.price small {
  display: block;
  font-size: 14px;
  color: #666;
}

.color-select, .size-select {
  margin-bottom: 20px;
  margin-bottom: 40px;
}

.color-options {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.variant {
  width: 60px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
}

.variant.selected {
  border-color: #000;
}

.size-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.size-chart {
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;
}

.size-options {
  display: flex;
  gap: 10px;
  margin-top: 10px;
}

.size-btn {
  width: 40px;
  height: 40px;
  border: 1px solid #ddd;
  background: white;
  cursor: pointer;
}

.size-btn.active {
  background: #000;
  color: white;
}

.wishlist {
  width: 100%;
  padding: 10px;
  background: none;
  border: 1px solid #000;
  margin-bottom: 20px;
  cursor: pointer;
}

.purchase {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.quantity {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
}

.quantity button {
  width: 40px;
  height: 40px;
  background: none;
  border: none;
  cursor: pointer;
}

.quantity input {
  width: 60px;
  height: 40px;
  text-align: center;
  border: none;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}

.cart {
  flex: 1;
  padding:20px;
  width:210px;
  background: #000;
  color: white;
  border: none;
  cursor: pointer;
}

.buy {
  width: 100%;
  padding: 15px;
  background: #e77e7e;
  color: white;
  border: none;
  margin-bottom: 20px;
  cursor: pointer;
  margin-bottom: 40px;
}

.payment {
  text-align: center;
}

.payment h3 {
  font-size: 14px;
  margin-bottom: 30px;
}

.payment-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.payment-icons img {
  height: 30px;
  object-fit: contain;
}

@media (max-width: 968px) {
  .product-container {
    grid-template-columns: 80px 1fr;
  }
  
  .info {
    grid-column: 1 / -1;
  }
}

@media (max-width: 576px) {
  .product-container {
    grid-template-columns: 1fr;
  }
  
  .thumbnails {
    flex-direction: row;
    overflow-x: auto;
  }
  
  .thumb {
    width: 80px;
    height: 80px;
  }
}
</style>