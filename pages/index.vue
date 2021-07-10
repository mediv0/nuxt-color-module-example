<template>
    <welcome />
</template>

<script>
import welcome from "@/components/welcome.vue";
export default {
    // check if it's first login
    // if not redirect to player
    components: {
        welcome,
    },
    layout: "noHeaders",
};
</script>