<template>
    <v-row class="dash-cards">
        <v-col md="7">
            <v-row>
                <v-col v-for="item in totalInfo.slice(0, 3)" :key="item.id">
                    <DashInfoComponent :item="item" />
                </v-col>
            </v-row>
        </v-col>

        <v-col md="5">
            <v-row>
                <v-col
                    v-for="item in this.totalInfo.slice(3, 5)"
                    :key="item.id"
                >
                    <DashInfoComponent :item="item" />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import DashInfoComponent from './DashInfoComponent.vue';
import { getTotalInfo } from '@/api/index';

export default {
    name: 'StatusInfoContainer',
    components: { DashInfoComponent },
    data() {
        return {
            totalInfo: [],
        };
    },
    created() {
        this.fetchTotalInfo();
    },
    methods: {
        async fetchTotalInfo() {
            const { data } = await getTotalInfo();
            this.totalInfo = data;
        },
    },
};
</script>

<style lang="scss" scoped></style>
