import express from "express"
import { Mongoose } from "mongoose"
import Orders_model from "../databse.js"
import deliever_status_Api from "./Delievery_status_Apis.js"
import cors from "cors"
import { log } from "node:console"
import order_schema from "./orders_schema.js"
const app = express()
app.use(cors({
    origin: "http://localhost:5173", // allow React frontend
    methods: ["GET", "POST", "PUT ", "DELETE", "PATCH"],
}));
app.use(express.json())
// ----APis for getting orders base on payemnt_type
app.post('/orders_by_payment_type', async (req, res) => {
    let payment_type = req.body.Order_payment_type
    let payemnt_type_rslt = await Orders_model.find({ "Order_Details.order_Payemnt_type": payment_type }).exec();
    console.log(payemnt_type_rslt);

    res.send(payemnt_type_rslt)
})

app.post('/order_confirmed', async (req, res) => {
    const data = req.body;
    await Orders_model.create(data)
    res.send(data)

})
// DELTERING THE ORDER THAT ARE NOT-CONFIRMED.
app.delete('/order_delete', async (req, res) => {
    const id = req.body.order_id
    const deleted_order = await Orders_model.deleteOne({ 'Order_Details.order_id': id })
    console.log(deleted_order);

    res.send({ "ORDER DELETED ": deleted_order })

})

app.listen(4000, () => console.log("listening local 400"))