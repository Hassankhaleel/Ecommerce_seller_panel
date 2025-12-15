import mongoose from "mongoose"
import { ref } from "process"
import { string } from "zod"


// ---this is the schem wher wwe arestoring all products 
const main_collection_schema = mongoose.Schema({
    collection_name: { type: String, required: true },
    collection_id: { type: String, required: true }

})
const sub_collection_shema = mongoose.Schema({
    sub_collection_name: { type: String, required: true },
    sub_collection_size: { type: [String], required: true },
    sub_collection_quantity: { type: Number, required: true },
    sub_collection_prize: { type: Number, required: true },
    sub_collection_img: { type: String, required: true },
    sub_collection_color: { type: [Number], required: true },
    sub_collection_sku: { type: String, required: true },
    sub_collection_catogary: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "main_collection_schema",
        required: true
    }
})

// ================================
// this is the shcema for just catnad subcat ,becasue we can find avaiablbe cat/subcat easily
const main_category_schema = mongoose.Schema({
    Name: String,
    caterogy_section: String
})
const sub_category_schema = mongoose.Schema({
    Name: String,
    sub_caterogy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "main_category",
        required: true
    },
    caterogy_section: String
})
export { main_collection_schema, sub_collection_shema, main_category_schema, sub_category_schema }