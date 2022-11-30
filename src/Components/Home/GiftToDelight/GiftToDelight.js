import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../Products/swiper.css";
import { Pagination } from "swiper";
import gift1 from '../../../assets/aesophand.png'
import gift2 from '../../../assets/bundle1.png'
import gift5 from '../../../assets/aesopePack.png'
import gift4 from '../../../assets/aesopDepurture.png'
import gift3 from '../../../assets/cadleblank.png'

const GiftToDelight = () => {
    return (
        <div className='my-48 mx-5 md:mx-16'>
            <h1 className='text-3xl mb-28'>Gift to delight</h1>
            <div className='mb-20'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="my-28">
                    <div className='md:w-96 md:h-96'>
                            <img src={gift4} className='w-full' alt="" />
                            <p className="text-center mb-3 font-bold hover:link">Industrious</p>
                            <p className="text-center">Beloved formulation for Gift-giving</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="my-28">
                    <div className='md:w-96 md:h-96'>
                            <img src={gift5} className='w-full' alt="" />
                            <p className="text-center mb-3 font-bold hover:link">Industrious</p>
                            <p className="text-center">Beloved formulation for Gift-giving</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="my-28">
                        <div className='md:w-96 md:h-96'>
                            <img src={gift3} className='w-full' alt="" />
                            <p className="text-center mb-3 font-bold hover:link">Industrious</p>
                            <p className="text-center">Beloved formulation for Gift-giving</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="my-28">
                        <div className='md:w-96 md:h-96'>
                            <img src={gift4} className='w-full' alt="" />
                            <p className="text-center mb-3 font-bold hover:link">Industrious</p>
                            <p className="text-center">Beloved formulation for Gift-giving</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="my-28">
                        <div className='md:w-96 md:h-96'>
                            <img src={gift5} className='w-full' alt="" />
                            <p className="text-center mb-3 font-bold hover:link">Industrious</p>
                            <p className="text-center">Beloved formulation for Gift-giving</p>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
            <hr className="mx-auto mx-10" />
        </div >
    );
};

export default GiftToDelight;