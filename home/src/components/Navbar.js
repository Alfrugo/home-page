import React from 'react'
import Logo from '../assets/Alfredo-Diez.svg'

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-slate-800 text-cyan-600'>
            <img src={Logo} alt='Alfredo Diez' style={{width: '150px'}} />
        </div>
    )
}

export default Navbar
