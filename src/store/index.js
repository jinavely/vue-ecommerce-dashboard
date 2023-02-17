import Vue from 'vue';
import Vuex from 'vuex';

import { getProjectLists } from '@/api/index';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: () => ({
        // 대시보드 상위
        projectListData: [],
    }),
    getters: {},
    mutations: {
        SET_PROJECT_LIST(state, payload) {
            state.projectListData = payload;
        },
    },
    actions: {
        async FETCH_PROJECT_DATA(context) {
            const { data } = await getProjectLists();
            context.commit('SET_PROJECT_LIST', data);
        },
    },
});
