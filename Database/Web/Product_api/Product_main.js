import express from "express"
const Product_api_router = express.Router()

// ----API FOR UPLOAD CAT/SUBCAT THROUG FROM -----
Product_api_router.post('/add_categories/:category_type', (req, res) => {
    console.log(req.params);
    console.log(req.body);

})
Product_api_router.post('/list_product/:product_catogary', (req, res) => {
    const { product_catogary, product_name } = req.params;
}
)
export default Product_api_router;