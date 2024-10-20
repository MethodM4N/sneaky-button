/* createWebHistory, for githubPages: createWebHashHistory */
import { createRouter, createWebHashHistory } from 'vue-router';

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
  history: createWebHashHistory(import.meta.env.BASE_URL),
  base: import.meta.env.BASE_URL,
  routes
});

export default router;
