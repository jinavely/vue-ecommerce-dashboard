<template>
    <div class="order-status">
        <v-card-title>
            <h3 class="vue-draggable-handle">신규 주문</h3>
            <v-select :items="selectItems" label="선택" dense></v-select>
        </v-card-title>
        <div class="no-drag">
            <v-data-table
                :headers="headers"
                :items="memberData"
                :items-per-page="5"
                class="elevation-1"
                item-key="number"
                hide-default-footer
            >
                <template v-slot:[`item.deliveryStatus`]="{ item }">
                    <div :color="getColor(item.deliveryStatus)">
                        {{ item.deliveryStatus }}
                    </div>
                </template>
            </v-data-table>
        </div>
    </div>
</template>
<script>
export default {
    name: 'NewOrder',
    props: {
        memberData: {
            type: [Array, Object],
            require: false,
        },
    },
    data() {
        return {
            // select
            selectItems: ['금일', '주간'],

            // table
            headers: [
                {
                    text: '주문코드',
                    align: 'start',
                    value: 'orderNumber',
                    width: '200px',
                },
                {
                    text: '상품명',
                    align: 'start',
                    value: 'productName',
                    width: '200px',
                },
                {
                    text: '배송일자',
                    align: 'start',
                    value: 'deliveryDate',
                    width: '100px',
                },
            ],
        };
    },
};
</script>
<style lang="scss" scoped>
.v-card__title {
    justify-content: space-between;
    padding: 0;

    .v-select {
        max-width: 50%;
        margin-top: 0;
        padding-top: 0;

        ::v-deep {
            .v-input__slot {
                margin-bottom: 0;
                min-height: auto;
            }
            .v-text-field__details {
                display: none;
            }
        }
    }
}

.no-drag {
    margin: 0 -20px;
    .v-data-table {
        box-shadow: none !important;
    }
}
</style>
