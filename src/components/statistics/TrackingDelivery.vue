<template>
    <div class="order-status">
        <v-card-title>
            <h3 class="vue-draggable-handle">배송 추적</h3>
            <v-text-field
                v-model="search"
                label="주문코드"
                single-line
                hide-details
                class="code-search"
            ></v-text-field>
        </v-card-title>
        <div class="no-drag">
            <v-data-table
                :headers="headers"
                :search="search"
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
    name: 'TrackingDelivery',
    props: {
        memberData: {
            type: [Array, Object],
            require: false,
        },
    },
    data() {
        return {
            search: '',

            // table
            headers: [
                {
                    text: '주문코드',
                    align: 'start',
                    value: 'orderNumber',
                    width: '200px',
                },
                {
                    text: '성명',
                    align: 'start',
                    value: 'orderer',
                    width: '100px',
                },
                {
                    text: '상품명',
                    align: 'start',
                    value: 'productName',
                    width: '200px',
                },
                {
                    text: '지불수단',
                    align: 'start',
                    value: 'paymentMethod',
                    width: '100px',
                },
                {
                    text: '배송일자',
                    align: 'start',
                    value: 'deliveryDate',
                    width: '100px',
                },
                {
                    text: '배송상태',
                    align: 'start',
                    value: 'deliveryStatus',
                    width: '100px',
                },
            ],
        };
    },
    methods: {
        getColor(status) {
            if (status === '미발송') return '#eb410b';
            else if (status === '배송중') return '#017efa';
            else return '#000';
        },
    },
};
</script>
<style lang="scss" scoped>
.v-card__title {
    justify-content: space-between;
    padding: 0;

    .code-search.v-text-field {
        max-width: 50%;
        margin-top: 0;
        padding-top: 0;
    }
}

.no-drag {
    margin: 0 -20px;

    .v-data-table {
        box-shadow: none !important;
        max-width: 1200px;

        [color='#31bc00'] {
            color: #31bc00;
        }
        [color='#eb410b'] {
            color: #eb410b;
        }
        [color='#f9a825'] {
            color: #f9a825;
        }
        [color='#017efa'] {
            color: #017efa;
        }
    }
}
</style>
