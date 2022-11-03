<template>
    <v-card outlined>
        <div id="chartLine" />

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
let lineChart;

export default {
    name: 'DahsGrsErnChartsComponent',
    components: {},
    data() {
        return {
            // 판매액 데이터
            saleData: [
                ['Price', 'Kind', 'Month'],
                [31, 'sale', 'Now'],
                [40, 'sale', 'Jan'],
                [20, 'sale', 'Feb'],
                [31, 'sale', 'Mar'],
                [54, 'sale', 'Apr'],
                [30, 'sale', 'May'],
                [17, 'sale', 'Jun'],
                [25, 'sale', 'Jul'],
                [41, 'sale', 'Aug'],
                [30, 'sale', 'Sep'],
                [20, 'sale', 'Oct'],
                [10, 'sale', 'Nov'],
                [30, 'sale', 'Dec'],
            ],

            // 기준판매액 데이터
            standardSaleData: [
                ['Price', 'Kind', 'Month'],
                [7, 'standardSale', 'Now'],
                [41, 'standardSale', 'Jan'],
                [9, 'standardSale', 'Feb'],
                [22, 'standardSale', 'Mar'],
                [43, 'standardSale', 'Apr'],
                [45, 'standardSale', 'May'],
                [22, 'standardSale', 'Jun'],
                [12, 'standardSale', 'Jul'],
                [22, 'standardSale', 'Aug'],
                [38, 'standardSale', 'Sep'],
                [27, 'standardSale', 'Oct'],
                [15, 'standardSale', 'Nov'],
                [37, 'standardSale', 'Dec'],
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
            const chartDom = document.getElementById('chartLine');
            lineChart = echarts.init(chartDom);

            if (
                lineChart != null &&
                lineChart != '' &&
                lineChart != undefined
            ) {
                lineChart.dispose(); //차트돔이 먼저 생성된 경우 기존 돔을 삭제해준다
            }

            lineChart = echarts.init(chartDom);

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
                        id: 'dataset_standard_sale_raw',
                        source: this.standardSaleData,
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
                        id: 'dataset_standardSale',
                        fromDatasetId: 'dataset_standard_sale_raw',
                        transform: {
                            type: 'filter',
                            config: {
                                and: [
                                    { dimension: 'Kind', '=': 'standardSale' },
                                ],
                            },
                        },
                    },
                ],
                grid: {
                    top: 100,
                    left: 30,
                    right: 0,
                },
                emphasis: {
                    focus: 'series',
                },
                legend: {
                    data: ['판매액', '기준판매액'],
                    bottom: 0,
                    left: 0,
                    lineStyle: {
                        color: 'none',
                    },
                },
                title: {
                    show: true,
                    text: '총 수익 추이',
                    textStyle: {
                        fontSize: 18,
                        color: '#000',
                    },
                    left: 0,
                    textAlign: 'left',
                    subtext: `${this.grossErnng()}원`,
                    subtextStyle: {
                        color: '#000',
                        fontWeight: 'bold',
                        fontSize: 32,
                    },
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
                    max: 60,
                },
                series: [
                    {
                        name: '판매액',
                        type: 'line',
                        smooth: true,
                        datasetId: 'dataset_sale',
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
                        endLabel: {
                            show: false,
                            formatter: function (params) {
                                return (
                                    '판매액: ' +
                                    (params.value[0] * 1000)
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                );
                            },
                        },
                    },
                    {
                        name: '기준판매액',
                        type: 'line',
                        smooth: true,
                        datasetId: 'dataset_standardSale',
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
                        endLabel: {
                            show: false,
                            formatter: function (params) {
                                return (
                                    '판매기준액: ' +
                                    (params.value[0] * 1000)
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                                );
                            },
                        },
                    },
                ],
            };

            option && lineChart.setOption(option);
            this.lineChart = lineChart;
        },

        //윈도우 사이즈가 변경될때마다 resize되도록 설정해준다
        handleChartResize() {
            lineChart.resize();
        },

        // 총 수익
        grossErnng() {
            const totalSaleNum = this.saleData.slice(1).map((el) => el[0]);
            const totalStandardSaleNum = this.standardSaleData
                .slice(1)
                .map((el) => el[0]);
            return (
                Array.from(totalSaleNum).reduce((a, b) => a + b) * 1000 +
                Array.from(totalStandardSaleNum).reduce((a, b) => a + b) * 1000
            )
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        },

        // 기간선택
        handleSelectPeriod(params) {
            switch (params) {
                case '최근 6개월':
                    break;
            }

            console.log(params);
        },
    },
};
</script>

<style lang="scss" scoped>
.v-sheet.v-card {
    position: relative;

    ::v-deep {
        #chartLine {
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
