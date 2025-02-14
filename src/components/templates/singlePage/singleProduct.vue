<template>
    <div class="q-container wide q-mb-3">
        <a @click="$router.go(-1)" class="back-link">Back to all products</a>
    </div>

    <div class="q-container">
        <div class="q-row q-flex-ait">
            <div class="q-col q-basis-40">
                <singleProduct-image :cardInfo="data"></singleProduct-image>
            </div>
            <div class="q-col q-basis-60">
                <single-productInfo :cardInfo="data"></single-productInfo>
                <addToCart-button :cardInfo="data"></addToCart-button>
            </div>
        </div>
    </div>
</template>

<script>
import SingleProductInfo from "./SingleProductInfo.vue";
import SingleProductImage from "./SingleProductImage.vue";
import AddToCartButton from "../../ui/AddToCartButton.vue"

export default {
    components: {
        SingleProductInfo,
        SingleProductImage,
        AddToCartButton
    },
    data() {
        return {
            productID: this.$route.params.id,
            data: {},
        };
    },
    methods: {
        async fetchProducts() {
            try {
                const res = await fetch(
                    `https://dummyjson.com/products/${this.productID}`
                );
                this.data = await res.json();
            } catch (error) {
                console.error("Error fetching data:", error);
                throw error;
            }
        },
    },
    mounted() {
        this.fetchProducts();
    },
};
</script>


<style>
.back-link {
    text-decoration: none;
    
}
</style>
