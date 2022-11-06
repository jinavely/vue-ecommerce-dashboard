import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../pages/Login.vue';
import Dashboard from '../pages/Dashboard.vue';
import Order from '../pages/Order.vue';
import Stats from '../pages/Stats.vue';
import NotFound from '../pages/NotFound.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Dashboard,
        },
        {
            path: '/login',
            name: 'Login',
            component: Login,
        },
        {
            path: '/order',
            name: 'Order',
            component: Order,
        },
        {
            path: '/stats',
            name: 'Stats',
            component: Stats,
        },
        {
            path: '/*',
            name: 'NotFound',
            component: NotFound,
        },
    ],
});
