import React from 'react';
import ADreel from '../assets/Ad-reel.gif';

const Home = () => {
    return (
        <div name='home' className='panel border-8 border-white w-full '>
            <div className='relative  w-full h-full'>
         
                <div className='slider-title-bar'>
                    <img className="myVideo" src={ADreel} alt="AD-reel" />
                </div>

                <div className="slider-title">
                    <h1>Brand Strategy</h1>
                </div>

                <div className='flex slider-image'>
                    <img className="myVideo" src={ADreel} alt="AD-reel" />
                </div>
            </div>            
        </div>
    )
}

export default Home
