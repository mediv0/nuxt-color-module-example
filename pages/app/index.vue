<template>
    <div class="main_app">
        <stream-list />
    </div>
</template>

<script>
import youtubeStreamCategory from "~/components/pages/app/youtubeStreamCategory.vue";
export default {
    components: {
        streamList: youtubeStreamCategory,
    },
    layout: "default",
};
</script>

<style lang="scss" scoped>
.main_app {
    padding-right: 61px;
}
</style>
