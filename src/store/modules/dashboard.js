import { getTotalInfo } from '../../api';

const dashboard = {
    namespaced: true,
    state: () => ({
        // 대시보드 상위
        infoData: [],
    }),
    getters: {},
    mutations: {
        SET_INFO(state, payload) {
            state.infoData = payload;
        },
    },
    actions: {
        // 대시보드 상위
        async FETCH_DASHINFO(context) {
            try {
                const { data } = await getTotalInfo();
                console.log(data);
                context.commit('SET_INFO', data);
            } catch (error) {
                console.warn(error);
            }
        },
    },
};
export default { dashboard };
