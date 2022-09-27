<template>
    <div
        v-if="currency"
        class="currency-card">
        <div class="title">
            <p class="name">
                {{ currency.Name }}
            </p>
        </div>
        <div class="change-container">
            <p
                :class="{inc: diffAmount > 0, dec: diffAmount < 0 }"
                class="form"
            >
                1 {{ currency.CharCode }}
                <span class="diff-amount">
                    ({{ diffAmount.toFixed(2) }})
                </span>
                <i class="far fa-arrow-up fa-xs"/>
                <i class="far fa-arrow-down fa-xs"/>
            </p>
            <div class="separate"/>
            <p class="to">
                {{ convertedCurrency }} {{ mainStore.baseCurrency }}
            </p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ICurrency} from '@/interfaces/ICurrency';
import {computed} from 'vue';
import {useMainStore} from '@/store';
import {useConvert} from '@/composables/useConvert';

const props = defineProps<{
    currency: ICurrency;
}>();

const convertedCurrency = computed(() => useConvert(mainStore.baseCurrency, props.currency.CharCode));

const diffAmount = computed(() => props.currency.Value - props.currency.Previous);
const mainStore = useMainStore();
</script>

<style lang="scss" scoped>
.currency-card {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--gray);
    border-radius: 6px;
    padding: 20px;

    .title {
        display: flex;
        flex-direction: column;
    }

    .name {
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        display: -webkit-box;
        text-align: center;
        margin-bottom: 7px;
    }

    .form {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 6px;

        .diff-amount {
            font-size: 12px;
        }
    }

    .inc {
        color: green;

        .fa-arrow-up {
            display: block;
        }

        .fa-arrow-down {
            display: none;
        }
    }

    .dec {
        color: red;

        .fa-arrow-up {
            display: none;
        }

        .fa-arrow-down {
            display: block;
        }
    }

    .char-code {
        font-weight: bold;
        font-size: 12px;
    }

    .change-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: auto;
    }

    .separate {
        width: 100%;
        height: 1px;
        background: var(--gray);
        margin: 5px 0;
    }
}
</style>
