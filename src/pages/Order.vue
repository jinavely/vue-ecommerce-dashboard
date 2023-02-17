<template>
    <v-container fluid>
        <OrderContainer />
    </v-container>
</template>

<script>
import OrderContainer from '../components/orders/OrderContainer.vue';
export default {
    components: { OrderContainer },
    name: 'Order',
};
</script>

<style lang="scss" scoped></style>
