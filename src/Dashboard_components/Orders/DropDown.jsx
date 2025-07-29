import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import { Button, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
function DropDown({ id, order_acceptance, sharing_status }) {
    // alert(order_acceptance);
    console.log(sharing_status, id, order_acceptance);


    const [Status, set_Status] = useState("On PickUp")
    const [color, set_color] = useState("#DC2626")
    // const [id, set_id] = useState()
    const [droper, setDroper] = useState(false)
    const [OrderAccepte, set_OrderAccepted0] = useState(order_acceptance)

    function status_fun() {
        axios.post('http://localhost:4000/delievery_status_api/current_status', {
            item_id: id,
        }).then((res) => {
            console.log(res);

        }).catch((err) => {
            console.log(err);

        })
    }

    // let key_fn = (key) => {
    //     let keyInc = key + 1;
    //     if (key == undefined) {
    //         set_Delievery_STATUS((prev) => {
    //             const array = [...prev]
    //             // console.log("ARRAY", array);
    //             array[0].Disable = false
    //             array[0].Disable = "Done";

    //             return array
    //         })
    //     }
    //     else {

    //         set_Delievery_STATUS((prev) => {
    //             const array = [...prev];
    //             array[key].Disable = "Done";
    //             if (key < 3) {
    //                 array[keyInc].Disable = false;
    //                 return array
    //             } else {
    //                 return array
    //             }
    //         });


    //     }

    // };
    useEffect(() => {
        // key_fn()
    }, [Status])

    // ------------------------------


    return (
        <>
            {
                // order_acceptance ?
                //     <div style={{ backgroundColor: `${color}` }}

                //         className={`mt-2 mr-3  relative border border-[#757575be] shadow`}>
                //         <div className='flex justify-between p-2'>
                //             <i className={`fa-solid fa-chevron-down  cursor-pointer text-[17px] ${droper ? 'rotate-0' : 'rotate-270'} `} onClick={() => setDroper(!droper)}></i>
                //             <h1 className=' font-bold tracking-wider'>{Status} </h1>
                //         </div>

                //         {
                //             droper ? (
                //                 <>
                //                     <div className="flex flex-col justify-center items-start    m-2 p-2 absolute left-0 rounded-[5px]  shadow-2xl z-50 bg-[#f6f6f6] ]">
                //                         {/* Logout Box */}
                //                         <div className="  text-[12px] flex  flex-col z-50">


                //                         </div >

                //                     </div>

                //                 </>
                //             ) : (<></>)
                //         }

                //     </div >
                //     :
                //     <button className='p-2 bg-[#1e2640] cursor-pointer text-white shadow m-2 font-bold'
                //         onClick={() => set_OrderAccepted0(true)}>
                //         Accept Order
                //     </button>
            }
            <button className='p-2 bg-[#1e2640] cursor-pointer text-white shadow m-2 font-bold'>
                { }

            </button>

        </>
    )
}

export default DropDown