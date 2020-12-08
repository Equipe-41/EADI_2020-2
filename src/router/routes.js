
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainProfile.vue'),
    children: [
      {
        path: '',
        name: 'PageUser',
        component: () => import('pages/User.vue')
      }
    ]
  },
  {
    path: '/class',
    component: () => import('layouts/MainClass.vue'),
    children: [
      {
        path: '',
        name: 'pageClass',
        component: () => import('pages/Class.vue')
      }
    ]
  },
  {
    path: 'video',
    component: () => ('layouts/MainVideo.vue'),
    children: [
      {
        path: '',
        name: 'PageVideo',
        component: () => import('pages/Video.vue')
      }
    ]
  }
  // Always leave this as last one,
  // but you can also remove it
]

export default routes
