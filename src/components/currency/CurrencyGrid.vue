<template>
    <div class="currency-grid">
        <CurrencyGridFilter
            @update="searchCurrency"
        />
        <div class="body">
            <CurrencyCard
                v-for="currency in filteredCurrency"
                :key="currency.ID"
                :currency="currency"
            />
        </div>
    </div>
</template>

<script lang="ts" setup>
import CurrencyCard from '@/components/currency/CurrencyCard.vue';
import CurrencyGridFilter from '@/components/currency/CurrencyGridFilter.vue';
import {useMainStore} from '@/store';
import {onMounted, ref} from 'vue';
import {ICurrency} from '@/interfaces/ICurrency';

const filteredCurrency = ref<Array<ICurrency>>();

const mainStore = useMainStore();

onMounted(() => {
    filteredCurrency.value = Object.values(mainStore.currencies);
});

function searchCurrency(data: string) {
    filteredCurrency.value = Object.values(mainStore.currencies).filter(item =>
        item.Name.toLowerCase().indexOf(data) !== -1 ||
        item.CharCode.toLowerCase().indexOf(data) !== -1
    );
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.currency-grid {
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;

    .body {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
        gap: 20px;

        @media (max-width: $x-small) {
            & {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: $small) and (min-width: $x-small) {
            & {
                grid-template-columns: repeat(4, 1fr);
            }
        }
    }
}

</style>
