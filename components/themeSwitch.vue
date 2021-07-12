<template>
    <ColorScheme placeholder="..." tag="span">
        <div>
            <label class="switch">
                <input type="checkbox" name="theme checkbox" :checked="$colorMode.preference === 'light'" @change="switchTheme" />
                <span class="slider round"></span>
            </label>
        </div>
    </ColorScheme>
</template>

<script>
export default {
    methods: {
        switchTheme(e) {
            const isChecked = e.target.checked;
            if (isChecked) {
                this.$colorMode.preference = "light";
            } else {
                this.$colorMode.preference = "dark";
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.switch {
    position: relative;
    display: block;
    width: 41px;
    height: 25px;

    & > input {
        display: none;
    }
}

.slider {
    position: absolute;
    cursor: pointer;
    inset: 0;
    background: var(--bg-primary);
    transition: 0.5s;
    border: 3px solid var(--primary-color);
}

.preferred {
    background: red;
}

.slider::before {
    position: absolute;
    content: "";
    top: 3.5px;
    background: var(--warning-color);
    transition: 0.5s;
}

input:checked + .slider {
    background-color: black;
}

input:checked + .slider::before {
    top: 3.5px;
    transform: translateX(18px) rotateZ(45deg) translateY(-2px);
    height: 75%;
    border-radius: 50px;
}

.slider.round {
    border-radius: 35px;
}

.slider.round::before {
    width: 43%;
    height: 43%;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    transform: rotateZ(-45deg);
}
</style>
