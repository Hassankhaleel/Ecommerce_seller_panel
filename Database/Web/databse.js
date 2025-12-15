import mongoose from "mongoose";


import order_schema from "./Orders_api/orders_schema.js";
import { main_category_schema, main_collection_schema, sub_category_schema, sub_collection_shema } from "./Product_api/Product_schema.js";
const db_uri = "mongodb+srv://Ecommerce:Ecommerce0012@ecommerce.vcx1yco.mongodb.net/ecommerce"
mongoose.connect(db_uri).then((res) => {
    console.log("db connected");

}).catch((Err) => {
    console.log(Err);

})

const Orders_model = mongoose.model("Orders", order_schema)
const main_collection_schema_model = mongoose.model("Main_Collection", main_collection_schema)
const sub_collection_shemaschema_model = mongoose.model("sub_collection", sub_collection_shema)
const sub_category_schema_model = mongoose.model("sub_categories", sub_category_schema)
const main_category_schema_model = mongoose.model("main_categories", main_category_schema)
export { Orders_model, main_collection_schema_model, sub_collection_shemaschema_model, main_category_schema_model, sub_category_schema_model };