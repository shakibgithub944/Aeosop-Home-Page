import React from 'react';
import formulation from '../../../assets/Formulations_.jpg'
import purfume from '../../../assets/Aesop_Gift_perfume.mp4'

const Formulation = () => {
    return (
        <div className='my-32 mx-4 md:flex items-center justify-between gap-6 md:mx-16'>
            <div className=' w-full md:w-1/2'>
                <div className='w-full'>
                    <img src={formulation} alt="" />
                </div>
                <div className='my-5'>
                    <h1 className='my-5 text-xl font-bold hover:link-hover'>Favoured Formulations</h1>
                    <p>Tried, tested and trusted, these stalwarts of the basin, bedside and shower supply joy to people of all persuasions.</p>
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <video loop autoPlay muted width="100%">
                    <source src={purfume} type="video/mp4" />
                </video>
                <div className='my-5'>
                    <h1 className='my-5 text-xl font-bold hover:link-hover'>Small Gestures</h1>
                    <p>These humble offerings are no less impactful than their grander peers and provide important care and replenishment to deserving recipients.</p>
                </div>
            </div>
        </div>
    );
};

export default Formulation;