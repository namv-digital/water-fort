import Link from 'next/link'
import React from 'react'

const HomeBottom = () => {
  return (
    <div className="HomeBottom">
      <div className="container mx-auto rounded-md  py-36 text-center text-white md:text-left lg:max-w-container">
        <h1 className="mt-10 text-3xl font-light md:text-5xl">
          Trade with Waterfort 
        </h1>
        <p className="mt-3 px-5 text-xl font-light text-gray-300 md:my-5 md:w-6/12 md:px-0 md:text-2xl">
          Find out more about trading with our regulated entities, and contact
          us to discover our liquidity and execution solutions for your needs.
        </p>
        <Link href="/contact">
          <button className="mx-auto mt-10 flex justify-around bg-white px-5 py-2 font-semibold text-primary md:mx-0">
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
