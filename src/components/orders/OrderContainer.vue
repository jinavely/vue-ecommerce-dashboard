<template>
    <v-col>
        <OrderSearchComponent />
        <OrderTableComponent :headers="headers" :desserts="memberData" />
    </v-col>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import OrderTableComponent from './OrderTableComponent.vue';
import OrderSearchComponent from './OrderSearchComponent.vue';

export default {
    name: 'OrderTable',
    components: { OrderTableComponent, OrderSearchComponent },
    data() {
        return {
            // table
            headers: [
                {
                    text: '번호',
                    align: 'center',
                    value: 'sn',
                    width: '80px',
                },
                {
                    text: '주문일시',
                    align: 'start',
                    value: 'orderDate',
                    width: '200px',
                },
                {
                    text: '주문번호',
                    align: 'start',
                    value: 'orderNumber',
                    width: '200px',
                },
                {
                    text: '주문자',
                    align: 'start',
                    value: 'orderer',
                    width: '100px',
                },
                {
                    text: '아이디',
                    align: 'start',
                    value: 'id',
                    width: '100px',
                },
                {
                    text: '상품명',
                    align: 'start',
                    value: 'productName',
                    width: '200px',
                },
                {
                    text: '총 상품금액',
                    align: 'end',
                    value: 'productPrice',
                    width: '120px',
                },
                {
                    text: '총 주문금액',
                    align: 'end',
                    value: 'orderPrice',
                    width: '120px',
                },
                {
                    text: '배송상태',
                    align: 'start',
                    value: 'deliveryStatus',
                    width: '100px',
                },
                {
                    text: '수령자',
                    align: 'start',
                    value: 'recipient',
                    width: '100px',
                },
                {
                    text: '주소',
                    align: 'start',
                    value: 'address',
                    width: '350px',
                },
                {
                    text: '주문자 휴대번호',
                    align: 'start',
                    value: 'sellphone',
                    width: '150px',
                },
                {
                    text: 'Actions',
                    align: 'center',
                    value: 'actions',
                    sortable: false,
                    width: '250px',
                },
            ],
            desserts: [],
            editedItem: {
                sn: 0,
                orderDate: '',
                orderNumber: '',
                orderer: '',
                id: '',
                productName: '',
                productPrice: 0,
                orderPrice: 0,
                deliveryStatus: '',
                recipient: '',
                address: '1',
                sellphone: '',
            },
            defaultItem: {
                sn: 0,
                orderDate: '',
                orderNumber: '',
                orderer: '',
                id: '',
                productName: '',
                productPrice: 0,
                orderPrice: 0,
                deliveryStatus: '',
                recipient: '',
                address: '1',
                sellphone: '',
            },
        };
    },

    computed: {
        ...mapState(['memberData']),
    },
    created() {
        this.FETCH_MEMBER_DATA();
    },
    methods: {
        ...mapActions(['FETCH_MEMBER_DATA']),
    },
};
</script>

<style lang="scss" scoped></style>
