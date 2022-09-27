<template>
    <div class="currency-grid">
        <CurrencyGridFilter
            :currencies="currencies"
        />
        <div class="body">
            <CurrencyCard
                v-for="currency in currencies"
                :key="currency.ID"
                :currency="currency"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import CurrencyCard from "@/components/currency/CurrencyCard.vue";
import {ref} from "vue";
import CurrencyGridFilter from "@/components/currency/CurrencyGridFilter.vue";
import {ICurrency} from "@/interfaces/ICurrency";

const currencies = ref<Record<string, ICurrency>>({
    AUD: {
        "ID": "R01010",
        "NumCode": "036",
        "CharCode": "AUD",
        "Nominal": 1,
        "Name": "Австралийский доллар",
        "Value": 37.682,
        "Previous": 38.4858
    },
    AZN: {
        "ID": "R01020A",
        "NumCode": "944",
        "CharCode": "AZN",
        "Nominal": 1,
        "Name": "Азербайджанский манат",
        "Value": 34.1171,
        "Previous": 34.1768
    },
    GBP: {
        "ID": "R01035",
        "NumCode": "826",
        "CharCode": "GBP",
        "Nominal": 1,
        "Name": "Фунт стерлингов Соединенного королевства",
        "Value": 63.2015,
        "Previous": 65.4503
    },
    AMD: {
        "ID": "R01060",
        "NumCode": "051",
        "CharCode": "AMD",
        "Nominal": 100,
        "Name": "Армянских драмов",
        "Value": 14.0413,
        "Previous": 13.9574
    },
    BYN: {
        "ID": "R01090B",
        "NumCode": "933",
        "CharCode": "BYN",
        "Nominal": 1,
        "Name": "Белорусский рубль",
        "Value": 23.2517,
        "Previous": 22.8275
    },
    BGN: {
        "ID": "R01100",
        "NumCode": "975",
        "CharCode": "BGN",
        "Nominal": 1,
        "Name": "Болгарский лев",
        "Value": 28.9243,
        "Previous": 29.427
    },
    BRL: {
        "ID": "R01115",
        "NumCode": "986",
        "CharCode": "BRL",
        "Nominal": 1,
        "Name": "Бразильский реал",
        "Value": 11.0994,
        "Previous": 11.2437
    },
    HUF: {
        "ID": "R01135",
        "NumCode": "348",
        "CharCode": "HUF",
        "Nominal": 100,
        "Name": "Венгерских форинтов",
        "Value": 13.8198,
        "Previous": 13.947
    },
    HKD: {
        "ID": "R01200",
        "NumCode": "344",
        "CharCode": "HKD",
        "Nominal": 10,
        "Name": "Гонконгских долларов",
        "Value": 74.0161,
        "Previous": 74.1457
    },
    DKK: {
        "ID": "R01215",
        "NumCode": "208",
        "CharCode": "DKK",
        "Nominal": 10,
        "Name": "Датских крон",
        "Value": 76.0732,
        "Previous": 77.2224
    },
    USD: {
        "ID": "R01235",
        "NumCode": "840",
        "CharCode": "USD",
        "Nominal": 1,
        "Name": "Доллар США",
        "Value": 57.999,
        "Previous": 58.1006
    },
    EUR: {
        "ID": "R01239",
        "NumCode": "978",
        "CharCode": "EUR",
        "Nominal": 1,
        "Name": "Евро",
        "Value": 55.9278,
        "Previous": 56.4751
    },
    INR: {
        "ID": "R01270",
        "NumCode": "356",
        "CharCode": "INR",
        "Nominal": 100,
        "Name": "Индийских рупий",
        "Value": 72.803,
        "Previous": 72.7914
    },
    KZT: {
        "ID": "R01335",
        "NumCode": "398",
        "CharCode": "KZT",
        "Nominal": 100,
        "Name": "Казахстанских тенге",
        "Value": 12.0977,
        "Previous": 12.0718
    },
    CAD: {
        "ID": "R01350",
        "NumCode": "124",
        "CharCode": "CAD",
        "Nominal": 1,
        "Name": "Канадский доллар",
        "Value": 42.7406,
        "Previous": 43.1013
    },
    KGS: {
        "ID": "R01370",
        "NumCode": "417",
        "CharCode": "KGS",
        "Nominal": 100,
        "Name": "Киргизских сомов",
        "Value": 71.1866,
        "Previous": 71.2317
    },
    CNY: {
        "ID": "R01375",
        "NumCode": "156",
        "CharCode": "CNY",
        "Nominal": 10,
        "Name": "Китайских юаней",
        "Value": 80.9047,
        "Previous": 81.5329
    },
    MDL: {
        "ID": "R01500",
        "NumCode": "498",
        "CharCode": "MDL",
        "Nominal": 10,
        "Name": "Молдавских леев",
        "Value": 29.8257,
        "Previous": 29.9225
    },
    NOK: {
        "ID": "R01535",
        "NumCode": "578",
        "CharCode": "NOK",
        "Nominal": 10,
        "Name": "Норвежских крон",
        "Value": 54.0798,
        "Previous": 55.4062
    },
    PLN: {
        "ID": "R01565",
        "NumCode": "985",
        "CharCode": "PLN",
        "Nominal": 1,
        "Name": "Польский злотый",
        "Value": 11.7545,
        "Previous": 11.922
    },
    RON: {
        "ID": "R01585F",
        "NumCode": "946",
        "CharCode": "RON",
        "Nominal": 1,
        "Name": "Румынский лей",
        "Value": 11.3423,
        "Previous": 11.4644
    },
    XDR: {
        "ID": "R01589",
        "NumCode": "960",
        "CharCode": "XDR",
        "Nominal": 1,
        "Name": "СДР (специальные права заимствования)",
        "Value": 74.2358,
        "Previous": 74.8405
    },
    SGD: {
        "ID": "R01625",
        "NumCode": "702",
        "CharCode": "SGD",
        "Nominal": 1,
        "Name": "Сингапурский доллар",
        "Value": 40.4005,
        "Previous": 40.9102
    },
    TJS: {
        "ID": "R01670",
        "NumCode": "972",
        "CharCode": "TJS",
        "Nominal": 10,
        "Name": "Таджикских сомони",
        "Value": 56.6989,
        "Previous": 56.7605
    },
    TRY: {
        "ID": "R01700J",
        "NumCode": "949",
        "CharCode": "TRY",
        "Nominal": 10,
        "Name": "Турецких лир",
        "Value": 31.5438,
        "Previous": 31.6509
    },
    TMT: {
        "ID": "R01710A",
        "NumCode": "934",
        "CharCode": "TMT",
        "Nominal": 1,
        "Name": "Новый туркменский манат",
        "Value": 16.5711,
        "Previous": 16.6002
    },
    UZS: {
        "ID": "R01717",
        "NumCode": "860",
        "CharCode": "UZS",
        "Nominal": 10000,
        "Name": "Узбекских сумов",
        "Value": 52.5823,
        "Previous": 52.7692
    },
    UAH: {
        "ID": "R01720",
        "NumCode": "980",
        "CharCode": "UAH",
        "Nominal": 10,
        "Name": "Украинских гривен",
        "Value": 15.7106,
        "Previous": 15.8239
    },
    CZK: {
        "ID": "R01760",
        "NumCode": "203",
        "CharCode": "CZK",
        "Nominal": 10,
        "Name": "Чешских крон",
        "Value": 22.9481,
        "Previous": 23.2924
    },
    SEK: {
        "ID": "R01770",
        "NumCode": "752",
        "CharCode": "SEK",
        "Nominal": 10,
        "Name": "Шведских крон",
        "Value": 51.3679,
        "Previous": 52.1559
    },
    CHF: {
        "ID": "R01775",
        "NumCode": "756",
        "CharCode": "CHF",
        "Nominal": 1,
        "Name": "Швейцарский франк",
        "Value": 58.8583,
        "Previous": 59.1897
    },
    ZAR: {
        "ID": "R01810",
        "NumCode": "710",
        "CharCode": "ZAR",
        "Nominal": 10,
        "Name": "Южноафриканских рэндов",
        "Value": 32.102,
        "Previous": 32.6858
    },
    KRW: {
        "ID": "R01815",
        "NumCode": "410",
        "CharCode": "KRW",
        "Nominal": 1000,
        "Name": "Вон Республики Корея",
        "Value": 40.5219,
        "Previous": 41.2266
    },
    JPY: {
        "ID": "R01820",
        "NumCode": "392",
        "CharCode": "JPY",
        "Nominal": 100,
        "Name": "Японских иен",
        "Value": 40.2771,
        "Previous": 40.2219
    }
});
</script>

<style scoped lang="scss">

.currency-grid {
    display: flex;
    flex-direction: column;
    padding-bottom: 60px;

    .body {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        grid-template-rows: repeat(6, 1fr);
        gap: 20px;
    }
}

</style>
