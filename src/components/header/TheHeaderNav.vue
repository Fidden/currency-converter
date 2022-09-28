<template>
    <nav class="header-nav">
        <RouterLink :to="{name: 'home'}">
            Главная
        </RouterLink>
        <RouterLink :to="{name: 'converter'}">
            Конвертер
        </RouterLink>
    </nav>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.header-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    gap: 10px;

    a {
        color: black;
        transition: 0.2s;
        text-decoration-color: $gray;
        text-underline-offset: 4px;
    }

    a:hover {
        transition: 0.2s;
        color: $main;
        text-decoration-color: $main;
    }

    @media (max-width: $x-small) {
        & {
            padding: 0 10px;

            a:first-child {
                display: none;
            }
        }
    }
}
</style>
