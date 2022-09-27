<template>
    <div class="currency-filter">
        <input
            v-model.trim="query"
            placeholder="Название валюты или ее код"
            type="text">
    </div>
</template>

<script lang="ts" setup>
import {ref, watch} from 'vue';

const query = ref<string>('');
const debounceTimer = ref<ReturnType<typeof setTimeout>>();

const emit = defineEmits<{
    (e: 'update', data: string): void;
}>();

watch(query, (value) => {
    if (debounceTimer.value)
        clearTimeout(debounceTimer.value);
    debounceTimer.value = setTimeout(() => {
        emit('update', value);
    }, 500);
});

</script>

<style lang="scss" scoped>
.currency-filter {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 20px 0 30px 0;
    border-radius: 6px;
    overflow: hidden;
    border: 1px solid var(--gray);

    input {
        height: 40px;
        width: 100%;
        outline: none;
        padding: 0 10px;
        border: none;
    }
}
</style>
