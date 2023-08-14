import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // Ruta de inicio de sesión
  {
    path: '/entrada',
    name: 'Entrada',
    component: () => import('@/components/Entrada.vue'),
    meta: { requiresAuth: false }  // No es necesario autenticarse para ver la página de inicio de sesión
  },
  // Ruta de Home
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    meta: { requiresAuth: true }, // Se necesita autenticación para ver el Home
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  // Ruta de Síntesis
  {
    path: '/sintesis',
    component: () => import('@/layouts/default/Default.vue'),
    meta: { requiresAuth: true },  // Se necesita autenticación para ver Síntesis
    children: [
      {
        path: '/sintesis',
        name: 'Sintesis',
        component: () => import('@/views/Sintesis.vue'),
      },
    ],
  },
  // RUTA 1.1.1
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

// Guardia de navegación
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('authToken'); // El token en localStorage
  
  if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
    // Si requiere autenticación y no hay token, redirige a la página de login
    next('/entrada');
  } else {
    next();
  }
});

export default router;
