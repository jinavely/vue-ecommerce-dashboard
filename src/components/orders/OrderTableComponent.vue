<template>
    <v-row class="mt-9">
        <v-col>
            <v-row>
                <v-col class="pa-0">
                    <v-card
                        class="d-flex align-center"
                        flat
                        tile
                        color="transparent"
                    >
                        <v-card class="mr-auto" flat tile color="transparent">
                            당일 매출 현황
                        </v-card>
                        <v-card class="pr-2" flat tile color="transparent">
                            <v-btn elevation="2" color="#fff">
                                <v-icon left dark> mdi-refresh </v-icon>
                                Refresh
                            </v-btn>
                        </v-card>
                        <v-card flat tile color="transparent">
                            <v-btn elevation="2" color="#fff">
                                <v-icon left dark color="green">
                                    mdi-file-excel
                                </v-icon>
                                엑셀다운로드
                            </v-btn>
                        </v-card>
                    </v-card>
                </v-col>
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
                        :search="search"
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
/**
 *
 * @param {*} props
 * headers: 테이블 대가리
 * desserts: 테이블 데이터
 * @returns
 */

export default {
    name: 'OrderTableComponent',
    props: {
        headers: {
            type: Array,
            require: true,
            default: Array,
        },
        desserts: {
            type: Array,
            require: true,
            default: Array,
        },
    },
    components: {},
    watch: {
        dialog(val) {
            val || this.close();
        },
    },
    data() {
        return {
            // popup
            dialog: false,

            selected: [],
            editedIndex: -1,

            search: '',
        };
    },
    computed: {
        formTitle() {
            return this.editedIndex === -1 ? '상세보기' : '수정하기';
        },
    },
    methods: {
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
    margin: 12px 0 0 0;
    padding: 0;
}
</style>
