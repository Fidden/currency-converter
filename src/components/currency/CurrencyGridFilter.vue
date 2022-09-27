<template>
    <div class="currency-filter">
        <input type="text" placeholder="Название валюты или ее код">
    </div>
</template>

<script setup lang="ts">
import {ICurrency} from "@/interfaces/ICurrency";

defineProps<{
    currencies: Record<string, ICurrency>
}>();
</script>

<style scoped lang="scss">
.currency-filter {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 20px 0 30px 0;

    input {
        height: 40px;
        width: 100%;
    }
}
</style>
