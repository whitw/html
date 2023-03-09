import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'
import AboutView from '../views/AboutView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    //name: 뭔가 의미가 있긴 함.
    //생략해도 동작은 하지만
    //구분을 위한 것..?
    component: MainView
    //컴포넌트에 정의해도 보여줄 수는 있음.
    //의도가 다르기 때문에 views 폴더에 저장할 뿐
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/board',
    name: 'board',
    component: () => import('../views/BoardView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
