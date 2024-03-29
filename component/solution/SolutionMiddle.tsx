import React from 'react'
import { solutions } from '../../constant/SOLUTIONS_MOCK_DATA'
import SolutionCard from './SolutionCard'

export default function SolutionMiddle() {
  return (
    <>
      <iframe src="https://nttkrr-5173.csb.app" style={{ height: "20px", width: "100%", background: "white" }}></iframe>
      <div className='container mx-auto px-5 md:px-0 lg:max-w-container mt-20'>
        {
          solutions.map(so => <SolutionCard
            key={so.title}
            title={so.title}
            subtitle={so.subtitle}
            list={so.list}
            id={so.id}
          />)
        }
      </div>
    </>

  )
}
