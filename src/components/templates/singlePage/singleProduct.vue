<template>
    <div class="q-container wide q-mb-3">
        <a @click="$router.go(-1)" class="back-link">Back to all products</a>
    </div>

    <div class="q-container">
        <div class="q-row q-flex-ait">
            <div class="q-col q-basis-40">
                <singleProductImage :cardInfo="data" />
            </div>
            <div class="q-col q-basis-60">
                <singleProductInfo :cardInfo="data" />
                <addToCartButton :cardInfo="data"/>
            </div>
        </div>
    </div>
</template>

<script>
import singleProductInfo from "./singleProductInfo.vue";
import singleProductImage from "./singleProductImage.vue";
import addToCartButton from "../../ui/addToCartButton.vue"

export default {
    components: {
        singleProductInfo,
        singleProductImage,
        addToCartButton
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
