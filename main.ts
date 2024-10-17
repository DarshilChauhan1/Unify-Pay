import { CreateOrderDto } from "src/razorpay/orders/dto/createOrder.dtot";
import { RazorPayPayment } from "./src/providers/razorpay.provider";
import { RazorPayCredentials } from "./src/types/credentials.types";

const razorpayCredentials : RazorPayCredentials = {
    keyId : 'rzp_test_LpTvyn66zyK8PF',
    keySecret : 'M1zOpJzErfQKjBIbnZC6KkTd'
}

const razorPayInstance = new RazorPayPayment(razorpayCredentials)

const createOrder : CreateOrderDto = {
    amount : 10,
    currency : 'INR',
    receipt : 'receipt#1'
}

async function main() {
    try {
        const order = await razorPayInstance.createOrder(createOrder)
        console.log(order)
    } catch (error) {
        console.log(error)
    }
}
main()

