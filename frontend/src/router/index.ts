// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    // デフォルト親ルート
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),

    // デフォルト子ルート
    children: [
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
      {
        path: '/blog',
        name: 'Blog',
        component: () => import('@/components/Blog.vue'),
      },
      {
        path: '/analysis',
        name: 'Analysis',
        component: () => import('@/components/Analysis.vue'),
      },
      {
        path: '/post-content',
        name: 'PostContent',
        component: () => import('@/components/PostContent.vue'),
      },
    ],
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
