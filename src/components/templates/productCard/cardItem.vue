<template>
    <div>
        <router-link :to="`/product/${card.id}`" class="q-masonry-inner">
            <div>
                <img :src="card.thumbnail" :alt="card.title" />
            </div>
            <div class="q-h4-style q-text-black q-mb-2">
                {{ card.title }}
            </div>
            <div class="q-d-flex q-flex-jcsb">
                <div class="q-text-red q-bold">
                   Price: ${{ card.price }}
                </div>
                <div class="q-text-blue q-bold">
                    Rating:{{ card.rating }}
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "card-item",
    props: {
        card: {
            type: Object,
            required: true,
        },
    },
};
</script>
<style scoped>
a {
    text-decoration: none;
}
</style>
