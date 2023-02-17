<template>
    <v-app id="inspire">
        <v-navigation-drawer
            app
            overflow
            :color="color"
            :mini-variant="mini"
            :right="right"
            :permanent="permanent"
            :src="bg"
            v-model="drawer"
        >
            <v-list dense nav><Sidebar /> </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-app-bar-nav-icon @click="onClick" />

            <Header />
        </v-app-bar>

        <v-main>
            <router-view></router-view>
        </v-main>

        <Footer />
    </v-app>
</template>

<script>
import Sidebar from '@/components/common/Sidebar.vue';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';

export default {
    name: 'default',
    components: {
        Sidebar,
        Header,
        Footer,
    },
    data: () => {
        return {
            drawer: true,
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
    methods: {
        onClick() {
            this.drawer = !this.drawer;
        },
    },
};
</script>
<style lang="scss" scoped>
::v-deep {
    .slidebar {
        .v-navigation-drawer {
            border: none;
            height: 100% !important;
        }
        .v-navigation-drawer__content {
            > .v-list {
                padding: 38px 13px;
            }
        }

        .v-list--nav {
            min-height: auto;
            padding: 0;
            margin: 0;
        }
    }
}
</style>
