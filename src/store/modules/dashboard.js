import { getInfoDashboard } from '../../api';

const state = {
    // 대시보드 상위
    dashboardInfoData: [],
};

const getters = {};

const mutaions = {
    SET_INFO(state, data) {
        state.dashboardInfoData = data;
    },
};

const actions = {
    // 대시보드 상위
    async FETCH_DASHINFO(context) {
        const { data } = await getInfoDashboard();
        context.commit('SET_INFO', data);
    },
};

export default { state, getters, mutaions, actions };
