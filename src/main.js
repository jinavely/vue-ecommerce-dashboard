import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import vuetify from '@/plugins/vuetify';
import Vue2Filters from 'vue2-filters';
import { i18n } from '@/locales/i18n';
import { store } from './store/index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(Vue2Filters);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
    i18n,
    store,
    router,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
