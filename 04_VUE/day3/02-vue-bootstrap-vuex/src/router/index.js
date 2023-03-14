import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue';
import TodoList from "../views/todos/TodoList.vue";
import TodoDetail from "../views/todos/TodoDetail.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: MainView
  },
  {
    path: '/todos',
    component: TodoList
  },
  {
    path: '/todos/:id',
    component: TodoDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
