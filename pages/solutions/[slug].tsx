import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import Layout from '../../component/Layout'
import Navigation from '../../component/Navigation'
import SolutionBottom from '../../component/solution/SolutionBottom'
import SolutionMiddle from '../../component/solution/SolutionMiddle'

const solutionsDetails = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div className="">
      <Layout>
        <div className="bg-fill pb-36">
          <Navigation />
          <div className="container mx-auto mt-91px px-5  md:px-0 lg:max-w-container">
            <div>
              <h1 className="text-3xl font-bold text-primary">Solutions</h1>
              <p className="mt-4 text-xl text-seccondery">
                Whether you are a financial institution, OTC desk, corporate
                treasurer, prime broker, hedge fund, asset manager or high net
                worth individual, WaterFort offers customizable liquidity and
                trading solutions.
              </p>
            </div>
            <div className="mt-60px flex gap-10 text-xl text-seccondery">
              <div
                className={
                  router.asPath === '/solutions#otc-blocking-trading'
                    ? 'border-b-4 border-demo py-5 text-primary'
                    : 'border-0 py-5'
                }
              >
                <Link href="/solutions/OTC and Block Trading">
                  OTC and Block Trading
                </Link>
              </div>
              <div
                className={
                  router.asPath === '/solutions#order-book'
                    ? 'border-b-4 border-demo py-5 text-primary'
                    : 'border-0 py-5'
                }
              >
                <Link href="/solutions/Order Book Market Making">
                  Order Book Market Making
                </Link>
              </div>
              <div
                className={
                  router.asPath === '/solutions#algorithmic'
                    ? 'border-b-4 border-demo py-5 text-primary'
                    : 'border-0 py-5'
                }
              >
                <Link href="/solutions/Algorithmic Execution Orders">
                  Algorithmic Execution Orders
                </Link>
              </div>
            </div>
          </div>
        </div>
        <SolutionMiddle />
        <SolutionBottom />
      </Layout>
    </div>
  )
}

export default solutionsDetails
