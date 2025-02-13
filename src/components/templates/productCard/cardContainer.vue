<template>
    <div
        class="q-wrap-3 q-wrap-mh-2 q-wrap-mv-1 q-masonry q-text-center q-design-block"
    >
        <cardItem v-for="card in cardContainer" :key="card.id" :card="card" />
    </div>
</template>

<script>
import cardItem from "./cardItem.vue";

export default {
    components: {
        cardItem,
    },
    props: {
        cardContainer: {
            type: Array,
            required: true,
        },
    },
};
</script>


