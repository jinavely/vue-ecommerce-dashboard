<template>
    <v-row>
        <v-col>
            <v-row>
                <v-col class="table-title"> 당일 매출 현황 </v-col>
            </v-row>
            <v-row>
                <v-col class="table">
                    <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="desserts"
                        item-key="sn"
                        :items-per-page="5"
                        show-select
                        class="elevation-1"
                        loading-text="로딩중..."
                        no-data-text="데이터가 존재하지 않습니다."
                    >
                        <template v-slot:[`item.sn`]="{ index }">
                            <div dark>
                                {{ index + 1 }}
                            </div>
                        </template>
                        <template v-slot:[`item.productPrice`]="{ item }">
                            <div dark>
                                {{ item.productPrice | number('0,0') }}원
                            </div>
                        </template>
                        <template v-slot:[`item.orderPrice`]="{ item }">
                            <div dark>
                                {{ item.orderPrice | number('0,0') }}원
                            </div>
                        </template>
                        <template v-slot:[`item.actions`]="{ item }">
                            <v-btn
                                depressed
                                small
                                @click="dialog = true"
                                class="mr-2"
                                >상세</v-btn
                            >
                            <v-btn
                                depressed
                                small
                                @click="editItem(item)"
                                class="mr-2"
                                >수정</v-btn
                            >
                            <v-btn depressed small @click="deleteItem(item)"
                                >삭제</v-btn
                            >
                        </template>

                        <template v-slot:top>
                            <v-dialog v-model="dialog" max-width="500px">
                                <v-card>
                                    <v-card-title
                                        class="text-h5 grey lighten-2"
                                    >
                                        {{ formTitle }}
                                    </v-card-title>
                                    <v-card-text>
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur. Excepteur sint
                                        occaecat cupidatat non proident, sunt in
                                        culpa qui officia deserunt mollit anim
                                        id est laborum.
                                    </v-card-text>
                                    <v-divider></v-divider>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>

                                        <v-btn
                                            color="primary"
                                            v-if="editedIndex !== -1"
                                            @click="save"
                                            >확인</v-btn
                                        >
                                        <v-btn color="gray" @click="close"
                                            >닫기</v-btn
                                        >
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </template>
                    </v-data-table>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'OrderTable',
    data() {
        return {
            // popup
            dialog: false,

            //search

            // table
            selected: [],
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
            editedIndex: -1,
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
    watch: {
        dialog(val) {
            val || this.close();
        },
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? '상세보기' : '수정하기';
        },
    },
    created() {
        this.initialize();
    },
    methods: {
        initialize() {
            this.desserts = [
                {
                    sn: 1,
                    orderDate: '2022.10.11 23:12:15',
                    orderNumber: '001-A041568457',
                    orderer: '노기철',
                    id: 'nobaksa',
                    productName: '퓨어러브 블라우스',
                    productPrice: 100000,
                    orderPrice: 100000,
                    deliveryStatus: '배송중',
                    recipient: '노기순',
                    address: '서울 동대문구 고산자로 124 제기한신 12-101',
                    sellphone: '010-2345-1256',
                },
                {
                    sn: 2,
                    orderDate: '2022.10.11 23:12:15',
                    orderNumber: '001-A041568457',
                    orderer: '노기철',
                    id: 'nobaksa',
                    productName: '브룩클린 슬래이트 토테',
                    productPrice: 39800,
                    orderPrice: 39800,
                    deliveryStatus: '배송완료',
                    recipient: '노기순',
                    address: '서울 동대문구 고산자로 124 제기한신 12-101',
                    sellphone: '010-2345-1256',
                },
                {
                    sn: 3,
                    orderDate: '2022.10.11 23:12:15',
                    orderNumber: '001-A041568457',
                    orderer: '노기철',
                    id: 'nobaksa',
                    productName: '빈티지 치즈 오일',
                    productPrice: 198000,
                    orderPrice: 198000,
                    deliveryStatus: '미발송',
                    recipient: '노기순',
                    address: '서울 동대문구 고산자로 124 제기한신 12-101',
                    sellphone: '010-2345-1256',
                },
                {
                    sn: 4,
                    orderDate: '2022.10.11 23:12:15',
                    orderNumber: '001-A041568457',
                    orderer: '노기철',
                    id: 'nobaksa',
                    productName: '하드 타입 치즈 나이프',
                    productPrice: 12000,
                    orderPrice: 12000,
                    deliveryStatus: '배송보류',
                    recipient: '노기순',
                    address: '서울 동대문구 고산자로 124 제기한신 12-101',
                    sellphone: '010-2345-1256',
                },
                {
                    sn: 5,
                    orderDate: '2022.10.11 23:12:15',
                    orderNumber: '001-A041568457',
                    orderer: '노기철',
                    id: 'nobaksa',
                    productName: '우드 바틀 오프너',
                    productPrice: 125000,
                    orderPrice: 125000,
                    deliveryStatus: '취소요청',
                    recipient: '노기순',
                    address: '서울 동대문구 고산자로 124 제기한신 12-101',
                    sellphone: '010-2345-1256',
                },
                {
                    sn: 6,
                    orderDate: '2022.10.11 23:12:15',
                    orderNumber: '001-A041568457',
                    orderer: '노기철',
                    id: 'nobaksa',
                    productName: '하드 타입 치즈 나이프',
                    productPrice: 10000,
                    orderPrice: 10000,
                    deliveryStatus: '반품요청',
                    recipient: '노기순',
                    address: '서울 동대문구 고산자로 124 제기한신 12-101',
                    sellphone: '010-2345-1256',
                },
                {
                    sn: 7,
                    orderDate: '2022.10.11 23:12:15',
                    orderNumber: '001-A041568457',
                    orderer: '노기철',
                    id: 'nobaksa',
                    productName: '빈티지 치즈 오일',
                    productPrice: 78000,
                    orderPrice: 78000,
                    deliveryStatus: '반품완료',
                    recipient: '노기순',
                    address: '서울 동대문구 고산자로 124 제기한신 12-101',
                    sellphone: '010-2345-1256',
                },
            ];
        },

        // 상세보기

        // 수정
        editItem(item) {
            alert(item + '진행중');
            // this.editedIndex = this.desserts.indexOf(item);
            // this.editedItem = Object.assign({}, item);
            // this.dialog = true;
        },

        // 삭제
        deleteItem(item) {
            this.editedIndex = this.desserts.indexOf(item);
            this.editedItem = Object.assign({}, item);
            if (confirm('삭제하시겠습니까?')) {
                this.desserts.splice(this.editedIndex, 1);
                this.close();
            }
        },

        // 취소
        close() {
            this.dialog = false;
            this.$nextTick(() => {
                this.editedItem = Object.assign({}, this.defaultItem);
                this.editedIndex = -1;
            });
        },

        // 확인
        save() {
            if (this.editedIndex > -1) {
                Object.assign(this.desserts[this.editedIndex], this.editedItem);
            } else {
                this.desserts.push(this.editedItem);
            }
            this.close();
        },
    },
};
</script>

<style lang="scss" scoped>
.table {
    padding: 0;
}
.table-title {
    margin-top: 36px;
    padding: 0 0 10px 0;
}
</style>
