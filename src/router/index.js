import Vue from 'vue'
import VueRouter from 'vue-router'
import Contador from '../views/Contador.vue'
import Produtos from '../views/Produtos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/contador',
    name: 'Contador',
    component: Contador
  },
  {
    path: '/produtos',
    name: 'Produtos',
    component: Produtos
  },
]

const router = new VueRouter({
  routes
})

export default router
