import React from 'react'

export default function OnlineCompo() {
    return (
        <div className='flex   gap-y-50  gap-x-5'>
            <div className='bg-white min-w-[200px]  shadow rounded-[10px]  flex flex-col justify-center w-[50%] items-start p-5'>
                <div className='flex  min-w-max items-center gap-x-3 opacity-50 pb-3'>
                    <p className='font-[inter] '>Pending Payouts Online</p>
                    <i className="fa-solid fa-circle-exclamation opacity-50"></i>
                </div>
                <h1 className='text-2xl font-bold font font-[inter]'>₹1512.5</h1>
            </div>
            <div className='bg-white shadow min-w-[200px]   rounded-[10px] flex flex-col justify-center w-[50%] items-start p-5'>
                <div className='flex min-w-max items-center gap-x-3 opacity-50 pb-3'>
                    <p className='font-[inter] '>Completed payout Online</p>
                    <i className="fa-solid fa-circle-exclamation opacity-50"></i>
                </div>
                <h1 className='text-2xl font-bold font font-[inter]'>₹78,312.19</h1>
            </div>
        </div>
    )
}
