import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/view/Login/Login'
import Index from '@/view/Index/Index'
import Home from '@/view/Home/Home'
import Database from '@/view/Database/Database'
import Workbox from '@/view/Workbox/Workbox'
import Plan from '@/view/Plan/Plan'
import Elements from '@/view/Element/Element'
import Originality from '@/view/Originality/Originality'
import Setup from '@/view/Setup/Setup'
import Setplan from '@/view/Setplan/Setplan'
import Setelement from '@/view/Setelement/Setelement'
import Setoriginality from '@/view/Setoriginality/Setoriginality'
import Haveplan from '@/view/Haveplan/Haveplan'
import Newplan from '@/view/Newplan/Newplan'

Vue.use(Router)

let routers = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect: '/index/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: Home
        },
        {
          path: 'plan',
          name: 'plan',
          component: Plan
        },
        {
          path: 'elements',
          name: 'elements',
          component: Elements
        },
        {
          path: 'originality',
          name: 'originality',
          component: Originality
        },
        {
          path: 'database',
          name: 'database',
          component: Database
        },
        {
          path: 'workbox',
          name: 'workbox',
          component: Workbox
        },
        {
          path: 'setup',
          name: 'setup',
          component: Setup,
          redirect: '/index/setup/setplan',
          children: [
            {
              path: 'setplan',
              name: 'setplan',
              component: Setplan,
              children: [
                {
                  path: 'haveplan',
                  name: 'haveplan',
                  component: Haveplan
                },
                {
                  path: 'newplan',
                  name: 'newplan',
                  component: Newplan
                }
              ]
            },
            {
              path: 'setelement',
              name: 'setelement',
              component: Setelement,
            },
            {
              path: 'setoriginality',
              name: 'setoriginality',
              component: Setoriginality
            }
          ]
        }
      ]
    }
  ]
})
routers.beforeEach((to, from, next) => {
  let on = isToLogin()
  if (to.name == 'Login') {
    next()
  } else {
    if (on) {
      next()
    } else {
      next({
        name: "Login"
      })
    }
  }
})

function isToLogin () {
  let ck = window.localStorage.token
  return !!ck
}

export default routers
