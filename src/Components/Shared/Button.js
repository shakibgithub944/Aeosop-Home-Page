import { ArrowRightIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Button = ({children}) => {
    return (
        <div className='w-72 border-2  border-black p-5 hover:bg-black hover:text-white'>
            <div className='flex items-center justify-between font-bold'>
                <p>{children}</p>
                <span><ArrowRightIcon className='w-4 h-4 '></ArrowRightIcon></span>
            </div>
        </div>
    );
};

export default Button;