<template>
    <header class="header">
        <RouterLink :to="{name: 'home'}">
            <h1 class="header-title">
                Курсы валют
            </h1>
        </RouterLink>
        <TheHeaderNav/>
        <TheHeaderCurrencySelector/>
    </header>
</template>

<script lang="ts" setup>

import TheHeaderNav from '@/components/header/TheHeaderNav.vue';
import TheHeaderCurrencySelector from '@/components/header/TheHeaderCurrencySelector.vue';</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    padding: 20px 0;
    border-bottom: 1px solid $gray;

    a {
        text-decoration: none;
    }

    .header-title {
        font-size: 20px;
        font-weight: 500;
        text-transform: uppercase;
        color: black;
    }

    @media (max-width: $large) {
        & {
            padding: 20px;
        }
    }
}
</style>
