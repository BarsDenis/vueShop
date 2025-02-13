<template>
    <Layout />
</template>

<script>
import Layout from "./components/Layout.vue";
export default {
    components: {
        Layout,
    },
};
</script>

<style>

    #app {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    main {
        flex-grow: 1;
    }

</style>
