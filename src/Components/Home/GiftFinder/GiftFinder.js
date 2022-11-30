import React from 'react';
import Button from '../../Shared/Button';
import giftFindr from '../../../assets/giftfinder.mp4'

const GiftFinder = () => {
    return (
        <div className='my-48 mx-4 md:flex items-center justify-between gap-6 md:mx-16'>
            <div className=' w-full md:w-1/2'>
                <video loop autoPlay muted width="100%">
                    <source src={giftFindr} type="video/mp4" />
                </video>
            </div>
            <div className=' w-full md:w-1/2 mx-5'>
                <div className='p-10'>
                    <h1 className='my-5 text-3xl'>The Gift Finder</h1>
                    <p className='mb-5'>For greater ease of navigation, the Gift Finder provides an opportunity to browse formulations by recipient, function and price.</p>
                    <Button>Discover the gift service</Button>
                </div>
            </div>
        </div>
    );
};

export default GiftFinder;