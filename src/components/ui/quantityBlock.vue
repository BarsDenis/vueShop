<template>
    <div class="q-mb-1">
        <button 
            class="quantity-btn" 
            @click="decrease"
            :disabled="quantity <= 1"
        >
            -
        </button>
        <span class="quantity-display">{{ quantity }}</span>
        <button 
            class="quantity-btn" 
            @click="increase"
            :disabled="quantity > product.stock"
        >
            
        
            +
        </button>
    </div>
</template>

<script>
export default {
    name: "quantityBlock",
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    computed: {
        quantity() {
            return this.$store.getters.getItemQuantity(this.product.id);
        }
    },
    methods: {
        increase() {
            this.$store.dispatch('incrementQuantity', this.product.id);
        },
        decrease() {
            this.$store.dispatch('decrementQuantity', this.product.id);
        }
    }
   
};
</script>

<style scoped lang="scss">
button {
    width: 2rem;
    height: 2rem;
    margin-left: 1rem;
    margin-right: 1rem;
}
</style>
