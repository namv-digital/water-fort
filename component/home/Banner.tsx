import React from 'react'
import Navigation from '../Navigation'

const Banner = () => {
  return (
    <div className="banner">
      <Navigation />
      <div className="container mx-auto mt-20 sm:mt-30 md:mt-40 px-5 md:px-0 lg:max-w-container pb-40 sm:pb-40 md:pb-60">
        <h1 className="m-auto  text-center text-3xl font-bold text-primary  md:text-5xl md:leading-3.5rem ">
          The leading liquidity and execution solutions provider in crypto
          markets
        </h1>
        <p className="mt-6 text-center text-sm text-seccondery md:text-xl">
          At WaterFort, we have been powering crypto liquidity across
          institutions and platforms and building efficient cryptocurrency
          markets since 2018.{' '}
        </p>
      </div>
    </div>
  )
}

export default Banner
