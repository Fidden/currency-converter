<template>
    <LayoutDefault>
        <main class="main">
            <div class="converter-container">
                <div class="item">
                    <div class="item-head">
                        <p class="item-head-title">
                            У меня есть
                        </p>
                        <div class="item-head-body">
                            <button
                                v-for="item in converter.fromList"
                                :key="item"
                                :class="{'active': item === converter.from}"
                                @click="changeCurrency(item, 'from')"
                            >
                                {{ item }}
                            </button>
                            <CurrencySelector @selected="(data) => changeCurrency(data, 'from')"/>
                        </div>
                    </div>
                    <div class="item-body">
                        <input
                            v-model.number="converter.fromValue"
                            placeholder="Кол-во"
                            type="number">
                        <p class="convert-cost">
                            1 {{ converter.from }} = {{ useConvert(converter.from, converter.to) }} {{ converter.to }}
                        </p>
                    </div>
                </div>
                <button
                    class="switch"
                    @click="switchCurrency">
                    <img
                        src="src/assets/img/reverse.svg"
                        alt="reverse">
                </button>
                <div class="item">
                    <div class="item-head">
                        <p class="item-head-title">
                            Хочу приобрести
                        </p>
                        <div class="item-head-body">
                            <button
                                v-for="item in converter.toList"
                                :key="item"
                                :class="{'active': item === converter.to}"
                                @click="changeCurrency(item, 'to')"
                            >
                                {{ item }}
                            </button>
                            <CurrencySelector @selected="(data) => changeCurrency(data, 'to')"/>
                        </div>
                    </div>
                    <div class="item-body">
                        <input
                            readonly
                            :value="useConvert(converter.from, converter.to, converter.fromValue)"
                            placeholder="Кол-во"
                            type="text">
                        <p class="convert-cost">
                            1 {{ converter.to }} = {{ useConvert(converter.to, converter.from) }} {{ converter.from }}
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </LayoutDefault>
</template>

<script lang="ts" setup>
import LayoutDefault from '../layouts/LayoutDefault.vue';
import CurrencySelector from '@/components/currency/CurrencySelector.vue';
import {ref} from 'vue';
import {useConvert} from '@/composables/useConvert';

const converter = ref({
    from: 'RUB',
    fromList: ['RUB', 'USD', 'EUR', 'GBP'],
    to: 'USD',
    toList: ['RUB', 'USD', 'EUR', 'GBP'],
    fromValue: 5000,
    toValue: 0,
});

function switchCurrency() {
    const fromBackup = converter.value.from;
    converter.value.from = converter.value.to;
    converter.value.to = fromBackup;
}

function changeCurrency(data: string, _type: 'from' | 'to') {
    if (!converter.value.fromList.slice(0, 3).includes(data)) {
        if (_type === 'from') {
            converter.value.fromList[3] = data;
        } else {
            converter.value.toList[3] = data;
        }
    }

    converter.value[_type] = data;
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.converter-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 60px;

    .item {
        width: 100%;

        .item-head {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 30px;

            .item-head-body {
                display: flex;
                flex-direction: row;

                * {
                    background: none;
                    outline: none;
                    border: none;
                    border-top: 1px solid $gray;
                    border-bottom: 1px solid $gray;
                    border-right: 1px solid $gray;
                    transition: 0.2s;
                    padding: 8px 24px;
                    cursor: pointer;

                    &:first-child, &:last-child {
                        border: 1px solid $gray;
                    }

                    &:first-child {
                        border-radius: 6px 0 0 6px;
                    }

                    &:last-child {
                        border-radius: 0 6px 6px 0;
                    }

                    &.active {
                        background: $main;
                        color: white;
                        transition: 0.2s;
                    }

                    @media (max-width: $x-small) {
                        & {
                            padding: 10px 0;
                            flex: 1;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                        }
                    }
                }
            }
        }

        .item-body {
            border: 1px solid $gray;
            position: relative;
            height: 150px;

            input {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                font-size: 44px;
                font-weight: bold;
                padding: 0 20px;
                outline: none;
                border: none;
                appearance: none;

                &::-webkit-outer-spin-button,
                &::-webkit-inner-spin-button {
                    -webkit-appearance: none;
                }
            }

            .convert-cost {
                position: absolute;
                left: 24px;
                bottom: 20px;
                font-weight: 300;
            }
        }
    }

    .switch {
        margin: 90px 50px 0 50px;
        background: none;
        outline: none;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        cursor: pointer;

        img {
            min-width: 50px;
            min-height: 50px;
            transition: 0.2s;

            &:hover {
                opacity: 0.5;
                transition: 0.2s;
            }
        }

        @media (max-width: $x-small) {
            & {
                margin: 40px auto;
            }
        }
    }

    @media (max-width: $x-small) {
        & {
            padding: 20px;
            flex-direction: column;
        }
    }
}
</style>
