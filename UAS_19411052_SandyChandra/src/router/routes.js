
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('pages/user/Index')
      },
      {
        path: '/berkas',
        name: 'databerkas',
        component: () => import('pages/user/databerkas')
      },
      {
        path: '/upload',
        name: 'uploadberkas',
        component: () => import('pages/user/uploadberkas')
      },
      {
        path: '/formedit/:id',
        name: 'formedit',
        component: () => import('pages/user/formedit')
      }
    ]
  },

  {
    path: '/login',
    name: 'loginpage',
    component: () => import('pages/guest/login')
  },

  {
    path: '/register',
    name: 'registerpage',
    component: () => import('pages/guest/reg')
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
