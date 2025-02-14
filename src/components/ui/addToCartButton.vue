<template>
    <div>
        <button v-if="!isInCart" class="q-btn q-btn-blue-inverted" @click="addToCart">
            Add to Cart
        </button>

        <router-link v-else to="/cart" class="q-btn q-btn-green-dimm">
            Go to Cart
        </router-link>
    </div>
</template>

<script>
export default {
    name: "AddCardButton",
    props: {
        cardInfo: {
            type: Object,
            required: true,
            validator(value) {
                return value && value.id !== undefined;
            },
        },
    },
    computed: {
        isInCart() {
            return this.$store.getters.isInCart(this.cardInfo.id);
        },
    },
    methods: {
        addToCart() {
            if (!this.isInCart) {
                this.$store.dispatch("addToCart", this.cardInfo);
            }
        },
    },
};
</script>



