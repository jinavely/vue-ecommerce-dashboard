<template>
    <v-main>
        <v-container fluid>
            <StatusInfoContainer />
            <StatusPlateContainer />
            <StatusChartsContainer />
        </v-container>
    </v-main>
</template>

<script>
import StatusInfoContainer from '../components/dashboard/StatusInfoContainer.vue';
import StatusPlateContainer from '../components/dashboard/StatusPlateContainer.vue';
import StatusChartsContainer from '../components/dashboard/StatusChartsContainer.vue';

// import StatusContainer from '../components/dashboard/StatusContainer.vue';
// import StatusContainer2 from '../components/dashboard/StatusContainer2.vue';
// import ChartsProfit from '../components/dashboard/ChartsProfit.vue';
// import ChartsProfit2 from '../components/dashboard/ChartsProfit2.vue';

export default {
    components: {
        StatusInfoContainer,
        StatusPlateContainer,
        StatusChartsContainer,
    },
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {},
};
</script>

<style lang="scss" scoped></style>
