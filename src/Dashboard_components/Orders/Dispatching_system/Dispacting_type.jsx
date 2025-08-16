import { Button } from '@radix-ui/themes'
import React, { useEffect, useState } from 'react'
import { Get_PaymentType_Data_api } from '../Dispatching_apis/DIspatcing_system_apis'
import { useDispatch } from 'react-redux';
import { Get_PaymentType_Data_Redux } from '@/Redux/Slices/Dispacting_system_redux';
function Dispacting_type({ paymentType }) {
    console.log(paymentType);

    const [filter, set_filters] = useState("New Orders")//text
    const [dispatch_status, set_dispatch_status] = useState("Nothing")//text

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
    const api_handler = () => {
        console.log(filter)
        console.log("handler called")
        // set_loader(true); // ✅ Start loading before API call
        Get_PaymentType_Data_api({ type: paymentType, filter: filter })
            .then((data) => {
                console.log(data);
                payment_TypeData_dispatcher(Get_PaymentType_Data_Redux(data))
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                // set_loader(false); // ✅ Stop loading after API finishes
            })
    }
    useEffect(() => {
        api_handler()

    }, [paymentType])


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
                    <button className='bg-[#000000] text-white shadow tracking-wider font-[Poppins] text-[15px] px-4 py-2 opacity-80   min-w-fit '>
                        {dispatch_status}
                    </button>
                </div>

            </div >


        </>
    )
}

export default Dispacting_type