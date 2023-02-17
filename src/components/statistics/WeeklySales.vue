<template>
    <div class="weekly-sales">
        <h3 class="vue-draggable-handle">
            주간 판매
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
        <div id="chart" class="no-drag"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
let chart;

export default {
    name: 'WeeklySales',
    data() {
        return {
            dropItems: [
                { id: 0, title: 'PDF' },
                { id: 1, title: 'PNG' },
            ],
        };
    },

    mounted() {
        this.fetchChart();
        window.addEventListener('resize', this.handleChartResize);
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.handleChartResize);
    },

    methods: {
        fetchChart() {
            setTimeout(() => {
                const chartDom = document.getElementById('chart');

                chart = echarts.init(chartDom);

                if (chart != null && chart != '' && chart != undefined) {
                    chart.dispose(); //차트돔이 먼저 생성된 경우 기존 돔을 삭제해준다
                }

                chart = echarts.init(chartDom);

                option && chart.setOption(option);
            });

            let option;

            option = {
                textStyle: {
                    fontFamily: 'GmarketSansMedium',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid: {
                    show: false,
                    top: 16,
                    left: 30,
                    right: 0,
                },
                xAxis: {
                    type: 'category',
                    data: ['월', '화', '수', '목', '금', '토', '일'],
                    axisLabel: {
                        fontSize: 12,
                        color: '#A1A1A1',
                    },
                    axisLine: { show: false },
                    axisTick: { show: false },
                    splitLine: { show: false },
                },
                yAxis: {
                    type: 'value',
                    max: 50,
                    axisLabel: {
                        fontSize: 12,
                        color: '#A1A1A1',
                    },
                    splitLine: {
                        show: false,
                    },
                },
                series: [
                    {
                        data: [24, 40, 32, 30, 28, 31, 15],
                        type: 'bar',
                        showBackground: true,
                        backgroundStyle: {
                            color: '#E5E5E5',
                        },
                        color: ['#F9A825'],
                        barWidth: 10,
                    },
                ],
            };
        },

        //윈도우 사이즈가 변경될때마다 resize되도록 설정해준다
        handleChartResize() {
            chart.resize();
        },
    },
};
</script>
<style lang="scss" scoped>
#chart {
    width: 100%;
    height: 200px;
}
</style>
