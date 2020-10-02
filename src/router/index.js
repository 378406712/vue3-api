import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/reactive/List.vue')
  },
  {
    path: '/title',
    name: 'Title',
    component: () => import('../views/reactive/Title.vue')
  },
  {
    path: '/live-cicle',
    name: 'LiveCicle',
    component: () => import('../views/live-cicle/Hooks.vue')
  },
  {
    path: '/pass',
    name: 'GF',
    component: () => import('../views/pass/GF')
  },
  {
    path: '/ref',
    name: 'Ref',
    component: () => import('../views/ref/index')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
