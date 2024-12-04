import { createRouter, createWebHistory } from 'vue-router'
// import CreateAccount from '../Components/CreateAccount.vue'
import Login from '../Components/Login.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    // component: CreateAccount,
    component: Login,

  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router