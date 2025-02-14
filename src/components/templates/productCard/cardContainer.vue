<template>
    <div
        class="q-wrap-3 q-wrap-mh-2 q-wrap-mv-1 q-masonry q-text-center q-design-block"
    >
        <card-item v-for="card in cardContainer" :key="card.id" :card="card">
        </card-item>
    </div>
</template>

<script>
import CardItem from "./CardItem.vue";

export default {
    components: {
        CardItem,
    },
    props: {
        cardContainer: {
            type: Array,
            required: true,
        },
    },
};
</script>
