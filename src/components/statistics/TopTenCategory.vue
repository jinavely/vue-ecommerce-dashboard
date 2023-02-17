<template>
    <div class="top-category">
        <v-card-title>
            <h3 class="vue-draggable-handle">
                Top 10 카테고리

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
        </v-card-title>

        <div id="chartbar" class="no-drag"></div>
    </div>
</template>
<script>
import * as echarts from 'echarts';
let chartbar;

export default {
    name: 'TopTenCategory',
    props: {
        categoryData: {
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
            newPriceData: [],
        };
    },
    mounted() {
        window.addEventListener('resize', this.handleChartResize);
        this.chartFnctn();
        this.newCategoryData();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleChartResize);
    },
    methods: {
        newCategoryData() {
            this.categoryData.forEach((el) => this.newPriceData.push(el.price));
        },

        // Charts
        chartFnctn() {
            setTimeout(() => {
                const chartDom = document.getElementById('chartbar');
                chartbar = echarts.init(chartDom);

                if (
                    chartbar != null &&
                    chartbar != '' &&
                    chartbar != undefined
                ) {
                    chartbar.dispose(); //차트돔이 먼저 생성된 경우 기존 돔을 삭제해준다
                }

                chartbar = echarts.init(chartDom);
                option && chartbar.setOption(option);
            });

            let option;
            option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                    {
                        data: this.newPriceData,
                        type: 'bar',
                    },
                ],
            };
        },

        //윈도우 사이즈가 변경될때마다 resize되도록 설정해준다
        handleChartResize() {
            chartbar.resize();
        },
    },
};
</script>
<style lang="scss" scoped>
::v-deep {
    #chartbar {
        width: 100%;
        height: 350px;
    }
    .v-card__title {
        padding: 0;
    }
}
</style>
