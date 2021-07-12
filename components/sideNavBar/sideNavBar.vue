<template>
    <div class="side_nav">
        <logo />
        <side-nav-menu />
        <user-count />
    </div>
</template>

<script>
import sideNavLogo from "@/components/sideNavBar/sideNavLogo.vue";
import sideNavMenu from "@/components/sideNavBar/sideNavMenu.vue";
import sideNavBarUserCounter from "@/components/sideNavBar/sideNavBarUserCounter.vue";
export default {
    components: {
        userCount: sideNavBarUserCounter,
        logo: sideNavLogo,
        sideNavMenu
    },
};
</script>

<style lang="scss" scope>
.side_nav {
    position: fixed;
    height: 95vh;
    min-width: 204px;
    display: flex;
    flex-direction: column;
}
</style>
