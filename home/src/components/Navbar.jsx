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
            <ul className= {!nav ? 'hidden' : 'absolute m-9 top-0 right-0 h-screen bg-gradient-to-r from-gray-700 to-transparent flex flex-col justify-center items-center w-[500px]'}>
                <li className='py-6 text-4xl'>Marketing</li>
                <li className='py-6 text-4xl'>Photography</li>
                <li className='py-6 text-4xl'>Development</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* Social Icons Menu */}
            <div className='hidden lg:flex fixed flex-col top-[70%] left-0'> 
                <ul>
                    
                <li className='w-[150px] h-[40px] px-2 bg-blue-600 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'> 
                        <a className='px-5 flex justify-between items-center w-full text-gray-50 ' href="https://www.linkedin.com/in/diezalfredo/" target="new">
                            LinkedIn
                        </a>
                        <BsLinkedin size={20}/> 
                    </li>
                    <li className='w-[150px] h-[40px] px-2 bg-stone-800 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'> 
                        <a className='px-5 flex justify-between items-center w-full text-gray-50 ' href="https://github.com/Alfrugo" target="new">
                            Github
                        </a>
                        <BsGithub size={20}/> 
                    </li>
                    <li className='w-[150px] h-[40px] px-2 bg-purple-800 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'> 
                        <a className='px-5 flex justify-between items-center w-full text-gray-50 ' href="https://www.instagram.com/intheblinkofasmile/" target="new">
                            Instagram
                        </a>
                        <BsInstagram size={20}/> 
                    </li>
                    <li className='w-[150px] h-[40px] px-2 bg-indigo-800 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300' > 
                    <a className=' pl-5 flex justify-between items-center w-full text-gray-50 ' href="/" target="new">
                            Resume
                            <BsPersonLinesFill size={20}/> 
                        </a>
                        
                    </li>
                </ul>

            
            </div>


        </div>
    )
}

export default Navbar
