import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../../Dashboard_components/Home'
import Dashboard2 from '../../Dashboard_components/Dashboard_Sirder2/Dashboard2'
import Dashboard1 from '../../Dashboard_components/Dashboard_sider/Dashboard1'
import App from '../../App'
import Navbar from '../../Dashboard_components/Dashboard_Sirder2/Sider2_tailwinds_components/Navbar'
import Orders_Dispacthing from '../../Dashboard_components/Orders/Orders_Dispacthing'
import Analytics from '../../Dashboard_components/Analytics/Analytics'
import OnlineCompo from '../../Dashboard_components/Dashboard_Sirder2/Sider2_tailwinds_components/OnlineCompo'
import CodCompo from '../../Dashboard_components/Dashboard_Sirder2/Sider2_tailwinds_components/CodCompo'
import Order_Main from '@/Dashboard_components/Orders/Order_Main'
import COD_Orders from '@/Dashboard_components/Orders/Order_by_pymnt_type'
import Full_paid_orders from '@/Dashboard_components/Orders/Full_paid_orders'
import Half_paid_orders from '@/Dashboard_components/Orders/Half_paid_orders'
import Order_by_pymnt_type from '@/Dashboard_components/Orders/Order_by_pymnt_type'

function Routers() {
    return (
        <>
            <BrowserRouter>
                <Routes >
                    <Route path='/' element={<App />}>
                        <Route path='/' element={<Navbar />} >
                            <Route path='Home' element={<Home />} />
                            <Route path='Payments' element={< Dashboard2 />} >
                                <Route path='Online' element={<OnlineCompo />} />
                                <Route path='Cod' element={<CodCompo />} />
                            </Route>
                            <Route path='Orders_Dipatching' element={< Order_Main />}>
                                <Route path='Orders_by_pyment_type' element={<Order_by_pymnt_type />} />
                                <Route path='' element={<Orders_Dispacthing />} />
                            </Route>
                            <Route path='Analytics' element={< Analytics />} />
                        </Route>
                    </Route >
                </Routes >
            </BrowserRouter >
        </>

    )
}

export default Routers