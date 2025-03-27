import React, { useEffect, useState } from 'react'
import DropDown from './DropDown';

function Orders_Dispacthing() {
    const data = [
        {
            OrderDate: "12 July, 2023",
            OrderNo: "#12q89",
            PurchasedBy: "Online",
            PaymentMethod: "COD",
            Amount: "₹10,125",
            DeliverySatatus: "In Packing",
            Cell: "+92136846981",

        },
        {
            OrderDate: "12 July, 2023",
            OrderNo: "#29a36",
            PurchasedBy: "Online",
            PaymentMethod: "JazzCash",
            Amount: "₹95.5",
            DeliverySatatus: "Ware house",
            Cell: "+92367889741",

        },
        {
            OrderDate: "12 July, 2023",
            OrderNo: "#12q89",
            PurchasedBy: "Online",
            PaymentMethod: "COD",
            Amount: "₹10,125",
            DeliverySatatus: "In Packing",
            Cell: "+92136846981",

        },
        {
            OrderDate: "12 July, 2023",
            OrderNo: "#29a36",
            PurchasedBy: "Online",
            PaymentMethod: "JazzCash",
            Amount: "₹95.5",
            DeliverySatatus: "Ware house",
            Cell: "+92367889741",

        },
        {
            OrderDate: "12 July, 2023",
            OrderNo: "#12q89",
            PurchasedBy: "Online",
            PaymentMethod: "COD",
            Amount: "₹10,125",
            DeliverySatatus: "In Packing",
            Cell: "+92136846981",

        },
        {
            OrderDate: "12 July, 2023",
            OrderNo: "#29a36",
            PurchasedBy: "Online",
            PaymentMethod: "JazzCash",
            Amount: "₹95.5",
            DeliverySatatus: "Ware house",
            Cell: "+92367889741",

        },

    ];

    return (
        <>
            <div className='bg-[#1e2640]  w-max mx-auto p-5 px-8  shadow mt-4 flex justify-center items-center'>
                <h1 className='font-[Poppins] text-2xl text-white '>Orders Recieved </h1>
            </div>

            <div className='m-5'>
                <div className="w-[30%] mb-2">
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
                </div>
                <div className='shadow border bg-white ]'>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse  border-gray-300  text-[15px] text-center">
                            <thead className="bg-[#1e2640cf]  font-[Poppins] text-[#ffff]  ">
                                <tr>
                                    <th className="px-4 font-light tracking-wide py-2">Order Date</th>
                                    <th className="px-4  font-light tracking-wide py-2">Order No</th>
                                    <th className="px-4  font-light tracking-wide py-2">Cell NO</th>
                                    <th className="px-4 font-light tracking-wide  py-2">Purchasing Method</th>
                                    <th className="px-4 font-light tracking-wide  py-2">Payment Method</th>
                                    <th className="px-4  font-light tracking-wide py-2">Total amount</th>
                                    <th className="px-4  font-light tracking-wide py-2">Delievery Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr
                                        key={index}
                                        className="border-b  border-gray-200 hover:bg-gray-50 pt-4"
                                    >
                                        <td className="px-4 text-[#146EB4] py-2">{row.OrderDate}</td>
                                        <td className="px-4 py-2">
                                            <span className={`font-bold ${row.statusColor}`}>
                                                {row.OrderNo}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2">{row.Cell}</td>
                                        <td className="px-4 py-2">{row.PurchasedBy}</td>
                                        <td className="px-4 py-2">{row.PaymentMethod}</td>
                                        <td className="px-4 py-2">{row.Amount}</td>
                                        <DropDown />
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Orders_Dispacthing