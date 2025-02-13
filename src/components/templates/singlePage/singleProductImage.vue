<template>
    <div>
        <swiper
            :modules="modules"
            :slides-per-view="1"
            :autoplay="{ delay: 5000 }"
            :pagination="{ clickable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide v-for="image in cardInfo.images" :key="cardInfo.id">
                <img :src="image" />
            </swiper-slide>
        </swiper>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/autoplay";
import "swiper/scss/pagination";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    props: {
        name: "singleProductImage",

        cardInfo: {
            images: {
                type: Array,
            },
            title: {
                type: String,
            },
        },
    },
    setup() {
        const onSwiper = (swiper) => {
            swiper;
        };
        const onSlideChange = () => {};
        return {
            onSwiper,
            onSlideChange,
            modules: [Pagination, Autoplay],
        };
    },
};
</script>

<style scoped lang="scss">

.swiper-slide {
    max-height: 460px;
    display: flex;
    justify-content: center;
    img {
        flex-grow: 1;
        max-height: 460px;
        object-fit: contain;
    }
}
</style>
