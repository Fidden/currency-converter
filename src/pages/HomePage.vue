<template>
    <LayoutDefault>
        <main class="main-container">
            <h2 class="main-container-title">
                Список всех валют
            </h2>
            <div class="main-container-body">
                <CurrencyGrid/>
            </div>
        </main>
    </LayoutDefault>
</template>

<script lang="ts" setup>
import LayoutDefault from '../layouts/LayoutDefault.vue';
import CurrencyGrid from '@/components/currency/CurrencyGrid.vue';</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.main-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 60px;

    @media (max-width: $large) {
        & {
            padding: 20px;
        }
    }
}
</style>
