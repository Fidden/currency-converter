import {ICurrency} from '@/interfaces/ICurrency';

export interface ICurrenciesResponse {
    Date: Date;
    PreviousDate: Date;
    PreviousURL: string;
    Timestamp: number;
    Valute: Record<string, ICurrency>;
}
