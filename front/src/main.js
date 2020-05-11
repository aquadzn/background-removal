import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import axios from 'axios'

import App from './App.vue'
import router from './router';
import Default from './layouts/Default.vue';

Vue.use(Buefy, axios)
Vue.component('default-layout', Default);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
