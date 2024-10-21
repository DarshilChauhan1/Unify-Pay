import { RazorPayPayment } from './src/providers/razorpay.provider'

const razorPayInstance = new RazorPayPayment({
    keyId: "rzp_test_LpTvyn66zyK8PF",
    keySecret : "M1zOpJzErfQKjBIbnZC6KkTd"
})

async function verifySignature(){
    const verifySignature = await razorPayInstance.verifyPaymentSignature({
        orderId : 'order_PA3EqLCODhhWEa',
        paymentId : "pay_PASFa8cXvjqFAf",
        razorpaySignature : "ad94315b7d076d42939854bed479ffd267e105e9760ac8a0fd777fb64dd14c78",
    }, "M1zOpJzErfQKjBIbnZC6KkTd")
}


verifySignature()


