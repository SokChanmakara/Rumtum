<template>
    <div class=sticky-nav :class="{'scrolled' : isScrolled}">
            <div class="logo-box">
                <h1 class="logo">RUMTUM</h1>
            </div>
    </div>

    <div class="banner-container">
        <div class="imgWrapper">
            <div class="banner banner1">
                <img src="@/assets/boingirl2.png" alt="">
            </div>
            <div class="banner banner2">
                <img src="@/assets/boingirl1.png" alt="">
                <div class="bannertitle">
                    <h1 class="bannertitle1">Take Your Style</h1>
                </div><div class="bannertitle2">
                    <h1 class="">To The Next Level</h1>
                </div>
                
            </div>
            <div class="banner banner2">
                <img src="@/assets/boingirl1.png" alt="">
            </div>
            </div>


        <div class="navwrapper">
            <div class="navcategory">
                <div class="dropdown-down">
                    <router-link to="/">
                        <button class="navBtn">HOME</button>
                    </router-link>
                </div>
                <div class="dropdown">

                    <div class="dropdown-down two">
                        <button class="navBtn">MEN</button>
                                <router-link to="/menhomeview">
                                    <a href="" class="dropdown-item"></a>
                                </router-link>
                    </div>

                    <div class="dropdown-down two">
                        <button class="navBtn">WOMEN</button>
                                <router-link to="/womenhomeview">
                                    <a href="" class="dropdown-item"></a>
                                </router-link>
                    </div>

                    <div class="dropdown-down one">
                        <button class="navBtn">SHOP</button>
                        <ul class="dropdown-menu">
                            <li><a href="" class="dropdown-item">SNEAKER</a></li>
                            <li><a href="" class="dropdown-item">T-SHIRT</a></li>
                            <li><a href="" class="dropdown-item">HOODIES</a></li>
                            <li><a href="" class="dropdown-item">PANTS</a></li>
                            <li><a href="" class="dropdown-item">SHORTS</a></li>
                            <li><a href="" class="dropdown-item">VESTS</a></li>
                            <li><a href="" class="dropdown-item">SWEATERS</a></li>
                            <li><a href="" class="dropdown-item">TOP</a></li>
                            <li><a href="" class="dropdown-item">JACKETS</a></li>
                        </ul>
                    </div>

                    
                    <div class="dropdown-down two">
                        <button class="navBtn">ACCESSORIES</button>
                        <ul class="dropdown-menu">
                            <li><a href="" class="dropdown-item">CAPS</a></li>
                            <li><a href="" class="dropdown-item">BAGS</a></li>
                            <li><a href="" class="dropdown-item">SOCKS</a></li>
                            <li><a href="" class="dropdown-item">KEYCHAINS</a></li>
                            <li><a href="" class="dropdown-item">BEANIES</a></li>
                        </ul>
                    </div>
                    
                    <div class="dropdown-down two">
                        <button class="navBtn">BRANDS</button>
                        <ul class="dropdown-menu">
                            <li><a href="" class="dropdown-item">VANS</a></li>
                            <li><a href="" class="dropdown-item">ADIDAS</a></li>
                            <li><a href="" class="dropdown-item">SOUL</a></li>
                            <li><a href="" class="dropdown-item">CASIO</a></li>
                            <li><a href="" class="dropdown-item">CONVERSE</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <!-- Navbar icons -->
        <div class="nav icon">
            <div>
                <i class="pi pi-search" style="color: white"></i>
            </div>
            <div>
                <i class="pi pi-user" style="color: white"></i>
            </div>
            <div>
                <i class="pi pi-heart" style="color: white"></i>
            </div>
            <div>
                <i class="pi pi-shopping-bag" style="color: white"></i>
            </div>
        </div>

        <div >
            <ButtonShop/>
        </div>
    </div>
</template>


<script>

