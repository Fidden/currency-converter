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
                            <button class="active">
                                RUB
                            </button>
                            <button>USD</button>
                            <button>EUR</button>
                            <button>GBP</button>
                            <CurrencySelector/>
                        </div>
                    </div>
                    <div class="item-body">
                        <input
                            placeholder="Кол-во"
                            type="text"
                            value="5000">
                        <p class="convert-cost">
                            1 RUB = 0.0172 USD
                        </p>
                    </div>
                </div>
                <button class="switch">
                    <i class="far fa-arrow-right"/>
                    <i class="far fa-arrow-left"/>
                </button>
                <div class="item">
                    <div class="item-head">
                        <p class="item-head-title">
                            У меня есть
                        </p>
                        <div class="item-head-body">
                            <button>RUB</button>
                            <button>USD</button>
                            <button>EUR</button>
                            <button>GBP</button>
                        </div>
                    </div>
                    <div class="item-body">
                        <input
                            placeholder="Кол-во"
                            type="text">
                        <p class="convert-cost">
                            1 RUB = 0.0172 USD
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </LayoutDefault>
</template>

<script lang="ts" setup>
import LayoutDefault from '../layouts/LayoutDefault.vue';
import CurrencySelector from '@/components/currency/CurrencySelector.vue';</script>

<style lang="scss" scoped>
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
                    border-top: 1px solid var(--gray);
                    border-bottom: 1px solid var(--gray);
                    border-right: 1px solid var(--gray);
                    transition: 0.2s;
                    padding: 8px 24px;

                    &:first-child, &:last-child {
                        border: 1px solid var(--gray);
                    }

                    &:first-child {
                        border-radius: 6px 0 0 6px;
                    }

                    &:last-child {
                        border-radius: 0 6px 6px 0;
                    }

                    &.active {
                        background: var(--main);
                        color: white;
                        transition: 0.2s;
                    }
                }
            }
        }

        .item-body {
            border: 1px solid var(--gray);
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
        padding: 0 50px;
        background: none;
        outline: none;
        border: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
    }
}
</style>
