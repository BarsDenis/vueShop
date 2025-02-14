<template>
    <section>
        <div class="q-container">
            <card-container :cardContainer="data"></card-container>
            <div v-if="isLoading" class="q-text-green">Loading.......</div>
        </div>
    </section>
</template>

<script>
import CardContainer from "./CardContainer.vue";
export default {
    components: {
        CardContainer,
    },

    data() {
        return {
            data: [],
            skipNumber: 0,
            dataLength: 0,
            isLoading: false,
        };
    },
    methods: {
        async fetchProducts() {
            try {
                const res = await fetch(
                    `https://dummyjson.com/products?limit=9&skip=${this.skipNumber}`
                );
                const list = await res.json();
                this.data = list.products;
                this.dataLength = list.total;
                console.log(this.data);
            } catch (error) {
                console.error("Error fetching data:", error);
                throw error;
            }
        },
        async moreLoadingData() {
            try {
                const res = await fetch(
                    `https://dummyjson.com/products?limit=9&skip=${this.skipNumber}`
                );
                const list = await res.json();
                this.data = [...this.data, ...list.products];
                this.isLoading = true;
            } catch (error) {
                console.error("Error fetching data:", error);
                throw error;
            }
        },
        handleScroll() {
            const height = document.body.offsetHeight;
            const screenHeight = window.innerHeight;
            const scrolled = window.scrollY;
            const threshold = height - screenHeight / 2;
            const position = scrolled + screenHeight;

            if (position >= threshold && this.data.length < this.dataLength) {
                this.skipNumber += 9;
                this.moreLoadingData();
            }
            if (this.data.length >= this.dataLength) {
                this.isLoading = false;
            }
        },
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    async mounted() {
        await this.fetchProducts();
    },
};
</script>
