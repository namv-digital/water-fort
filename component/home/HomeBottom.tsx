import Link from 'next/link'
import React from 'react'

const HomeBottom = () => {
  return (
    <div className="HomeBottom">
      <div className="container mx-auto rounded-md  py-36 text-center md:text-left lg:max-w-container text-white">
        <h1 className="mt-10 text-3xl md:text-5xl font-light">Trade with WaterFort </h1>
        <p className="mt-3 px-5 text-xl md:text-2xl font-sans md:my-5 font-light md:px-0 md:w-6/12 text-gray-300">
          Find out more about trading with our regulated entities, and contact
          us to discover our liquidity and execution solutions for your needs.
        </p>
        <Link href="/contact">
          <button className="mt-10 mx-auto md:mx-0 px-5 py-2 font-semibold font-sans flex justify-around bg-white text-primary">
            CONTACT US
            <img
                  src="/images/icon/blackArrow.png"
                  alt=""
                  className="my-auto ml-3"
                />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomeBottom
