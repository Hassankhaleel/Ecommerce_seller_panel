import express from "express"
import { Mongoose } from "mongoose"
const app = express()
import { Orders_model } from "../databse.js"
const order_api_router = express.Router()

app.use(express.json())

// ----APi for getting orders base on payemnt_type
order_api_router.post('/orders_by_payment_type', async (req, res) => {
    // let status_filters = req.query.status_filters

    let info = req.body
    console.log(info);
    let searcher_aggregate = {
        $search: {
            index: 'order_search',
            compound: {
                filter: [
                    // Facet 1: payment type = COD
                    {
                        term: {
                            query: info.payment_type,
                            path: "Order_Details.order_Payemnt_type",
                        }
                    },

                    // Facet 2: OR logic for statusesphrase: {
                    {
                        phrase: {
                            query: info.payment_filter,
                            path: "Order_Details.order_current_status"
                        }
                    }

                ]
            }
        }

    };

    let results = await Orders_model.aggregate([searcher_aggregate])
    // console.log(results.Order_Details.order_Payemnt_typets, "db search")
    console.log(results, "db data")
    res.send(results)
});
////--------UPDATEING ORDERs DELIEVEY STATUS at all -----
order_api_router.patch('/update_order_status', async (req, res) => {
    const { ids, payment_filter_to_Be_change } = req.body;
    console.log(ids, payment_filter_to_Be_change);
    try {
        const updated = await Orders_model.updateMany(
            { _id: { $in: ids } },
            { $set: { "Order_Details.order_current_status": payment_filter_to_Be_change } }
        );
        console.log(updated);


        if (!updated) return res.status(404).json({ message: "Order not found" });

        res.send({ message: "Status updated", updated });
    } catch (error) {
        res.status(500).json({ message: "Error updating status", error: error.message });
    }
});

order_api_router.post('/order_confirmed', async (req, res) => {
    const data = req.body;
    await Orders_model.create(data)
    res.send(data)

})
// DELTERING THE ORDER THAT ARE NOT-CONFIRMED.
order_api_router.delete('/order_delete', async (req, res) => {
    const id = req.body.order_id
    const deleted_order = await Orders_model.deleteOne({ 'Order_Details.order_id': id })
    console.log(deleted_order);

    res.send({ "ORDER DELETED ": deleted_order })

})

export default order_api_router;