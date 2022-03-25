import React from 'react'
import { about } from '../../constant/ABOUT_MOCK_DATA.js'
const Body = () => {
  return (
    <div className="-mt-14 rounded-large bg-white">
      <div className="container mx-auto px-5 md:px-0 lg:max-w-container">
        <div className="py-14 text-2xl text-primary md:py-20">
          <p>
            Founded in 2018, WaterFort is a leading liquidity and execution
            solutions provider in crypto markets. Built around our proprietary
            models, we have grown our footprint amongst institutions globally,
            offering our liquidity, market making and algorithmic execution
            trading solutions.
          </p>
        </div>
        <div>
          <h1 className="text-5xl font-bold text-primary">Our Clients</h1>
          <div className=" mt-5 md:mt-16">
            {about.map((about) => (
              <div className="mt-10">
                <h2 className="text-2xl font-bold text-primary">
                  {about.title}
                </h2>
                <p className="mt-5 text-third">{about.discription}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
