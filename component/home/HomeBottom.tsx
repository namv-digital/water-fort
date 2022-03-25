import Link from 'next/link'
import React from 'react'

const HomeBottom = () => {
  return (
    <div className="">
      <div className="container mx-auto rounded-md bg-fill py-20 text-center lg:max-w-container">
        <img src="/images/icon/contact.jpg" alt="" className="mx-auto" />
        <h1 className="mt-10 text-2xl font-bold">Trade with WaterFort </h1>
        <p className="mt-3 px-5 text-xl text-seccondery md:px-36">
          Find out more about trading with our regulated entities, and contact
          us to discover our liquidity and execution solutions for your needs.
        </p>
        <Link href="/contact">
          <button className="button mt-5 rounded-md px-7 py-2 text-white">
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  )
}

export default HomeBottom
