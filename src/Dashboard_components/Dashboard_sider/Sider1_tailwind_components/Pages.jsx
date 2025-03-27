import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Pages() {
    const pages = [
        {
            Title: "Home",
            Icon: <i className="fa-solid opacity-85 text-white fa-house"></i>
        },

        {
            Title: "Payments",
            Icon: <i className="fa-solid opacity-85 text-white fa-sack-dollar"></i>
        },
        {
            Title: "Orders_Dipatching",
            Icon: <i className="fa-solid opacity-85 text-white fa-calendar-check"></i>
        },
        {
            Title: "Delieveries",
            Icon: <i className="fa-solid opacity-85 text-white fa-truck"></i>
        },
        {
            Title: "Analytics",
            Icon: <i className="fa-solid opacity-85 text-white fa-chart-simple"></i>
        },
        {
            Title: "Discounts",
            Icon: <i className="fa-solid opacity-85 text-white fa-tag"></i>
        },
        {
            Title: "Audience",
            Icon: <i className="fa-solid opacity-85 text-white fa-user-group"></i>
        },
    ]
    const [active, setactive] = useState(false)
    const Navigate = useNavigate()
    return (
        <>
            <div className=''>
                {
                    pages.map((v, i) => (
                        <>
                            <div
                                onClick={() => Navigate(`${v.Title}`)}

                                key={i} className=' hover:bg-white/15  mb-5 p-2  rounded-[5px] flex justify-start items-center bg-white/7 '>
                                {v.Icon}
                                <p className={`text-[#FFFFFF]  text-[15px] font-light opacity-70 pl-2 ${active ? `` : ""} `}
                                    onClick={() => {
                                        setactive(!active)
                                    }}

                                >{v.Title}</p>
                            </div>
                        </>
                    ))
                }
            </div>
        </>
    )
}

export default Pages