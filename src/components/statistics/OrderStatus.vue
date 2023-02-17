<template>
    <div class="order-status">
        <h3 class="vue-draggable-handle">
            주문 현황

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
        <div id="chartPie" class="no-drag"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
let pieChart;

export default {
    name: 'OrderStatus',
    props: {
        memberData: {
            type: [Array, Object],
            require: false,
        },
    },
    data() {
        return {
            dropItems: [
                { id: 0, title: 'PDF' },
                { id: 1, title: 'PNG' },
            ],

            // 총 주문
            totalOrder: 345,
            orderData: [
                {
                    value: 1048,
                    name: '미정',
                    itemStyle: { color: '#FF0506' },
                },
                {
                    value: 735,
                    name: '배송중',
                    itemStyle: { color: '#34C1E9' },
                },
                {
                    value: 580,
                    name: '배달 완료',
                    itemStyle: { color: '#1BAE6A' },
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
                const chartDom = document.getElementById('chartPie');
                pieChart = echarts.init(chartDom);

                if (
                    pieChart != null &&
                    pieChart != '' &&
                    pieChart != undefined
                ) {
                    pieChart.dispose(); //차트돔이 먼저 생성된 경우 기존 돔을 삭제해준다
                }

                pieChart = echarts.init(chartDom);

                option && pieChart.setOption(option);
            });

            let option;
            option = {
                animation: true,
                animationDuration: 2000,
                title: {
                    text: `총 주문\n${this.handleTotalOrder()}`,
                    textStyle: {
                        fontSize: 12,
                        lineHeight: 14,
                        color: '#000',
                    },
                    left: 'center',
                    top: 'middle',
                },
                tooltip: {
                    trigger: 'item',
                    textStyle: { fontSize: 11 },
                    axisPointer: { z: 10 },
                },
                grid: {
                    top: 0,
                    left: 0,
                    right: 10,
                },
                legend: {
                    bottom: -5,
                    left: 'center',
                    orient: 'horizontal',
                    textStyle: { fontSize: 10 },
                    itemGap: 5,
                    itemWidth: 10,
                    itemHeight: 10,
                    icon: 'circle',
                },
                series: [
                    {
                        name: '주문 현황',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            label: {
                                show: false,
                                fontSize: 10,
                                fontWeight: 'bold',
                            },
                        },
                        labelLine: {
                            show: false,
                        },
                        data: this.orderData,
                    },
                ],
            };
        },

        //윈도우 사이즈가 변경될때마다 resize되도록 설정해준다
        handleChartResize() {
            pieChart.resize();
        },

        // 총 주문
        handleTotalOrder() {
            const result = this.orderData
                .map((el) => el.value)
                .reduce(
                    (accumulator, currentValue) => accumulator + currentValue,
                );

            return result;
        },
    },
};
</script>
<style lang="scss" scoped>
::v-deep {
    #chartPie {
        width: 100%;
        height: 150px;
    }
}
</style>
