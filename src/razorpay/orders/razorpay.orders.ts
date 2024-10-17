import Razorpay from "razorpay";
import { RazorPayCredentials } from "src/types/credentials.types";
import { CreateOrderDto } from "./dto/createOrder.dtot";

export class RazorPayOrders {
    private razorpay: Razorpay
    constructor(private credentials: RazorPayCredentials) {
        this.razorpay = new Razorpay({
            key_id: credentials.keyId,
            key_secret: credentials.keySecret
        })
    }
    async createRazorPayOrder(payload: CreateOrderDto) {
        try {
            this.validateOrder(payload)
            // Create an order
            const order = await this.razorpay.orders.create(payload)
            return order
        } catch (error) {
            console.log(error)
            throw error
        }
    }

    async getAllOrders(){
        try {
            
        } catch (error) {
            
        }
    }

    private validateOrder(payload: CreateOrderDto) {
        const { receipt, partialPayment, first_payment_min_amount } = payload
        if(receipt && receipt.length > 40) {
            throw new Error('Receipt should be of max 40 characters')
        }

        if(partialPayment && !first_payment_min_amount) {
            throw new Error('first_payment_min_amount is required when partialPayment is true')
        }
    }
}