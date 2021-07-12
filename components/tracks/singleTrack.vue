<template>
    <div class="single_track">
        <div class="single_track__img">
            <img src="https://wallpaperaccess.com/full/5759679.jpg" loading="lazy" class="fit-parent">
        </div>
        <h6 class="single_track__title">radio song for you slow days</h6>
        <p class="single_track__duration">18:59</p>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.single_track {
    max-width: 228px;
    max-height: 129px;
    min-width: 180px;
    min-height: 100px;
    cursor: pointer;
    &__img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
        border-radius: 26px;
        overflow: hidden;
        background: var(--bg-secondary);
        margin-bottom: 14px;
    }

    &__title {
        font-weight: 500;
        font-size: 1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &__duration {
        color: var(--gray-third);
        font-size: 0.857rem;
        margin-top: 3px;
    }
}
</style>
