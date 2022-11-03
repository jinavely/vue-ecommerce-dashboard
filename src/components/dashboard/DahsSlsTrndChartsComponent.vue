<template>
    <v-card outlined>
        <div id="chartBar" />

        <v-select
            :items="items"
            filled
            label="기간선택"
            dense
            @change="chartFnctn"
        ></v-select>
    </v-card>
</template>

<script>
import * as echarts from 'echarts';
let barChart;

export default {
    name: 'DahsGrsErnChartsComponent',
    components: {},
    data() {
        return {
            // 판매액 데이터
            saleData: [
                ['Price', 'Kind', 'Month'],
                [220, 'sale', '1월'],
                [155, 'sale', '2월'],
                [170, 'sale', '3월'],
                [130, 'sale', '4월'],
                [280, 'sale', '5월'],
                [260, 'sale', '6월'],
                [30, 'sale', '7월'],
                [140, 'sale', '8월'],
                [20, 'sale', '9월'],
                [220, 'sale', '10월'],
                [50, 'sale', '11월'],
                [70, 'sale', '12월'],
            ],

            // 기준판매액 데이터
            feeData: [
                ['Price', 'Kind', 'Month'],
                [70, 'fee', '1월'],
                [130, 'fee', '2월'],
                [60, 'fee', '3월'],
                [160, 'fee', '4월'],
                [180, 'fee', '5월'],
                [200, 'fee', '6월'],
                [120, 'fee', '7월'],
                [20, 'fee', '8월'],
                [30, 'fee', '9월'],
                [190, 'fee', '10월'],
                [270, 'fee', '11월'],
                [50, 'fee', '12월'],
            ],

            // 기간조회 데이터
            items: ['연간', '최근 6개월', '최근 3개월', '최근 1개월'],
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
            const chartDom = document.getElementById('chartBar');
            barChart = echarts.init(chartDom);

            if (barChart != null && barChart != '' && barChart != undefined) {
                barChart.dispose(); //차트돔이 먼저 생성된 경우 기존 돔을 삭제해준다
            }

            barChart = echarts.init(chartDom);

            let option;
            option = {
                animation: true,
                animationDuration: 2000,
                dataset: [
                    {
                        id: 'dataset_sale_raw',
                        source: this.saleData,
                    },
                    {
                        id: 'dataset_fee_sale_raw',
                        source: this.feeData,
                    },
                    {
                        id: 'dataset_sale',
                        fromDatasetId: 'dataset_sale_raw',
                        transform: {
                            type: 'filter',
                            config: {
                                and: [{ dimension: 'Kind', '=': 'sale' }],
                            },
                        },
                    },
                    {
                        id: 'dataset_fee',
                        fromDatasetId: 'dataset_fee_sale_raw',
                        transform: {
                            type: 'filter',
                            config: {
                                and: [{ dimension: 'Kind', '=': 'fee' }],
                            },
                        },
                    },
                ],
                grid: {
                    top: 120,
                    left: 35,
                    right: 0,
                },
                emphasis: {
                    focus: 'series',
                },
                legend: [
                    {
                        data: ['총 매출'],
                        top: 30,
                        left: 0,
                        itemGap: 10,
                        lineStyle: {
                            color: 'none',
                        },
                    },
                    {
                        data: ['판매 수수료'],
                        top: 30,
                        left: '30%',
                        lineStyle: {
                            color: 'none',
                        },
                    },
                ],
                graphic: [
                    {
                        type: 'group',
                        left: 35,
                        top: 55,
                        children: [
                            {
                                type: 'text',
                                style: {
                                    fill: '#000',
                                    overflow: 'break',
                                    text: `${this.totalSales()}원`,
                                    font: 'bold 1.15vw sans-serif',
                                },
                            },
                        ],
                    },
                    {
                        type: 'group',
                        left: '36%',
                        top: 55,
                        children: [
                            {
                                type: 'text',
                                style: {
                                    fill: '#000',
                                    overflow: 'break',
                                    text: `${this.sellingCommission()}원`,
                                    font: 'bold 1.15vw sans-serif',
                                },
                            },
                        ],
                    },
                ],
                title: {
                    show: true,
                    text: '판매 추이',
                    textStyle: {
                        fontSize: 18,
                        color: '#000',
                    },
                    left: 0,
                    textAlign: 'left',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985',
                        },
                    },
                },
                xAxis: {
                    type: 'category',
                    name: '',
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                },
                yAxis: {
                    name: '',
                },
                series: [
                    {
                        name: '총 매출',
                        type: 'bar',
                        smooth: true,
                        datasetId: 'dataset_sale',
                        symbol: 'circle',
                        showSymbol: false,
                        color: ['#017EFA'],
                        lineStyle: {
                            color: '#017EFA',
                        },
                        encode: {
                            x: 'Month',
                            y: 'Price',
                            itemName: 'Month',
                            tooltip: ['Price'],
                        },
                    },
                    {
                        name: '판매 수수료',
                        type: 'bar',
                        smooth: true,
                        datasetId: 'dataset_fee',
                        symbol: 'circle',
                        showSymbol: false,
                        color: ['#EB410B'],
                        lineStyle: {
                            color: '#EB410B',
                        },
                        encode: {
                            x: 'Month',
                            y: 'Price',
                            itemName: 'Month',
                            tooltip: ['Price'],
                        },
                    },
                ],
            };

            option && barChart.setOption(option);
            this.barChart = barChart;
        },

        //윈도우 사이즈가 변경될때마다 resize되도록 설정해준다
        handleChartResize() {
            barChart.resize();
        },

        // 총 매출
        totalSales() {
            const totalSaleNum = this.saleData.slice(1).map((el) => el[0]);

            return (Array.from(totalSaleNum).reduce((a, b) => a + b) * 1000)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },

        // 판매 수수료
        sellingCommission() {
            const totalSaleNum = this.feeData.slice(1).map((el) => el[0]);

            return (Array.from(totalSaleNum).reduce((a, b) => a + b) * 1000)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },
    },
};
</script>

<style lang="scss" scoped>
.v-sheet.v-card {
    position: relative;

    ::v-deep {
        #chartBar {
            width: 100%;
            height: 400px;

            > div {
                max-width: 100%;
            }

            canvas {
                max-width: 100%;
                border-radius: 12px;
            }
        }
        .v-select {
            position: absolute;
            top: 16px;
            right: 30px;
            max-width: 30%;

            .v-input__slot {
                border-radius: 8px;
                &:before {
                    display: none;
                }
            }
        }
    }
}
</style>
