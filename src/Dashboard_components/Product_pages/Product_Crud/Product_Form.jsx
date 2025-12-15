import React, { useState } from "react";
// import Add_Product_and_subProduct_Names_Api from "../Produ~ct_Apis/Add_Product_and_subProduct_Names_Api";
import Add_Product_and_subProduct_Names from "./Add_Product_and_subProduct_Names";
import { Cat } from "lucide-react";

export default function Product_Form() {
    const [formData, setFormData] = useState(
        {

            name: "",
            description: "",
            category: "",
            subCategory: "",
            price: "",
            discountPrice: "",
            stock: "",
            sku: "",
            brand: "aaa",
            status: "draft",
            tags: [],
        });

    const [tagInput, setTagInput] = useState("");
    const [popup_state, setpopu_state] = useState("");//cat_popup \\ sub_cat_popup
    const [indexx, set_indexx] = useState(0);
    const [popup_sub, set_popup_sub] = useState(0);

    const categories = [
        { value: "electronics", label: "Electronics", key: 1 },
        { value: "clothing", label: "Clothing", key: 2 },
        { value: "home", label: "Home & Garden", key: 3 },
        // { ADD_SUB: "ADD NEW SUB CATEGORY", key: 3 },

    ];

    const subCategories = [

        { electronics: ["Phones", "Laptops", "Headphones", "Cameras"] },

        { clothing: ["Men's Clothing", "Women's Clothing", "Shoes", "Accessories"] },
        { home: ["Furniture", "Kitchen", "Garden", "Home Decor"] },
    ]
    // console.log(subCategories[0].clothing)

    console.log(subCategories)
    const handleChange = (CAT) => (e) => {
        alert(e.target.value);
        // alert(e.target.value);

        //there is problem in value becasue we are getting cat_popup as well on selection
        // setpopu_state(cat==e.)
        if (e.target.value != "cat_popup") {
            setFormData({ ...formData, [CAT]: e.target.value })
            console.log(CAT);

        };
        if (e.target.value == "cat_popup") setpopu_state("cat_popup")
        if (e.target.value == "sub_cat_popup") setpopu_state("sub_cat_popup")
        if (CAT == "category") {
            set_indexx(e.target.selectedIndex)
        }




    };

    alert(indexx)// ;

    const addTag = () => {
        if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
            setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
            setTagInput("");
        }
    };

    const removeTag = (tag) => {
        setFormData({ ...formData, tags: formData.tags.filter((t) => t !== tag) });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.discountPrice && Number(formData.discountPrice) >= Number(formData.price)) {
            alert("Discount price must be less than regular price");
            return;
        }
        console.log("Product Saved:", formData);
        alert("Product saved successfully!");


    };
    // console.log(popup);

    return (
        <>
            <form onSubmit={handleSubmit} className="max-w-4xl my-5 mx-auto p-6 bg-[#e0e0e0] shadow-md rounded-lg space-y-6">
                <h2 className="text-2xl font-bold">Add Product</h2>

                {/* Product Name */}

                <div>
                    <label className="block mb-1 font-medium">Product Name *</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        placeholder="Enter product name"
                        required
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block mb-1 font-medium">Description *</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        rows="3"
                        placeholder="Enter product description"
                        required
                    />
                </div>

                {/* Category & Subcategory */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Category *</label>
                        {
                            popup_state == "cat_popup" ? <>{<Add_Product_and_subProduct_Names category_type={formData} />}</>
                                :
                                <>
                                    <select
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange("category")}
                                        className="w-full border p-2 rounded"
                                        required
                                    >
                                        {/* <option value="">Select category</option> */}
                                        {categories.map((cat, ind) => (
                                            <>
                                                <option key={cat.key} value={cat.value}>
                                                    {cat.label}
                                                </option>
                                            </>

                                        ))}
                                        <option value={"cat_popup"}>ADD NEW CATRGORY</option>

                                    </select>
                                </>
                        }
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Sub-Category</label>
                        {
                            popup_state == "cat_popup" || popup_state == "sub_cat_popup" ?
                                <>
                                    {<Add_Product_and_subProduct_Names category_type={formData} />}
                                </>
                                :
                                <>
                                    <select
                                        name="subCategory"
                                        value={formData.subCategory}
                                        onChange={handleChange("subCategory")}
                                        className="w-full border p-2 rounded"
                                    >
                                        {   //              0        electronics                                       
                                            //              1        electronics                                       
                                            //              0        electronics                                       
                                            subCategories[indexx][formData.category]?.map((sub, idx) => (
                                                < option key={idx} value={sub} >
                                                    {sub}
                                                </option>
                                            ))}
                                        <option value={"sub_cat_popup"} >ADD NEW SUB</option>
                                    </select>
                                </>
                        }
                    </div>
                </div>

                {/* SKU & Brand */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">SKU *</label>
                        <input
                            type="text"
                            name="sku"
                            value={formData.sku}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            placeholder="e.g., PROD-001"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium">Brand *</label>
                        <input
                            type="text"
                            name="brand"
                            value={formData.brand}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            placeholder="Enter brand name"
                            required
                        />
                    </div>
                </div>

                {/* Price & Discount */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block mb-1 font-medium">Price *</label>
                        <input
                            type="number"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            placeholder="0.00"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1 font-medium">Discount Price</label>
                        <input
                            type="number"
                            name="discountPrice"
                            value={formData.discountPrice}
                            onChange={handleChange}
                            className="w-full border p-2 rounded"
                            placeholder="0.00"
                        />
                    </div>
                </div>

                {/* Stock */}
                <div>
                    <label className="block mb-1 font-medium">Stock Quantity *</label>
                    <input
                        type="number"
                        name="stock"
                        value={formData.stock}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                        placeholder="0"
                        required
                    />
                </div>

                {/* Tags */}
                <div>
                    <label className="block mb-1 font-medium">Tags</label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            value={tagInput}
                            onChange={(e) => setTagInput(e.target.value)}
                            className="flex-1 border p-2 rounded"
                            placeholder="Add a tag"
                        />
                        <button type="button" onClick={addTag} className="bg-blue-500 text-white px-4 rounded">
                            Add
                        </button>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {formData.tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-200 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                            >
                                {tag}
                                <button type="button" onClick={() => removeTag(tag)} className="text-red-500">
                                    ×
                                </button>
                            </span>
                        ))}
                    </div>
                </div>

                {/* Status */}
                <div>
                    <label className="block mb-1 font-medium">Status</label>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="w-full border p-2 rounded"
                    >
                        <option value="active">Active</option>
                        <option value="draft">Draft</option>
                    </select>
                </div>

                {/* Submit */}
                <div className="flex justify-end gap-4 pt-4">
                    <button type="button" className="px-4 py-2 border rounded">
                        Cancel
                    </button>
                    <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">
                        Save Product
                    </button>
                </div>
            </form >
        </>

    );
}
