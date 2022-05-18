import React from 'react'
import HeroArch from '../assets/arch.jpg';
import Tracks from '../assets/tracks.svg'

const Contact = () => {
    return (
        <div name='contact' className='panel border-8 border-white w-full '>
            <div className='relative  w-full h-full'>
         
                <div className='slider-title-bar'>
                    <img className="myVideo" src={HeroArch} alt="Contact" />

                    
                </div>

                <div className="slider-title">
                    <h1 className='contactTitle'>Let's build <br></br>something!</h1>
                </div>
                <div className='tracks'>
                    <img  src={Tracks} alt="graphic element"/>
                </div>

                <div>
                    
                </div>

                <div className='flex slider-image '>
                    <img className="myVideo " src={HeroArch} alt="Conctact" />
                    <form className='mobileForm bg-gray-700 flex flex-col min-w-[50%] p-10' action="https://getform.io/f/2ffc1fdc-e1c8-4cbf-a15f-75eb0b822e94" method='POST'>
                        <input className='p-2 m-5' type="text" name="name" placeholder='Name'/>
                        <input className='p-2 m-5' type="email" name="email" placeholder='Email'/>
                        <textarea  className='p-2 m-5' name="message" placeholder='Message' rows='7'/>
                        <button className="border-2 w-[150px] p-3 m-auto bg-slate-800 text-gray-300">Send</button>

                    </form>
                </div>
            </div>            
        </div>
    )
}

export default Contact


