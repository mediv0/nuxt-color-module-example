<template>
    <div class="welcome">
        <div class="welcome__overlay"></div>
        <div class="welcome__content">
            <h1 class="handwave noevents noselect">👋</h1>
            <h5>Welcome to Chill Club</h5>
            <p>A hand waving most commonly used to say “hello” or “goodbye”. This emoji can be used to convey a sense of not being friends any more when used on WeChat in China. Waving Hand was approved as part of Unicode 6.0 in 2010 under the name “Waving Hand Sign” and added to Emoj</p>
            <button class="btn btn-primary">Let's go</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.welcome {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    text-align: center;

    &__overlay {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
        background: rgba($color: #000000, $alpha: 0.38);
        z-index: 1;
    }
    &__content {
        max-width: 470px;
        height: 510px;
        overflow-y: auto;
        border-radius: 10px;
        background: var(--bg-secondary);
        position: relative;
        z-index: 2;
        padding: 1px 42px 5px 42px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & > h1.handwave {
            font-size: 4.571rem;
            animation-name: wave-animation;
            animation-duration: 2.5s;
            animation-iteration-count: infinite;
            transform-origin: 70% 70%;
            display: inline-block;
        }

        & > h5 {
            font-size: 1.786rem;
            font-weight: 700;
            margin: 21px 0 17px 0;
        }

        & > p {
            font-size: 1.143rem;
            line-height: 30px;
        }

        & > button {
            width: 80%;
            margin-top: 45px;
        }
        &::-webkit-scrollbar {
            width: 14px;
        }

        &::-webkit-scrollbar-thumb {
            border: 4px solid var(--bg-secondary);
            background-clip: padding-box;
            border-radius: 9999px;
            background-color: var(--primary-color);
        }
    }
}
@keyframes wave-animation {
    0% {
        transform: rotate(0deg);
    }
    10% {
        transform: rotate(14deg);
    }
    20% {
        transform: rotate(-8deg);
    }
    30% {
        transform: rotate(14deg);
    }
    40% {
        transform: rotate(-4deg);
    }
    50% {
        transform: rotate(10deg);
    }
    60% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(0deg);
    }
}
</style>
