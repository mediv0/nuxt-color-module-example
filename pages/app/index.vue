<template>
    <div class="main_app">
        <stream-list />
        <theaterHero />
        <tracks />
    </div>
</template>

<script>
import youtubeStreamCategory from "~/components/pages/app/youtubeStreamCategory.vue";
import theaterHero from "~/components/pages/app/theaterHero.vue";
import tracks from "~/components/tracks/tracks.vue";
export default {
    components: {
        streamList: youtubeStreamCategory,
        theaterHero,
        tracks,
    },
    layout: "default",
};
</script>

<style lang="scss" scoped>
.main_app {
    padding-right: 61px;
}
</style>
