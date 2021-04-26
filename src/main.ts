import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';//相当于引入router/index.ts
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import icon from '@/components/icon.vue';
import tagListModel from '@/models/tagListModel';

Vue.config.productionTip = false;

Vue.component('Nav', Nav);//目前全局引用Nav比较好
Vue.component('Layout', Layout);
Vue.component('Icon', icon);
window.tagList = tagListModel.fetch();
window.createTag =(name:string)=>{
  const message = tagListModel.create(name);
  if (message === 'duplicated') {
    window.alert('标签名重复了');
  } else if (message === 'success') {
    window.alert('添加成功');
  }
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
