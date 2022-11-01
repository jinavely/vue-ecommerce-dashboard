<template>
    <v-row>
        <v-col>
            <v-card outlined> One of two columns </v-card>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'DashTotalPlateComponent',
    props: {
        item: {
            type: Object,
            require: true,
            default: Object,
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

<style lang="scss" scoped>
.v-sheet.v-card {
}
</style>
