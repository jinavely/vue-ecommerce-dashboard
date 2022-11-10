<template>
    <v-row class="dash-cards">
        <v-col md="7">
            <v-row>
                <v-col
                    v-for="item in this.dashboardInfoData.slice(0, 3)"
                    :key="item.id"
                >
                    <DashInfoComponent :item="item" />
                </v-col>
            </v-row>
        </v-col>
        <v-col md="5">
            <v-row>
                <v-col
                    v-for="item in this.dashboardInfoData.slice(3, 5)"
                    :key="item.id"
                >
                    <DashInfoComponent :item="item" />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import { mapMutations } from 'vuex';
import DashInfoComponent from './DashInfoComponent.vue';
export default {
    name: 'StatusInfoContainer',
    components: { DashInfoComponent },
    data() {
        return {};
    },
    computed: {
        ...mapMutations('SET_INFO'),
    },
    methods: {},
};
</script>

<style lang="scss" scoped></style>
