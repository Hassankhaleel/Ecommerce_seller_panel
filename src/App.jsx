import { Avatar, Box, Card, Flex, IconButton, Text } from '@radix-ui/themes'
import './App.css'
import Dashboard1 from './Dashboard_components/Dashboard_sider/Dashboard1'
import Dashboard2 from './Dashboard_components/Dashboard_Sirder2/Dashboard2'
// import Dashboard_Main from './Dashboard_components/Dashboard_Main'
import { Router, BrowserRouter, Outlet } from 'react-router-dom'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/20/solid'
function App() {


  return (
    <>
      <div className=' h-screen'>
        <div className='Main_div  grid grid-cols-5 h-full '>
          <div className='  bg-[#1E2640]  flex justify-around flex-col  col-span-1  p-4 '>
            <Dashboard1 />
          </div>
          <div className='col-span-4'>
            <Outlet />
          </div>
        </div>

      </div >
    </>

  )
}

export default App
