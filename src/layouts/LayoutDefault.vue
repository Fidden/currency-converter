<template>
    <div class="layout-container">
        <TheHeader/>
        <slot/>
        <TheFooter/>
    </div>
</template>

<script lang="ts" setup>

import TheHeader from '@/components/header/TheHeader.vue';
import TheFooter from '@/components/footer/TheFooter.vue';</script>

<style lang="scss" scoped>
.layout-container {
    display: flex;
    flex-direction: column;
    width: min(100%, var(--container));
    height: 100%;
}
</style>
