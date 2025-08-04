import React, { useEffect, useState } from 'react'
import DropDown from './DropDown';
import axios from 'axios';
import { number } from 'zod';
import Filtering_orders from './Filtering_orders';
import { useSelector } from 'react-redux';

function Orders_Dispacthing(orde_data) {
    // const [dlt_order, set_order_dlt] = useState()
    const [order_recieved_data, set_order_recieved_data] = useState([{}])
    console.log(order_recieved_data.length);

    const [order_acceptance, set_order_accepted] = useState(false)
    const [stored_status, store_delievery_status] = useState({
        order_status: false
    })
    const [Delievery_STATUS, set_Delievery_STATUS] = useState([
        {
            Title: "Accepting",
            st_Color: "#DC7585",
            Disable: true,


        },
        {
            Title: "On PickUp",
            st_Color: "#DC2626",
            Disable: true,


        },
        {
            Title: "On Packing",
            st_Color: "#F59E0B"
            ,
            Disable: true
        },
        {
            Title: "Out For Deliever",
            st_Color: "#EA580C"
            ,
            Disable: true
        },
        {
            Title: "Delieverd",
            st_Color: "#65A30D"
            ,
            Disable: true
        }])

    const data_by_pyMethod = useSelector((state) => {
        return state.OrderPymntTypeSlice?.value?.payment_typed_data ?? []
    })


    return (
        <>

            <div className='m-5'>
                <div className="w-[50%] mb-2">
                    <div className="flex items-center rounded-md  pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                        <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <input

                            type="text"
                            placeholder="Order No / Cell No"
                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        />
                        <div className="grid shrink-0 grid-cols-1 focus-within:relative">


                        </div>
                    </div>

                    {
                        Delievery_STATUS.map((val, i) => {
                            return (
                                <button key={i} value={`${val.Title}`} style={{
                                    backgroundColor: `${val.st_Color}`,

                                }} className='p-2  cursor-pointer text-white shadow m-2 '
                                    onClick={() => {
                                        store_delievery_status(() => {
                                            stored_status.order_status = val.Disable
                                        })


                                    }}>
                                    {
                                        val.Title
                                    }
                                </button>

                            )
                        })
                    }
                </div>
                <div className='shadow border bg-white ]'>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse  border-gray-300  text-[15px] text-center">
                            <thead className="bg-[#1e2640cf]  font-[Poppins] text-[#ffff]  ">
                                <tr>
                                    <th className="px-4 font-light tracking-wide py-2">Order Date</th>
                                    <th className="px-4  font-light tracking-wide py-2">Order No</th>
                                    <th className="px-4  font-light tracking-wide py-2">Cell NO</th>
                                    <th className="px-4 font-light tracking-wide  py-2">Payment Method</th>
                                    <th className="px-4 font-light tracking-wide  py-2">Discount</th>
                                    <th className="px-4  font-light tracking-wide py-2">Total amount</th>
                                    <th className="px-4  font-light tracking-wide py-2">Delievery Status</th>
                                    <th className="px-4  font-light tracking-wide py-2">Cancel order</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data_by_pyMethod && data_by_pyMethod.length > 0 ? (
                                    data_by_pyMethod.map((order, i) => {
                                        const details = order.Order_Details || {};
                                        const orderer = order.Orderer_Details || {};

                                        return (
                                            <tr key={details.order_id || i} className="border-b">
                                                <td className="px-4 py-2">{details.order_Date}</td>
                                                <td className="px-4 py-2">{details.order_id}</td>
                                                <td className="px-4 py-2">{orderer.orderer_Number}</td>
                                                <td className="px-4 py-2">{details.order_Payemnt_type}</td>
                                                <td className="px-4 py-2">{details.order_Discount}</td>
                                                <td className="px-4 py-2">{details.order_Amount}</td>
                                                <td className="px-4 py-2">{details.order_current_status}</td>
                                                <td className="px-4 py-2">
                                                    <button
                                                        onClick={() => onCancel && onCancel(details.order_id)}
                                                        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                                                    >
                                                        Cancel
                                                    </button>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan={8} className="px-4 py-6">
                                            No orders found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Orders_Dispacthing