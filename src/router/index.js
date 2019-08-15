import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/mainpage'
import herodisplay from '@/components/herodisplay'
import playerdisplay from '@/components/playerdisplay'
import teamdisplay from '@/components/teamdisplay'
import matchdisplay from '@/components/matchdisplay'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'mainpage',
      component: mainpage
    },
    {
      path: '/hero',
      name: 'herodisplay',
      component: herodisplay
    },
    {
      path: '/team',
      name: 'teamdisplay',
      component: teamdisplay
    },
    {
      path: '/match',
      name: 'matchdisplay',
      component: matchdisplay
    },
    {
      path: '/player',
      name: 'playerdisplay',
      component: playerdisplay
    }
  ]
})
