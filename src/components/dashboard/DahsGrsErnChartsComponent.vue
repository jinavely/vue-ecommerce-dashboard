<template>
    <v-card outlined>
        <div id="chartLine" />

        <v-select
            :items="items"
            filled
            label="기간선택"
            dense
            @change="selectPeriod"
        ></v-select>
    </v-card>
</template>

<script>
import * as echarts from 'echarts';
let lineChart;
const year = new Array(
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
);
const date = new Array(
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
);
const week = new Array('일', '월', '화', '수', '목', '금', '토');
let preid = year[new Date().getMonth()];

export default {
    name: 'DahsGrsErnChartsComponent',
    components: {},
    data() {
        return {
            saleNewData: [],
            standardSaleNewData: [],

            // 판매액 데이터 연간
            saleData: [
                ['Price', 'Kind', 'Period'],
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
            // 기준판매액 데이터 연간
            standardSaleData: [
                ['Price', 'Kind', 'Period'],
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

            // 판매액 데이터 월간
            saleMonthData: [
                ['Price', 'Kind', 'Period'],
                [40, 'sale', '1'],
                [20, 'sale', '2'],
                [31, 'sale', '3'],
                [54, 'sale', '4'],
                [30, 'sale', '5'],
                [17, 'sale', '6'],
                [25, 'sale', '7'],
                [15, 'sale', '8'],
                [29, 'sale', '9'],
                [35, 'sale', '10'],
                [7, 'sale', '11'],
                [4, 'sale', '12'],
                [17, 'sale', '13'],
                [40, 'sale', '14'],
                [47, 'sale', '15'],
                [52, 'sale', '16'],
                [37, 'sale', '17'],
                [57, 'sale', '18'],
                [21, 'sale', '19'],
                [5, 'sale', '20'],
                [16, 'sale', '21'],
                [13, 'sale', '22'],
                [23, 'sale', '23'],
                [38, 'sale', '24'],
                [43, 'sale', '25'],
                [23, 'sale', '26'],
                [12, 'sale', '27'],
                [35, 'sale', '28'],
                [52, 'sale', '29'],
                [42, 'sale', '30'],
                [26, 'sale', '31'],
            ],

            // 판매액 데이터 월간
            standardMonthSaleData: [
                ['Price', 'Kind', 'Period'],
                [23, 'standardSale', '1'],
                [43, 'standardSale', '2'],
                [56, 'standardSale', '3'],
                [21, 'standardSale', '4'],
                [5, 'standardSale', '5'],
                [2, 'standardSale', '6'],
                [16, 'standardSale', '7'],
                [29, 'standardSale', '8'],
                [45, 'standardSale', '9'],
                [32, 'standardSale', '10'],
                [9, 'standardSale', '11'],
                [7, 'standardSale', '12'],
                [27, 'standardSale', '13'],
                [43, 'standardSale', '14'],
                [22, 'standardSale', '15'],
                [35, 'standardSale', '16'],
                [39, 'standardSale', '17'],
                [21, 'standardSale', '18'],
                [26, 'standardSale', '19'],
                [31, 'standardSale', '20'],
                [4, 'standardSale', '21'],
                [5, 'standardSale', '22'],
                [54, 'standardSale', '23'],
                [17, 'standardSale', '24'],
                [27, 'standardSale', '25'],
                [38, 'standardSale', '26'],
                [56, 'standardSale', '27'],
                [42, 'standardSale', '28'],
                [25, 'standardSale', '29'],
                [17, 'standardSale', '30'],
                [7, 'standardSale', '31'],
            ],

            // 판매액 데이터 주간
            saleWeekData: [
                ['Price', 'Kind', 'Period'],
                [40, 'sale', '월'],
                [20, 'sale', '화'],
                [31, 'sale', '수'],
                [54, 'sale', '목'],
                [30, 'sale', '금'],
                [17, 'sale', '토'],
                [25, 'sale', '일'],
            ],
            // 기준판매액 데이터 주간
            standardWeekSaleData: [
                ['Price', 'Kind', 'Period'],
                [41, 'standardSale', '월'],
                [9, 'standardSale', '화'],
                [22, 'standardSale', '수'],
                [43, 'standardSale', '목'],
                [45, 'standardSale', '금'],
                [22, 'standardSale', '토'],
                [12, 'standardSale', '일'],
            ],

            // 기간조회 데이터
            items: ['연간', '월간', '주간'],
        };
    },
    mounted() {
        this.yearSelect();
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
                        source: this.saleNewData,
                    },
                    {
                        id: 'dataset_standard_sale_raw',
                        source: this.standardSaleNewData,
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
                dataZoom: [
                    {
                        show: false,
                        id: 'dataZoomX',
                        type: 'slider',
                        xAxisIndex: [0],
                        filterMode: 'filter',
                        start: this.datePeriod,
                        end: 100,
                    },
                ],
                xAxis: {
                    type: 'category',
                    name: '',
                    axisLine: {
                        show: false,
                    },
                    axisTick: {
                        show: false,
                    },
                    axisPointer: {
                        value: preid,
                        snap: true,
                        triggerTooltip: false,
                        lineStyle: {
                            color: '#000',
                            width: 1,
                        },
                        label: {
                            show: true,
                            formatter: function (params) {
                                return params.value === preid
                                    ? `Today`
                                    : `${params.value}`;
                            },
                            backgroundColor: '#7581BD',
                        },
                        handle: {
                            show: true,
                            color: '#7581BD',
                            icon: 'none',
                        },
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
                        z: 1,
                        zlevel: 1,
                        encode: {
                            x: 'Period',
                            y: 'Price',
                            itemName: 'Period',
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
                        z: 1,
                        zlevel: 1,
                        encode: {
                            x: 'Period',
                            y: 'Price',
                            itemName: 'Period',
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
        yearSelect() {
            this.saleNewData = this.saleData;
            this.standardSaleNewData = this.standardSaleData;
            preid = year[new Date().getMonth()];
        },
        monthSelect() {
            this.saleNewData = this.saleMonthData;
            this.standardSaleNewData = this.standardMonthSaleData;
            preid = date[new Date().getDate() - 1];
        },
        weekSelect() {
            this.saleNewData = this.saleWeekData;
            this.standardSaleNewData = this.standardWeekSaleData;
            preid = week[new Date().getDay()];
        },
        selectPeriod(val) {
            switch (val) {
                case '연간':
                    this.yearSelect();
                    break;
                case '월간':
                    this.monthSelect();
                    break;
                case '주간':
                    this.weekSelect();
                    break;
                default:
                    this.yearSelect();
                    break;
            }
            if (
                lineChart != null &&
                lineChart != '' &&
                lineChart != undefined
            ) {
                lineChart.dispose(); //차트돔이 먼저 생성된 경우 기존 돔을 삭제해준다(instance제거)
            }
            this.chartFnctn();
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
