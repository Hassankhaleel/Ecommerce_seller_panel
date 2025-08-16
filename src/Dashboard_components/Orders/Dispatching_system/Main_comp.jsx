import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Dispacting_type from './Dispacting_type';
import Data_table from './Data_table';
import { Get_PaymentType_Data_api } from '../Dispatching_apis/DIspatcing_system_apis';
import { useDispatch, useSelector } from 'react-redux';
import { Get_PaymentType_Data_Redux } from '@/Redux/Slices/Dispacting_system_redux';

function Main_comp() {
    const [mnth, set_mnth] = useState("")
    const [activeIndex, setActiveIndex] = useState(0);
    const [paymentType, set_paymentType] = useState("Cod")
    const payment_type = [
        {
            Payment_method: "COD Drders ",
            Type: "Cod",
            Route: 'Orders_by_pyment_type'
        },
        {
            Payment_method: "Full Online Payments Orders",
            Type: "Full",
            Route: 'Orders_by_pyment_type'

        },
        {
            Payment_method: "Advacne Online Payments Orders",
            Type: "Advanced",
            Route: 'Orders_by_pyment_type'

        }
    ]
    const months = [
        "January", "February", "March", "April",
        "May", "June", "July", "August",
        "September", "October", "November", "December"
    ];





    //---MONTHS EFFECTS=---
    useEffect(() => {
        let date = new Date()
        let mnth = date.getMonth()
        for (let index = 0; index < months.length; index++) {

            if (mnth == index) {
                set_mnth(months[index])
            } else {
                console.log("no month found");

            }

        }
    }, [])
    let months_seletore = (v, i) => {
        set_mnth(v)

    }
    // ------------------------------------
    const handler = (type) => {
        alert("ahndler called in main")
        set_paymentType(type)
    };
    useEffect(() => {
        handler(paymentType)
    }, [paymentType])

    return (
        <>

            {/* --FILTERS START */}
            <div className='bg-[#1e2640]  w-max mx-auto p-5 px-8  shadow mt-4 flex justify-center items-center'>
                <h1 className='font-[Poppins] text-2xl text-white '>Orders Recieved </h1>
            </div>
            <div className='m-10'>
                <div className='mb-2' >
                    <div className='flex justify-between items-center '>
                        <h2 className='font-[inter] font-bold text-[20px] tracking-wide'>Overview</h2>
                        {/* --------MONTHS DROPWONS VIA TAILWIND-------- start*/}
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                                    {mnth}
                                    <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
                                </MenuButton>
                            </div>

                            <MenuItems
                                transition
                                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/50 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                            >
                                <div className="py-4 ">
                                    {
                                        months.map((v, i) =>
                                        (
                                            <>
                                                <MenuItem key={i}  >
                                                    <a onClick={() => {
                                                        months_seletore(v, i)
                                                    }}

                                                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden" >
                                                        {v} </a>
                                                </MenuItem>

                                            </>
                                        )
                                        )
                                    }
                                </div>
                            </MenuItems>
                        </Menu>
                        {/* -------MONTHS DROPWONS VIA TAILWIND------end*/}
                    </div>
                </div>
                {/* -----------------BOXES PAYMENT NAVBAR----------------- */}
                <div className='flex gap-x-30 mb-5 justify-start items-center   '>
                    {payment_type.map((text, index) => (
                        // console.log(index, activeIndex)
                        <>
                            < div
                                key={index}
                                className="relative  pb-2 cursor-pointer w-max"
                                onClick={() => {
                                    setActiveIndex(index)
                                    handler(text.Type)
                                }}
                            >
                                <p className="font-light opacity-70 font-[Poppins] text-[18px]">{text.Payment_method}</p>
                                {/* Expanding underline */}
                                <span

                                    className={`absolute left-0 bottom-0  h-[4px] bg-blue-500 transition-all duration-300 ${activeIndex === index ? "w-full" : "w-0"
                                        }`}
                                ></span>
                            </div>
                        </>

                    ))}
                </div>
                <div>
                </div>
            </div >
            <Dispacting_type paymentType={paymentType} />
            <Data_table />

        </>

    )

}

export default Main_comp