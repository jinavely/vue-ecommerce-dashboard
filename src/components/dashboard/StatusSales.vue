<template>
    <div class="status-sales">
        <grid-item
            v-for="item in layout.slice(5, 6)"
            :static="item.static"
            :key="item.i"
            :x="item.x"
            :y="item.y"
            :w="item.w"
            :h="item.h"
            :i="item.i">
            <span class="text">{{ item.i }}</span>
        </grid-item>
    </div>
</template>

<script>
import { GridItem } from 'vue-grid-layout';
export default {
    name: 'StatusSales',
    props: {
        layout: {
            type: Array,
        },
    },
    components: { GridItem },
    data() {
        return {};
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss" scoped>

</style>
