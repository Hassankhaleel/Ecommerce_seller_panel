import express from "express"
import { Mongoose } from "mongoose"

import cors from "cors"
import order_api_router from "./Orders_api/orders_apis.js"
import Product_api_router from "./Product_api/Product_main.js"
const app = express()
app.use(cors({
    origin: "http://localhost:5173", // allow React frontend
    methods: ["GET", "POST", "PUT ", "DELETE", "PATCH"],
}));
app.use(express.json())
app.use('/order_api', order_api_router)
app.use('/Product_listing_api', Product_api_router)
// ----APi for getting orders base on payemnt_type

app.listen(4000, () => console.log("listening local 400"))