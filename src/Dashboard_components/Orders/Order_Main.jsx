import React from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Filtering_orders from './Filtering_orders';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { getting_data_by_payemny_type, payment_type_reducer, status_changer_redux, status_updater_reduxx } from '@/Redux/Slices/order_by_pymnt_type';
function Order_Main() {

  const Navigate = useNavigate()
  const [mnth, set_mnth] = useState("")
  const [orders_payment_type, set_orders_by_payment_type] = useState("")
  const [Order_payment_type, set_Order_payment_type] = useState("Cod")
  const paragraphs = [
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
  ]///---this will show in top when first timeuser clicked
  const [activeIndex, setActiveIndex] = useState(0);
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const dispact_data_by_pyMethod = useDispatch()

  const dispatch_ids = useDispatch()
  function handleClick(py_type) {
    set_Order_payment_type(py_type)

  }

  const status_filters = useSelector((state) => {
    console.log(state);

    return state.OrderPymntTypeSlice?.value?.filter_stater ?? []
  })
  console.log(status_filters);


  useEffect(() => {
    // alert()
    axios.post(
      `http://localhost:4000/orders_by_payment_type`,
      {
        Order_payment_type: Order_payment_type,

      },
      {
        params: { status_filters: status_filters.value }
      }


    )
      .then((res) => {

        const payment_typed_data = res.data;
        ///STORING IDs TO CHANGE THERI STATUS BASE OID ///EFFIECNT WAY
        let ids = payment_typed_data.map(data => data._id)
        dispatch_ids(status_updater_reduxx(ids))
        console.log(payment_typed_data, "py-typed data in forntedn");
        set_orders_by_payment_type(payment_typed_data)
        dispact_data_by_pyMethod(getting_data_by_payemny_type(payment_typed_data))

      }).catch((err) => {
        console.log(err, "err");

      })
    dispact_data_by_pyMethod(payment_type_reducer(orders_payment_type))
  }, [Order_payment_type, status_filters])
  // --------UPDATE STAUSBASE ON IDS--------

  // console.log(status_to_be_changed, "status to be hcnaged")



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

    // ick(orders_payment_type)
  }, [])
  let months_seletore = (v, i) => {
    set_mnth(v)

  }




  return (
    <>
      {/* --FILTERS START */}
      <div className='bg-[#1e2640]  w-max mx-auto p-5 px-8  shadow mt-4 flex justify-center items-center'>
        <h1 className='font-[Poppins] text-2xl text-white '>Orders Recieved </h1>
      </div>
      <div className='m-10'>
        <div className='mb-2' >
          <div className='flex justify-between items-center '>
            <h2 className='font-[inter] font-bold text-[20px] tracking-wide
'>Overview</h2>
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
          {paragraphs.map((text, index) => (
            // console.log(index, activeIndex)
            <>
              < div
                key={index}
                className="relative  pb-2 cursor-pointer w-max"
                onClick={() => {
                  setActiveIndex(index)
                  Navigate(text.Route)
                  // set_orders_by_payment_type(text.Payment_method)
                  handleClick(text.Type)
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
      {/* --FILTERS END */}
      < Outlet />

    </>

  )

}

export default Order_Main