<template>
    <div id="app">
        <v-app id="inspire">
            <v-app id="sandbox">
                <Sidebar />
                <Header />
                <router-view></router-view>
                <Footer />
            </v-app>
        </v-app>
    </div>
</template>

<script>
import Sidebar from '@/components/common/Sidebar.vue';
import Header from '@/components/common/Header.vue';
import Footer from '@/components/common/Footer.vue';
import '@/assets/scss/_index.scss';

export default {
    name: 'default',
    components: {
        Sidebar,
        Header,
        Footer,
    },
};
</script>

<style lang="scss" scoped></style>
