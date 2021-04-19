import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';//相当于引入router/index.ts
import store from './store';
import Nav from '@/components/Nav.vue';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);//目前全局引用Nav比较好

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');