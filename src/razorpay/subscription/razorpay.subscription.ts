import Razorpay from "razorpay";
import { RazorPayCredentials } from "src/interfaces/credentials.types";
export class RazorPaySubscription{
    private razorpay : Razorpay
    constructor(credentials : RazorPayCredentials){
        this.razorpay = new Razorpay({
            key_id : credentials.keyId,
            key_secret : credentials.keySecret
        })
    }

    
}