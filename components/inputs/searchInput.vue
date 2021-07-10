<template>
    <div class="search_input input">
        <div ref="circleIcon" class="search_input__icon"></div>
        <input ref="searchBox" type="text" placeholder="Search in streams and musics" />
    </div>
</template>

<script>
export default {
    mounted() {
        this.onSearchBarFocued();
    },
    methods: {
        onSearchBarFocued() {
            this.$refs.searchBox.addEventListener("focus", () => {
                this.$refs.circleIcon.classList.add("iconToGreen");
            });

            this.$refs.searchBox.addEventListener("focusout", () => {
                this.$refs.circleIcon.classList.remove("iconToGreen");
            });
        },
    },
};
</script>

<style lang="scss" scoped>
@import url("~/assets/styles/components/inputs_base.scss");
.search_input {
    display: flex;
    align-items: center;
    padding: 11px 0 11px 14px;
    &__icon {
        width: 16px;
        height: 16px;
        border: 3px solid var(--primary-color);
        border-radius: 50%;
        margin-right: 11px;
        transition: 110ms cubic-bezier(0.6, 0.04, 0.98, 0.335);
    }
    & > input {
        width: 300px;
    }
}

.iconToGreen {
    border-color: var(--success-color);
}
</style>
