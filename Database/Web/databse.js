import mongoose from "mongoose";
import orders_schema from './Orders_api/orders_schema.js'
const db_uri = "mongodb+srv://Ecommerce:Ecommerce0012@ecommerce.vcx1yco.mongodb.net/ecommerce"
mongoose.connect(db_uri).then((res) => {
    console.log("db connected");

}).catch((Err) => {
    console.log(Err);

})

const Orders_model = mongoose.model("Orders", orders_schema)

export default Orders_model;