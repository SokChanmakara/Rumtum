<template>
    <div class="container">
        <div class="icon-wrapper" :style="{ opacity: isHovered ? 1 : 0 }" 
            @mouseenter="isHovered = true" 
            @mouseleave="isHovered = false">
            <div class="icon-text">
                <div class="icon">
                    <i class="pi pi-heart"></i>
                </div>
                <p>Add to Wishlist</p>
            </div>
            <div class="icon-text" >
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
            <MiniCart />
        </div>
        <img v-else :src="isHovered ? Himage : images" :alt="name" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
        <div class="color-picker">
            <div class="color one" :style="{ backgroundColor: pri_color }"></div>
            <div class="color two" :style="{backgroundColor: sec_color}"></div>
            <div class="color two" :style="{backgroundColor: ter_color}"></div>
        </div>
        <div class="name">
            <p>{{name}}</p>
            <p id="price">{{ price }}</p>
        </div>
    </div>
</template>

<script>
import MiniCart from './MiniCartPage/MiniCart.vue';

export default {
    name: 'ProductList',
    data() {
        return {
            isHovered: false,
            showMiniCart: false,
            display:false
        };
    },
    components:{
        MiniCart,
    },
    props:
    [
        "name",
        "price",
        "pri_color",
        "sec_color",
        "ter_color",
        "images",
        "Himage"
    ],
    methods:{
        toggleMiniCart(){
            this.showMiniCart = !this.showMiniCart;
        },
    }
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
</style>