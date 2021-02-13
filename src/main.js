import Vue from 'vue';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import VueLazyLoad from 'vue-lazyload';
import LightBox from 'vue-image-lightbox';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';

require('vue-image-lightbox/dist/vue-image-lightbox.min.css');

// import 'roboto-fontface/css/roboto/roboto-fontface.css';
// import 'material-design-icons-iconfont/dist/material-design-icons.css';
// import '@fortawesome/fontawesome-free/css/all.css';
// import '@mdi/font/css/materialdesignicons.css';

library.add(faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('LightBox', LightBox);

Vue.use(VueLazyLoad);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: (h) => h(App),
}).$mount('#app');
