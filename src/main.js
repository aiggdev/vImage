import Vue from 'vue'
import App from './App.vue'
import router from './router'

// register jw pagination component globally
// @ts-ignore
import JwPagination from 'jw-vue-pagination'
Vue.component('jw-pagination', JwPagination)


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
