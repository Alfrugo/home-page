import React from 'react';
import Spheres from '../assets/digitally-engaged.jpg';
import Tracks from '../assets/tracks.svg'

const WebDev = () => {
    return (
        <div name='home' className='panel border-8 border-white w-full '>
            <div className='relative  w-full h-full'>
         
                <div className='slider-title-bar'>
                    <img className="myVideo" src={Spheres} alt="AD-reel" />
                </div>

                <div className="slider-title">
                    <h1>Web Development</h1>
                </div>
                <div className='tracks'>
                    <img  src={Tracks} alt="graphic element"/>

                </div>

                <div className='flex slider-image'>
                    <img className="myVideo" src={Spheres} alt="AD-reel" />
                </div>
            </div>            
        </div>
    )
}

export default WebDev
