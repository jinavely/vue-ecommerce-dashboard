<template>
    <v-row class="dash-cards">
        <v-col md="7">
            <v-row>
                <v-col v-for="item in data.slice(0, 3)" :key="item.id">
                    <DashInfoComponent :item="item" />
                </v-col>
            </v-row>
        </v-col>
        <v-col md="5">
            <v-row>
                <v-col v-for="item in data.slice(3, 5)" :key="item.id">
                    <DashInfoComponent :item="item" />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
import DashInfoComponent from './DashInfoComponent.vue';
export default {
    name: 'StatusInfoContainer',
    components: { DashInfoComponent },
    data() {
        return {
            // data
            data: [
                {
                    id: '0',
                    title: 'New Orders',
                    number: '34622',
                    unit: '',
                    up: true,
                    info: '2.00',
                    standard: '30 일기준',
                },
                {
                    id: '1',
                    title: 'Today’s Sale',
                    number: '2740622',
                    unit: '원',
                    up: true,
                    info: '3.15',
                    standard: '전일대비',
                },
                {
                    id: '2',
                    title: 'Total Sales',
                    number: '20023203100',
                    unit: '원',
                    up: false,
                    info: '1.23',
                    standard: '전년대비, 최근 1년 기준',
                },
                {
                    id: '3',
                    title: 'Total Orders',
                    number: '230024',
                    unit: '건',
                    up: true,
                    info: '2.14',
                    standard: '전년대비, 최근 1년 기준',
                },
                {
                    id: '4',
                    title: 'Total Expense',
                    number: '12023203100',
                    unit: '원',
                    up: true,
                    info: '12.20',
                    standard: '전년대비',
                },
            ],
        };
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss" scoped></style>
