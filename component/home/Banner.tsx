import React from 'react';
import Navigation from '../Navigation';

const Banner = () => {
    return (
        <div className='banner h-screen'>
            <Navigation />
            <div className='container mx-auto lg:max-w-container px-5 md:px-0'>
                <h1 className='m-auto text-3xl md:text-5xl text-center font-bold text-primary md:leading-3.5rem mt-40 md:mt-151.5px '>The leading liquidity and execution solutions provider in crypto markets</h1>
                <p className='text-sm md:text-xl text-center text-seccondery mt-6'>Our expertise has been powering liquidity on the world’s largest cryptocurrency exchanges and building efficient cryptocurrency markets since 2018. </p>
            </div>
        </div>
    );
};

export default Banner;