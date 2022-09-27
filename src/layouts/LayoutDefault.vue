<template>
    <div class="layout-container">
        <TheHeader/>
        <slot/>
        <TheFooter/>
    </div>
</template>

<script setup lang="ts">

import TheHeader from "@/components/header/TheHeader.vue";
import TheFooter from "@/components/footer/TheFooter.vue";</script>

<style scoped lang="scss">
.layout-container {
    display: flex;
    flex-direction: column;
    width: min(100%, var(--container));
    height: 100%;
}
</style>
