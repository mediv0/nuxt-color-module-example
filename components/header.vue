<template>
    <div class="header">
        <search-input />
        <ul class="header__menu">
            <li class="header__menu__item"><a href="#">About us</a></li>
            <li class="header__menu__item"><a href="#">Contact us</a></li>
            <li class="header__menu__item"><a href="#">Faq</a></li>
            <li class="header__menu__item"><a href="#">Donation</a></li>
        </ul>
    </div>
</template>

<script>
import searchInput from "@/components/inputs/searchInput.vue";
export default {
    components: {
        searchInput,
    },
};
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__menu {
        display: flex;
        &__item {
            font-weight: 500;
            color: var(--gray-primary);
            font-size: 0.929rem;
            &:not(:last-child) {
                margin-right: 23px;
            }
            &:hover {
                color: var(--primary-color);
            }
        }
    }
}
</style>
