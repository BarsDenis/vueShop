<template>
    <section class="q-pv-3">
        <div class="q-container q-mb-2">
            <div class="q-text-center q-mb-2 q-bold">
                <h3>YOUR CART</h3>
            </div>

            <div class="q-mv-2 q-text-right">
                <button
                    v-if="cartItems.length"
                    @click="handleClearCart"
                    class="q-btn q-btn-red-dimm"
                >
                    DELETE ALL
                </button>
            </div>

            <template v-if="cartItems.length">
                <CartItem
                    v-for="product in cartItems"
                    :key="product.id"
                    :product="product"
                    @remove="removeProduct"
                />

                <div class="cart-total q-mt-3">
                    <div class="total-amount q-text-right">
                        <h3>Total: ${{ cartTotal.toFixed(2) }}</h3>
                    </div>
                </div>
            </template>

            <div v-else class="q-text-center q-mv-5">
                <p>Your cart is empty</p>
                <router-link to="/" class="q-btn q-btn-red">
                    Continue Shopping
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";

export default {
    name: "CartPage",
    components: {
        CartItem,
    },
    computed: {
        ...mapGetters({
            cartItems: "getCartItems",
            cartTotal: "getCartTotal",
        }),
    },
    methods: {
        handleClearCart() {
            this.$store.commit("clearCart");
        },
        removeProduct(product) {
            this.$store.dispatch("removeFromCart", product);
        },
    },
};
</script>
