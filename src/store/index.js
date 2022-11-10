import Vue from 'vue';
import Vuex from 'vuex';
import dashboard from '../store/modules/dashboard';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        dashboard,
    },
});
