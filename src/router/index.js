import Vue from 'vue'
import Router from 'vue-router'
import Initiator from '@/components/Initiator'
import Login from '@/components/Login'
import OtherPeer from '@/components/OtherPeer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/initiator',
      name: 'Initiator',
      component: Initiator
    },
    {
      path: '/otherpeer',
      name: 'OtherPeer',
      component: OtherPeer
    }
  ]
})
