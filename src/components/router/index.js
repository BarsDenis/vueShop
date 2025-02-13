import { createRouter, createWebHistory } from "vue-router";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "homePage",
            component: () => import("../pages/home/homePage.vue"),
        },
        {
            path: "/product/:id",
            name: "singlePage",
            component: () =>
                import("../pages/singlePage/singlePage.vue"),
        },
        {
            path: "/cart",
            name: "cardPage",
            component: () =>
                import("../pages/cart/cartPage.vue"),
        },
    ],
});

export default router