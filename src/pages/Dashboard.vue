<template>
    <v-main>
        <v-container fluid>
            <!-- <StatusBoard /> -->
            <grid-layout
                :layout.sync="layout"
                :col-num="12"
                :row-height="70"
                :is-draggable="draggable"
                :is-resizable="resizable"
                :vertical-compact="true"
                :use-css-transforms="true"
                :responsive="responsive"
                :margin="[20, 20]"
                @breakpoint-changed="breakpointChangedEvent"
            >
                <StatusSales :layout="layout" />
                <ChartsProfit :item="layout[5]" />
            </grid-layout>

            <!-- <StatusSales />
            <ChartsProfit /> -->
        </v-container>
    </v-main>
</template>

<script>
import ChartsProfit from '../components/dashboard/ChartsProfit.vue';
// import StatusBoard from '../components/dashboard/StatusBoard.vue';
import StatusSales from '../components/dashboard/StatusSales.vue';

import { GridLayout } from 'vue-grid-layout';

export default {
    components: { GridLayout, StatusSales, ChartsProfit },
    data() {
        return {
            layout: [
                { x: 0, y: 0, w: 2, h: 2, i: '0' },
                { x: 2, y: 0, w: 2, h: 2, i: '1' },
                { x: 4, y: 0, w: 2, h: 2, i: '2' },
                { x: 6, y: 0, w: 2, h: 2, i: '3' },
                { x: 8, y: 0, w: 2, h: 2, i: '4' },
                { x: 0, y: 2, w: 6, h: 4, i: '5' },
                // { x: 6, y: 2, w: 2, h: 3, i: '6' },
                // { x: 8, y: 2, w: 2, h: 3, i: '7' },
                // { x: 8, y: 4, w: 4, h: 1, i: '8' },
                // { x: 0, y: 4, w: 5, h: 3, i: '9' },
                // { x: 6, y: 4, w: 5, h: 3, i: '10' },
            ],
            draggable: true,
            resizable: true,
            responsive: true,
            index: 0,
        };
    },
    created() {},
    mounted() {},
    methods: {
        breakpointChangedEvent: function (newBreakpoint, newLayout) {
            console.log(
                'BREAKPOINT CHANGED breakpoint=',
                newBreakpoint,
                ', layout: ',
                newLayout,
            );
        },
    },
};
</script>

<style lang="scss" scoped>
.vue-grid-layout {
    background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
    background: #ccc;
    border: 1px solid black;
}
.vue-grid-item .resizing {
    opacity: 0.9;
}
.vue-grid-item .static {
    background: #cce;
}
.vue-grid-item .text {
    font-size: 24px;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 100%;
    width: 100%;
}
.vue-grid-item .no-drag {
    height: 100%;
    width: 100%;
}
.vue-grid-item .minMax {
    font-size: 12px;
}
.vue-grid-item .add {
    cursor: pointer;
}
.vue-draggable-handle {
    position: absolute;
    width: 20px;
    height: 20px;
    top: 0;
    left: 0;
    background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
        no-repeat;
    background-position: bottom right;
    padding: 0 8px 8px 0;
    background-repeat: no-repeat;
    background-origin: content-box;
    box-sizing: border-box;
    cursor: pointer;
}
</style>
