<template>
    <v-app-bar flat app height="100" color="#f5f5f5">
        <div class="header">
            <div class="title-info">
                <v-toolbar-title
                    >Welcome Back
                    <span class="name"
                        >노기철 <em>님</em></span
                    ></v-toolbar-title
                >
                <p class="description">
                    판매 추이, 관리 및 고객 주문 예측 대시보드
                </p>
            </div>

            <div class="controls">
                <v-text-field
                    class="search"
                    placeholder="Search"
                ></v-text-field>
                <v-btn dark small color="#DADADA" class="vector mx-2">
                    <v-icon dark />
                </v-btn>
                <v-btn dark small color="#DADADA" class="languge"> En </v-btn>
            </div>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
        primaryDrawer: {
            model: null,
        },

        // popover
        fav: true,
        menu: false,
        message: false,
        hints: true,
    }),
    methods: {
        click() {
            this.$emit('click', this.primaryDrawer);
        },
    },
};
</script>

<style lang="scss" scoped>
::v-deep {
    .v-toolbar__content {
        align-items: flex-start;
        height: auto;
        margin: 35px 54px 35px 54px;
        padding: 0;
        .header {
            display: flex;
            width: 100%;
            justify-content: space-between;

            .title-info {
                .v-toolbar__title {
                    font-weight: 500;
                    font-size: 24px;
                    line-height: 28px;
                    .name {
                        font-size: 20px;
                        line-height: 29px;
                        color: #6a6a6a;
                        em {
                            font-style: normal;
                            font-size: 12px;
                        }
                    }
                }
                .description {
                    color: #a1a1a1;
                    font-weight: 500;
                    font-size: 14px;
                    line-height: 20px;
                }
            }
            .controls {
                display: flex;
                .search {
                    width: 200px;
                    ::placeholder {
                        font-size: 14px;
                        line-height: 16px;
                    }
                    .v-input__slot {
                        &:before,
                        &:after {
                            display: none;
                        }
                        .v-text-field__slot {
                            height: 38px;
                            line-height: 38px;
                            mix-blend-mode: normal;
                            border-radius: 10px;
                            margin-bottom: 0;
                            padding: 0 18px 0 42px;
                            background: #dadada
                                url('../../assets/images/common/search.svg')
                                no-repeat 18px 50%;
                            input {
                                height: 100%;
                                max-height: 100%;
                            }
                        }
                    }
                }
                .vector {
                    width: 38px;
                    height: 38px;
                    min-width: auto;
                    mix-blend-mode: normal;
                    border-radius: 10px;
                    padding: 0;
                    box-shadow: none;
                    .v-icon {
                        width: 38px;
                        height: 38px;
                        min-width: auto;
                        background: url('../../assets/images/common/vector.svg')
                            no-repeat 50% 50%;
                    }
                }
                .languge {
                    width: 38px;
                    height: 38px;
                    min-width: auto;
                    mix-blend-mode: normal;
                    border-radius: 10px;
                    padding: 10px;
                    box-shadow: none;
                    .v-btn__content {
                        color: #000;
                        font-size: 16px;
                        line-height: 19px;
                    }
                }
            }
        }
    }
}
</style>
