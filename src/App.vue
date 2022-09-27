<template>
    <RouterView/>
</template>

<script lang="ts" setup>
import {onMounted} from 'vue';
import {IRatesResponse} from '@/interfaces/IRatesResponse';
import {ICurrenciesResponse} from '@/interfaces/ICurrenciesResponse';
import {useMainStore} from '@/store';

const mainStore = useMainStore();

onMounted(async () => {
    const [rates, countries] = await Promise.all([
        getRates(),
        getCurrencies(),
    ]);

    mainStore.setRates(rates.rates);
    mainStore.setCurrencies(countries.Valute);
});

async function getRates(): Promise<IRatesResponse> {
    const res = await fetch('https://www.cbr-xml-daily.ru/latest.js');
    return res.json();
}

async function getCurrencies(): Promise<ICurrenciesResponse> {
    const res = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    return res.json();
}
</script>

<style scoped>

</style>
