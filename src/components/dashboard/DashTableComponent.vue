<template>
    <v-card outlined>
        <div class="vuetify-table-wrap">
            <v-card-title>
                당일 매출 현황
                <v-spacer class="mx-16"></v-spacer>
                <v-text-field
                    v-model="search"
                    label="Search"
                    single-line
                    hide-details
                ></v-text-field>
            </v-card-title>
            <v-data-table
                :headers="headers"
                :search="search"
                :items="desserts"
                :items-per-page="5"
                class="elevation-1"
                item-key="number"
            >
                <template v-slot:[`item.status`]="{ item }">
                    <div :color="getColor(item.status)" dark>
                        {{ item.status }}
                    </div>
                </template>
            </v-data-table>
        </div>
    </v-card>
</template>

<script>
export default {
    name: 'DashTableComponent',
    components: {},
    data() {
        return {
            search: '',
            headers: [
                {
                    text: '순서',
                    align: 'center',
                    value: 'number',
                    width: '80px',
                },
                {
                    text: '주문자',
                    align: 'start',
                    value: 'order',
                    width: '100px',
                },
                { text: '아이디', align: 'start', value: 'id', width: '100px' },
                {
                    text: '상품코드',
                    align: 'start',
                    value: 'code',
                    width: '100px',
                },
                {
                    text: '상태',
                    align: 'start',
                    value: 'status',
                    width: '100px',
                },
                {
                    text: '상품명',
                    align: 'start',
                    value: 'productName',
                    width: '200px',
                },
                {
                    text: '공급처',
                    align: 'start',
                    value: 'supplier',
                    width: '150px',
                },
                {
                    text: '판매가',
                    align: 'center',
                    value: 'sellingPrice',
                    width: '100px',
                },
                {
                    text: '공급가',
                    align: 'center',
                    value: 'supplyPrice',
                    width: '100px',
                },
            ],
            desserts: [
                {
                    number: '1',
                    order: '노기철',
                    id: 'decody ',
                    code: '00129',
                    status: '옵션',
                    productName: '퓨어러스 블라우스',
                    supplier: '자체제작',
                    sellingPrice: '100000',
                    supplyPrice: '81250',
                },
                {
                    number: '2',
                    order: '노구라',
                    id: 'Boris ',
                    code: 'S2034',
                    status: '재고',
                    productName: '브룩클린 슬래이트',
                    supplier: 'AF아이리스걸',
                    sellingPrice: '39800',
                    supplyPrice: '12500',
                },
                {
                    number: '3',
                    order: '서말구',
                    id: 'nobaksa ',
                    code: 'B2356',
                    status: '재고 없음',
                    productName: '빈티지 치즈 오일',
                    supplier: '메가존',
                    sellingPrice: '198000',
                    supplyPrice: '12050',
                },
                {
                    number: '4',
                    order: '박부검',
                    id: 'deadpark',
                    code: 'DR234',
                    status: '입고예정',
                    productName: '하드 타입 치즈 나이프',
                    supplier: '마가린하우스',
                    sellingPrice: '38000',
                    supplyPrice: '24000',
                },
                {
                    number: '5',
                    order: '박찬효',
                    id: 'park61 ',
                    code: 'PK123',
                    status: '배송중',
                    productName: '우드 바틀 오프너',
                    supplier: 'CJ오샵',
                    sellingPrice: '12000',
                    supplyPrice: '8700',
                },
                {
                    number: '6',
                    order: '노구',
                    id: 'decody ',
                    code: '00129',
                    status: '옵션',
                    productName: '퓨어러스 블라우스',
                    supplier: '자체제작',
                    sellingPrice: '100000',
                    supplyPrice: '81250',
                },
                {
                    number: '7',
                    order: '노구라',
                    id: 'Boris ',
                    code: 'S2034',
                    status: '재고',
                    productName: '브룩클린 슬래이트',
                    supplier: 'AF아이리스걸',
                    sellingPrice: '39800',
                    supplyPrice: '12500',
                },
                {
                    number: '8',
                    order: '서말구',
                    id: 'nobaksa ',
                    code: 'B2356',
                    status: '재고 없음',
                    productName: '빈티지 치즈 오일',
                    supplier: '메가존',
                    sellingPrice: '198000',
                    supplyPrice: '12050',
                },
                {
                    number: '9',
                    order: '박부검',
                    id: 'deadpark',
                    code: 'DR234',
                    status: '입고예정',
                    productName: '하드 타입 치즈 나이프',
                    supplier: '마가린하우스',
                    sellingPrice: '38000',
                    supplyPrice: '24000',
                },
                {
                    number: '10',
                    order: '박찬효',
                    id: 'park61 ',
                    code: 'PK123',
                    status: '배송중',
                    productName: '우드 바틀 오프너',
                    supplier: 'CJ오샵',
                    sellingPrice: '12000',
                    supplyPrice: '8700',
                },
            ],
        };
    },
    created() {},
    methods: {
        getColor(status) {
            if (status === '재고') return '#31bc00';
            else if (status === '재고 없음') return '#eb410b';
            else if (status === '입고예정') return '#f9a825';
            else if (status === '배송중') return '#017efa';
            else return '#000';
        },
    },
};
</script>

<style lang="scss" scoped>
.v-application .elevation-1 {
    box-shadow: none !important;
}

.v-sheet.v-card {
    padding: 2px;

    .vuetify-table-wrap {
        max-width: 1200px;
        .v-card__title {
            font-size: 18px;
            line-height: 26px;
            .spacer {
                margin-left: 32% !important;
            }
        }
        .v-data-footer__icons-before {
            .v-btn__content {
                .v-icon {
                    background: url('../../assets/images/common/page_controls.svg')
                        no-repeat 50% 50%;
                }
            }
        }
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
