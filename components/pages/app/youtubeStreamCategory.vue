<template>
    <div class="categories">
        <descriptor title="Online Radios to relax and chill" class="categories__desc" />
        <ul class="categories__list">
            <categoryCard v-for="category in categories" :key="category" :category="category" />
        </ul>
    </div>
</template>

<script>
import sectionDescriptor from "@/components/titles/sectionDescriptor.vue";
import categories from "@/data/categories.json";
import categoryCard from "@/components/pages/app/categoryCard.vue";
export default {
    components: {
        descriptor: sectionDescriptor,
        categoryCard,
    },

    data() {
        return {
            categories: null,
        };
    },

    mounted() {
        this.categories = categories;
    },
};
</script>

<style lang="scss" scoped>
.categories {
    margin-top: 50px;
    &__desc {
        margin-bottom: 26.5px;
    }

    &__list {
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow-x: auto;
        padding-bottom: 78px;
    }
}
</style>
