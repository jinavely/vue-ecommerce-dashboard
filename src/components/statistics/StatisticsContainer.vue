<template>
    <v-row align="center" justify="center">
        <v-col class="pa-0">
            <grid-layout
                :layout.sync="layout"
                :col-num="5"
                :row-height="22"
                :is-draggable="draggable"
                :is-resizable="resizable"
                :vertical-compact="true"
                :use-css-transforms="true"
            >
                <!-- 주문현황 -->
                <grid-item
                    :static="layout[0].static"
                    :x="layout[0].x"
                    :y="layout[0].y"
                    :w="layout[0].w"
                    :h="layout[0].h"
                    :i="layout[0].i"
                    drag-allow-from=".vue-draggable-handle"
                    drag-ignore-from=".no-drag"
                >
                    <OrderStatus :memberData="memberData" />
                </grid-item>

                <!-- 고객현황 -->
                <grid-item
                    :static="layout[1].static"
                    :x="layout[1].x"
                    :y="layout[1].y"
                    :w="layout[1].w"
                    :h="layout[1].h"
                    :i="layout[1].i"
                    drag-allow-from=".vue-draggable-handle"
                    drag-ignore-from=".no-drag"
                >
                    <CustomerStatus :customerData="customerData" />
                </grid-item>

                <!-- 주간판매 -->
                <grid-item
                    :static="layout[2].static"
                    :x="layout[2].x"
                    :y="layout[2].y"
                    :w="layout[2].w"
                    :h="layout[2].h"
                    :i="layout[2].i"
                    drag-allow-from=".vue-draggable-handle"
                    drag-ignore-from=".no-drag"
                >
                    <WeeklySales />
                </grid-item>

                <!-- 고객별 배송 로그 -->
                <grid-item
                    :static="layout[3].static"
                    :x="layout[3].x"
                    :y="layout[3].y"
                    :w="layout[3].w"
                    :h="layout[3].h"
                    :i="layout[3].i"
                    drag-allow-from=".vue-draggable-handle"
                    drag-ignore-from=".no-drag"
                >
                    <DeliveryLogCustomer :memberData="memberData" />
                </grid-item>

                <!-- 매장별 총 판매액 -->
                <grid-item
                    :static="layout[4].static"
                    :x="layout[4].x"
                    :y="layout[4].y"
                    :w="layout[4].w"
                    :h="layout[4].h"
                    :i="layout[4].i"
                    drag-allow-from=".vue-draggable-handle"
                    drag-ignore-from=".no-drag"
                >
                    <TotalSalesStore :storeData="storeData" />
                </grid-item>

                <!-- 배송 추적 -->
                <grid-item
                    :static="layout[5].static"
                    :x="layout[5].x"
                    :y="layout[5].y"
                    :w="layout[5].w"
                    :h="layout[5].h"
                    :i="layout[5].i"
                    drag-allow-from=".vue-draggable-handle"
                    drag-ignore-from=".no-drag"
                >
                    <TrackingDelivery :memberData="memberData" />
                </grid-item>

                <!-- 신규 주문 -->
                <grid-item
                    :static="layout[6].static"
                    :x="layout[6].x"
                    :y="layout[6].y"
                    :w="layout[6].w"
                    :h="layout[6].h"
                    :i="layout[6].i"
                    drag-allow-from=".vue-draggable-handle"
                    drag-ignore-from=".no-drag"
                >
                    <NewOrder :memberData="memberData" />
                </grid-item>

                <!-- Top 10 카테고리 -->
                <grid-item
                    :static="layout[7].static"
                    :x="layout[7].x"
                    :y="layout[7].y"
                    :w="layout[7].w"
                    :h="layout[7].h"
                    :i="layout[7].i"
                    drag-allow-from=".vue-draggable-handle"
                    drag-ignore-from=".no-drag"
                >
                    <TopTenCategory :categoryData="categoryData" />
                </grid-item>
            </grid-layout>
        </v-col>
    </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { GridLayout, GridItem } from 'vue-grid-layout';
