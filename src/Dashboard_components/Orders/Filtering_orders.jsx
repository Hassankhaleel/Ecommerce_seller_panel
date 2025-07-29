import React, { useState } from 'react'
import Orders_Dispacthing from './Orders_Dispacthing';

function Filtering_orders() {

    return (
        <>

            <div className='mt-7'>

                <div className=''>
                    <div>
                        <h1 className='font-[Poppins] font-medium tracking-wide'>Transitions | This Month</h1>
                    </div>
                    <div className='flex flex-wrap  gap-4 my-2'>
                        <button className='bg-[#E6E6E6] focus:bg-[#146EB4] focus:text-white shadow tracking-wider font-[Poppins] text-[10px] px-4 py-1.5 opacity-80 rounded-full   min-w-fit '>
                            NEW ORDERS (54)
                        </button>
                        <button className='bg-[#E6E6E6] focus:bg-[#146EB4] focus:text-white shadow tracking-wider font-[Poppins] text-[10px] px-4 py-1.5 opacity-80 rounded-full   min-w-fit '>
                            ALL ORDERS (105)
                        </button>
                        <button className='bg-[#E6E6E6] focus:bg-[#146EB4] focus:text-white shadow tracking-wider font-[Poppins] text-[10px] px-4 py-1.5 opacity-80 rounded-full   min-w-fit '>
                            ACCEPTED (54)
                        </button>
                        <button className='bg-[#E6E6E6] focus:bg-[#146EB4] focus:text-white shadow tracking-wider font-[Poppins] text-[10px] px-4 py-1.5 opacity-80 rounded-full  min-w-fit'>
                            ON PACKING (23)
                        </button>
                        <button className='bg-[#E6E6E6] focus:bg-[#146EB4] focus:text-white shadow tracking-wider font-[Poppins] text-[10px] px-4 py-1.5 opacity-80 rounded-full min-w-fit '>
                            OUT FOR DELIEVERD (11)
                        </button>
                        <button className='bg-[#E6E6E6] focus:bg-[#146EB4] focus:text-white shadow tracking-wider font-[Poppins] text-[10px] px-4 py-1.5 opacity-80 rounded-full min-w-fit '>
                            DELIEVERD (25)
                        </button>


                    </div>

                </div>
                <Orders_Dispacthing />
            </div>


        </>
    )
}

export default Filtering_orders