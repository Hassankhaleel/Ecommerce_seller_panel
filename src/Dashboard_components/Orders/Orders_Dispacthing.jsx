import React, { useEffect, useState } from 'react'
import DropDown from './DropDown';
import axios from 'axios';
import { number } from 'zod';
import Filtering_orders from './Filtering_orders';
import { useDispatch, useSelector } from 'react-redux';
import { status_changer_redux } from '@/Redux/Slices/order_by_pymnt_type';
import { Outlet } from 'react-router-dom';

function Orders_Dispacthing(orde_data) {


    const payment_typed_data = useSelector((state) => {
        return state.OrderPymntTypeSlice?.value?.payment_typed_data ?? []
    })


    return (
        <>

            <div className='m-5'>

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
                                {payment_typed_data && payment_typed_data.length > 0 ? (
                                    payment_typed_data.map((order, i) => {
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