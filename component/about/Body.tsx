import React from 'react'
import { about } from '../../constant/ABOUT_MOCK_DATA.js'
const Body = () => {
  return (
 <div className='grid container mx-auto px-5 md:px-0 lg:max-w-container mt-14 md:mt-20 lg:grid-cols-about md:gap-x-40'>
  <div className=''>
      <h1 className='text-4xl md:text-5xl font-light text-primary'>Our Clients</h1>
  </div>
  <div className='mt-10 lg:mt-0'>
     {
       about.map(about => (
         <div className='mb-14 md:mb-20'>
           <h2 className='text-2xl md:text-3xl font-bold'>{about.title}</h2>
           <p className='text-blue-gray mt-6 lg:w-10/12 text-xl leading-7'>{about.discription}</p>
         </div>
       ))
     }
  </div>
 </div>
  )
}

export default Body
