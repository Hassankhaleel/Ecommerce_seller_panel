import { Button } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import { DIspatch_status_updater_api, Get_PaymentType_Data_api } from '../Dispatching_apis/DIspatcing_system_apis'
import { useDispatch } from 'react-redux';
import { Get_PaymentType_Data_Redux } from '@/Redux/Slices/Dispacting_system_redux';
function Dispacting_type({ paymentType }) {
    // console.log(paymentType);

    const [filter, set_filters] = useState("New Orders")//text

    const [ids, set_ids] = useState()//text
    const [dispatch_status, set_dispatch_status] = useState("Accept Orders")//text
    const [referesher, set_referesher] = useState()//text

    const filter_btn = [

        {
            index: 1,
            text: "New Orders",
            status: "Accept Orders",

        },
        {
            index: 2,
            text: "Accept Orders",
            status: "Packed Orders",


        },
        {
            index: 3,
            text: "Packed Orders",
            status: "Out Orders",


        },
        {
            index: 4,
            text: "Out Orders",
            status: "Delieverd Orders",


        },
        {
            index: 5,
            text: "Delieverd Orders",
            status: "Delieverd Orders",


        }
    ]
    const payment_TypeData_dispatcher = useDispatch()
    const api_handler = (filter) => {
        console.log(filter)
        // set_loader(true); // ✅ Start loading before API call
        Get_PaymentType_Data_api({ type: paymentType, filter: filter })
            .then((data) => {
                let get_ids = data.data.map((v, i) => {
                    // console.log(v._id, "ids");
                    return v._id


                })

                set_ids(get_ids)
                payment_TypeData_dispatcher(Get_PaymentType_Data_Redux(data.data))
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                // set_loader(false); // ✅ Stop loading after API finishes
            })

    }



    const status_changer_handler = () => {
        DIspatch_status_updater_api(dispatch_status, ids)
            .then((res) => {
                console.log(res.data);
                api_handler(filter)
                console.log(filter);

            }).catch((err) => {
                console.log(err);

            })
    }

    return (
        <>

            <div className='mt-7'>

                <div className='flex justify-center items-start flex-col'>

                    <div className='flex flex-wrap   gap-4 my-2'>
                        {
                            filter_btn.map((v, i) => {
                                return (
                                    <>
                                        <button
                                            onClick={() => {
                                                set_dispatch_status(v.status)
                                                set_filters(v.text)
                                                api_handler(v.text)
                                            }}
                                            style={{
                                                backgroundColor: v.text == filter ? "#146EB4" : ""
                                            }}
                                            key={i} className='bg-[#E6E6E6] focus:bg-[#146EB4]  shadow tracking-wider font-[Poppins] text-[12px] px-4 py-1.5  opacity-80 rounded-full   min-w-fit '>
                                            {v.text}
                                        </button >
                                    </>
                                )
                            })
                        }


                    </div>
                    {
                        referesher ? <>
                            <button
                                onClick={() => {
                                    set_referesher(!referesher)
                                    status_changer_handler()

                                }}
                                className='bg-[#d30700] text-white shadow tracking-wider font-[Poppins] text-[15px] px-4 py-2 opacity-80   min-w-fit '
                            >Refresh page</button>
                        </> : <>
                            <button
                                onClick={() => {
                                    status_changer_handler()
                                    set_referesher(!referesher)
                                }}
                                className='bg-[#000000] text-white shadow tracking-wider font-[Poppins] text-[15px] px-4 py-2 opacity-80   min-w-fit '>

                                {dispatch_status}

                            </button>
                        </>
                    }
                </div>

            </div >


        </>
    )
}

export default Dispacting_type