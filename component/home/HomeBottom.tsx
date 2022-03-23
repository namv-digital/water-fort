import Link from 'next/link';
import React from 'react';

const HomeBottom = () => {
    return (
        <div className=''>
            <div className='container mx-auto lg:max-w-container bg-fill text-center py-20 rounded-md'>
                <img src="/images/icon/contact.jpg" alt="" className='mx-auto' />
                <h1 className='text-2xl font-bold mt-10'>Trade with WaterFort </h1>
                <p className='text-xl px-5 md:px-36 mt-3 text-seccondery'>Find out more about trading with our regulated entities, and contact us to discover our liquidity and execution solutions for your needs.</p>
                <Link href="/contact">
                    <button className='button text-white mt-5 px-7 py-2 rounded-md'>Contect Us</button>
                </Link>
            </div>
        </div>
    );
};

export default HomeBottom;