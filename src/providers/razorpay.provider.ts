import Razorpay from 'razorpay'
import { RazorPayCredentials } from 'src/types/credentials.types'
import { RazorPayOrders } from '../razorpay/orders/razorpay.orders'
import { CreateOrderDto } from 'src/razorpay/orders/dto/createOrder.dtot';
export class RazorPayPayment {
    private razorpay: Razorpay;
    private razorPayOrder : RazorPayOrders;
    constructor(private credentials: RazorPayCredentials) {
        this.razorpay = new Razorpay({
            key_id: credentials.keyId,
            key_secret: credentials.keySecret
        })

        this.razorPayOrder = new RazorPayOrders({
            keyId : credentials.keyId,
            keySecret : credentials.keySecret
        })
    }

   async createOrder(payload: CreateOrderDto) {
        const order = await this.razorPayOrder.createRazorPayOrder(payload)
        return order
    }

}