import Link from 'next/link'
import React from 'react'

const SolutionBottom = () => {
  return (
    <div className="container mx-auto lg:max-w-container">
      <div className="mt-10 rounded-md bg-fill py-20 px-3  text-center md:px-0">
        <h1 className="text-2xl font-bold text-primary">
          Flexible Settlement & Credit Line for Trading
        </h1>
        <p className="mt-4 px-10 text-xl text-third">
          We understand the need for efficient capital management, which comes
          in various forms including aggregated settlement, integration with
          settlement networks and establishing a credit line for trading.
          Contact us to find out more about the solutions we support.{' '}
        </p>
      </div>
      <div className="rounded-md bg-white py-20 text-center">
        <div>
          <img src="/images/icon/contact.jpg" alt="" className="mx-auto" />
          <h1 className="mt-10 text-2xl font-bold">Trade with WaterFort </h1>
          <p className="mt-3 text-xl text-seccondery lg:px-36">
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
    </div>
  )
}

export default SolutionBottom
