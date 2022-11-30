import React from 'react';
import Navber from '../Navber/Navber';
import banner from '../../../assets/banner.jpg'
import Button from '../../Shared/Button';

const Banner = () => {
    return (
        <div className='relative'>
            <div className='absolute md:relative '>
                <Navber></Navber>
            </div>
            <img src={banner} alt="" className='w-full md:absolute  ' />
            <div className="hero" >
                <div className="hero-content flex-col md:mr-96 md:py-32">
                    <div>
                        <h1 className="text-4xl mb-2">The Poetry of Place</h1>
                        <p className="py-6 pr-5">The sun rises on four new Gift Kits, each inspired by the <br /> design of an Aesop store and the neighbourhood in which <br /> it resides.</p>
                        <Button>Explore the Gift Kits</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;