<template>
    <v-row>
        <v-col>
            <v-row class="search-box">
                <v-col> 검색어 </v-col>
                <v-col>
                    <v-select
                        :items="form.searchItems"
                        label="검색어 선택"
                        dense
                        flat
                        outlined
                        solo
                    ></v-select>
                    <v-text-field
                        label="Outlined"
                        placeholder="검색어 입력"
                        dense
                        flat
                        outlined
                        solo
                    ></v-text-field>
                </v-col>
                <v-col> 기간검색 </v-col>
                <v-col>
                    <v-menu
                        v-model="menu"
                        :close-on-content-click="false"
                        transition="scale-transition"
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                                v-model="date"
                                label=""
                                prepend-icon="mdi-calendar"
                                readonly
                                v-bind="attrs"
                                v-on="on"
                            ></v-text-field>
                        </template>
                        <v-date-picker
                            v-model="date"
                            scrollable
                            @input="menu = false"
                        ></v-date-picker>
                    </v-menu>
                    <v-btn depressed> 오늘 </v-btn>
                    <v-btn depressed> 일주일 </v-btn>
                    <v-btn depressed> 한달 </v-btn>
                </v-col>
                <v-col class="ml-auto">
                    <v-btn depressed color="primary" class="white--text">
                        <v-icon left dark> mdi-cloud-upload </v-icon>
                        검색
                    </v-btn>
                    <v-btn depressed> 초기화 </v-btn>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'OrderSearch',
    data() {
        return {
            form: {
                searchItems: [
                    '주문번호',
                    '상품명',
                    '상품코드',
                    '주문자',
                    '아이디',
                ],
            },
            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            menu: false,
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.search-box {
    background: rgba(111, 111, 118, 0.1);
    border-radius: 4px;
    padding: 13px 21px;
}
</style>
