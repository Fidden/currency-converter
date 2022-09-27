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

<script setup lang="ts">

</script>

<style scoped lang="scss">
.header-nav {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    gap: 10px;

    a {
        color: black;
        transition: 0.2s;
        text-decoration-color: var(--gray);
        text-underline-offset: 4px;
    }

    a:hover {
        transition: 0.2s;
        color: var(--main);
        text-decoration-color: var(--main);
    }
}
</style>
