import React from 'react'

export default function AboutBanner() {
  return (
    <div className="bg-about-banner bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto px-5 py-40 text-white md:px-0 lg:max-w-container">
        <h1 className="mb-6 text-5xl">About</h1>
        <p className="text-xl font-extralight leading-7 md:w-6/12">
          Founded in 2018, Waterfort is a leading liquidity and execution
          solutions provider in crypto markets. Built around our proprietary
          models, we have grown our footprint amongst institutions globally,
          offering our liquidity, market making and algorithmic execution
          trading solutions.
        </p>
      </div>
    </div>
  )
}
