import React, { useState } from 'react'

function Months_history() {
    const data = [
        {
            payoutDate: "12 July, 2023",
            payoutStatus: "Processing",
            transactionId: "131634495747",
            totalOrderAmount: "₹10,125.00",
            gatewayFees: "-₹1,000",
            totalPayoutAmount: "₹9,125.00",
            statusColor: "text-gray-500",
        },
        {
            payoutDate: "12 July, 2023",
            payoutStatus: "Successful",
            transactionId: "131634495747",
            totalOrderAmount: "₹10,125.00",
            gatewayFees: "-₹1,000",
            totalPayoutAmount: "₹9,125.00",
            statusColor: "text-green-500",
        },
    ];
    const [assending, set_assending] = useState(true);
    return (
        <>

            <div className='mt-7'>
                <div className=''>
                    <div>
                        <h1 className='font-[Poppins] font-medium tracking-wide'>Transitions | This Month</h1>
                    </div>
                    <div className='flex flex-wrap  gap-4 my-2'>
                        <button className='bg-[#E6E6E6] focus:bg-[#146EB4] focus:text-white shadow tracking-wider font-[Poppins] text-[10px] px-4 py-1.5 opacity-80 rounded-full   min-w-fit '>
                            Pending Payouts (54)
                        </button>
                        <button className='bg-[#E6E6E6] focus:bg-[#146EB4] focus:text-white shadow tracking-wider font-[Poppins] text-[10px] px-4 py-1.5 opacity-80 rounded-full  min-w-fit'>
                            Completed Payouts (23)
                        </button>
                        <button className='bg-[#E6E6E6] focus:bg-[#146EB4] focus:text-white shadow tracking-wider font-[Poppins] text-[10px] px-4 py-1.5 opacity-80 rounded-full min-w-fit '>
                            Refunds (11)
                        </button>


                    </div>

                </div>

                <div className="p-6 bg-white shadow ">

                    {/* ---------SORTING FUNCTIONALIT-------------- */}
                    <div className='mb-3 flex  flex-row-reverse justify-between items-center'>
                        <div className='gap-x-2.5 flex items-center justify-center cursor-pointer '>
                            <button className='font-[inter] cursor-pointer  text-[15px] text-[#4D4D4D] border border-[#b8b8b8]  py-1.5 px-3 rounded-[5px]'
                                onClick={() => set_assending(!assending)}
                            >
                                Sort
                                <i className={`fa-solid fa-arrow-up-long ml-2 text-[13px] ${assending ? "opacity-100" : "opacity-30"}`}></i>
                                <i className={`fa-solid fa-arrow-up-long rotate-180 ${assending ? "opacity-30" : "opacity-100"}  text-[13px]`}></i>
                            </button>
                            <button className='font-[inter] text-[15px] text-[#4D4D4D] border border-[#b8b8b8]  py-1.5 px-3 rounded-[5px]'

                            >
                                <i className="fa-solid fa-file-arrow-down"></i>

                            </button>
                        </div>
                        {/* ---------------SERACH BAR-------------------- */}
                        <div className="w-[30%] ">
                            <div className="flex items-center rounded-md  pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                </div>
                                <input

                                    type="text"
                                    placeholder="Order ID or transaction ID"
                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                />
                                <div className="grid shrink-0 grid-cols-1 focus-within:relative">


                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ----------------------TABLE --------------------------- */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse  border-gray-300 text-[12px] text-center">
                            <thead className="bg-[#F2F2F2]  font-[Poppins] text-[#4D4D4D]  ">
                                <tr>
                                    <th className="px-4 font-bold tracking-wide py-2">Payout date</th>
                                    <th className="px-4 font-bold tracking-wide  py-2">Payout status</th>
                                    <th className="px-4 font-bold tracking-wide  py-2">Transaction ID</th>
                                    <th className="px-4  font-bold tracking-wide py-2">Total order amount</th>

                                    <th className="px-4  font-bold tracking-wide py-2">Total payout amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((row, index) => (
                                    <tr
                                        key={index}
                                        className="border-b border-gray-200 hover:bg-gray-50"
                                    >
                                        <td className="px-4 text-[#146EB4] py-2">{row.payoutDate}</td>
                                        <td className="px-4 py-2">
                                            <span className={`font-bold ${row.statusColor}`}>
                                                ● {row.payoutStatus}
                                            </span>
                                        </td>
                                        <td className="px-4 py-2">{row.transactionId}</td>
                                        <td className="px-4 py-2">{row.totalOrderAmount}</td>

                                        <td className="px-4 py-2">{row.totalPayoutAmount}</td>
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

export default Months_history