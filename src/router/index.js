import Vue from 'vue';
import VueRouter from 'vue-router';
import defaultLayout from '../layouts/default/index.vue';
import authLayout from '../layouts/authentication/index.vue';

import Dashboard from '../pages/Dashboard.vue';
import Order from '../pages/Order.vue';
import Stats from '../pages/Stats.vue';
import NotFound from '../pages/NotFound.vue';

import Login from '../pages/Login.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            component: authLayout,
            children: [
                {
                    path: '/login',
                    component: Login,
                },
            ],
        },
        {
            path: '/',
            component: defaultLayout,
            children: [
                {
                    path: '/',
                    component: Dashboard,
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
        },
    ],
});
