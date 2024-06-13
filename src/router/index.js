import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MapHeighLightStatic from '../views/MapHeighLightStatic.vue'
import MapHeighLightClick from '../views/MapHeighLightClick.vue'
import ProvinceDetails from '../views/ProvinceDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/mapClick',
      name: 'MapHeighLightClick',
      component: MapHeighLightClick
    },
    {
      path: '/mapStatic',
      name: 'MapHeighLightStatic',
      component: MapHeighLightStatic
    },
    {
      path: '/province/:province',
      name: 'province-details',
      component: ProvinceDetails
    }
  ]
})

export default router