import React from 'react'
import Top_viewe from './TOP_VIEWD1.png'
function Top_viewed() {
    return (
        <>

            <div className='grid grid-cols-12'>
                {/* ---MOST VIEWD PRODUTC--- */}
                <div className=' shadow col-span-3 bg-[#e6e6e6] h-[50vh]  rounded  flex flex-col items-center justify-between gap-y-4 m-3   p-2'>
                    <div className='flex w-full justify-center items-center'>
                        {/* <div className='bg-[#3800a01f]  rounded-full flex justify-center items-center   shadow'>
                            <i className="fa-solid fa-eye text-[#3800a0cb]  p-2 text-[17px]"></i>
                        </div> */}
                        <div className='  rounded-full bg-[#3800a0cb]'>
                            <h1 className='font-[Inter] text-[#ffff] py-1.5 px-12 text-[14px]  '>Most Viewed </h1>
                        </div>
                    </div>
                    <div className='bg-[#ffffff] shadow-2xl m-2 rounded-[10px] h-full flex justify-center items-center'>
                        <img className=' ' src={Top_viewe} />
                    </div>
                </div >
                {/* ---PRODUCT VIEWD/ORDER--- */}
                <div className=' col-span-3 bg-[#e6e6e6] h-[50vh] rounded   shadow m-3 flex justify-center items-center flex-col p-4 gap-y-3'>
                    <div className='bg-white shadow-2xl  h-[50%] w-full rounded-[7px] p-4'>
                        <div className='font-[Inter]  text-[17px] flex justify-start items-center'>
                            <div className='bg-[#3800a01f] mr-2    w-fit text-[#3800a0cb] '>
                                <i className="fa-solid fa-eye   p-2 text-[17px]"></i>
                            </div>
                            <h1 className='font-bold'>Product Viewed</h1>
                        </div>
                        <div className='flex mt-5 flex-col justify-center items-start'>
                            <h1 className='font-extrabold text-3xl font-[Inter] '>210</h1>
                            <div className='flex justify-start gap-2 w-full items-center'>
                                <div className='text-[#00ff9d] font-[Poppins]  flex justify-center items-center '>
                                    <h6>0.82%</h6>
                                    <i className="fa-solid text-[12px] pl-1.5   fa-arrow-up"></i>
                                </div >
                                <h2 className='text-[Inter] font-light'>Since last month</h2>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white shadow-2xl h-[50%] w-full rounded-[7px] p-4'>
                        <div className='font-[Inter]  text-[17px] flex justify-start items-center'>
                            <div className='bg-[#3800a01f] mr-2    w-fit text-[#3800a0cb] '>
                                <i className="fa-solid fa-bag-shopping   p-2 text-[17px]"></i>
                            </div>
                            <h1 className='font-bold'>Product Ordered</h1>
                        </div>
                        <div className='flex mt-5 flex-col justify-center items-start'>
                            <h1 className='font-extrabold text-3xl font-[Inter] '>35</h1>
                            <div className='flex justify-start gap-2 w-full items-center'>
                                <div className='text-[#ff1e00] font-[Poppins]  flex justify-center items-center '>
                                    <h6>2.1%</h6>
                                    <i className="fa-solid text-[12px] pl-1.5   fa-arrow-down"></i>
                                </div >
                                <h2 className='text-[Inter] font-light'>Since last month</h2>
                            </div>
                        </div>
                    </div>

                </div>
                <div className=' col-span-3 h-full p-3 gap-y-3 '>
                    <div style={{
                        backgroundColor: "#f79a71",
                        backgroundImage: "linear-gradient(180deg, #f79a71 0%, #f79a71 46%, #f7c37c 100%)"
                    }}
                        className=' shadow-2xl h-[50%] w-full rounded-[7px] p-4'>
                        <div className='font-[Poppins]  text-[15px] flex justify-start items-center'>

                            <h1 className=''>Status</h1>
                        </div>
                        <div className='flex mt-5 flex-col justify-center items-start'>
                            <div className='flex justify-start gap-2 w-full items-center'>
                                <div className='text-4xl font-bold font-[Poppins]   flex flex-col justify-center items-start '>
                                    <h1>60 % </h1>
                                    <h1 className='text-2xl font-light'>
                                        Delivered
                                    </h1>
                                </div >

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Top_viewed