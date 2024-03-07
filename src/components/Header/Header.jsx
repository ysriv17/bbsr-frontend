
import React from 'react'
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify }
    from 'react-icons/bs'
import Searchbar from '../Searchbar/Searchbar'

function Header({ OpenSidebar }) {
    const searchabropner =()=>{

    }
    return (
        <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon' onClick={OpenSidebar} />
            </div>
            <div className='header-left flex items-center relative'>
                <Searchbar/>
                <BsSearch className='icon absolute right-2' onClick={searchabropner} />
            </div>
            <div className='header-right flex gap-x-3'>
                <BsFillBellFill className='icon' />
                <BsFillEnvelopeFill className='icon' />
                <BsPersonCircle className='icon' />
            </div>
        </header>
    )
}

export default Header