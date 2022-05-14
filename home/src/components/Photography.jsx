import React from 'react';
import HeroArch from '../assets/arch.jpg';
import Tracks from '../assets/tracks.svg'

const Photography = () => {
    return (
        <div name='photography' className='panel border-8 border-white w-full '>
            <div className='relative  w-full h-full'>
         
                <div className='slider-title-bar'>
                    <img className="myVideo" src={HeroArch} alt="AD-reel" />
                </div>

                <div className="slider-title">
                    <h1>Photo graphy</h1>
                </div>
                <div className='tracks'>
                    <img  src={Tracks} alt="graphic element"/>

                </div>

                <div className='flex slider-image'>
                    <img className="myVideo" src={HeroArch} alt="AD-reel" />
                </div>
            </div>            
        </div>
    )
}

export default Photography
