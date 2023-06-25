import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactIndex.vue')
    },
    {
      path: '/contact/:id',
      name: 'contact-details',
      component: () => import('../pages/ContactDetails.vue')
    },
    {
      path: '/contact/edit/:id?',
      name: 'contact-edit',
      component: () => import('../pages/ContactEdit.vue')
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: () => import('../pages/Stats.vue')
    }
  ]
})

export default router
