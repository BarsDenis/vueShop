<template>
    <section class="q-pv-3">
        <div class="q-container q-mb-2 ">
            <div class="q-h2-style q-bold q-text-center">
                {{ header.toUpperCase() }}
            </div>
        </div>
    </section>
    <cardWrapper />
</template>

<script>
import cardWrapper from "../../templates/productCard/cardWrapper.vue";
export default {
    components: {
        cardWrapper,
    },
    data() {
        return {
            header: "featured products"
        }
    }
};
</script>
