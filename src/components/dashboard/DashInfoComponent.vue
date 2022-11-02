<template>
    <v-card outlined>
        <h3>{{ item.title }}</h3>
        <p class="total">
            <span class="total__number">{{ item.number | number('0,0') }}</span>
            <span class="total__unit">{{ item.unit }}</span>
        </p>
        <p class="rating">
            <span class="rating__info" v-if="item.up">{{
                (item.info * 0.01) | percent(2) | number('+0')
            }}</span>
            <span class="rating__info down" v-else>{{
                (item.info * 0.01) | percent(2) | number('-0')
            }}</span>
            <span class="rating__standard">({{ item.standard }})</span>
        </p>
    </v-card>
</template>

<script>
export default {
    name: 'DashInfoComponent',
    props: {
        item: {
            type: Object,
            require: true,
            default: Object,
        },
    },
    components: {},
    data() {
        return {};
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss" scoped>
.v-sheet.v-card {
    min-height: 140px;
    h3 {
        font-size: 18px;
        line-height: 23px;
    }
    .total {
        white-space: nowrap;
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
        margin-top: 14px;
        &__info {
            font-size: 13px;
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
            font-size: 13px;
            line-height: 23px;
            color: #6a6a6a;
        }
    }
}
</style>
