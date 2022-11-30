import React from 'react';
import Button from '../../Shared/Button';
import offerimg from '../../../assets/offer.jpg'

const OnlineOffer = () => {
    return (
        <div className='my-48 mr-4 md:flex items-center justify-between gap-6 md:mr-16'>
            <div className='w-full md:w-3/4'>
                <div>
                    <img src={offerimg} alt="" />
                </div>
            </div>
            <div className=' w-full md:w-1/2'>
                <div className='p-10'>
                    <h1 className='my-5 font-bold'>Our online offering</h1>
                    <h1 className='my-5 text-3xl'>For your convenience</h1>
                    <p className='mb-5'>Just as we do in our physical spaces, it is a pleasure to offer real-time guidance from our consultants online, as well as a range of delivery and collection options to suit your needs..</p>
                    <Button>Discover our services</Button>
                </div>
            </div>
        </div>
    );
};

export default OnlineOffer;