import Navbar from './Navbar.vue'
import ButtonShop from './Button/ButtonShop.vue';
import MiniCart from './MiniCartPage/MiniCart.vue';
import { useWishlistStore } from '@/stores/wishlist';
import { storeToRefs } from 'pinia';
import MenHomeView from '@/views/MenHomeView.vue';
import WomenHomeview from '@/views/WomenHomeview.vue';
export default {
    components:{

        Navbar,
        ButtonShop,
        MiniCart
    },
    setup(){
        const wishlistStore = useWishlistStore();
        const {wishlistCount} = storeToRefs(wishlistStore);
        return{
            wishlistCount
        }
    },
    data(){
        return{
            display:false,
            isScrolled: false
        }
    },
    mounted(){
        window.addEventListener('scroll',this.handleScroll)
    },
    unmounted(){
        window.removeEventListener('scroll',this.handleScroll)
    },
    methods:{
        toggleDisplay(){
            this.display = !this.display
        },
        handleScroll(){
            this.isScrolled = window.scrollY > 50
        }
    }
}
</script>

<style scoped>
    .sticky-nav{
        position: sticky;
        top: 0;
        z-index:1000;
        width: 100%;
        background: rgba(0, 0, 0, 0.5);
        padding: 0;
        margin:0;
        background-color: transparent;
        transition: all 0.3s ease;
    }
    .sticky-nav.scrolled {
        background-color: pink;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .sticky-nav.scrolled .logo,
    .sticky-nav.scrolled .navBtn {
        color: #000;
    }
    .sticky-nav.scrolled .pi {
        color: #000 !important;
    }
    #minicart{
        position:fixed;
        top:60px;
        right:10px;
        z-index:1000;
    }
    .bannertitle{
        position:absolute;
        font-family: serif;
        font-size:42px;
        color:rgb(69, 66, 66);
        top:40%;
        right: 10%;
        
    }
    .bannertitle2{
        position:absolute;
        font-family: serif;
        color:rgb(69, 66, 66);
        font-size:30px;
        top:60%;
        right: 10%;
        
    }
    .bannershop{
        position:absolute;
        top:75%;
        right:15%;
        background-repeat: no-repeat;
        background-size: cover;
    }

@keyframes sliding {
    0% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-100%);
    }
    50% {
        transform: translateX(-100%);
    }
    75% {
        transform: translateX(-200%);
    }
    100% {
        transform: translateX(-200%);
    }
}
.pi{
    font-size: 22px;
}
.banner-container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.imgWrapper {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
}

.banner {
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    animation: sliding 10s infinite;
}

.logo {
    position: absolute;
    top: 14px;
    left: 20px;
    font-size: 26px;
    color: white;
    z-index: 10;
    cursor:pointer;
}   
.navcategory {
    display: flex;
    position: absolute;
    font-size: 16px;
    top: 25px;
    left: 10%;
    gap: 50px;
    z-index: 10;
}
.navBtn{
    background: transparent;
    color:white;
    border:none;
    font-size:20px;
}
.navBtn:hover{
    color: #F77E8A;
    cursor:pointer;
}


.nav.icon {
    display: flex;
    position: absolute;
    top: 30px;
    right: 20px;
    gap: 15px;
    z-index: 10;
    cursor:pointer;
}
.pi:hover{
    color: #F77E8A;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

    .dropdown {
        display: flex;
        gap: 50px;
    }
    .dropdown-menu {
        display: none;
        background: black;
        line-height: 40px;
        padding: 16px;
        width: 100vw;
        height: auto;
        position: fixed;
        left: 0;
        top: 60px; /* Adjust based on your navbar height */
    }
    .dropdown-menu:hover {
        display: block;
    }
    .dropdown-down:hover .dropdown-menu {
        display: block;
        animation: dropDown 0.5s ease-in-out;
    }

    @keyframes dropDown {
        0% {
            transform: translateY(-20px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity: 1;
        }
    }
    .dropdown-item{
        color:white;
    }
    a{
        text-decoration: none;
    }
    li{
        list-style: none;
    }
    .navBtn:hover + .dropdown-menu{
        display: block;
    }
</style>
