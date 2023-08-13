// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/sintesis',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/sintesis',
        name: 'Sintesis',
        component: () => import('@/views/Sintesis.vue'),
      },
    ],
  },
  {
    path: '/autodiagnostico/fundamentos/propositos/mision_vision',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/autodiagnostico/fundamentos/propositos/mision_vision',
        name: 'autodiagnostico_mision_vision',
        component: () => import('@/views/autodiagnostico/cat_1/cat_1_1/view_1_1_1.vue'),
      },
    ],
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
