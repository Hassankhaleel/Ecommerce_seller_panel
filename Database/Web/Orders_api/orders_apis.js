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
    // let status_filter = req.query
    // console.log(status_filter, "adasdasdasdasdasdasdasdasdas");

    let payment_type = req.body.Order_payment_type
    console.log(payment_type, "ASDASDasdasdas____++++++++");

    // let payemnt_type_rslt = await Orders_model.find({ "Order_Details.order_Payemnt_type": payment_type }).exec();
    // console.log(payment_type, "payment_type"); //correct working
    let searcher_aggregate = {
        "$search": {
            "index":
                'order_search',
            "compound": {
                "filter": [
                    {
                        "term": {
                            "query": payment_type,
                            "path": 'Order_Details.order_Payemnt_type',
                        }
                    },

                ],
                "must": [
                    {
                        "text": {
                            "query": status_filter,
                            path: "Order_Details.order_current_status"
                        }

                    }
                ]
            }
        }
    };
    let results = await Orders_model.aggregate([searcher_aggregate])
    // console.log(results.Order_Details.order_Payemnt_typets, "db search")
    console.log(results, "db search")
    res.send(results)
});
// GETTING ORDER BY PAYMENT TYPE


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