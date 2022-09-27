<template>
    <div class="currency-grid">
        <CurrencyGridFilter
            @update="searchCurrency"
        />
        <div
            v-if="filteredCurrency.length > 0"
            class="body">
            <CurrencyCard
                v-for="currency in filteredCurrency"
                :key="currency.ID"
                :currency="currency"
            />
        </div>
        <div
            v-else-if="Object.values(mainStore.currencies).length <= 0"
            class="body">
            <CurrencyCardSkeleton
                v-for="item in Array.from(Array(20).keys())"
                :key="item"/>
        </div>
        <div
            v-else
            class="not-found">
            <h2>Кажется ничего не найдено.</h2>
        </div>
    </div>
</template>

<script lang="ts" setup>
import CurrencyCard from '@/components/currency/CurrencyCard.vue';
import CurrencyGridFilter from '@/components/currency/CurrencyGridFilter.vue';
import {useMainStore} from '@/store';
import {ref, watch} from 'vue';
import {ICurrency} from '@/interfaces/ICurrency';
import CurrencyCardSkeleton from '@/components/currency/CurrencyCardSkeleton.vue';

const mainStore = useMainStore();
const filteredCurrency = ref<Array<ICurrency>>(
    Object.values(mainStore.currencies)
);

watch(mainStore, (value) => {
    filteredCurrency.value = Object.values(value.currencies);
}, {deep: true});

function searchCurrency(data: string) {
    filteredCurrency.value = Object.values(mainStore.currencies).filter(item =>
        item.Name.toLowerCase().indexOf(data.toLowerCase()) !== -1 ||
        item.CharCode.toLowerCase().indexOf(data.toLowerCase()) !== -1
    );
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.currency-grid {
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;

    .not-found {
        display: flex;
        flex-direction: row;
        justify-content: center;
        text-align: center;
    }

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

        @media (max-width: $medium) and (min-width: $small) {
            & {
                grid-template-columns: repeat(5, 1fr);
            }
        }
    }
}

</style>
