<template>
    <div class="descriptor">
        <div class="descriptor__content">
            <h1 class="descriptor__content__title">{{ title }}</h1>
            <p class="descriptor__content__action" @click="onClick">see more</p>
        </div>

        <div class="descriptor__line"></div>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    methods: {
        onClick() {
            this.$emit("onClick");
        }
    }
};
</script>

<style lang="scss" scoped>
@mixin descriptorLineSharedStyles {
    height: 3px;
    border-radius: 10px;
}
.descriptor {
    width: 100%;

    &__content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        &__title {
            font-size: 1.786rem;
            font-weight: 500;
        }

        &__action {
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
        }
    }

    &__line {
        margin-top: 15.5px;
        width: 230px;
        position: relative;
        background: var(--bg-very-light);
        @include descriptorLineSharedStyles();

        &::before {
            content: " ";
            position: absolute;
            top: 0;
            left: 0;
            width: 90px;
            background: var(--primary-color);
            @include descriptorLineSharedStyles();
        }
    }
}
</style>
