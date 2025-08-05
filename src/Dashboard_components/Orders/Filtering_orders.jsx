import React, { useEffect, useState } from 'react'
import Orders_Dispacthing from './Orders_Dispacthing';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { filter_dispatcer_redux, status_changer_redux } from '@/Redux/Slices/order_by_pymnt_type';

function Filtering_orders() {
    const [filters, set_filters] = useState("New Orders")
    const [status_changer, set_status_Changer] = useState("Accept Orders")
    const filter_btn = [

        {
            text: "New Orders",
            status: "Accept Orders",
            state: "active",
        },
        {
            text: "Accepted Orders",
            status: "On Packing",

            state: "active",
        },
        {
            text: "Packed Orders",
            status: "Out Orders",

            state: "active",
        },
        {
            text: "Out Orders",
            status: "Delieverd Orders",

            state: "active",
        },
        {
            text: "DELIVERED Orders",
            status: "All Orders are Deleiverd",

            state: "active",
        }
    ]

    const filter_dispater = useDispatch()
    function api_caller(data) {
        set_filters(data)

    }
    useEffect(() => {
        filter_dispater(filter_dispatcer_redux(filters))
        filter_dispater(status_changer_redux(status_changer))
    }, [filters])


    return (
        <>

            <div className='mt-7'>

                <div className=''>
                    <div>
                        {/* <h1 className='font-[Poppins] font-medium tracking-wide'>Transitions | This Month</h1> */}
                    </div>
                    <div className='flex flex-wrap  gap-4 my-2'>
                        {
                            filter_btn.map((v, i) => {
                                return (
                                    <>
                                        <button
                                            onClick={() => {
                                                api_caller(v.text)
                                                set_status_Changer(v.status)
                                            }}
                                            style={{ backgroundColor: v.text == filters ? "#146EB4" : "" }}
                                            key={i} className='bg-[#E6E6E6] focus:bg-[#146EB4] focus:text-white shadow tracking-wider font-[Poppins] text-[10px] px-4 py-1.5 opacity-80 rounded-full   min-w-fit '>
                                            {v.text}

                                        </button>
                                    </>
                                )
                            })
                        }


                    </div>

                </div>

                <Orders_Dispacthing />
            </div>


        </>
    )
}

export default Filtering_orders