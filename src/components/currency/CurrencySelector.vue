<template>
    <div
        class="currency-selector"
        @click="isOpen = !isOpen"
    >
        <button class="head">
            <i
                :class="{'fa-chevron-up': !isOpen, 'fa-chevron-down': isOpen}"
                class="fal"
            />
        </button>
        <div
            v-if="isOpen"
            class="body">
            <div
                v-for="currency in mainStore.currencies"
                :key="currency.ID"
                class="currency-item"
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
</script>

<style lang="scss" scoped>
.currency-selector {
    position: relative;

    .fa-chevron-up {
        transition: 0.2s;
    }

    .head {
        background: none;
        outline: none;
        border: none;
    }

    .body {
        z-index: 10000;
        position: absolute;
        left: 0;
        bottom: -10px;
        transform: translateY(100%);
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
