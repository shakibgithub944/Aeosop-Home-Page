import React from 'react';
import Button from '../../Shared/Button';
import img1 from '../../../assets/carousel1.jpg'
import img2 from '../../../assets/carousel2.jpg'
import img3 from '../../../assets/carousel3.jpg'

const StorLocator = () => {
    return (
        <div className='my-48 mx-4 md:flex items-center justify-between gap-6 md:mx-16'>
            <div className=' w-full md:w-1/2'>
                <div className='p-10'>
                    <h1 className='my-5 text-3xl'>Store locator</h1>
                    <p className='mb-5'>Our consultants are available to host you in-store and provide tailored guidance on gift purchases. </p>
                    <Button>Find a nearby Store</Button>
                </div>
            </div>
            <div className='w-full md:w-3/4'>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={img1} alt='' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={img2} alt='' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={img3} alt='' className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default StorLocator;