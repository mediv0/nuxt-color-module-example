<template>
    <div class="theater_hero">
        <div class="theater_hero__img">
            <img src="@/assets/images/movieHero.png" alt="watch movies with friends" class="fit-parent">
        </div>
        <div class="theater_hero__content">
            <h1>
                <p>Watch</p>
                <p>streaming</p>
                <p>media with</p>
                <p>friends.</p>
            </h1>
            <button class="btn btn-primary">Create Room</button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.theater_hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px 50px 20px;

    &__img {
        width: 623px;
        height: 300px;
        background: var(--bg-secondary);
        border-radius: 40px;
        overflow: hidden;
    }

    &__content {
        & > h1 {
            font-weight: 500;
            font-size: 2.6rem;
            line-height: 41px;
        }

        & > button {
            margin-top: 22px;
            width: 142px
        }
    }
}
</style>
