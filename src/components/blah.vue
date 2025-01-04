<template>
    <div class="product-container max-w-7xl mx-auto px-4 py-8 flex flex-wrap md:flex-nowrap gap-8">
      <!-- Left side - Image gallery -->
      <div class="w-full md:w-1/2">
        <div class="flex gap-4">
          <!-- Thumbnails -->
          <div class="flex flex-col gap-2">
            <button 
              v-for="(image, index) in productImages" 
              :key="index"
              @click="currentImageIndex = index"
              class="w-20 h-20 border rounded-lg overflow-hidden"
              :class="{ 'border-green-600': currentImageIndex === index }"
            >
              <img :src="image" :alt="`Product view ${index + 1}`" class="w-full h-full object-cover">
            </button>
          </div>
          
          <!-- Main image -->
          <div class="flex-1">
            <img 
              :src="productImages[currentImageIndex]" 
              :alt="product.name"
              class="w-full rounded-lg"
            >
          </div>
        </div>
      </div>
  
      <!-- Right side - Product details -->
      <div class="w-full md:w-1/2">
        <h1 class="text-2xl font-semibold mb-2">{{ product.name }}</h1>
        
        <div class="flex items-center gap-2 mb-4">
          <span class="text-sm">Availability:</span>
          <span class="text-green-600">{{ product.availability }}</span>
          <span class="text-gray-500">SCT: {{ product.sku }}</span>
        </div>
  
        <div class="text-2xl font-bold mb-4">${{ product.price.toFixed(2) }}</div>
        <p class="text-sm text-gray-500 mb-6">Tax included.</p>
  
        <!-- Color selection -->
        <div class="mb-6">
          <label class="block mb-2">Color: {{ selectedColor }}</label>
          <div class="flex gap-2">
            <button
              v-for="color in product.colors"
              :key="color.name"
              @click="selectedColor = color.name"
              class="w-16 h-16 border rounded-lg overflow-hidden"
              :class="{ 'border-green-600': selectedColor === color.name }"
            >
              <img :src="color.thumbnail" :alt="color.name" class="w-full h-full object-cover">
            </button>
          </div>
        </div>
  
        <!-- Size selection -->
        <div class="mb-6">
          <div class="flex items-center justify-between mb-2">
            <label>Size: {{ selectedSize }}</label>
            <button class="text-sm text-gray-600 underline" @click="showSizeChart = true">
              Size Chart
            </button>
          </div>
          <div class="flex gap-2">
            <button
              v-for="size in product.sizes"
              :key="size"
              @click="selectedSize = size"
              class="px-4 py-2 border rounded"
              :class="{ 'bg-black text-white': selectedSize === size }"
            >
              {{ size }}
            </button>
          </div>
        </div>
  
        <!-- Add to cart section -->
        <div class="flex items-center gap-4 mb-4">
          <div class="flex border rounded">
            <button 
              @click="quantity > 1 && quantity--"
              class="px-4 py-2 border-r"
            >-</button>
            <input 
              type="number" 
              v-model="quantity"
              class="w-16 text-center"
              min="1"
            >
            <button 
              @click="quantity++"
              class="px-4 py-2 border-l"
            >+</button>
          </div>
          <button 
            @click="addToWishlist"
            class="text-gray-600 hover:text-black"
          >
            <span class="sr-only">Add to wishlist</span>
            ❤
          </button>
        </div>
  
        <!-- Action buttons -->
        <div class="space-y-4">
          <button 
            @click="addToCart"
            class="w-full py-3 bg-black text-white rounded hover:bg-gray-800"
          >
            ADD TO CART
          </button>
          <button 
            @click="buyNow"
            class="w-full py-3 bg-red-500 text-white rounded hover:bg-red-600"
          >
            BUY IT NOW
          </button>
        </div>
  
        <!-- Payment methods -->
        <div class="mt-8">
          <h3 class="text-center text-sm mb-4">GUARANTEED SAFE CHECKOUT</h3>
          <div class="flex justify-center gap-2">
            <img src="@/assets/C1.png" alt="Payment methods" class="h-8">
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const currentImageIndex = ref(0)
  const selectedColor = ref('Green')
  const selectedSize = ref('M')
  const quantity = ref(1)
  const showSizeChart = ref(false)
  
  const product = {
    name: 'Martha Knit Top',
    price: 300.00,
    availability: 'In Stock',
    sku: 'MK01',
    colors: [
      { name: 'Green', thumbnail: '/green-thumbnail.jpg' },
      { name: 'Black', thumbnail: '/black-thumbnail.jpg' },
      { name: 'Pink', thumbnail: '/pink-thumbnail.jpg' }
    ],
    sizes: ['S', 'M', 'L']
  }
  
  const productImages = [
    '/C1.png',
    '/green-back.jpg',
    '/green-side.jpg',
    '/green-detail.jpg',
    '/green-full.jpg',
    '/green-back-detail.jpg'
  ]
  
  const addToCart = () => {
    // Implement cart functionality
    console.log('Added to cart:', {
      product: product.name,
      color: selectedColor.value,
      size: selectedSize.value,
      quantity: quantity.value
    })
  }
  
  const buyNow = () => {
    // Implement buy now functionality
    console.log('Buy now:', {
      product: product.name,
      color: selectedColor.value,
      size: selectedSize.value,
      quantity: quantity.value
    })
  }
  
  const addToWishlist = () => {
    // Implement wishlist functionality
    console.log('Added to wishlist:', product.name)
  }
  </script>