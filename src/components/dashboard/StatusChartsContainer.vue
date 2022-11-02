<template>
    <v-row class="dash-cards">
        <v-col md="7">
            <DahsGrsErnChartsComponent />
        </v-col>
        <v-col md="5">
            <DahsSlsTrndChartsComponent />
        </v-col>
    </v-row>
</template>

<script>
import DahsGrsErnChartsComponent from './DahsGrsErnChartsComponent.vue';
import DahsSlsTrndChartsComponent from './DahsSlsTrndChartsComponent.vue';

export default {
    name: 'StatusPlateContainer',
    components: { DahsGrsErnChartsComponent, DahsSlsTrndChartsComponent },
    data() {
        return {};
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss" scoped></style>
