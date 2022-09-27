<template>
    <div
        v-click-outside="handleClose"
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
                @click="emit('selected', currency.CharCode)"
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

const emit = defineEmits<{
    (e: 'selected', data: string): void;
}>();

function handleClose() {
    if (isOpen.value)
        isOpen.value = false;
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/variables.scss";

.currency-selector {
    position: relative;

    .fa-chevron-up {
        transition: 0.2s;
    }

    .head {
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
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

        @media (max-width: $medium) {
            grid-template-columns: repeat(2, 250px);
            transform: translate(-100%, 100%);
        }

        @media (max-width: $large) {
            grid-template-columns: repeat(1, 250px);
        }

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
