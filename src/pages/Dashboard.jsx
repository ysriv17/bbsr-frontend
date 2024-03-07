import { useState } from 'react'
import '../components/css.css'
import Header from '../components/Header/Header'
import Sidebar from '../components/Sidebar/Sidebar'
import Home from '../components/Home/Home'
import { Outlet, Route, Routes } from 'react-router'
import Createform from '../components/Createform/Createform'
import Charts from '../components/Charts/Charts'

function Dashboard() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
    }

    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar} />
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
           
            <Outlet/>
            
        </div>
    )
}

export default Dashboard