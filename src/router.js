import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './pages/HomePage.vue';
import Projects from './pages/Projects.vue';
import ShowProject from './pages/ShowProject.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/project/:slug',
      name: 'show-project',
      component: ShowProject
    }
    
  ]
});

export { router };