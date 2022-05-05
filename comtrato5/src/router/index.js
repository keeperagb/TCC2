import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homeComtrato',
    component: () => import('../views/homeComtrato.vue')
  },
  {
    path: '/Planos',
    name: 'planosComtrato', 
    component: () => import( '../views/planosComtrato.vue')
  },
  {
    path: '/Sobre',
    nome: 'sobreComtrato',
    component:()=> import('../views/sobreComtrato.vue')
  },
  {
    path: '/Aula',
    nome: 'aulaComtrato',
    component:()=> import('../views/aulaComtrato.vue')
  },
  {
    path: '/Login',
    nome: 'loginComtrato',
    component:()=> import('../views/loginComtrato.vue')
  },
  {
    path: '/Cadastro',
    nome: 'cadastroComtrato',
    component:()=> import('../views/cadastroComtrato.vue')
  },
  {
    path: '/Perfil',
    nome: 'perfilUsuarioComtrato',
    component:()=> import('../views/perfilUsuarioComtrato.vue')
  },
  {
    path: '/Dashboard',
    nome: 'dashboardComtrato',
    component:()=> import('../views/dashboardComtrato.vue')
  },
  {
    path: '/NovoContrato',
    nome: 'novoContrato',
    component:()=> import('../views/dashBoard/cadastroContrato.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

