<template>
    <div class="tracks">
        <sectionDescriptor title="Latest Tracks" class="tracks__title" />
        <div class="tracks__list">
            <single v-for="(track, i) of 4" :key="i" class="tracks__list__single" />
        </div>
    </div>
</template>

<script>
import sectionDescriptor from "@/components/titles/sectionDescriptor.vue";
import single from "@/components/tracks/singleTrack.vue";
export default {
    components: {
        single,
        sectionDescriptor,
    },
};
</script>

<style lang="scss" scoped>
.tracks {
    &__title {
        margin-bottom: 28.5px;;
    }
    &__list {
        display: flex;
        overflow-x: auto;
        padding-bottom: 50px;
        &__single:not(:last-child) {
            margin-right: 20px;
        }
    }
}
</style>
