<script>
import Navbar from './Navbar.vue';
import { ref } from 'vue';

export default {
    name: "Head",
    components: {
        Navbar
    },

    data (){
        return {
           
            NavBar_data : [
                {
                    nav_name : "Home",
                    link : "/",
                    
                },
                {
                    nav_name : "Product",
                    link : "/list-book",
                   
                },
                {
                    nav_name : "Cart",
                    link : "/cart",
                   
                },
                {
                    nav_name : "Favorite",
                    link : "/favorite",
                    
                },
                {
                    nav_name : "Feedback",
                    link : "/feedback",
                    
                },
                {
                    nav_name : "Login",
                    link : "/login",
                    
                },
                {
                    nav_name : "Login",
                    link : "/login",
                    
                },
                {
                    nav_name : "Login",
                    link : "/login",
                    
                },
                {
                    nav_name : "Login",
                    link : "/login",
                    
                },
            ]
        }
    },

    methods : {
        isSelectRoute(route){
            return this.$route.path === route;
        }
    },

    setup() {
        const isNavbarVisible = ref(false)
        const toggleNavbar = () => {
           
            isNavbarVisible.value = !isNavbarVisible.value;
        };

        return {
            isNavbarVisible,
            toggleNavbar
            
        };
    },

}
</script>

<template>

    <header>
        <div class="option" @click="toggleNavbar">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        </div>

        <div v-if="isNavbarVisible" class="wrap_nav">
            <Navbar  v-for="NavbarItem in NavBar_data" 
            :Nav_name="NavbarItem.nav_name" 
            :Link="NavbarItem.link" 
            :key="NavbarItem.nav_name"
            :Image="NavbarItem.icon"
            :isSelectRoute="isSelectRoute(NavbarItem.link)"
            />
        </div>
    </header>

</template>

<style>
header {
    background-color: rgb(211, 211, 211);
    display: flex;
    height: 5rem;
    align-items: center;
    position: sticky;
    top: 0;
    padding: 1rem;
    column-gap: 1rem;
    justify-content: space-between;
}


header svg {
    width: 2rem;
    background-color: transparent;
}

.search_form {
    width: 50%;
}

.search_form,
.option {
    display: flex;
    align-items: center;
    position: relative;
}

.title,
::placeholder {
    text-shadow: 0px 4px 2px rgb(0, 0, 0, 20%);

}

::placeholder {
    font-size: .9rem;
    font-family: 'Times New Roman', Times, serif;
}

.search_form input,
button {
    height: 2.5rem;
    outline: 1px solid rgba(0, 0, 0, 0.3);
    border: none;
    box-shadow: 0px 4px 3px rgb(0, 0, 0, 20%);
}

.search_form button {
    position: absolute;
    right: 0;
    width: 2.8rem;
    padding: .1rem;
    border-radius: 0 0.6rem .6rem 0;
    background-color: rgba(237, 237, 237, 1);
    cursor: pointer;

}

.search_form button svg {
    width: 1.5rem;
}

.search_form input {
    outline: 1px solid rgb(132, 132, 132);
    border-radius: .6rem;
    padding-left: .6rem;
    width: 100%;
}

header .header_cart {
    position: relative;
}

header .header_cart svg {
    color: green;
}

header .number_cart {
    background-color: red;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: .8rem;
    font-size: .6rem;
    height: .8rem;
    color: aliceblue;
    padding: .05rem;
    position: absolute;
    right: 0;
    box-shadow: 3px 3px 3px rgb(0, 0, 0, 20%);
}

.sign_in {
    display: flex;
    align-items: center;
    background-color: white;
    padding: .25rem;
    border-radius: .4rem;
    box-shadow: 3px 3px 3px rgb(0, 0, 0, 20%);
}

.sign_in svg {
    width: 1.6rem;
    cursor: pointer;
}

.cart_sign_in {
    display: flex;
    align-items: center;
    column-gap: 1.2rem;
}

.option,
.header_cart,
.sign_in {
    cursor: pointer;
}
nav {
    padding: .4rem;
    background-color: rgb(199, 199, 199);
    box-shadow: 0px 0px 3px rgb(0, 0, 0, 20%);
    width: 10rem;
    height: auto;
}

nav ul {
    list-style: none;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
}
nav ul img{
    width: 1.5rem;
}
nav ul li .link {
    text-decoration: none;
    color: black;
    background-color: rgba(248, 243, 243, 1);
    display: flex;
    height: 2.4rem;
    align-items: center;
    padding-left: 10px;
    gap: .8rem;
    border-radius: 0.3rem;
    box-shadow: 3px 3px 3px rgb(0, 0, 0, 20%);
}


.wrap_nav{
    position: absolute;
    left: 1rem;
    height: auto;
    top: 3.4rem;
}


nav ul li .link.active {
  background-color: #62affc; 
  color: white;
  font-weight: bold;
}
</style>
