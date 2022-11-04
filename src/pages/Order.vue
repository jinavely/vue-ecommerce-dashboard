<template>
    <v-main>
        <v-container fluid>
            <v-row>
                <v-col>
                    <OrderSearch />
                    <OrderTable />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<script>
import OrderSearch from '../components/orders/OrderSearch.vue';
import OrderTable from '../components/orders/OrderTable.vue';
export default {
    components: { OrderSearch, OrderTable },
    name: 'Order',
};
</script>

<style lang="scss" scoped></style>
