<template>
    <section class="q-pv-3">
        <div class="q-container q-mb-2">
            <div class="q-h2-style q-bold q-text-center">
                {{ header.toUpperCase() }}
            </div>
        </div>
    </section>
    <card-wrapper></card-wrapper>
</template>

<script>
import CardWrapper from "../../templates/productCard/CardWrapper.vue";
export default {
    components: {
        CardWrapper,
    },
    data() {
        return {
            header: "featured products",
        };
    },
};
</script>
