<template>
    <svg class="spinner" viewBox="0 0 50 50" :style="{ stroke: color }">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
    </svg>
</template>

<script>
export default {
    props: {
        color: {
            type: String,
            default: "#000000",
        },
    },
};
</script>

<style scoped>
.spinner {
    animation: rotate 2s linear infinite;
    width: 20px;
    height: 20px;
}
.path {
    stroke: hsl(210, 70, 75);
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
}
@keyframes rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes dash {
    0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
    }
    100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
}
</style>
