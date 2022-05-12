import React from 'react';
import ADreel from '../assets/Ad-reel.gif';
import Tracks from '../assets/tracks.svg'

const Photography = () => {
    return (
        <div name='home' className='panel border-8 border-white w-full '>
            <div className='relative  w-full h-full'>
         
                <div className='slider-title-bar'>
                    <img className="myVideo" src={ADreel} alt="AD-reel" />
                </div>

                <div className="slider-title">
                    <h1>Br<span className='text-white'>and </span>Strategy</h1>
                </div>
                <div className='tracks'>
                    <img  src={Tracks} alt="graphic element"/>

                </div>

                <div className='flex slider-image'>
                    <img className="myVideo" src={ADreel} alt="AD-reel" />
                </div>
            </div>            
        </div>
    )
}

export default Photography
