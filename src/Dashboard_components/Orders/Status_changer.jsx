import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

function Status_changer() {
    const [delievery_stat_chnger, set_Delievery_STATUS] = useState([
        {
            st_Color: "black",
        },
    ]
    )

    const status_Changer = useSelector((state) => {
        return state.OrderPymntTypeSlice?.value?.status_changer ?? []
    })
    const ids = useSelector((data) => data.OrderPymntTypeSlice.value.status_updater)
    console.log(ids);

    const status_to_be_changed = useSelector((data) => data.OrderPymntTypeSlice.value.status_changer)
    const api_caller_hanlder = () => {
        // alert("status changer called")
        axios.patch('http://localhost:4000/update_order_status', {
            ids: ids,
            status_to_be_change: status_to_be_changed
        }).then((res) => {
            console.log(res.data, "status is changed ===data");
            // alert("staus changed")
        }).catch((err) => {
            console.log(err, "status cant be changed");
            // alert("staus cant changed")

        })
    }
    return (
        <>
            <div className="w-[50%] mb-2">
                <div className="flex items-center rounded-md  pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                    <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <input

                        type="text"
                        placeholder="Order No / Cell No"
                        className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                    />
                    <div className="grid shrink-0 grid-cols-1 focus-within:relative">


                    </div>
                </div>

                {
                    delievery_stat_chnger.map((val, i) => {
                        return (
                            <button
                                onClick={() => {
                                    api_caller_hanlder()
                                }
                                }
                                key={i} style={{ backgroundColor: `${val.st_Color}`, }} className='p-2  cursor-pointer text-white shadow m-2 '>
                                {
                                    status_Changer
                                }
                            </button>

                        )
                    })
                }
            </div>

        </>
    )
}

export default Status_changer