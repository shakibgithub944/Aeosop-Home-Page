import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./swiper.css";
import { Pagination } from "swiper";
import product1 from '../../../assets/industrieous.png'
import product2 from '../../../assets/Aesop_Kits_Gift_Kits_2021-22_Precipitous_Web_Large_1584x962px.png'
import product3 from '../../../assets/Aesop_Kits_Gift_Kits_2021-22_Igneous_Web_Large_1584x962px.png'
import product4 from '../../../assets/Aesop_Kits_Gift_Kits_2021-22_Congruous_Web_Large_1584x962px.png'

const Products = () => {
    return (
        <div className='my-32 md:my-60'>
            <>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="my-10">
                        <img src={product1} alt="" />
                        <p className="text-center mb-3 font-bold hover:link">Industrious</p>
                        <p className="text-center">Beloved formulation for Gift-giving</p>
                    </SwiperSlide>
                    <SwiperSlide className="my-10">
                        <img src={product2} alt="" />
                        <p className="text-center mb-3 font-bold hover:link">Precepitous</p>
                        <p className="text-center">Suited to most particularly, dwellers</p>
                    </SwiperSlide>
                    <SwiperSlide className="my-10">
                        <img src={product3} alt="" />
                        <p className="text-center mb-3 font-bold hover:link">Igneous</p>
                        <p className="text-center">An invegorating body care due</p>
                    </SwiperSlide>
                    <SwiperSlide className="my-10">
                        <img src={product4} alt="" />
                        <p className="text-center mb-3 font-bold hover:link">Congruous</p>
                        <p className="text-center">Esteemet hand and body care staples</p>
                    </SwiperSlide>
                </Swiper>
            </>
            <hr className="mx-auto mx-10" />
        </div>
    );
};

export default Products;