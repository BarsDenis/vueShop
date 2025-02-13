import { createApp } from "vue";
import App from "./App.vue";
import router from "./components/router/index.js";
import store from "./store/store.js";
import "./style.css";
import "swiper/css";



createApp(App)
.use(router)
.use(store)
.mount("#app");
