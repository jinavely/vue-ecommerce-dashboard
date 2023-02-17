import { getMemberTbl } from '@/api/index';

const orders = {
    namespaced: true,
    state: () => ({
        // 대시보드 상위
        memberData: [],
    }),
    getters: {},
    mutations: {
        SET_MEMBER(state, payload) {
            state.memberData = payload;
        },
    },
    actions: {
        async FETCH_MEMBER_DATA(context) {
            const { data } = await getMemberTbl();
            context.commit('SET_MEMBER', data);
        },
    },
};
export default { orders };
