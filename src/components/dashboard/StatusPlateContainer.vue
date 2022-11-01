<template>
    <v-row class="dash-cards">
        <v-col md="7">
            <DashTableComponent />
        </v-col>
        <v-col md="5">
            <DashPlateComponent />
            <DashTotalPlateComponent />
        </v-col>
    </v-row>
</template>

<script>
import DashTableComponent from './DashTableComponent.vue';
import DashPlateComponent from './DashPlateComponent.vue';
import DashTotalPlateComponent from './DashTotalPlateComponent.vue';
export default {
    name: 'StatusPlateContainer',
    props: {
        layout: {
            type: Array,
        },
    },
    components: {
        DashTableComponent,
        DashPlateComponent,
        DashTotalPlateComponent,
    },
    data() {
        return {};
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss" scoped></style>
