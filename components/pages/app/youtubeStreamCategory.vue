<template>
    <div class="categories">
        <descriptor title="Online Radios to relax and chill" class="categories__desc" />
        <ul class="categories__list">
            <nuxt-link v-for="(cat, i) in categories" :key="i" to="/" tag="li" class="categories__list__item" :style="{ backgroundColor: cat.color }">
                <div class="categories__list__item__glow" :style="{ backgroundColor: cat.color }"></div>
                <div class="categories__list__item__content">
                    <p :style="{ color: cat.title === 'Retrowave' && '#000000' }">{{ cat.title }}</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 12.879 9.692">
                        <g transform="translate(0 -2.569)">
                            <g transform="translate(0 2.569)">
                                <circle cx="1.505" cy="1.505" r="1.505" transform="translate(4.965 6.683)" fill="#ffffff" />
                                <path d="M11.485,9.044c-.022-.023-.046-.043-.069-.064l-.068-.064a.329.329,0,0,0-.038-.032,4.908,4.908,0,0,0-6.78.159l-.218.218-.3.3A.945.945,0,0,0,5.348,10.9l.52-.52a3.032,3.032,0,0,1,4.282,0l.375.363a.937.937,0,0,0,1.6-.664.92.92,0,0,0-.272-.659Z" transform="translate(-1.42 -4.481)" fill="#ffffff" />
                                <path d="M12.629,5.272l-.313-.313s0,0,0,0l-.247-.248a.89.89,0,0,0-.14-.112A8.191,8.191,0,0,0,.861,4.85c-.015.014-.032.023-.047.038L.25,5.453A.862.862,0,0,0,1.469,6.671l.564-.564a.073.073,0,0,1,.011-.012,6.466,6.466,0,0,1,8.923-.049l.444.445a.862.862,0,0,0,1.218-1.219Z" transform="translate(0 -2.569)" fill="#ffffff" />
                            </g>
                        </g>
                    </svg>
                    <div class="categories__list__item__content__img noselect noevents" :class="{ [`categories__list__item__content__img--${i}`]: true }">
                        <img :src="getImgUrl(cat.thumbnail)" :alt="cat.title" loading="lazy" class="fit-parent" />
                    </div>
                </div>
            </nuxt-link>
        </ul>
    </div>
</template>

<script>
import sectionDescriptor from "@/components/titles/sectionDescriptor.vue";
import categories from "@/data/categories.json";
export default {
    components: {
        descriptor: sectionDescriptor,
    },

    data() {
        return {
            categories: null,
        };
    },

    mounted() {
        this.categories = categories;
    },

    methods: {
        getImgUrl(pic) {
            return require(`@/assets/images/categories/${pic}`);
        },
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
        fill: aliceblue;
        display: flex;
        align-items: center;
        justify-content: space-between;
        overflow-x: auto;
        padding-bottom: 78px;
    }
}

.categories__list__item {
    cursor: pointer;
    width: 182px;
    height: 239px;
    min-width: 182px;
    min-height: 239px;
    background: var(--bg-secondary);
    border-radius: 40px;
    position: relative;

    &:not(:last-child) {
        margin-right: 15px;
    }

    &__glow {
        position: absolute;
        width: 100px;
        height: 100px;
        z-index: -1;
        bottom: -7px;
        left: 50%;
        transform: translateX(-50%);
        opacity: 0.5;
        filter: blur(1.7rem);
    }

    &__content {
        position: relative;
        width: 100%;
        height: 100%;
        border-radius: 40px;
        font-size: 1.143rem;
        font-weight: bold;
        text-align: center;
        padding-top: 42px;
        overflow: hidden;

        & > svg {
            opacity: 0.47;
            margin-top: 12px;
        }

        &__img {
            position: absolute;
            width: 100%;
            height: 273px;
            bottom: -123px;

            & > img {
                object-fit: contain;
            }

            &--1 {
                height: 203px;
                bottom: -67px;
            }

            &--2 {
                height: 355px;
                bottom: -123px;
            }

            &--3,
            &--4 {
                bottom: -139px;
            }
        }
    }
}
</style>
