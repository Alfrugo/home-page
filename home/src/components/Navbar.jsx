import React, { useState }from 'react'
import Logo from '../assets/Alfredo-Diez.svg'
import { FaHamburger, FaSmileWink } from 'react-icons/fa';
import { BsLinkedin, BsInstagram, BsGithub, BsPersonLinesFill } from 'react-icons/bs'



const Navbar = () => {
    
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='z-50 fixed w-full h-[120px] flex justify-between   text-rose-50'>
            <img className='mx-8 my-5' src={Logo} alt='Alfredo Diez' style={{width: '200px'}} />
            
            {/* Hamburger */}
            <div onClick={handleClick} className='z-50 '> 
                {!nav ? < FaHamburger className='m-7' size={25}/> : < FaSmileWink className='m-7' size={25} /> }
            </div>

            {/* Menu */}
            <ul className= {!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-700 flex flex-col justify-center items-center'}>
                <li className='py-6 text-4xl'>Marketing</li>
                <li className='py-6 text-4xl'>Photography</li>
                <li className='py-6 text-4xl'>Development</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* Social Icons Menu */}
            <div className='hidden lg:flex fixed flex-col top-[60%] left-0'> 
                <ul>
                    
                <li className='w-[160px] h-[60px] px-4 bg-blue-600 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'> 
                        <a className='flex justify-between items-center w-full text-gray-50 ' href="/">
                            LinkedIn
                        </a>
                        <BsLinkedin size={30}/> 
                    </li>
                    <li className='w-[160px] h-[60px] px-4 bg-stone-800 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'> 
                        <a className='flex justify-between items-center w-full text-gray-50 ' href="/">
                            Github
                        </a>
                        <BsGithub size={30}/> 
                    </li>
                    <li className='w-[160px] h-[60px] px-4 bg-purple-800 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'> 
                        <a className='flex justify-between items-center w-full text-gray-50 ' href="/">
                            Instagram
                        </a>
                        <BsInstagram size={30}/> 
                    </li>
                    <li className='w-[160px] h-[60px] px-4 bg-indigo-800 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300'> 
                        <a className='flex justify-between items-center w-full text-gray-50 ' href="/">
                            Resume
                            <BsPersonLinesFill size={30}/> 
                        </a>
                        
                    </li>
                </ul>

            
            </div>


        </div>
    )
}

export default Navbar
