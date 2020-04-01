import Vue from 'vue'
import Router from 'vue-router'
import Host from '@/components/Host'
import Vroom from '@/components/Vroom'
import VM from '@/components/VM'
import Disk from '@/components/Disk'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Host',
      component: Host
    },
    {
      path: '/room',
      name: 'VROOM',
      component: Vroom
    },
    {
      path: '/vmhost',
      name: 'VM',
      component: VM
    },
    {
      path: '/disk',
      name: 'DISK',
      component: Disk
    },
  ],
  mode:'history'
})
