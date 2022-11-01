import Vue from 'vue';
import App from './App.vue';
import router from './router/index.js';
import vuetify from '@/plugins/vuetify';
import Vue2Filters from 'vue2-filters';
import VueMoment from 'moment';

Vue.use(Vue2Filters, VueMoment);
Vue.config.productionTip = false;

new Vue({
    router,
    vuetify,
    render: (h) => h(App),
}).$mount('#app');
