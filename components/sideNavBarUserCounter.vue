<template>
    <div class="user_count">
        <div class="user_count__label">
            <img src="~/assets/images/wi-fi.svg" alt="online users" class="noselect">
            <p>Online</p>
        </div>
        <p class="font-weight-medium">+19</p>
    </div>
</template>

<style lang="scss" scoped>
.user_count {
    --border-radius-size: 11px;
    width: 85%;
    background: var(--bg-secondary);
    padding: 9px 10px;
    border-radius: var(--border-radius-size);
    font-size: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &__label {
        display: flex;
        align-items: center;
        border: 1px solid var(--bg-very-light);
        border-radius: var(--border-radius-size);
        padding: 6px 10px;

        & > img {
            margin-right: 5px;
        }
    }
}
</style>
