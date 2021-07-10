<template>
    <div class="main_layout layoutContainer">
        <side-nav-bar />
        <Nuxt class="main_layout__content" />
    </div>
</template>

<script>
import sideNavBar from "@/components/sideNavBar.vue";
export default {
    components: {
        sideNavBar
    }
}
</script>

<style lang="scss" scoped>
.main_layout {
    display: flex;
    align-items: stretch;
    height: 100vh;

    &__content {
        flex: 1;
    }
}
</style>