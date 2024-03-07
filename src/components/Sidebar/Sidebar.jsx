import React from 'react'
import {
BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
    from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon_header' /> SHOP
                </div>
                <span className='icon close_icon' onClick={OpenSidebar}>X</span>
            </div>

            <ul className='sidebar-list'>
                <li className='sidebar-list-item'>
                    <Link to="/Dashboard">
                        <BsGrid1X2Fill className='icon' /> Home
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to="/Dashboard/addroles">
                        <BsGrid1X2Fill className='icon' /> Add Roles
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to='/Dashboard/showroles' >
                        <BsFillArchiveFill className='icon'/> Show Roles
                    </Link>
                </li>
                <li className='sidebar-list-item'>
                    <Link to='/Dashboard/showroles' >
                        <BsFillArchiveFill className='icon' /> List Roles
                    </Link>
                </li>
               
            </ul>
        </aside>
    )
}

export default Sidebar