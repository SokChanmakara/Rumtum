<template>
    <div class="container">
        <div class="icon-wrapper" :style="{ opacity: isHovered ? 1 : 0 }" 
            @mouseenter="isHovered = true" 
            @mouseleave="isHovered = false">
            <div class="icon-text" @click="toggleWishList">
                <div class="icon">
                    <i class="pi pi-heart" :class="{'active': isInWishlist}"></i>
                </div>
                <p>{{ isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}}</p>
            </div>
            <div class="icon-text" @click="toggleMiniCart(product)" >
                <div class="icon">
                    <i class="pi pi-shopping-cart"></i>
                </div>
                    <p>Quick Shop</p>
            </div>
            <div class="icon-text">
                <div class="icon">
                    <i class="pi pi-search-plus"></i>
                </div>
                <p>Quick View</p>
            </div>
        </div>
        <div v-if="showMiniCart" >
            <MiniCart @close="toggleMiniCart(product)"/>
        </div>
        <img v-else :src="isHovered ? Himage : images" :alt="name" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
        <div class="color-picker">
            <div class="color one" :style="{ backgroundColor: pri_color }"></div>
            <div class="color two" :style="{backgroundColor: sec_color}"></div>
            <div class="color two" :style="{backgroundColor: ter_color}"></div>
        </div>
        <div class="name">
            <p>{{name}}</p>
            <p id="price">${{ price }}</p>
        </div>
    </div>
</template>

<script>
import { useProductStore } from '@/stores/product';
import MiniCart from './MiniCartPage/MiniCart.vue';
import { useWishlistStore } from '@/stores/wishlist';
import { computed } from 'vue';

export default {
    name: 'ProductList',
    props: {
        id:{
            type:String,
            required:true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        pri_color: {
            type: String,
            required:true
        },
        sec_color: {
            type:String,
            required:true
        },
        tri_color: {
            type:String,
            required:false
        },
        images: {
            type: String,
            required:true
        },
        Himage: {
            type: String,
            required:false
        },
        product: Object,
    },
    data() {
        return {
            isHovered: false,
            showMiniCart: false,
            display:false
        };
    },
    setup(props){
        const productStore = useProductStore();
        const wishlistStore = useWishlistStore();
        const isInWishlist = computed (() => 
            wishlistStore.wishlist.some(item => item.id === props.id)
        );
        const toggleWishList = () => {
            const product = {
                id: props.id,
                name: props.name,
                price: parseFloat(String(props.price).replace('$', '')),
                image: props.images,
                colors: [props.pri_color, props.sec_color, props.ter_color].filter(Boolean)
            };
            if (isInWishlist.value) {
                wishlistStore.removeFromWishlist(props.id);
            } else{
                wishlistStore.addToWishlist(product)
            }
        };
        return {
            toggleWishList,
            isInWishlist,
            productStore,
        }
    },
    methods:{
        toggleMiniCart(item){
            this.productStore.addCart(item)
            this.showMiniCart = !this.showMiniCart;
        }
    },
    components:{
        MiniCart,
    },
    
}
</script>

<style scoped>
    .container{
        position:relative;
        /* margin-left: 23px; */
        margin-top: 23px;
    }
    .icon-wrapper{
        position:absolute;
        display:flex;
        gap:10px;
        flex-direction: column;
        top:55%;
        left:15px;
    }
    .icon-text{
        display:flex;
    }
    .icon-text > p{
        display:none;
        font-size: 16px;
        color:white;
        background: black;
        padding:8px;
        margin-left:3px;
        border-radius: 40px;
        border-bottom-left-radius: 100px ;
        border-top-left-radius: 100px;
    }
    .icon-text:hover > p{
        display:block;
        transition: 0.3s ease;
    }
    .icon{
        display:flex;
        justify-content: center;
        align-items: center;
        width:40px;
        height:40px;
        border-radius: 50%;
        padding:8px;
        background: white;
    }

    .icon:hover{
        color:white;
        background: black;
        transition: 0.3s ease;
    }
    img{
        width:340px;
        height: 460px;
    }

    .color-picker{
        display: flex;
        gap:10px;
    }
    .color{
        width:50px;
        height:26px;
    }

    .name{
        margin-top:10px;
    }
    p{
        font-family: "Poppins";
        font-size: 20px;
    }
    #price{
        color:#E30B0B;
    }
    .pi-heart.active {
        color: #F77E8A;
    }
    .icon-text:hover{
        cursor:pointer;
    }
</style>