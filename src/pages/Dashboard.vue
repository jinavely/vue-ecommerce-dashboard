<template>
    <v-main>
        <v-container fluid>
            <grid-layout
                :layout.sync="layout"
                :col-num="12"
                :row-height="60"
                :is-draggable="draggable"
                :is-resizable="resizable"
                :is-mirrored="mirrored"
                :responsive="responsive"
                :vertical-compact="true"
                :use-css-transforms="true"
                :auto-size="true"
                :margin="[20, 20]"
                @breakpoint-changed="breakpointChangedEvent"
            >
                <StatusBoard :layout="layout" />
                <StatusSales :layout="layout" />
                <StatusContainer :layout="layout" />
                <StatusContainer2 :layout="layout" />
                <ChartsProfit :layout="layout" />
                <ChartsProfit2 :layout="layout" />
            </grid-layout>
        </v-container>
    </v-main>
</template>

<script>
import { GridLayout } from 'vue-grid-layout';
import StatusBoard from '../components/dashboard/StatusBoard.vue';
import StatusSales from '../components/dashboard/StatusSales.vue';
import StatusContainer from '../components/dashboard/StatusContainer.vue';
import StatusContainer2 from '../components/dashboard/StatusContainer2.vue';
import ChartsProfit from '../components/dashboard/ChartsProfit.vue';
import ChartsProfit2 from '../components/dashboard/ChartsProfit2.vue';

export default {
    components: { GridLayout, StatusBoard, StatusSales, StatusContainer, StatusContainer2, ChartsProfit, ChartsProfit2 },
    data() {
        return {
            layout: [
                { x: 0, y: 0, w: 2, h: 2, i: '0' },
                { x: 2, y: 0, w: 2, h: 2, i: '1' },
                { x: 4, y: 0, w: 2, h: 2, i: '2' },
                { x: 6, y: 0, w: 3, h: 2, i: '3' },
                { x: 9, y: 0, w: 3, h: 2, i: '4' },
                { x: 0, y: 2, w: 6, h: 4, i: '5' },
                { x: 6, y: 2, w: 3, h: 3, i: '6' },
                { x: 9, y: 2, w: 3, h: 3, i: '7' },
                { x: 6, y: 4, w: 6, h: 1, i: '8' },
                { x: 0, y: 4, w: 6, h: 3, i: '9' },
                { x: 6, y: 4, w: 6, h: 3, i: '10' },
            ],
            draggable: true,
            mirrored: false,
            resizable: false,
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
    margin: -20px;
    ::v-deep {
        .vue-grid-item {
            position: relative;
            display: flex;
            flex-direction: column;
            word-wrap: break-word;
            background-color: #fff;
            background-clip: border-box;
            border: 1px solid #bdbdbd;
            border-radius: 10px;
            padding: 16px 30px;
            &.vue-grid-placeholder {
                background: #aaa;
            }
        }
    }
}
</style>
