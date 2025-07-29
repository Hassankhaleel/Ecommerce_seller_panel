import mongoose from "mongoose";
import { type } from "node:os";

const order_schema = mongoose.Schema({
    Orderer_Details: {

        orderer_Name: { type: String, required: true },
        orderer_Email: { type: String, required: true },
        orderer_Number: { type: Number, required: true },
    },
    Order_Details: {
        order_Date: { type: String, required: true },
        order_Name: { type: String, required: true },
        order_Location: { type: String, required: true },
        order_Payemnt_type: { type: String, required: true },
        order_Amount: { type: String, required: true },
        order_Discount: { type: String, required: true },
        order_Payemnt: { type: Boolean, required: true },
        order_id: { type: String, required: true },
        order_dispacting_time: { type: String, required: true },
        order_current_status: { type: String, required: true },
        order_payment_id: { type: String, required: true },
        order_paid_ammount: { type: String, required: true },
    }
})

export default order_schema