import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/pages/MainPage.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('@/pages/QueryPage.vue')
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
