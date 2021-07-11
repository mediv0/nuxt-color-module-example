<template>
    <div class="side_nav">
        <div class="side_nav__logo noselect">
            <img src="~/assets/images/logo.png" alt="chill club logo" />
        </div>
        <ul class="side_nav__menu">
            <nuxt-link v-for="(item, i) in menuItems" :key="i" :to="item.route" tag="li" class="side_nav__menu__item" exact :tabindex="i+1">
                <div class="side_nav__menu__item__icons noselect">
                    <img :src="item.img" alt="homepage" class="fit-parent" />
                </div>
                <p class="font-weight-medium">{{ item.title }}</p>
            </nuxt-link>
        </ul>
        <user-count />
    </div>
</template>

<script>
import sideNavBarUserCounter from "@/components/sideNavBarUserCounter.vue";
export default {
    components: {
        userCount: sideNavBarUserCounter
    },
    data() {
        return {
            menuItems: [
                {
                    title: "Homepage",
                    img: require("~/assets/images/side_nav_menu/homepage.svg"),
                    route: "/"
                },
                {
                    title: "Tracks",
                    img: require("~/assets/images/side_nav_menu/tracks.svg"),
                    route: "/1"
                },
                {
                    title: "Movie theater",
                    img: require("~/assets/images/side_nav_menu/video.svg"),
                    route: "/2"
                },
                {
                    title: "Productivity",
                    img: require("~/assets/images/side_nav_menu/productivity.svg"),
                    route: "/3"
                },
                {
                    title: "Bookmarks",
                    img: require("~/assets/images/side_nav_menu/bookmarks.svg"),
                    route: "/4"
                },
                {
                    title: "Shortcuts",
                    img: require("~/assets/images/side_nav_menu/shortcuts.svg"),
                    route: "/5"
                },
            ],
        };
    },
};
</script>

<style lang="scss" scope>
.side_nav {
    min-width: 204px;
    display: flex;
    flex-direction: column;
    &__logo {
        display: inline-block;
    }

    &__menu {
        margin-top: 40px;
        margin-bottom: auto;
    }
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
</style>
