<template>
    <div class="status-board">
        <grid-item
            v-for="item in totalData"
            :key="item.i"
            :static="item.static"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i"
        >
            <h3>{{ item.title }}</h3>
            <p class="total">
                <span class="total__number">{{
                    item.number | number('0,0')
                }}</span>
                <span class="total__unit">{{ item.unit }}</span>
            </p>
            <p class="rating">
                <span class="rating__info" v-if="item.up"
                    >+ {{ (item.info * 0.01) | percent(2) }}</span
                >
                <span class="rating__info down" v-else
                    >- {{ (item.info * 0.01) | percent(2) }}</span
                >
                <span class="rating__standard">({{ item.standard }})</span>
            </p>
        </grid-item>
    </div>
</template>

<script>
import { GridItem } from 'vue-grid-layout';
import * as _ from 'lodash';

export default {
    name: 'StatusBoard',
    props: {
        layout: {
            type: Array,
        },
    },
    components: { GridItem },
    data() {
        return {
            // data join
            totalData: [],

            // real data
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
            draggable: true,
            mirrored: false,
            resizable: true,
            responsive: true,
            index: 0,

        };
    },
    created() {
        const layout = this.layout.slice(0, 5).map((el) => el);
        const data = this.data.map((el) => el);
        this.totalData = _.merge(layout, data);
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
::v-deep {
    .vue-grid-item {
        h3 {
            font-size: 18px;
            line-height: 23px;
        }
        .total {
            margin-top: 8px;
            &__number {
                font-weight: 600;
                font-size: 24px;
                line-height: 38px;
                margin-right: 8px;
            }
            &__unit {
                font-size: 18px;
                line-height: 29px;
            }
        }
        .rating {
            &__info {
                font-size: 14px;
                line-height: 19px;
                color: #31bc00;
                margin-right: 10px;
                &:before {
                    content: '▲';
                    margin-right: 3px;
                }
                &.down {
                    color: #eb410b;
                    &:before {
                        content: '▼';
                    }
                }
            }
            &__standard {
                font-weight: 400;
                font-size: 14px;
                line-height: 23px;
                color: #6a6a6a;
            }
        }
    }
}
</style>
