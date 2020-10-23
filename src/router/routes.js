
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'comprar-curso', component: () => import('pages/ComprarCurso.vue') },
      { path: 'detalhes-curso', component: () => import('pages/DetalhesCurso.vue') }
    ]
  },

  {
    path: '/controle/',
    component: () => import('layouts/LayoutControle.vue'),
    children: [
      { path: '', component: () => import('pages/Login.vue') },
      { path: 'sign-up', component: () => import('pages/SignUp.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
