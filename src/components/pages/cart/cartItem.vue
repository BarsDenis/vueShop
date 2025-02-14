<template>
    <div class="q-row q-bg-beige q-p-2 q-mb-2">
        <div class="q-col">
            <img :src="product.thumbnail" :alt="product.title" />
        </div>
        <div class="q-col">
            <div class="q-h3-style q-bold">
                <p>{{ product.title }}</p>
            </div>
            <div class="q-mb-1">
                <p>{{ product.description }}</p>
            </div>
            <div class="q-bold q-d-flex q-flex-jcsb">
                <div>
                    <quantity-block :product="product"></quantity-block>
                </div>
                <p>Price: ${{ itemTotal }}</p>
            </div>
            <div>
                <button
                    class="q-btn q-btn-red-dimm"
                    @click="$emit('remove', product)"
                >
                    REMOVE
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import QuantityBlock from "../../ui/QuantityBlock.vue";

export default {
    name: "CartItem",
    components: {
        QuantityBlock,
    },
    props: {
        product: {
            type: Object,
            required: true,
            validator(value) {
                return [
                    "id",
                    "title",
                    "price",
                    "quantity",
                    "stock",
                    "description",
                ].every((prop) => prop in value);
            },
        },
    },
    computed: {
        itemTotal() {
            return (this.product.price * this.product.quantity).toFixed(2);
        },
    },
};
</script>
