import React, { useState }from 'react'
import Logo from '../assets/Alfredo-Diez.svg'
import { FaHamburger, FaSmileWink } from 'react-icons/fa';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'
import { Link } from 'react-scroll'


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
            <ul className= {!nav ? 'hidden' : 'mobileMenu absolute m-9 top-0 right-0 h-screen bg-gradient-to-r from-gray-700 to-transparent flex flex-col justify-center items-center w-[500px]'}>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='branding' containerId='appContainer' smooth={true} duration={500}>Branding</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='photography' containerId='appContainer' smooth={true} duration={500}>Photography</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='webdev' containerId='appContainer' smooth={true} duration={500}>Development</Link></li>
                <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' containerId='appContainer' smooth={true} duration={500}>Contact</Link></li>
            </ul>

            {/* Social Icons Menu */}
            <div className=' fixed  top-[30%] lg:flex flex-col lg:top-[70%] left-[-5px]'> 
                <ul>
                    
                <li className='w-[150px] h-[30px] px-2 bg-blue-600 flex justify-between items-center ml-[-110px] lg:hover:ml-[-10px] duration-300'> 
                        <a className='px-5 flex justify-between items-center w-full text-gray-50 ' href="https://www.linkedin.com/in/diezalfredo/" target="new">
                            LinkedIn
                        </a>
                        <BsLinkedin size={15}/> 
                    </li>
                    <li className='w-[150px] h-[30px] px-2 bg-stone-800 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'> 
                        <a className='px-5 flex justify-between items-center w-full text-gray-50 ' href="https://github.com/Alfrugo" target="new">
                            Github
                        </a>
                        <BsGithub size={15}/> 
                    </li>
                    <li className='w-[150px] h-[30px] px-2 bg-purple-800 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300'> 
                        <a className='px-5 flex justify-between items-center w-full text-gray-50 ' href="https://www.instagram.com/intheblinkofasmile/" target="new">
                            Instagram
                        </a>
                        <BsInstagram size={15}/> 
                    </li>
                    {/* <li className='w-[150px] h-[30px] px-2 bg-indigo-800 flex justify-between items-center ml-[-110px] hover:ml-[-10px] duration-300' > 
                    <a className=' pl-5 flex justify-between items-center w-full text-gray-50 ' href="/" target="new">
                            Resume
                            <BsPersonLinesFill size={15}/> 
                        </a>
                        
                    </li> */}
                </ul>

            
            </div>


        </div>
    )
}

export default Navbar
