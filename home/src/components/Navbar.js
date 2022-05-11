import React, { useState }from 'react'
import Logo from '../assets/Alfredo-Diez.svg'
import { FaHamburger, FaSmileWink } from 'react-icons/fa';



const Navbar = () => {
    
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-rose-50 bg-slate-700'>
            <img className='z-10' src={Logo} alt='Alfredo Diez' style={{width: '150px'}} />
            
            {/* Hamburger */}
            <div onClick={handleClick} className='z-10'> 
                {!nav ? < FaHamburger /> : < FaSmileWink /> }
            </div>

            {/* Menu */}
            <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-700 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Marketing</li>
                <li className='py-6 text-4xl'>Photography</li>
                <li className='py-6 text-4xl'>Development</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* Social Icons Menu */}
            <div className='hidden'> </div>


        </div>
    )
}

export default Navbar
