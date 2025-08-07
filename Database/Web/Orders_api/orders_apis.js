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
    let status_filters = req.query.status_filters
    console.log(status_filters, "status_____________filter");

    let payment_type = req.body.Order_payment_type
    let searcher_aggregate = {
        $search: {
            index: 'order_search',
            compound: {
                filter: [
                    // Facet 1: payment type = COD
                    {
                        term: {
                            query: payment_type,
                            path: "Order_Details.order_Payemnt_type",
                        }
                    },

                    // Facet 2: OR logic for statusesphrase: {
                    {
                        phrase: {
                            query: status_filters,
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
////--------UPDATEING ORDERs DELIEVEY STATUS at all -----
app.patch('/update_order_status', async (req, res) => {
    const { ids, status_to_be_change } = req.body;
    console.log(ids, status_to_be_change);


    try {
        const updated = await Orders_model.updateMany(
            { _id: { $in: ids } },
            { $set: { "Order_Details.order_current_status": status_to_be_change } }
        );
        console.log(updated);


        if (!updated) return res.status(404).json({ message: "Order not found" });

        res.json({ message: "Status updated", updated });
    } catch (error) {
        res.status(500).json({ message: "Error updating status", error: error.message });
    }
});

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