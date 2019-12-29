import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Element from 'element-ui'
import VeeValidate from 'vee-validate';
import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import attributesFr from 'vee-validate/dist/locale/fr.js';

axios.interceptors.request.use(async function (config) {
  if(!config.url.includes('public')) {
    config.headers['Authorization'] = 'Basic ' + localStorage.getItem('auth');
  }
  return config
}, function (error){
  return Promise.reject(error)
});

Vue.use(Element)
Vue.use(VueAxios, axios)
Vue.use(VeeValidate, {
  locale: 'fr',
  dictionary: {
    fr: { attributes: attributesFr }
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
