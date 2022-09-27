<template>
    <div
        v-click-outside="handleClose"
        class="header-currency-selector"
        @click="isOpen = !isOpen"
    >
        <button class="head">
            {{ mainStore.baseCurrency }}
        </button>
        <div
            v-if="isOpen"
            class="body">
            <div
                v-for="currency in mainStore.currencies"
                :key="currency.ID"
                class="currency-item"
                @click="mainStore.setBaseCurrency(currency.CharCode)"
            >
                <p>
                    {{ currency.Name }}
                </p>
                <span>
                    {{ currency.CharCode }}
                </span>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue';
import {useMainStore} from '@/store';

const isOpen = ref<boolean>(false);
const mainStore = useMainStore();

function handleClose() {
    if (isOpen.value)
        isOpen.value = false;
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.header-currency-selector {
    position: relative;

    .fa-chevron-up {
        transition: 0.2s;
    }

    .head {
        cursor: pointer;
        background: none;
        outline: none;
        border: none;
        transition: 0.2s;

        &:hover {
            color: $main;
            transition: 0.2s;
        }
    }

    .body {
        z-index: 10000;
        position: absolute;
        left: 0;
        bottom: -10px;
        transform: translate(calc(-100% + 40px), 100%);
        box-shadow: 0 8px 40px 0 rgb(0 0 0 / 20%);
        padding: 20px;

        display: grid;
        grid-template-columns: repeat(3, 250px);
        gap: 5px 20px;
        background: white;

        .currency-item {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            transition: 0.2s;
            border-radius: 6px;
            padding: 0 10px;
            cursor: pointer;

            p {
                text-overflow: ellipsis;
                overflow: hidden;
                display: -webkit-box;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
            }

            span {
                font-weight: 500;
                font-size: 14px;
                margin-left: auto;
                padding-left: 20px;
            }

            &:hover {
                transition: 0.2s;
                background: #dbe9f9;
            }
        }
    }
}
</style>
