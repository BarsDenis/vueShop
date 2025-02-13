<template>
    <div class="q-mb-2">
        <div class="q-h3-style q-bold q-mb-2">
            {{ cardInfo.title }}
        </div>
        <div class="q-d-flex q-flex-jcsb">
            <div class="q-mb-2 q-bold">Brand: {{ cardInfo.brand }}</div>
            <div class="q-bold">Stock: {{ cardInfo.stock }}</div>
        </div>
        <div class="q-mb-2">
            <p>
                {{ cardInfo.description }}
            </p>
        </div>
        <div class="q-d-flex q-flex-jcsb q-bold">
            <div class="q-text-red">Price: ${{ cardInfo.price }}</div>
            <div class="q-text-green">Rating: {{ cardInfo.rating }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "singleProductInfo",
    props: {
        cardInfo: {
            title: {
                type: String,
            },
            brand: {
                type: String,
            },
            description: {
                type: String,
            },
            price: {
                type: String,
            },
            rating: {
                type: String,
            },
            stock: {
                type: String,
            },
        },
    },
};
</script>
