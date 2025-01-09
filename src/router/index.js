import MyAccount from '@/components/AccountPage/MyAccount.vue'
import Cart from '@/components/CartPage/Cart.vue'
import Checkout from '@/components/CheckoutPage/Checkout.vue'
import CreateAccount from '@/components/LoginPage/CreateAccount.vue'
import Login from '@/components/LoginPage/Login.vue'
import MenBanner from '@/components/MenHomePage/MenBanner.vue'
import MiniCart from '@/components/MiniCartPage/MiniCart.vue'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MenHomeView from '@/views/MenHomeView.vue'
import WishList from '@/views/WishList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'createAccount',
      component: CreateAccount
    },
    {
      path:'/product',
      name:'ProductPage',
      component: ProductView
    },
    {
      path:'/minicart',
      name:'MinicartPage',
      component:MiniCart
    },
    {
      path:'/account',
      name:'myaccount',
      component:MyAccount
    },
    {
      path:'/wishlist',
      name:'wishlistPage',
      component:WishList
    },
    {
      path:'/cart',
      name:'Cart',
      component:Cart
    },
    {
      path:'/checkout',
      name:'checkoutPage',
      component:Checkout
    },
    // {
    //   path:'/menbanner',
    //   name:'Menbanner',
    //   component:MenBanner
    // },
    {
      path:'/menhomeview',
      name:'Menhomeview',
      component:MenHomeView
    },
  
  ],
})

export default router