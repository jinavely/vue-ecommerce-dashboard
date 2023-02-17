<template>
    <div class="order-status">
        <h3 class="vue-draggable-handle">고객 현황</h3>
        <div class="no-drag">
            <dl>
                <div>
                    <dt>재방문 고객</dt>
                    <dd :class="{ minus: variationOld }">
                        {{ customerData.oldCustomer }}
                        <span class="variation"
                            ><em v-if="variationOld">-</em
                            >{{ customerData.oldVariation }}%</span
                        >
                    </dd>
                </div>
                <div>
                    <dt>신규 고객</dt>
                    <dd :class="{ minus: variationNew }">
                        {{ customerData.newCustomer }}
                        <span class="variation"
                            ><em v-if="variationNew">-</em
                            >{{ customerData.newVariation }}%</span
                        >
                    </dd>
                </div>
            </dl>
        </div>
    </div>
</template>
<script>
export default {
    name: 'CustomerStatus',
    props: {
        customerData: {
            type: Object,
            require: false,
        },
    },
    data() {
        return {
            variationOld: false,
            variationNew: true,
        };
    },
};
</script>
<style lang="scss" scoped>
.order-status {
    dl {
        > div {
            background: #f2f2f2;
            border-radius: 4px;
            margin-top: 12px;
            padding: 5px 11px;

            dt {
                font-size: 14px;
                line-height: 20px;
            }
            dd {
                font-weight: 700;
                font-size: 24px;
                line-height: 28px;
                color: #1bae6a;
                margin-top: 8px;
                display: flex;
                justify-content: space-between;
                align-items: flex-start;

                .variation {
                    font-size: 16px;
                    line-height: 19px;
                    text-align: right;
                }

                &.minus {
                    color: #ff0506;
                }
            }
        }
    }
}
</style>
