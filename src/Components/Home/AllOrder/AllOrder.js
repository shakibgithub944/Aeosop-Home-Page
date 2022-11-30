import { PlusIcon } from '@heroicons/react/24/solid';
import React from 'react';

const AllOrder = () => {
    return (
        <>
            <div className='w-full bg-black'>
                <p className='text-center text-white px-6 py-3 flex items-center justify-center hover:link'>Click and Collect is now available. Enjoy complimentary carbon neutral shipping on all orders <span><PlusIcon className='w-4 h-5 text-white ml-2'></PlusIcon></span></p>
            </div>
        </>
    );
};

export default AllOrder;