import express from "express"
import { Mongoose } from "mongoose"
import Orders_model from "../databse.js"
import deliever_status_Api from "./Delievery_status_Apis.js"
import cors from "cors"
const app = express()
app.use(cors({
    origin: "http://localhost:5173", // allow React frontend
    methods: ["GET", "POST", "PUT ", "DELETE", "PATCH"],
}));
app.use(express.json())
app.use('/delievery_status_api', deliever_status_Api)
// ----APis for getting order to confirming order
app.get('/order_recieved', (req, res) => {

    Orders_model.find({})
        .then((data) => {
            res.send(data)
        }).catch((err) => {
            res.send(err)
        })
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