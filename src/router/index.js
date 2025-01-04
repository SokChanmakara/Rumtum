import CreateAccount from '@/components/LoginPage/CreateAccount.vue'
import Login from '@/components/LoginPage/Login.vue'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import { createRouter, createWebHistory } from 'vue-router'

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
    }
  ],
})

export default router