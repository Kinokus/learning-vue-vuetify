import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
// import 'roboto-fontface/css/roboto/roboto-fontface.css';
// import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import '@fortawesome/fontawesome-free/css/all.css';
// import '@mdi/font/css/materialdesignicons.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: (h) => h(App),
}).$mount('#app');
