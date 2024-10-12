export interface StripeCredentials {
    apiKey: string;
    apiVersion?: any;
    appInfo?: any;
    host?: string;
    stripeAccount?: string;
    maxRetries?: number;
    timeout?: number;
    port?: number;
}