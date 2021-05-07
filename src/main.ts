import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';//相当于引入router/index.ts
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import icon from '@/components/icon.vue';


Vue.config.productionTip = false;

Vue.component('Nav', Nav);//目前全局引用Nav比较好
Vue.component('Layout', Layout);
Vue.component('Icon', icon);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 54);
  }, 0);
};
if (document.documentElement.clientWidth > 500) {
  window.alert('使用手机打开体验更棒');
  const img = document.createElement('img');
  img.src = './qrcode.png';
  img.style.position = 'fixed';
  img.style.left = '50%';
  img.style.top = '50%';
  img.style.transform = 'translate(-50%,-50%)';
  img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)';
  document.body.appendChild(img);
}