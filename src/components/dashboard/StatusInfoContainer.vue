<template>
    <v-row class="dash-cards">
        <!-- <v-col md="7">
            <v-row>
                <v-col
                    v-for="item in this.$store.state.dashboard.infoData.slice(
                        0,
                        3,
                    )"
                    :key="item.id"
                >
                    <DashInfoComponent :item="item" />
                </v-col>
            </v-row>
        </v-col> -->
        <!-- <v-col md="5">
            <v-row>
                <v-col v-for="item in this.infoData.slice(3, 5)" :key="item.id">
                    <DashInfoComponent :item="item" />
                </v-col>
            </v-row>
        </v-col> -->
        <label>{{ getDashInfo }}</label>
    </v-row>
</template>

<script>
import { mapGetters } from 'vuex';

// import DashInfoComponent from './DashInfoComponent.vue';
export default {
    name: 'StatusInfoContainer',
    components: {},
    data() {
        return {};
    },
    computed: {
        ...mapGetters(['getDashInfo']),
    },

    methods: {},
};
</script>

<style lang="scss" scoped></style>
