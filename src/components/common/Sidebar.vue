<template>
    <div class="slidebar">
        <v-navigation-drawer
            app
            overflow
            v-model="drawer"
            :color="color"
            :mini-variant="mini"
            :right="right"
            :permanent="permanent"
            :src="bg"
            absolute
            dark
        >
            <v-list dense nav>
                <v-list-item two-line>
                    <v-list-item-avatar />
                    <v-list-item-content>
                        <router-link to="/">
                            <v-list-item-title>Shopify</v-list-item-title>
                            <v-list-item-subtitle>Admin</v-list-item-subtitle>
                        </router-link>
                    </v-list-item-content>
                </v-list-item>

                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    ref="navListRef"
                    @click="menuActionClick"
                >
                    <v-list-item-content>
                        <router-link :to="item.link"
                            ><v-list-item-title>{{
                                item.title
                            }}</v-list-item-title></router-link
                        >
                    </v-list-item-content>
                </v-list-item>
            </v-list>

            <v-bottom-navigation
                background-color="transparent"
                :fixed="true"
                :light="true"
                class="utils"
            >
                <v-btn class="filter">
                    <v-icon />
                </v-btn>

                <v-btn class="globe">
                    <v-icon />
                </v-btn>

                <v-btn class="setting">
                    <v-icon />
                </v-btn>
            </v-bottom-navigation>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'Slidebar',
    data() {
        return {
            // Nav
            drawer: true,
            items: [
                { title: 'Dashboard', link: '/' },
                { title: 'Products', link: '/products' },
                { title: 'Orders', link: '/order' },
                { title: 'Delivery', link: '/delivery' },
                { title: 'Transactions', link: '/transactions' },
                { title: 'Notifications', link: '/notifications' },
                { title: 'Statistics', link: '/stats' },
            ],
            color: '#dee2e5',
            colors: ['primary', 'blue', 'success', 'red', 'teal', '#dee2e5'],
            right: false,
            permanent: false,
            mini: false,
            background: false,
        };
    },
    computed: {
        bg() {
            return this.background
                ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg'
                : undefined;
        },
    },
    mounted() {
        // Nav Active
        this.menuActionClick();
    },
    methods: {
        // Nav Active
        menuActionClick() {
            const path = this.$route.path;
            const list = this.$refs.navListRef;
            Array.from(list).map((el) => el.$el.classList.remove('active'));
            switch (path) {
                case '/':
                    list[0].$el.classList.add('active');
                    break;
                case '/products':
                    list[1].$el.classList.add('active');
                    break;
                case '/order':
                    list[2].$el.classList.add('active');
                    break;
                case '/delivery':
                    list[3].$el.classList.add('active');
                    break;
                case '/transactions':
                    list[4].$el.classList.add('active');
                    break;
                case '/notifications':
                    list[5].$el.classList.add('active');
                    break;
                case '/stats':
                    list[6].$el.classList.add('active');
                    break;
                default:
                    list[0].$el.classList.add('active');
                    break;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.slidebar {
    .v-navigation-drawer {
        border: none;
    }
    .v-navigation-drawer__content {
        > .v-list {
            padding: 38px 13px;
        }
    }

    .v-list--nav,
    .v-list-item {
        min-height: auto;
        padding: 0;
        margin: 0;
    }
    .v-list--nav {
        .v-list-item--two-line {
            align-items: center;
            justify-content: center;
            padding-left: 20px;
            padding-bottom: 30px;
            .v-avatar {
                width: 40px;
                height: 40px;
                background: #017efa
                    url('../../assets/images/common/bx_bx-bolt-circle.svg')
                    no-repeat 50% 50%;
                border-radius: 8px;
                margin: 0 14px 0 0;
            }
            .v-list-item__content {
                padding: 0;
                > a {
                    text-decoration: none;
                    color: #000;
                }
                .v-list-item__title {
                    font-weight: 900;
                    font-size: 24px;
                    margin: 0;
                    line-height: 28px;
                }
                .v-list-item__subtitle {
                    font-weight: 500;
                    font-size: 16px;
                    line-height: 19px;
                    color: #000;
                }
            }
        }
        .v-list-item:not(.v-list-item--two-line) {
            margin-bottom: 20px !important;
            &:before {
                z-index: -1;
            }
            &.active {
                &:before {
                    opacity: 1;
                    background-color: #017efa;
                }

                a {
                    .v-list-item__title {
                        color: #fff;
                    }
                }
            }
            &:hover {
                &:before {
                    opacity: 1;
                    background-color: #017efa;
                }

                a {
                    .v-list-item__title {
                        color: #fff;
                    }
                }
            }
            .v-list-item__content {
                padding: 0;
                a {
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 21px;
                    text-decoration: none;
                    color: #000;
                    padding: 11px 18px;

                    &.active {
                        background: #017efa;
                        border-radius: 12px;
                    }
                }
                .v-list-item__title {
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 21px;
                }
            }
        }
    }

    .utils {
        &.v-bottom-navigation {
            box-shadow: none;
            .v-btn {
                min-width: 55px;
            }
        }
        .filter {
            .v-icon {
                width: 24px;
                height: 24px;
            }
        }
        .filter {
            background: url('../../assets/images/common/adjustments.svg')
                no-repeat 50% 50%;
        }
        .globe {
            background: url('../../assets/images/common/globe.svg') no-repeat
                50% 50%;
        }
        .setting {
            background: url('../../assets/images/common/cog.svg') no-repeat 50%
                50%;
        }
    }
}
</style>
