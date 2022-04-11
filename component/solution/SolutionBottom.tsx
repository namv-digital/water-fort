import Link from 'next/link'
import React from 'react'

export default function SolutionBottom() {
  return (
    <div className='solution-bottom'>
        <div className='container mx-auto px-5 md:px-0 lg:max-w-container py-40 text-center'>
            <h1 className='text-white text-3xl md:text-5xl'>Flexible Settlement & Credit Line for Trading</h1>
            <p className='md:w-11/12 mt-6 text-xl text-gray-200 mx-auto font-extralight'>We understand the need for efficient capital management, which comes in various forms including aggregated settlement, integration with settlement networks and establishing a credit line for trading. </p>
            <Link href="/contact">
                <p className='cursor-pointer text-white text-xl mt-2'>Contact us to find out more about the solutions we support.</p>
            </Link>
        </div>
    </div>
  )
}
