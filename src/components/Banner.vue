<template>
    <div class="banner-container">
        <div class="imgWrapper">
            <div class="banner banner1">
                <img src="../assets/images/Banner1.png" alt="">
            </div>
            <div class="banner banner2">
                <img src="../assets/images/Banner2.png" alt="">
            </div>
            <div class="banner banner1">
                <img src="../assets/images/Banner1.png" alt="">
            </div>
        </div>
        <h1 class="logo">RUMTUM</h1>

        <div class="navwrapper">
            <div class="navcategory">
                <h3>HOME</h3>
                <h3>SHOP</h3>
                <h3>CATEGORY</h3>
            </div>
        </div>

        <!-- Navbar icons -->
        <div class="nav icon">
            <div>
                <i class="pi pi-search" style="color: var(--p-primary-color)"></i>
            </div>
            <div>
                <i class="pi pi-user" style="color: var(--p-primary-color)"></i>
            </div>
            <div>
                <i class="pi pi-heart" style="color: var(--p-primary-color)"></i>
            </div>
            <div>
                <i class="pi pi-shopping-bag" style="color: var(--p-primary-color)"></i>
            </div>
        </div>
    </div>
</template>


<script>
import Navbar from './Navbar.vue'
export default {
    components:{
        Navbar
    }
}
</script>

<style scoped>
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
}

.navcategory {
    display: flex;
    position: absolute;
    font-size: 16px;
    top: 20px;
    left: 10%;
    gap: 30px;
    z-index: 10;
}

.nav.icon {
    display: flex;
    position: absolute;
    top: 22px;
    right: 20px;
    gap: 15px;
    z-index: 10;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>
