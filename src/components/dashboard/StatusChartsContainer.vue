<template>
    <v-row class="dash-cards">
        <v-col md="7">
            <v-card outlined> One of two columns </v-card>
        </v-col>
        <v-col md="5">
            <v-card outlined> One of two columns </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'StatusPlateContainer',
    props: {
        layout: {
            type: Array,
        },
    },
    components: {},
    data() {
        return {};
    },
    created() {},
    methods: {},
};
</script>

<style lang="scss" scoped></style>
