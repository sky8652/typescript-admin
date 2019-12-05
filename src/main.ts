import Vue from 'vue';

import 'normalize.css';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
