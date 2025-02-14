import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "homePage",
            component: () => import("../components/pages/home/homePage.vue"),
        },
        {
            path: "/product/:id",
            name: "singlePage",
            component: () =>
                import("../components/pages/singlePage/singlePage.vue"),
        },
        {
            path: "/cart",
            name: "cardPage",
            component: () =>
                import("../components/pages/cart/cartPage.vue"),
        },
    ],
});

export default router