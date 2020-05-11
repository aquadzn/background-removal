import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const base = process.env.NODE_ENV === 'production'
  ? '/website/'
  : '/';

export default new Router({
  mode: 'history',
  base,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { layout: 'default' },
      // eslint-disable-next-line global-require
      component: require('./views/Home.vue').default, // load sync home
    },
    {
      path: '/upload',
      name: 'upload',
      meta: { layout: 'default' },
      component: () => import('./views/Upload.vue'),
    },
    {
      path: '/about',
      name: 'about',
      meta: { layout: 'default' },
      component: () => import('./views/About.vue'),
    },
  ],
});
