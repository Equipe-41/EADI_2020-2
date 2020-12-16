
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/index.vue') }
    ]
  },
  {
    path: '/controle/',
    component: () => import('layouts/LayoutControle.vue'),
    children: [
      { path: '', component: () => import('pages/main/Login.vue') },
      { path: 'PassWord', component: () => import('pages/main/PassWord.vue') },
      { path: 'SignUp', component: () => import('pages/main/SignUp.vue') }
    ]
  },
  {
    path: '/menu/',
    component: () => import('layouts/MainMenu.vue'),
    children: [
      { path: '', component: () => import('pages/menu/Menu.vue') },
      { path: 'DetalhesCurso', component: () => import('pages/menu/DetalhesCurso.vue') },
      { path: 'ComprarCurso', component: () => import('pages/menu/ComprarCurso.vue') }
    ]
  },
  {
    path: '/profile/',
    component: () => import('layouts/MainProfile.vue'),
    children: [
      { path: '', component: () => import('pages/profile/User.vue') },
      { path: 'PageClass', component: () => import('pages/profile/Class.vue') },
      { path: 'PageVideo', component: () => import('pages/profile/Video.vue') }
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
