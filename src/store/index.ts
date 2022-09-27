import {defineStore} from 'pinia';
import {ICurrency} from '@/interfaces/ICurrency';

interface State {
    rates: Record<string, number>;
    currencies: Record<string, ICurrency>;
    baseCurrency: string;
}

export const useMainStore = defineStore('main', {
    state: (): State => ({
        rates: {},
        currencies: {},
        baseCurrency: 'RUB',
    }),
    actions: {
        setRates(rates: Record<string, number>) {
            this.rates = rates;
        },
        setCurrencies(currencies: Record<string, ICurrency>) {
            this.currencies = currencies;
            this.currencies.RUB = {
                ID: 'RUB',
                NumCode: '643',
                CharCode: 'RUB',
                Nominal: 1,
                Name: 'Российский рубль',
                Value: 1,
                Previous: 1,
            };
        },
        setBaseCurrency(currency: string) {
            this.baseCurrency = currency;
        }
    }
});
