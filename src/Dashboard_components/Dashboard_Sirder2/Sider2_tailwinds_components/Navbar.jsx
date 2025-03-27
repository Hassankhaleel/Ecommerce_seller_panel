import { ChevronDownIcon } from '@heroicons/react/16/solid'
import { Outlet } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className=' py-3 shadow bg-white w-full flex justify-center items-center'>
                <div className='flex items-center  w-[25%]'>
                    <h6 className='font-[inter] text-[17px] font-medium'>Payments</h6>
                    <div className='flex justify-center px-2 items-center'>

                        <p className='font-[inter] text-[13px] pl-3 opacity-50'>How it works</p>
                        <i className="fa-regular text-[13px] pl-1 opacity-50 fa-circle-question"></i>
                    </div>
                </div>
                {/*---SERACH BAR--- START--- */}
                <div className="w-[30%] ">
                    <div className="flex items-center rounded-md bg-[#F2F2F2] pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                        <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </div>
                        <input

                            type="text"
                            placeholder="Search features, tutorials, etc."
                            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                        />
                        <div className="grid shrink-0 grid-cols-1 focus-within:relative">


                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>

    )
}
