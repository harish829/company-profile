import Vue from 'vue';
import VueRouter from 'vue-router';
import Company from '../views/CompanyProfile.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'companyprofile',
    component: Company,
  },

];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
