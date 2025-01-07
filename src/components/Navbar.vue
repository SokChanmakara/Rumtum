<template>
        <div class="navwrapper">
            <div class="logo-box">
                <router-link to="/">
                    <h1 class="logo">RUMTUM</h1>
                </router-link>
            </div>
            <div class="navcategory">
                <div class="dropdown-down">
                    <router-link to="/">
                        <button class="navBtn">HOME</button>
                    </router-link>
                </div>
                <div class="dropdown">

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
                        <button class="navBtn">CATEGORY</button>
                        <ul class="dropdown-menu">
                            <li><a href="" class="dropdown-item">MEN</a></li>
                            <li><a href="" class="dropdown-item">WOMEN</a></li>
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

        <div class="nav icon">
            <div>
                <i class="pi pi-search" style="color: black; transition: color 0.3s;" @mouseover="$event.target.style.color='#F77E8A'" @mouseout="$event.target.style.color='black'"></i>
            </div>
            <div>
                <i class="pi pi-user" style="color: black; transition: color 0.3s;" @mouseover="$event.target.style.color='#F77E8A'" @mouseout="$event.target.style.color='black'" ></i>
            </div>
            <div>
                <i class="pi pi-heart" style="color: black; transition: color 0.3s;" @mouseover="$event.target.style.color='#F77E8A'" @mouseout="$event.target.style.color='black'"></i>
            </div>
            <div>
                <i class="pi pi-shopping-bag" style="color: black; transition: color 0.3s;" @mouseover="$event.target.style.color='#F77E8A'; " @mouseout="$event.target.style.color='black'"></i>
            </div>
        </div>
    </div>
</template>


<script>


export default {
    components:{
        
    }
}
</script>

<style scoped>
    
.pi{
    font-size: 22px;
}
.logo {
    position: absolute;
    top: 14px;
    left: 20px;
    font-size: 26px;
    color: black;
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
    color:black;
    border:none;
    font-size:20px;
}
.navBtn:hover{
    color: #efaab1;
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
    .dropdown{
        display: flex;
        gap:50px;
    }
    .dropdown-menu{
        display: none;
        background:#e2959b;
        line-height: 40px;
        padding:16px;
        width:200px;
        height:auto;
    }
    .dropdown-menu:hover{
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
        color:black;
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
