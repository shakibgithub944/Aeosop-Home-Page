import React from 'react';
import candle from '../../../assets/Candle.mp4'
import purfume from '../../../assets/Aesop_Gift_perfume.mp4'

const Candle = () => {
    return (
        <div className='my-48 mx-4 md:flex items-center justify-between gap-6 md:mx-16'>
            <div className=' w-full md:w-1/2'>
                <video loop autoPlay muted width="100%">
                    <source src={candle} type="video/mp4" />
                </video>
                <div className='my-5'>
                    <h1 className='my-5 text-xl font-bold hover:link-hover'>Gifts for the home—Candles</h1>
                    <p>Ptolemy, Aganice and Callippus—aromatic candles named for important figures of ancient astronomy—harken to age-old ceremonies of meditation and merriment alike.</p>
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <video loop autoPlay muted width="100%">
                    <source src={purfume} type="video/mp4" />
                </video>
                <div className='my-5'>
                    <h1 className='my-5 text-xl font-bold hover:link-hover'>Othertopias Eaux de Parfum</h1>
                    <p>Unorthodox and defiant, four fragrances of an intense character leave poignant traces in their wake—inspired by the hinterlands and liminal spaces of the boat, the shore, the wasteland and the mirror.</p>
                </div>
            </div>
        </div>
    );
};

export default Candle;