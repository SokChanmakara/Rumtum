import { createRouter, createWebHistory } from 'vue-router'
import Headcard from '../Components/Headcard.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Headcard,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router