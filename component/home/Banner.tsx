import React from 'react'
import Navigation from '../Navigation'

const Banner = () => {
  return (
    <div className="banner bg-banneer">
      <Navigation />
      <div className="container mx-auto mt-20 sm:mt-30 md:mt-40 px-5 md:px-0 lg:max-w-container pb-40 sm:pb-40 md:pb-42">
        <h1 className="text-left text-3xl font-semibold  text-primary  md:text-5xl md:leading-3.5rem md:w-8/12">
        The Leading Liquidity And Execution Solutions Provider In Crypto Markets
        </h1>
        <p className="mt-6 text-left text-sm text-seccondery md:text-xl md:w-8/12">
          At WaterFort, we have been powering crypto liquidity across
          institutions and platforms and building efficient cryptocurrency
          markets since 2018.{' '}
        </p>
      </div>
    </div>
  )
}

export default Banner
