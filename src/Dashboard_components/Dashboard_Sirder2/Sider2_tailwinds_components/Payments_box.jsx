import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Payments_box() {
  const Navigate = useNavigate()
  const [mnth, set_mnth] = useState("")
  const paragraphs = [
    {
      Payment_method: "COD orders (Dukaan Delivery)",
      Route: 'Cod'
    },
    {
      Payment_method: "Online Payments",
      Route: 'Online'

    }
  ]
  const [activeIndex, setActiveIndex] = useState(null);
  const months = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];
  useEffect(() => {
    // alert("asdasdasdasdasdasdasdsad");

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


  return (
    <>
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
          <div
            key={index}
            className="relative  pb-2 cursor-pointer w-max"
            onClick={() => {
              setActiveIndex(index)
              Navigate(text.Route)
            }}
          >
            <p className="font-light opacity-70 font-[Poppins] text-[18px]">{text.Payment_method}</p>
            {/* Expanding underline */}
            <span
              className={`absolute left-0 bottom-0  h-[4px] bg-blue-500 transition-all duration-300 ${activeIndex === index ? "w-full" : "w-0"
                }`}
            ></span>
          </div>
        ))}
      </div>
      <div>

        {/* -------BOXES---starts------------ */}

        <Outlet />
      </div>
    </>

  )
}
