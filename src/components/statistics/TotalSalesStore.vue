<template>
    <div class="store-sales">
        <h3 class="vue-draggable-handle">
            매장별 총 판매액
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon color="indigo" v-bind="attrs" v-on="on">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                        >
                            <path
                                fill="#BDBDBD"
                                d="M12,16A2,2 0 0,1 14,18A2,2 0 0,1 12,20A2,2 0 0,1 10,18A2,2 0 0,1 12,16M12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12A2,2 0 0,1 12,10M12,4A2,2 0 0,1 14,6A2,2 0 0,1 12,8A2,2 0 0,1 10,6A2,2 0 0,1 12,4Z"
                            />
                        </svg>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item
                        v-for="(item, index) in dropItems"
                        :key="index"
                    >
                        <a href="#"
                            ><v-list-item-title>{{
                                item.title
                            }}</v-list-item-title></a
                        >
                    </v-list-item>
                </v-list>
            </v-menu>
        </h3>

        <div id="chartTree" class="no-drag"></div>

        <div class="table-box">
            <v-data-table
                :headers="headers"
                :items="storeData"
                :items-per-page="5"
                item-key="number"
                hide-default-footer
            >
                <template v-slot:[`item.price`]="{ item }">
                    <div>{{ item.price | number('0,0') }}</div>
                </template>
                <template v-slot:[`item.office`]="{ item }">
                    <div>{{ item.area }}{{ item.office }}</div>
                </template>
            </v-data-table>
        </div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
let treeChart;

export default {
    name: 'TotalSalesStore',
    props: {
        storeData: {
            type: [Array, Object],
            required: true,
        },
    },
    data() {
        return {
            dropItems: [
                { id: 0, title: 'PDF' },
                { id: 1, title: 'PNG' },
            ],

            // table
            headers: [
                {
                    text: '판매지점',
                    align: 'start',
                    value: `office`,
                    width: '120px',
                    sortable: false,
                },
                {
                    text: '판매액(원)',
                    align: 'right',
                    value: 'price',
                    width: '120px',
                    sortable: false,
                },
                {
                    text: '비중(%)',
                    align: 'right',
                    value: 'spcfcGrvty',
                    width: '100px',
                    sortable: false,
                },
            ],
        };
    },
    mounted() {
        this.chartFnctn();

        window.addEventListener('resize', this.handleChartResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleChartResize);
    },
    methods: {
        // Charts
        chartFnctn() {
            setTimeout(() => {
                const chartDom = document.getElementById('chartTree');
                treeChart = echarts.init(chartDom);

                if (
                    treeChart != null &&
                    treeChart != '' &&
                    treeChart != undefined
                ) {
                    treeChart.dispose(); //차트돔이 먼저 생성된 경우 기존 돔을 삭제해준다
                }

                treeChart = echarts.init(chartDom);
                option && treeChart.setOption(option);
            });

            let option;
            option = {
                tooltip: {
                    trigger: 'item',
                },
                series: [
                    {
                        type: 'treemap',
                        data: [
                            {
                                name: '경기',
                                value: 20,
                                color: ['#007CFF'],
                                children: [
                                    {
                                        name: '판교지점',
                                        value: 20,
                                    },
                                ],
                            },
                            {
                                name: '서울',
                                value: 20,
                                color: ['#3396FF', '#66B0FF'],
                                children: [
                                    {
                                        name: '강남지점',
                                        value: 10,
                                    },
                                    {
                                        name: '동부지점',
                                        value: 10,
                                    },
                                ],
                            },
                            {
                                name: '서울',
                                value: 10,
                                color: ['#99CBFF'],
                                children: [
                                    {
                                        name: '서부지점',
                                        value: 10,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            };
        },

        //윈도우 사이즈가 변경될때마다 resize되도록 설정해준다
        handleChartResize() {
            treeChart.resize();
        },
    },
};
</script>
<style lang="scss" scoped>
::v-deep {
    #chartTree {
        width: calc(100% + 60px);
        height: 250px;
        margin: 0 -30px;
    }
    h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .v-btn {
            display: block;
            width: 16px;
            height: 16px;
            text-align: right;
            .svg-icon {
                width: 3px;
                height: 15px;
                color: #b7b7b7;
                vertical-align: top;
            }
        }
    }
    .table-box {
        margin: 0 -20px;
    }
    .theme--light.v-data-table
        > .v-data-table__wrapper
        > table
        > thead
        > tr:last-child
        > th,
    .theme--light.v-data-table
        > .v-data-table__wrapper
        > table
        > tbody
        > tr:not(:last-child)
        > td:not(.v-data-table__mobile-row) {
        border-bottom: 0;
    }
}
</style>
