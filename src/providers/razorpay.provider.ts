import Razorpay from 'razorpay'
import { RazorPayCredentials } from 'src/types/credentials.types'
import { RazorPayOrders } from '../razorpay/orders/razorpay.orders'
import { CreateOrderDto } from 'src/razorpay/orders/dto/createOrder.dtot';
import { QueryOrderDto } from 'src/razorpay/orders/dto/queryOrder.dto';
import { UpdateOrderDto } from 'src/razorpay/orders/dto/upateOrder.dto';
import { RazorPaySubscription } from 'src/razorpay/subscription/razorpay.subscription';
export class RazorPayPayment {
    private razorpay: Razorpay;
    private razorPayOrder: RazorPayOrders;
    private razorPaySubscription: RazorPaySubscription;
    constructor(private credentials: RazorPayCredentials) {
        this.razorpay = new Razorpay({
            key_id: credentials.keyId,
            key_secret: credentials.keySecret
        })

        this.razorPayOrder = new RazorPayOrders({
            keyId: credentials.keyId,
            keySecret: credentials.keySecret
        })

        this.razorPaySubscription = new RazorPaySubscription({
            keyId: credentials.keyId,
            keySecret: credentials.keySecret
        })
    }

    // order methods
    async createOrder(payload: CreateOrderDto) {
        return await this.razorPayOrder.createRazorPayOrder(payload)
    }

    async getAllOrders(payload: QueryOrderDto) {
        return await this.razorPayOrder.getAllOrders(payload)
    }

    async updateOrder(payload: UpdateOrderDto) {
        return await this.razorPayOrder.updateOrder(payload)
    }

}