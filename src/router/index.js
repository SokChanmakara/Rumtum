import FooterComponent from '@/components/footerComponent.vue'

import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/footer',
      name: 'footer',
      component: FooterComponent
    }
  ]
})

export default router
