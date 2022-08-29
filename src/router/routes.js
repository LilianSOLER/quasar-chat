
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/PageUsers.vue'), name: 'Home'},
      { path: '/auth', component: () => import('pages/PageAuth.vue'), name: 'Login'},
      { path : '/chat', component: () => import('pages/PageChat.vue'), name: 'Chat' },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
