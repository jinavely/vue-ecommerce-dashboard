<template>
    <v-row>
        <v-col>
            <v-row class="search-box">
                <v-col class="search-input">
                    <v-card class="d-flex" flat color="transparent">
                        <v-card outlined color="transparent">검색어</v-card>
                        <v-card outlined color="transparent">
                            <v-select
                                :items="form.searchItems"
                                label="검색어 선택"
                                dense
                                flat
                                outlined
                                solo
                            ></v-select>
                        </v-card>
                        <v-card outlined color="transparent">
                            <v-text-field
                                label=""
                                placeholder="검색어 입력"
                                dense
                                flat
                                outlined
                                solo
                                v-model="search"
                            ></v-text-field>
                        </v-card>
                    </v-card>
                </v-col>
                <v-col class="search-date">
                    <v-card class="d-flex" flat color="transparent">
                        <v-card outlined color="transparent">기간검색</v-card>
                        <v-card
                            outlined
                            color="transparent"
                            class="datepicker mr-2"
                        >
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
                        </v-card>
                        <v-card outlined color="transparent">
                            <v-btn
                                depressed
                                outlined
                                color="blue"
                                class="mr-2"
                                style="background-color: #fff"
                            >
                                오늘
                            </v-btn>
                            <v-btn depressed class="mr-2"> 일주일 </v-btn>
                            <v-btn depressed> 한달 </v-btn>
                        </v-card>
                    </v-card>
                </v-col>
                <v-col class="search-btn">
                    <v-btn depressed color="blue" class="white--text mr-2">
                        <v-icon left dark> mdi-account-search </v-icon>
                        검색
                    </v-btn>
                    <v-btn depressed>
                        <v-icon left dark> mdi-lock-reset </v-icon>
                        초기화
                    </v-btn>
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
            search: '',

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
    position: relative;
    justify-content: flex-start;
    align-items: center;
    background: rgba(111, 111, 118, 0.1);
    border-radius: 4px;
    padding: 13px 21px;

    > .col {
        flex: 0 1 auto;
    }
    .search-input {
        width: 40%;
        .d-flex {
            align-items: center;
            > .v-card {
                min-width: 80px;
            }
        }
    }
    .search-date {
        width: 55%;
        .d-flex {
            align-items: center;
            > .v-card {
                min-width: 100px;
            }
        }
    }
    .search-btn {
        position: absolute;
        right: 21px;
        top: calc(50% - 30px);
        width: auto;
    }

    .v-input {
        height: 36px;
        padding-top: 0;
        margin-top: 0;
    }
    .datepicker {
        ::v-deep {
            .v-input {
                border-radius: 4px;
                border: 1px solid #ccc;
                background: #fff;
                &__control {
                    .v-input__slot {
                        &::before {
                            display: none;
                        }
                    }
                }
            }
        }
    }
}
@media (max-width: 1600px) {
    .search-box {
        .search-input {
            width: 100%;
        }
        .search-date {
            width: 100%;
            .d-flex {
                > .v-card {
                    min-width: 80px;
                }
            }
        }
    }
}
@media (max-width: 900px) {
    .search-box {
        .search-date {
            .d-flex {
                flex-wrap: wrap;
            }
        }
        .search-btn {
            position: static;
            width: auto;
        }
    }
}
</style>
