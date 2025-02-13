<template>
    <header-part/>
    <main>
        <router-view> </router-view>
    </main>
    <footer>
        <div class="q-text-center q-mb-5 q-pt-2 q-h3-style">FOOTER</div>
    </footer>
</template>

<script>
import headerPart from './header/headerPart.vue'
export default {
    components: {
        headerPart
    }
}
</script>
