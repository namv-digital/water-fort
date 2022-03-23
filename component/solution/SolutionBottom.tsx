import Link from 'next/link';
import React from 'react';

const SolutionBottom = () => {
    return (
        <div className='container mx-auto lg:max-w-container'>
            <div className='bg-fill py-20 text-center rounded-md mt-10  px-3 md:px-0'>
                <h1 className='text-2xl font-bold text-primary'>Flexible Settlement & Credit Line for Trading</h1>
                <p className='mt-4 text-xl text-third px-10'>We understand the need for efficient capital management, which comes in various forms including aggregated settlement, integration with settlement networks and establishing a credit line for trading. Contact us to find out more about the solutions we support. </p>
            </div>
            <div className='bg-white text-center py-20 rounded-md'>
                <div>
                    <img src="/images/icon/contact.jpg" alt="" className='mx-auto' />
                    <h1 className='text-2xl font-bold mt-10'>Trade with WaterFort </h1>
                    <p className='text-xl lg:px-36 mt-3 text-seccondery'>Find out more about trading with our regulated entities, and contact us to discover our liquidity and execution solutions for your needs.</p>
                    <Link href="/contact">
                        <button className='button text-white mt-5 px-7 py-2 rounded-md'>Contect Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SolutionBottom;