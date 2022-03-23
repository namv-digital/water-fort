import React from 'react'
const SolutionMiddle = () => {
  return (
    <div className="-mt-36 rounded-large bg-white px-5  pt-10 md:px-0 md:pt-20">
      <div className="container mx-auto lg:max-w-container">
        {/* OTC And Block Trading */}
        <div
          className="grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-6"
          id="otc-blocking-trading"
        >
          <div className="order-2 col-span-1 md:order-1 md:col-span-2">
            <div className="lg:mt-10">
              <h1 className="text-4xl font-bold text-primary">
                OTC and Block Trading
              </h1>
              <h2 className="mt-10 text-2xl font-bold">
                Get access to competitive quotes across the widest range of
                cryptocurrencies, with fast response times and instantaneous
                execution.
              </h2>
              <div className="mt-6">
                <ul className="ml-4 list-disc text-third">
                  <li>
                    Fast automated quote times with instantaneous execution
                  </li>
                  <li>
                    Direct and synthetic cross currency pairs (e.g. AXS/XRP,
                    SOL/AXS, BNB/DOGE etc.)
                  </li>
                  <li>
                    Support for API connectivity for pricing and execution
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/images/criypto_image.jpg"
              alt=""
              className="max-h-60 w-full object-contain md:max-h-85"
            />
          </div>
        </div>
        {/* Order Book Market Making */}
        <div
          className="mt-12 md:mt-24 grid grid-cols-1 gap-2 md:grid-cols-3 md:gap-6"
          id="order-book"
        >
          <div>
            <img
              src="/images/device.jpg"
              alt=""
              className="max-h-60 w-full object-contain md:max-h-85"
            />
          </div>
          <div className=" col-span-1 md:col-span-2">
            <div className="">
              <h1 className="text-4xl font-bold text-primary">
                Order Book Market Making
              </h1>
              <h2 className="mt-10 text-2xl font-bold">
                Risk management models provide reliable deep liquidity 24/7 and
                competitive spreads throughout all market conditions.{' '}
              </h2>
              <div className="mt-6">
                <ul className="ml-4 list-disc text-third">
                  <li>24/7 liquidity </li>
                  <li>
                    Competitive and consistent liquidity and spreads in all
                    market conditions
                  </li>
                  <li>Support for 150 cryptocurrencies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Algorithmic Execution Orders */}
        <div
          className="mt-12 md:mt-24 grid grid-cols-1 gap-2 md:gap-6 md:grid-cols-3"
          id="algorithmic"
        >
          <div className="order-2 col-span-1 md:order-1 md:col-span-2">
            <div className="lg:mt-5">
              <h1 className="text-4xl font-bold text-primary">
                Algorithmic Execution Orders
              </h1>
              <h2 className="mt-10 text-2xl font-bold">
                Optimize execution, reduce execution cost and market impact with
                our intelligent and customizable algorithmic execution
                solutions.{' '}
              </h2>
              <div className="mt-6">
                <ul className="ml-4 list-disc text-third">
                  <li>
                    Agency execution algos intelligently respond to market
                    conditions to optimize execution and maximize liquidity
                  </li>
                  <li>
                    Achieve best execution and transparent reporting with
                    detailed insights on order fills, market pricing and
                    Transaction Cost Analysis (TCA) tools
                  </li>
                  <li>
                    Global institutional expertise in execution solutions for
                    best-in-class institutional client service and real-time
                    technical support
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <img
              src="/images/brain.jpg"
              alt=""
              className="max-h-60 w-full object-contain md:max-h-85"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionMiddle
