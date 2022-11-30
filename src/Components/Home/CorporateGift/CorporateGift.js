import React from 'react';
import wemen from '../../../assets/wemen.jpg'
import Button from '../../Shared/Button';

const CorporateGift = () => {
    return (
        <div className='my-48 mx-4 md:flex items-center justify-between gap-6 md:mx-16'>
            <div className=' w-full md:w-1/2'>
                <div className='p-10'>
                    <h1 className='my-5 font-bold'>Tokens of appreciation</h1>
                    <h1 className='my-5 text-3xl'>Corporate gifts</h1>
                    <p className='mb-5'>Find a variety of gift-giving options, ideal for honouring treasured colleagues and clients. Trained consultants will be pleased to guide your selections and assist with delivery.</p>
                    <Button>Learn more about this service</Button>
                </div>
            </div>
            <div className='w-full md:w-3/4'>
                <div>
                    <img src={wemen} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CorporateGift;