import OrderStatus from './OrderStatus.vue';
import CustomerStatus from './CustomerStatus.vue';
import WeeklySales from './WeeklySales.vue';
import DeliveryLogCustomer from './DeliveryLogCustomer.vue';
import TotalSalesStore from './TotalSalesStore.vue';
import TrackingDelivery from './TrackingDelivery.vue';
import NewOrder from './NewOrder.vue';
import TopTenCategory from './TopTenCategory.vue';

import { getCustomerStatus, getStoreSales, getTopCategory } from '@/api/index';

export default {
    name: 'StatisticsContainer',
    components: {
        GridLayout,
        GridItem,
        OrderStatus,
        CustomerStatus,
        WeeklySales,
        DeliveryLogCustomer,
        TotalSalesStore,
        TrackingDelivery,
        NewOrder,
        TopTenCategory,
    },
    data() {
        return {
            layout: [
                { x: 0, y: 0, w: 1, h: 7, i: '0', static: false }, // 주문 현황
                { x: 1, y: 0, w: 1, h: 7, i: '1', static: false }, // 고객 현황
                { x: 2, y: 0, w: 1, h: 7, i: '2', static: false }, // 주간 판매
                { x: 3, y: 0, w: 1, h: 19, i: '3', static: false }, //고객별 배송 로그
                { x: 4, y: 0, w: 1, h: 19, i: '4', static: false }, // 매장별 총 판매액
                { x: 0, y: 2, w: 2, h: 12, i: '6', static: false }, // 배송 추적
                { x: 2, y: 2, w: 1, h: 12, i: '7', static: false }, // 신규 주문
                { x: 0, y: 3, w: 2, h: 12, i: '8', static: false }, // Top 10 카테고리
            ],
            draggable: true,
            resizable: false,
            index: 0,

            // 고객 현황
            customerData: {},

            // 매장별 총 판매액
            storeData: [],

            // Top 10 카테고리
            categoryData: [],
        };
    },

    computed: {
        // 회원
        ...mapState(['memberData']),
    },
    created() {
        // 회원
        this.FETCH_MEMBER_DATA();

        // 고객 현황
        this.fetchCustomer();

        // 매장별 총 판매액
        this.fetchStoreSale();

        // Top 10 카테고리
        this.fetchTopCategory();
    },
    methods: {
        // 회원
        ...mapActions(['FETCH_MEMBER_DATA']),

        // 고객 현황
        async fetchCustomer() {
            try {
                const { data } = await getCustomerStatus();
                this.customerData = data;
            } catch (error) {
                new Error(error);
            }
        },

        // 매장별 총 판매액
        async fetchStoreSale() {
            try {
                const { data } = await getStoreSales();
                this.storeData = data;
            } catch (error) {
                new Error(error);
            }
        },

        // Top 10 카테고리
        async fetchTopCategory() {
            try {
                const { data } = await getTopCategory();
                this.categoryData = data;
            } catch (error) {
                new Error(error);
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.vue-grid-item:not(.vue-grid-placeholder) {
    border: 1px solid #bdbdbd;
    border-radius: 6px;
    background: #fff;
    z-index: 0;

    .resizing {
        opacity: 0.9;
    }
    .no-drag {
        height: 100%;
        width: 100%;
    }
    .add {
        cursor: pointer;
    }
    .static {
        background: #f2f2f2;
    }
    .vue-draggable-handle {
        position: absolute;
        width: 20px;
        height: 20px;
        top: 0;
        left: 0;
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='red'/></svg>")
            no-repeat;
        background-position: bottom right;
        padding: 0 8px 8px 0;
        background-repeat: no-repeat;
        background-origin: content-box;
        box-sizing: border-box;
        cursor: pointer;
    }
}
::v-deep {
    .vue-grid-item {
        padding: 12px 20px;
        h3 {
            font-weight: 500;
            font-size: 18px;
            line-height: 26px;
        }

        &.vue-grid-placeholder {
            background: #000;
            border-radius: 6px;
            opacity: 0.2;
            transition-duration: 100ms;
            z-index: 2;
            user-select: none;
        }
    }

    h3 {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        .v-btn {
            display: block;
            width: 24px;
            height: 24px;
            text-align: right;
            .svg-icon {
                width: 3px;
                height: 15px;
                color: #b7b7b7;
                vertical-align: top;
            }
        }
    }
    .v-list-item {
        a {
            text-decoration: none;
            color: #000;
        }
    }
}
</style>
