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
    // -----COD-----

    //   Orderer_Details: {
    //     orderer_Name: 'Hassan khalee',
    //     orderer_Email: 'hassankhaleel0012@gmail.com',
    //     orderer_Number: 3122363230
    // },
    // Order_Details: {
    //     order_Date: '10/7/2025',
    //     order_Name: 'T-shrit M-474',
    //     order_Location: 'karachi pakistan',
    //     order_Payemnt_type: 'Cod',
    //     order_Amount: '2400',
    //     order_Discount: '0',
    //     order_Payemnt: true,
    //     order_id: '0187',
    //     order_dispacting_time: '12:45pm',
    //     order_current_status: 'New Orders',
    //     order_payment_id: '005987py',
    //     order_paid_ammount: '2400'
    // },
    // __v: 0
    // }



    // ----------FULL----
    //     //  Orderer_Details: {
    //     orderer_Name: 'Hassan khalee',
    //     orderer_Email: 'hassankhaleel0012@gmail.com',
    //     orderer_Number: 3122363230
    // },
    // Order_Details: {
    //     order_Date: '10/7/2025',
    //     order_Name: 'T-shrit M-474',
    //     order_Location: 'karachi pakistan',
    //     order_Payemnt_type: 'Full',
    //     order_Amount: '2400',
    //     order_Discount: '0',
    //     order_Payemnt: true,
    //     order_id: '0187',
    //     order_dispacting_time: '12:45pm',
    //     order_current_status: 'New Orders',
    //     order_payment_id: '005987py',
    //     order_paid_ammount: '2400'
    // },


    // ----------advanced
    //     Orderer_Details: {
    //         orderer_Name: 'Hassan khalee',
    //         orderer_Email: 'hassankhaleel0012@gmail.com',
    //         orderer_Number: 3122363230
    //     },
    //     Order_Details: {
    //         order_Date: '10/7/2025',
    //         order_Name: 'T-shrit M-474',
    //         order_Location: 'karachi pakistan',
    //         order_Payemnt_type: 'Full',
    //         order_Amount: '2400',
    //         order_Discount: '0',
    //         order_Payemnt: true,
    //         order_id: '0187',
    //         order_dispacting_time: '12:45pm',
    //         order_current_status: 'New Orders',
    //         order_payment_id: '005987py',
    //         order_paid_ammount: '2400'
    //     },
    //     __v: 0
    // }
})



export default order_schema



