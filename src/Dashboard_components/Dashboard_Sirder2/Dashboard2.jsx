
import { Outlet } from 'react-router-dom'
import Months_history from './Sider2_tailwinds_components/Months_history'
import Navbar from './Sider2_tailwinds_components/Navbar'
import Payments_box from './Sider2_tailwinds_components/Payments_box'

function Dashboard2() {
    return (
        <>
            {/* <Navbar /> */}
            <div className='m-5'>
                <Payments_box />
                <Months_history />
            </div>
        </>
    )
}

export default Dashboard2