<template>
    <div class="main_layout layoutContainer">
        <side-nav-bar />
        <div class="main_layout__content">
            <top-header />
            <Nuxt />
        </div>
    </div>
</template>

<script>
import sideNavBar from "@/components/sideNavBar/sideNavBar.vue";
import topHeader from "@/components/header.vue";
export default {
    components: {
        sideNavBar,
        topHeader,
    },
};
</script>

<style lang="scss" scoped>
.main_layout {
    display: flex;
    align-items: stretch;
    height: 100vh;
    padding: var(--vertical-layout-padding);

    &__content {
        flex: 1;
        max-width: 100%;
        overflow: hidden;
    }
}
</style>
