import axios from 'axios'
import React, { useState } from 'react'
import PropTypes from "prop-types"
function Add_Product_and_subProduct_Names(category_type) {
  console.log(category_type.category_type);
  const sub_cat = category_type.category_type.subCategory
  const main_cat = category_type.category_type.category
  const [categories, set_categories] = useState({
    category_Name: "dummy",
    sub_category_Name: "dummy"
  })

  // const apihandler = () => {

  //   axios.post('/add_categories/:category_type', {
  //     category_Name: category_Name,
  //     sub_category_name: sub_category_name
  //   })
  // }


  return (
    <>
      <div className='bg-[#1E2640] p-4 m-5'  >

        <div className='text-white'>
          <label className="block mb-1 text-white font-medium"> </label>
          <input
            type="text"
            name="category"
            // value={categories[category_type]}
            className="w-full border p-2 rounded"
            placeholder="Enter product name"
            required
          // onChange={(e) => {
          //   set_categories({ ...categories, [category_type]: e.target.value })
          // }}
          />
        </div>
        <button className='bg-white p-2 mt-3 w-full'

        >ADD</button>
      </div>

    </>
  )
}
Add_Product_and_subProduct_Names.prototype = {
  category_type: PropTypes.string
}

export default Add_Product_and_subProduct_Names