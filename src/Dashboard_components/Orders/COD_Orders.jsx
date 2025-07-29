import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Filtering_orders from './Filtering_orders';
import Order_tables from './Order_tables';
import Orders_Dispacthing from './Orders_Dispacthing';


function COD_Orders() {

    return (
        <>
            <Filtering_orders />
        </>
    )
}

export default COD_Orders