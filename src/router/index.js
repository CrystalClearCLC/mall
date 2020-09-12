import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
const G_IDLE = () => import('views/(G)-IDLE/(G)-IDLE')
const CLC = () => import('views/CLC/CLC')


Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/About.vue')
  },
  {
    path: '/clc',
    name: 'CLC',
    component: CLC
  },
  {
    path: '/g_idle',
    name: 'G_IDLE',
    component: G_IDLE,
    redirect: '/g_idle/test',
    children: [
      {
        path: 'test',
        component: () => import('@/views/(G)-IDLE/test/CLC'),
        name: 'CLC',
       /* meta: { title: 'Tab', icon: 'tab' } */
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
