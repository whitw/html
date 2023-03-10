import Vue from 'vue'
import VueRouter from 'vue-router'
import GrandParent from '../views/HalBae.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name : 'home',
    component: GrandParent
  },
  {
    path: '/GrandParent',
    name : 'GrandParent',
    component: GrandParent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
