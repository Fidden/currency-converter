import {useMainStore} from '@/store';

export function useConvert(from: string, to: string, amount = 1): string | number {
    const mainStore = useMainStore();
    const fromCurrency = mainStore.currencies[from];
    const toCurrency = mainStore.currencies[to];
    if (from === 'RUB')
        return toCurrency.Value.toFixed(2);

    const rate = fromCurrency?.Value / toCurrency?.Value;
    return (amount * rate * toCurrency?.Nominal).toFixed(2);
}
