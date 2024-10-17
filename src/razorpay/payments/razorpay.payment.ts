import Razorpay from "razorpay";
import { RazorPayCredentials } from "src/interfaces/credentials.types";
import { VerifySignatureDto } from "./dto/verifySignature.dto";
import crypto from 'crypto'
import { CapturePaymentDto } from "./dto/createPayment.dto";
export class RazorpayPayment {
    private razorpay: Razorpay
    constructor(credentials: RazorPayCredentials) {
        this.razorpay = new Razorpay({
            key_id: credentials.keyId,
            key_secret: credentials.keySecret
        })
    }

    async verifyPaymentSignature(payload: VerifySignatureDto, secret: string) : Promise<boolean> {
        try {
            const { orderId, paymentId, razorpaySignature } = payload
            const hash = crypto.createHmac('sha56', secret)
            hash.update(orderId + '|' + paymentId);

            const generatedSignature = hash.digest('hex')
            const isValid = generatedSignature === razorpaySignature
            return isValid
        } catch (error) {
            throw error
        }
    }

    async createPayment(payload: CapturePaymentDto) {
        try {
            const payment = await this.razorpay.payments.capture(payload.paymentId, payload.orderAmount, payload.currency);
            return payment
        } catch (error) {
            throw error
        }
    }
}