export interface CreateOrderDto {
    // pass the amount in paise suppose if price is 299 then pass 29900
    amount: number;
    // ISO currency code
    currency: string;
    // can have max 40 characters
    receipt?: string;
    notes?: any;
    partialPayment?: boolean;
    first_payment_min_amount?: number;
}