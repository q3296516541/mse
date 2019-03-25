import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Main from '@/components/main'
import Box from '@/components/box'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components:{
        default:HelloWorld,
        "home":Home,
        "main":Main
      },
      children:[
        {
          path:'/box/:index',
          name:"box",
          component:Box
        }
      ]
    },
    {
      path:"*",
      redirect:HelloWorld
    }
  ]
})
