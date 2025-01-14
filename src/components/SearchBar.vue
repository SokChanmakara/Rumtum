<template>
    <div class="container">
        <div class="search-box">
            <h2>What are you looking for?</h2>
            <div class="search-input-container">
                <input 
                    type="text" 
                    class="search-input" 
                    v-model="searchQuery"
                    @input="updateSearch"
                    placeholder="Search for products, brands, shops and more" 
                />
                <span class="search-icon">
                    <i class="pi pi-search" style="color: black"></i>
                </span>
            </div>
        </div>
    
        <div class="products">
            <h3>Popular Products</h3>
            <div class="product-grid">
                <div 
                    v-for="product in displayedProducts" 
                    :key="product.id" 
                    class="product-card"
                    @click="gotoProductView(product)"
                >
                    <img :src="product.images" :alt="product.name" id="item-image" />
                    <div class="details">
                        <h4>{{ product.name }}</h4>
                        <p>${{ product.price }}</p>
                    </div>
                </div>
            </div>
            <button v-if="filteredProducts.length > 8" @click="toggleShowAll" class="see-more-btn">
                {{ showAll ? 'Show Less' : 'See More' }}
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useItemStore } from '../stores/item'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
const router = useRouter()
const store = useItemStore()
const { filteredProducts } = storeToRefs(store)
const searchQuery = ref('')
const showAll = ref(false)

const updateSearch = () => {
    store.setSearchQuery(searchQuery.value)
}

const displayedProducts = computed(() => {
    return showAll.value ? filteredProducts.value : filteredProducts.value.slice(0, 8)
})
function gotoProductView(product) {
        router.push({ name: 'ProductView', params: { productId: product.id } });
    }

const toggleShowAll = () => {
    showAll.value = !showAll.value
}
</script>

<style scoped>

body {
    font-family: Arial, sans-serif;
    background-color: #f9fafb;
    color: #333;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
#item-image{
    width:220px;
    height:250px;
}
.container {
    width: 100%;
    margin: auto;
    padding: 16px;
    background:rgb(247, 232, 232);
    flex: 1;
}

.search-box {
    background: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.search-box h2 {
    font-size: 20px;
    margin-bottom: 10px;
}

.search-input-container {
    position: relative;
}

.search-input {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid #ddd;
    border-radius: 25px;
    font-size: 16px;
    outline: none;
    transition: border-color 0.3s;
}

.search-input:focus {
    border-color: #007bff;
}

.search-clear {
    position: absolute;
    top: 50%;
    right: 50px;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 16px;
    cursor: pointer;
    color: #999;
}

.search-icon {
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    font-size: 18px;
    color: #999;
}
.products {
    margin-top: 20px;
}

.products h3 {
    font-size: 18px;
    margin-bottom: 10px;
}

.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
}

.product-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
}

.product-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.product-card .details {
    padding: 10px;
}

.product-card h4 {
    font-size: 16px;
    margin-bottom: 5px;
}

.product-card p {
    font-size: 14px;
    color: #777;
}

.footer {
    text-align: center;
    padding: 10px 0;
    background: #e9ecef;
}

/* New styles for the See More button */
.see-more-btn {
    display: block;
    margin: 20px auto;
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.see-more-btn:hover {
    background-color: #0056b3;
}
</style>