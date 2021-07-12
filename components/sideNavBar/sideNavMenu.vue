<template>
    <ul class="side_nav__menu">
        <nuxt-link v-for="(item, i) in menuItems" :key="i" :to="item.route" tag="li" class="side_nav__menu__item" exact :tabindex="i + 1">
            <div class="side_nav__menu__item__icons noselect">
                <component :is="(svgIcon = item.title)" />
            </div>
            <p class="font-weight-medium">{{ item.title }}</p>
        </nuxt-link>
    </ul>
</template>

<script>

export default {
    components: {
        Homepage: () => import("@/assets/images/side_nav_menu/homepage.svg?inline"),
        Tracks: () => import("@/assets/images/side_nav_menu/tracks.svg?inline"),
        Theater: () => import("@/assets/images/side_nav_menu/video.svg?inline"),
        Productivity: () => import("@/assets/images/side_nav_menu/productivity.svg?inline"),
        Bookmarks: () => import("@/assets/images/side_nav_menu/bookmarks.svg?inline"),
        Shortcuts: () => import("@/assets/images/side_nav_menu/shortcuts.svg?inline"),
    },
    data() {
        return {
            menuItems: [
                {
                    title: "Homepage",
                    route: "/",
                },
                {
                    title: "Tracks",
                    route: "/1",
                },
                {
                    title: "Theater",
                    route: "/2",
                },
                {
                    title: "Productivity",
                    route: "/3",
                },
                {
                    title: "Bookmarks",
                    route: "/4",
                },
                {
                    title: "Shortcuts",
                    route: "/5",
                },
            ],
            svgIcon: "Homepage"
        };
    },
};
</script>

<style lang="scss" scoped>
.side_nav__menu {
    margin-top: 40px;
    margin-bottom: auto;
    min-height: 350px;
}
.side_nav__menu__item {
    display: flex;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
    color: var(--gray-primary);
    transition: color 100ms cubic-bezier(0.215, 0.61, 0.355, 1);
    &__icons {
        width: 19px;
        height: 19px;
        margin-right: 14px;
    }

    &:hover {
        color: var(--primary-color);
    }

    &:not(:last-child) {
        margin-bottom: 27px;
    }
}

.nuxt-link-active {
    color: white;
}

svg > path {
    fill: var(--primary-color) !important;
}
</style>
