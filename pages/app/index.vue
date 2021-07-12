<template>
    <div class="main_app">
        <stream-list />
        <theaterHero />
    </div>
</template>

<script>
import youtubeStreamCategory from "~/components/pages/app/youtubeStreamCategory.vue";
import theaterHero from "~/components/pages/app/theaterHero.vue";
export default {
    components: {
        streamList: youtubeStreamCategory,
        theaterHero
    },
    layout: "default",
};
</script>

<style lang="scss" scoped>
.main_app {
    padding-right: 61px;
}
</style>
