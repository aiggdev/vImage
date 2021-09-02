/* eslint-disable linebreak-style */
// @ts-ignore

import Vue from 'vue';
import JwPagination from 'jw-vue-pagination';
import App from './App.vue';
import router from './router';

Vue.component('jw-pagination', JwPagination);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
