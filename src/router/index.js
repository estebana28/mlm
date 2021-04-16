import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Vision from '../views/Vision.vue'
import Mision from '../views/Mision.vue'
import Servicios from '../views/Servicios.vue'
import Capacitaciones from '../views/Capacitaciones.vue'
import Contacto from '../views/Contacto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/vision',
    name: 'Vision',
    component: Vision,
  },
  {
    path: '/mision',
    name: 'Mision',
    component: Mision,
  },
  {
    path: '/servicios',
    name: 'Servicios',
    component: Servicios,
  },
  {
    path: '/capacitaciones',
    name: 'Capacitaciones',
    component: Capacitaciones,
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
]

const router = new VueRouter({
  routes,
})

export default router
