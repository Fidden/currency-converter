export interface IRatesResponse {
    disclaimer: string;
    date: Date;
    timestamp: number;
    base: string;
    rates: Record<string, number>;
}
