import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../../Dashboard_components/Home'
import Dashboard2 from '../../Dashboard_components/Dashboard_Sirder2/Dashboard2'
import App from '../../App'
import Navbar from '../../Dashboard_components/Dashboard_Sirder2/Sider2_tailwinds_components/Navbar'

import Analytics from '../../Dashboard_components/Analytics/Analytics'
import OnlineCompo from '../../Dashboard_components/Dashboard_Sirder2/Sider2_tailwinds_components/OnlineCompo'
import CodCompo from '../../Dashboard_components/Dashboard_Sirder2/Sider2_tailwinds_components/CodCompo'

import Main_comp from '@/Dashboard_components/Orders/Dispatching_system/Main_comp'
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
                            <Route path='Orders_Dipatching' element={<Main_comp />} />
                            <Route path='Analytics' element={< Analytics />} />
                        </Route>
                    </Route >
                </Routes >
            </BrowserRouter >
        </>

    )
}

export default Routers