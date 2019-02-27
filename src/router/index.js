import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Hello from '@/components/Hello'
import Coins from '@/components/Coins'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }, 
    {
      path: '/coins/:id',
      name: 'Coins',
      component: Coins
    }
  ]
})
