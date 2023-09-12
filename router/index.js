// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import PortfolioPage from '../views/PortfolioPage.vue';
import ContactPage from '../views/ContactPage.vue';



 const routes = [
  { path: '/', name:'Home', component: HomePage },
  { path: '/about', name:'About',component: AboutPage },
  { path: '/portfolio', name:'Portfolio',component: PortfolioPage },
  { path: '/contact',name:'Contact', component: ContactPage }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
