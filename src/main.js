import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';
import router from './router.js'
import store from './store.js'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
