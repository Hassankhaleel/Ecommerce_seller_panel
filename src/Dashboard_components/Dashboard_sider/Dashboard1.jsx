import { UserDIV } from './Sider1_tailwind_components/UserDIV'
import Pages from './Sider1_tailwind_components/Pages'
import { Outlet } from 'react-router-dom'
import { Button } from '@radix-ui/themes'
function Dashboard1() {

    return (
        <>
            <UserDIV />
            <Pages />

        </>
    )
}

export default Dashboard1