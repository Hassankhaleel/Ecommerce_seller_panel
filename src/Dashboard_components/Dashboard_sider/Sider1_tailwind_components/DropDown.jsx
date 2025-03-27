
import { useState } from 'react'

export default function DropDown() {
    const [droper, setDroper] = useState(false)

    return (
        <>

            <div className="  mt-2 mr-3  relative" >
                <i className={`fa-solid fa-chevron-down text-white text-[17px]  ${droper ? 'rotate-0' : 'rotate-270'} `} onClick={() => setDroper(!droper)}></i>

                {
                    droper ? (
                        <>
                            <div className="flex flex-col gap-y-1 absolute left-[-100%]">
                                {/* Logout Box */}
                                <div className="  text-[12px]  ">
                                    <a className="font-[Inter] text-white font-light py-3 px-3  text-center">
                                        Logout
                                    </a>
                                </div>
                                <div className=" text-[12px]   ">
                                    <a className="font-[Inter] text-white font-light py-3 px-3  text-center">
                                        SignUp
                                    </a>
                                </div>
                            </div>
                        </>
                    ) : (<></>)
                }

            </div>
        </>
    )
}
